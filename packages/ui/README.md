# @solid-auth/ui

A collection of pre-built authentication UI components designed specifically for SolidStart applications. This package provides customizable login interfaces that integrate seamlessly with the SolidJS ecosystem.

## Features

- 🎨 Modern, responsive login interface
- 🔒 Password visibility toggle
- 🌐 Google OAuth integration support
- 📱 Mobile-friendly design
- 🎯 Built specifically for SolidStart
- 💅 Customizable styling via CSS

## Installation

```bash
npm install @solid-auth/ui
# or
yarn add @solid-auth/ui
# or
pnpm add @solid-auth/ui
```

## Quick Start

1. Import the LoginForm component in your SolidStart application:

```tsx
import { LoginForm } from '@solid-auth/ui';
```

2. Use the component in your route or page:

```tsx
// routes/login.tsx
import { LoginForm } from '@solid-auth/ui';

export default function LoginPage() {
  return (
    <div>
      <LoginForm />
    </div>
  );
}
```

## Component API

### LoginForm

The main authentication component that provides a complete login interface.

#### Features

- Email/Username input
- Password input with visibility toggle
- Login button
- Google Sign-In integration
- "Create New User" link
- Modern styling with hover effects

#### Usage with Custom Styling

You can override the default styles by targeting the component's CSS classes:

```css
/* your-styles.css */
.loginBox {
  /* Override the login container styles */
  background-color: your-color;
}

.log-in-button {
  /* Override the login button styles */
  background-color: your-color;
}
```

## Development

To modify or contribute to this package:

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Build the package:

```bash
npm run build
```

## Requirements

- SolidStart v1.x or higher
- SolidJS v1.8.x or higher
- Node.js v16 or higher

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

ISC

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Support

For issues and feature requests, please [open an issue](https://github.com/your-repo/solid-auth-ui/issues) on GitHub.
