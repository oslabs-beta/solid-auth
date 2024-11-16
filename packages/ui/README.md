# @solidstart-auth/ui

A modern, customizable authentication UI component library for SolidStart applications. Provides ready-to-use login and signup forms with both light and dark themes.

## Features

- 🎨 Light and Dark themes
- 📱 Responsive design
- 🔒 Password visibility toggle
- 🚀 Google OAuth integration ready
- 💅 Modern, minimal aesthetic
- 🎯 SolidStart optimized

## Installation

```bash
npm install @solidstart-auth/ui @solidjs/router
```

## Usage

Import and use the components in your SolidStart application:

```tsx
import { LoginFormLight, SignUpFormLight } from '@solidstart-auth/ui';
// or
import { LoginFormDark, SignUpFormDark } from '@solidstart-auth/ui';

// In your component:
export default function AuthPage() {
  return (
    <LoginFormLight /> // or LoginFormDark
    // or
    <SignUpFormLight /> // or SignUpFormDark
  );
}
```

## Components

### Login Forms

- `LoginFormLight` - Light theme login form
- `LoginFormDark` - Dark theme login form

Features:

- Username/email input
- Password input with visibility toggle
- Login button
- Google OAuth button
- Custom logo placement

### Sign Up Forms

- `SignUpFormLight` - Light theme signup form
- `SignUpFormDark` - Dark theme signup form

Features:

- Username/email input
- Password input with visibility toggle
- Sign up button
- Google OAuth button
- Custom logo placement

## Customization

The components use CSS modules and can be customized by overriding the default classes. Each component has its own CSS file with well-documented class names.

Common customizable elements:

```css
.loginBox {
  /* Customize form container */
}

.log-in-button {
  /* Customize primary button */
}

.google-button {
  /* Customize OAuth button */
}
```

## Dependencies

- `solid-js`: ^1.8.22
- `@solidjs/router`: ^0.14.7 (peer dependency)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT
