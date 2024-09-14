import { action, cache, redirect } from '@solidjs/router';
import { db } from './db';
import { AuthCallbacks } from '../auth-lib/authTypes';
import { authCallbacks } from '../auth-lib/authCallbacks';

// This file runs on the server. These are basically auth server functions. Could be called authServer.ts.

export const getUser = cache(async () => {
  'use server';
  try {
    const session = await authCallbacks.getSession();
    //might need to have userID be string
    const userId = Number(session.data.userId);
    
    if (userId === undefined) throw new Error('User not found');
    const user = await db.user.findUnique({ where: { id: userId } });
    if (!user) throw new Error('User not found');
    return { id: user.id, username: user.username };
  } catch {
    await authCallbacks.logout();
    redirect('/login');
  }
}, 'user');

export const loginOrRegister = action(async (formData: FormData) => {
  'use server';
  return performLoginOrRegister(formData, authCallbacks);
});

async function performLoginOrRegister(formData: FormData, callbacks: AuthCallbacks) {
  'use server';
  const username = String(formData.get('username'));
  const password = String(formData.get('password'));
  const loginType = String(formData.get('loginType'));

  let error = callbacks.validateUsername(username) || callbacks.validatePassword(password);
  if (error) return new Error(error);

  try {
    const user = await (loginType !== 'login'
      ? callbacks.register(username, password)
      : callbacks.login(username, password));
    const session = await callbacks.getSession();
    await session.update((d) => {
      d.userId = user.id.toString();
    });
  } catch (err) {
    return err as Error;
  }

  return redirect('/');
}

export const logout = action(async () => {
  "use server";
  await authCallbacks.logout();
  return redirect("/login");
});