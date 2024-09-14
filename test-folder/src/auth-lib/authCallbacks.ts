import { db } from '../lib/db';
import { Session, User, AuthCallbacks } from './authTypes'; // Define these types accordingly
import { useSession } from 'vinxi/http';

export const authCallbacks: AuthCallbacks = {
  getSession: async () => {
    const session = await useSession({
      password: process.env.SESSION_SECRET ?? 'areallylongsecretthatyoushouldreplace',
    });

    return {
      ...session,
      update: async (updater: (data: { userId?: string }) => void) => {
        const updatedData = { ...session.data };
        updater(updatedData);  // This applies the update to `userId`
        await session.update((prevData) => ({
          ...prevData,
          ...updatedData
        }));
      }
    };
  },
  login: async (username: string, password: string) => {
    const user = await db.user.findUnique({ where: { username } });
    if (!user || password !== user.password) throw new Error('Invalid login');
    return { ...user, id: user.id };
  },
  register: async (username: string, password: string) => {
    const existingUser = await db.user.findUnique({ where: { username } });
    if (existingUser) throw new Error('User already exists');
    return db.user.create({
      data: { username: username, password },
    });
  },
    logout: async () => {
      const session = await authCallbacks.getSession();
  if (session?.data.userId) { 
    await session.update((d) => {
      d.userId = undefined;
  });
    }
  },
    validateUsername: (username: unknown) => {
      if (typeof username !== 'string' || username.length < 3) {
        return `Usernames must be at least 3 characters long`;
      }
    },
    validatePassword: (password: unknown) => {
      if (typeof password !== 'string' || password.length < 6) {
        return `Passwords must be at least 6 characters long`;
      }
    },
};
