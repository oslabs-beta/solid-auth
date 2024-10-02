# @solid-auth/solidstart-auth-backend

A backend authentication library for SolidStart applications.

## Installation

```bash
npm install @solid-auth/solidstart-auth-backend

```

## Usage

This package provides authentication utilities for SolidStart applications. Here's a basic example of how to use it:

```typescript
import {
  createAuthCallbacks,
  type AuthCallbacks,
} from '@solid-auth/solidstart-auth-backend';
import { useSession } from 'vinxi/http';

// Create the auth callbacks
const authCallbacks: AuthCallbacks = createAuthCallbacks(useSession);

// Use the auth callbacks in your application
const login = async (username: string, password: string) => {
  try {
    const user = await authCallbacks.login(
      username,
      password,
      async (username) => {
        // Implement your user lookup logic here
        // This is just an example
        return { id: 1, username, password: 'hashedpassword' };
      }
    );
    console.log('Logged in user:', user);
  } catch (error) {
    console.error('Login failed:', error);
  }
};
```

## API Reference

`createAuthCallbacks(useSessionFn)`

Creates an object with authentication-related functions.

Parameters:

- `useSessionFn`: A function that returns a session object compatible with SolidStart's `useSession`.

Returns an object with the following methods:

- `getSession()`: Retrieves the current session.
- `login(username, password, userLookupFunction)`: Authenticates a user.
- `register(username, password, userLookupFunction, userCreateFunction)`: Registers a new user.
- `logout()`: Logs out the current user.
- `validateUsername(username)`: Validates a username.
- `validatePassword(password)`: Validates a password.

## Configuration

This package includes TypeScript definitions. You can import types like this:

```typescript
import type {
  User,
  Session,
  AuthCallbacks,
} from '@solid-auth/solidstart-auth-backend';
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the ISC License.
