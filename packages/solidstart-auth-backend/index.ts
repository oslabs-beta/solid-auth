import { createAuthCallbacks } from './src/authCallbacks';
import { AuthCallbacks, User, Session } from './src/authTypes';

export { createAuthCallbacks };

export type { AuthCallbacks, User, Session };

export const DEFAULT_SESSION_SECRET = 'areallylongsecretthatyoushouldreplace';

export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export * from './src/authTypes';
