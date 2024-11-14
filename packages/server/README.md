# @solid-auth/server

A secure, flexible authentication library designed for SolidStart applications, providing essential authentication features with TypeScript support.

## Overview

`@solid-auth/server` provides a robust authentication system that includes:

- Session management compatible with SolidStart/Vinxi
- User authentication (login/register flows)
- Optional password hashing integration
- Built-in validation for usernames, passwords, and emails
- TypeScript support with full type definitions
- Secure session handling with customizable secrets

## Installation

```bash
npm install @solid-auth/server
```

## Quick Start

Here's a basic example of setting up authentication in a SolidStart application:

```typescript
import { createAuthCallbacks } from '@solid-auth/server';
import { useSession } from 'vinxi/http';

// Basic setup with default configuration
const auth = createAuthCallbacks(useSession);

// Example with bcrypt password hashing
import bcrypt from 'bcryptjs';

const authWithHashing = createAuthCallbacks(useSession, {
  hash: (password) => bcrypt.hash(password, 10),
  compare: (password, hashedPassword) =>
    bcrypt.compare(password, hashedPassword),
});
```

## Core Concepts

### 1. Session Management

Sessions are handled through Vinxi's session system. The library automatically manages:

- Session creation and storage
- User authentication state
- Secure session updates

```typescript
// Get current session
const session = await auth.getSession();

// Access session data
const userId = session.data.userId;

// Update session
await session.update((data) => {
  data.customField = 'value';
});

// Clear session
await session.clear();
```

### 2. User Authentication

#### Login Flow

```typescript
try {
  const user = await auth.login(
    username,
    password,
    // Your database lookup function
    async (username) => {
      return await db.user.findUnique({
        where: { username },
      });
    }
  );

  // Get session to store user ID
  const session = await auth.getSession();
  await session.update((data) => {
    data.userId = user.id.toString();
  });
} catch (error) {
  // Handle login errors
}
```

#### Registration Flow

```typescript
try {
  const user = await auth.register(
    username,
    password,
    // Lookup function to check for existing users
    async (username) => {
      return await db.user.findUnique({
        where: { username },
      });
    },
    // Creation function to store new user
    async (username, hashedPassword) => {
      return await db.user.create({
        data: {
          username,
          password: hashedPassword,
        },
      });
    }
  );
} catch (error) {
  // Handle registration errors
}
```

### 3. Input Validation

The library provides built-in validation functions:

```typescript
// Username validation (minimum 3 characters)
const usernameError = auth.validateUsername(username);
if (usernameError) {
  // Handle invalid username
}

// Password validation (minimum 6 characters)
const passwordError = auth.validatePassword(password);
if (passwordError) {
  // Handle invalid password
}

// Email validation
import { isValidEmail } from '@solid-auth/server';
if (!isValidEmail(email)) {
  // Handle invalid email
}
```

## Configuration

### Environment Variables

```env
SESSION_SECRET=your_secure_secret_here
```

If `SESSION_SECRET` is not provided, a default value is used in development. Always set a secure secret in production.

### Types

The library exports these TypeScript interfaces:

```typescript
interface User {
  id: number;
  username: string;
  password: string;
  email?: string;
  provider?: string;
}

interface Session {
  data: {
    userId?: string;
    [key: string]: unknown;
  };
  update: (updater: (data: Session['data']) => void) => Promise<void>;
  clear: () => Promise<void>;
}

interface AuthCallbacks {
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
    userCreateFunction: (username: string, password: string) => Promise<User>
  ) => Promise<User>;
  logout: () => Promise<void>;
  validateUsername: (username: string) => string | undefined;
  validatePassword: (password: string) => string | undefined;
}
```

## Security Best Practices

1. **Password Hashing**: Always implement password hashing in production:

```typescript
import bcrypt from 'bcryptjs';

const auth = createAuthCallbacks(useSession, {
  hash: (password) => bcrypt.hash(password, 10),
  compare: bcrypt.compare,
});
```

2. **Session Security**:

   - Set a strong `SESSION_SECRET` in production
   - Use HTTPS in production
   - Implement CSRF protection
   - Consider session expiration policies

3. **Rate Limiting**: Implement rate limiting for login/register endpoints

4. **Input Validation**: Always validate and sanitize user input before processing

## Common Integration Patterns

### 1. Protected Routes

```typescript
import { createAuthCallbacks } from '@solid-auth/server';
import { useSession } from 'vinxi/http';
import { redirect } from '@solidjs/router';

const auth = createAuthCallbacks(useSession);

export async function protectedLoader() {
  const session = await auth.getSession();
  if (!session.data.userId) {
    throw redirect('/login');
  }
  return {};
}
```

### 2. User Context

```typescript
import { createContext, useContext } from 'solid-js';
import type { User } from '@solid-auth/server';

const UserContext = createContext<User>();

export function UserProvider(props) {
  // Implement user loading logic
  return (
    <UserContext.Provider value={props.user}>
      {props.children}
    </UserContext.Provider>
  );
}
```

## Error Handling

The library throws errors in these cases:

- User not found during login
- Invalid password during login
- Username already exists during registration
- Invalid username format
- Invalid password format

Example error handling:

```typescript
try {
  await auth.login(username, password, lookupFn);
} catch (error) {
  if (error.message === 'User not found') {
    // Handle unknown user
  } else if (error.message === 'Invalid login') {
    // Handle wrong password
  }
}
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

ISC License
