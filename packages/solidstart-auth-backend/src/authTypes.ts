export interface Session {
  data: {
    userId?: string;
    [key: string]: unknown;
  };
  update: (updater: (data: Session['data']) => void) => Promise<void>;
  clear: () => Promise<void>;
}

export interface User {
  id: number;
  username: string;
  password: string;
}

export interface AuthCallbacks {
  getSession: () => Promise<Session>;
  login: (
    username: string,
    password: string,
    userLookupFunction: (username: string) => Promise<User | undefined>
  ) => Promise<User>;
  register: (
    username: string,
    password: string,
    userLookupFunction: (username: string) => Promise<User | undefined>,
    userCreateFunction: (username: string, password: string) => Promise<User>,
    useBcrypt: boolean
  ) => Promise<User>;
  logout: () => Promise<void>;
  validateUsername: (username: string) => string | undefined;
  validatePassword: (password: string) => string | undefined;
}
