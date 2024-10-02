import { AuthCallbacks, User, Session } from './authTypes';

type SessionOptions = {
  password: string;
};

type UseSessionFn = (options: SessionOptions) => Promise<{
  data: Record<string, unknown>;
  update: (updater: (data: Record<string, unknown>) => void) => Promise<void>;
  clear: () => Promise<void>;
}>;

export function createAuthCallbacks(useSessionFn: UseSessionFn): AuthCallbacks {
  const getSession = async (): Promise<Session> => {
    const session = await useSessionFn({
      password:
        process.env.SESSION_SECRET ?? 'areallylongsecretthatyoushouldreplace',
    });

    return {
      data: session.data,
      update: async (updater: (data: { userId?: string }) => void) => {
        const updatedData = { ...session.data };
        updater(updatedData);
        await session.update((prevData) => ({
          ...prevData,
          ...updatedData,
        }));
      },
      clear: session.clear,
    };
  };

  // TODO: Implement error handling for invalid login and user exists
  // TODO: Make username and password validation rules configurable

  const authCallbacks: AuthCallbacks = {
    getSession,
    login: async (
      username: string,
      password: string,
      userLookupFunction: (username: string) => Promise<User | null>
    ): Promise<User> => {
      const user = await userLookupFunction(username);
      if (!user || password !== user.password) {
        throw new Error('Invalid login');
      }
      return user;
    },
    register: async (
      username: string,
      password: string,
      userLookupFunction: (username: string) => Promise<User | null>,
      userCreateFunction: (username: string, password: string) => Promise<User>
    ): Promise<User> => {
      const existingUser = await userLookupFunction(username);
      if (existingUser) {
        throw new Error('User already exists');
      }
      return userCreateFunction(username, password);
    },
    logout: async () => {
      const session = await getSession();
      if (session?.data.userId) {
        await session.update((d) => {
          d.userId = undefined;
        });
      }
    },
    validateUsername: (username: unknown): string | undefined => {
      if (typeof username !== 'string' || username.length < 3) {
        return `Usernames must be at least 3 characters long`;
      }
      return undefined;
    },
    validatePassword: (password: unknown): string | undefined => {
      if (typeof password !== 'string' || password.length < 6) {
        return `Passwords must be at least 6 characters long`;
      }
      return undefined;
    },
  };

  return authCallbacks;
}
