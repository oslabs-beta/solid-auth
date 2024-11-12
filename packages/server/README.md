# @solid-auth/server

A backend authentication library for building secure authentication systems, with built-in support for SolidStart applications.

## Installation

```bash
npm install @solid-auth/server
```

## Features

- Session management
- User authentication (login/register)
- Password hashing support
- Username and password validation
- Email validation utilities
- TypeScript support

## Usage

### Basic Setup

```typescript
import { createAuthCallbacks } from '@solid-auth/server';
import { useSession } from 'vinxi/http';

// Create auth callbacks with default configuration
const authCallbacks = createAuthCallbacks(useSession);

// Or with custom password hashing
const authCallbacks = createAuthCallbacks(useSession, {
  hash: async (password) => {
    /* your hashing logic */
  },
  compare: async (password, hashedPassword) => {
    /* your comparison logic */
  },
});
```

### Authentication Operations

```typescript
// Login
try {
  const user = await authCallbacks.login(
    username,
    password,
    async (username) => {
      // Your user lookup logic here
      return findUserByUsername(username);
    }
  );
} catch (error) {
  console.error('Login failed:', error);
}

// Registration
try {
  const user = await authCallbacks.register(
    username,
    password,
    async (username) => findUserByUsername(username), // Lookup function
    async (username, password) => createUser(username, password) // Creation function
  );
} catch (error) {
  console.error('Registration failed:', error);
}

// Logout
await authCallbacks.logout();

// Session Management
const session = await authCallbacks.getSession();
```

### Validation

```typescript
// Username validation
const usernameError = authCallbacks.validateUsername(username);
if (usernameError) {
  console.error('Invalid username:', usernameError);
}

// Password validation
const passwordError = authCallbacks.validatePassword(password);
if (passwordError) {
  console.error('Invalid password:', passwordError);
}

// Email validation utility
import { isValidEmail } from '@solid-auth/server';

if (!isValidEmail(email)) {
  console.error('Invalid email address');
}
```

## API Reference

### `createAuthCallbacks(useSessionFn, hashingFunctions?)`

Creates an authentication callbacks object.

Parameters:

- `useSessionFn`: Function that returns a session object
- `hashingFunctions` (optional): Object containing `hash` and `compare` functions for password handling

Returns an object with the following methods:

#### Authentication Methods

- `login(username, password, userLookupFunction)`: Authenticates a user
- `register(username, password, userLookupFunction, userCreateFunction)`: Creates a new user
- `logout()`: Ends the current session

#### Session Management

- `getSession()`: Retrieves current session data

#### Validation Methods

- `validateUsername(username)`: Returns undefined or error message
- `validatePassword(password)`: Returns undefined or error message

### Types

```typescript
interface User {
  id: number;
  username: string;
  password: string;
}

interface Session {
  data: {
    userId?: string;
    [key: string]: unknown;
  };
  update: (updater: (data: Session['data']) => void) => Promise<void>;
  clear: () => Promise<void>;
}
```

## Environment Variables

- `SESSION_SECRET`: Secret key for session management (defaults to a placeholder value in development)

## Security Notes

- Always use proper password hashing in production
- Change the default session secret in production
- Implement appropriate rate limiting and security measures
- Store sensitive data securely

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

ISC License
