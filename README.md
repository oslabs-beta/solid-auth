# solidauth

A comprehensive authentication solution for SolidStart applications, providing both server-side authentication logic and pre-built UI components.

## Packages

### @solidauth/server

Server-side authentication package with session management, user authentication, and security features.

Key features:

- Secure session handling with Vinxi integration
- Customizable login/register flows
- Password hashing support
- TypeScript-first design

[Server Documentation](./packages/server/README.md)

### @solidauth/ui

Ready-to-use authentication UI components with light and dark themes.

Key features:

- Light/Dark theme variations
- Responsive design
- Google OAuth integration ready
- Customizable styling

[UI Documentation](./packages/ui/README.md)

## Quick Start

```bash
# Install both packages
npm install @solidauth/server @solidauth/ui

# Additional peer dependencies
npm install @solidjs/router solid-js vinxi
```

Basic setup:

```tsx
// Server setup
import { createAuthCallbacks } from '@solidauth/server';
import { useSession } from 'vinxi/http';

const auth = createAuthCallbacks(useSession);

// UI implementation
import { LoginFormLight } from '@solidauth/ui';

export default function AuthPage() {
  return <LoginFormLight />;
}
```

## Development

### Project Structure

```
solidauth/
├── packages/
│   ├── server/     # Server-side authentication logic
│   └── ui/         # Authentication UI components
└── tsconfig.base.json  # Shared TypeScript configuration
```

### Local Development Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Build packages:
   ```bash
   cd packages/server && npm run build
   cd ../ui && npm run build
   ```

### Using npm link

To test changes locally with an external app:

1. Link packages:
   ```bash
   cd packages/server && npm link
   cd ../ui && npm link
   ```
2. In your app:
   ```bash
   npm link @solidauth/server @solidauth/ui
   ```

## Contributing

Contributions welcome! Please feel free to submit a Pull Request.

## License

MIT
