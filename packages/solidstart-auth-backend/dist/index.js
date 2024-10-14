import { createAuthCallbacks } from './src/authCallbacks';
export { createAuthCallbacks };
export const DEFAULT_SESSION_SECRET = 'areallylongsecretthatyoushouldreplace';
export function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
export * from './src/authTypes';
//# sourceMappingURL=index.js.map