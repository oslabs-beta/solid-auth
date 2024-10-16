import { AuthCallbacks, User, Session } from './authTypes';
import bcrypt  from 'bcrypt';


type SessionOptions = {
  password: string;
};

type UseSessionFn = (options: SessionOptions) => Promise<{
  data: Record<string, unknown>;
  update: (updater: (data: Record<string, unknown>) => void) => Promise<void>;
  clear: () => Promise<void>;
}>;

export function createAuthCallbacks(useSessionFn: UseSessionFn): AuthCallbacks {
  // 'use server';
  const getSession = async (): Promise<Session> => {
    // 'use server';
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
      userLookupFunction: (username: string) => Promise<User | undefined>
    ): Promise<User> => {
      'use server';
      const user = await userLookupFunction(username);
      if (!user || password !== user.password) {
        throw new Error('Invalid login');
      }
      return user;
    },
    register: async (
      username: string,
      password: string,
      userLookupFunction: (username: string) => Promise<User | undefined>,
      userCreateFunction: (username: string, password: string) => Promise<User>,
      useBcrypt: boolean = true
    ): Promise<User> => {
      // 'use server';
      const existingUser = await userLookupFunction(username);
      if (existingUser) {
        throw new Error('User already exists');
      }
      if (bcrypt) password = await bcrypt.hash(password, 12);
      return userCreateFunction(username, password);
    },
    logout: async () => {
      // 'use server';
      const session = await getSession();
      if (session?.data.userId) {
        await session.update((d) => {
          d.userId = undefined;
        });
      }
    },
    validateUsername: (username: unknown): string | undefined => {
      // 'use server';
      if (typeof username !== 'string' || username.length < 3) {
        return `Usernames must be at least 3 characters long`;
      }
      return undefined;
    },
    validatePassword: (password: unknown): string | undefined => {
      // 'use server';
      if (typeof password !== 'string' || password.length < 6) {
        return `Passwords must be at least 6 characters long`;
      }
      return undefined;
    },
  };

  return authCallbacks;
}
