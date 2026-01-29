# AGENTS.md

This document provides guidelines for agentic coding agents operating in this React Native Expo boilerplate repository.

## Build, Lint, and Test Commands

### Development

```bash
npm run start:dev      # Start Expo dev server with development environment
npm run start          # Start Expo dev server with production environment
npm run start:staging  # Start Expo dev server with staging environment
npm run web            # Start web development server
npm run android        # Run app on Android device/emulator
npm run ios            # Run app on iOS simulator/device
```

### Build Commands (EAS)

```bash
npm run build:dev              # Build development build for all platforms
npm run build:dev:ios          # Build development for iOS only
npm run build:dev:android      # Build development for Android only
npm run build:dev:sim          # Build development simulator for iOS
npm run build:staging          # Build staging for all platforms
npm run build:staging:ios      # Build staging for iOS
npm run build:staging:android  # Build staging for Android
npm run build:prod             # Build production for all platforms
npm run build:prod:ios         # Build production for iOS
npm run build:prod:android     # Build production for Android
```

### Linting and Formatting

```bash
npm run lint        # Run ESLint with Expo config
npm run format      # Format all files with Prettier
```

### Testing

```bash
npm run test              # Run all Jest tests
npm run test -- --watch   # Run Jest in watch mode
npm run test <file>       # Run tests for a specific file
```

### Other

```bash
npm run reset-project     # Reset project to initial state
npm run prepare           # Install Husky git hooks
```

## Code Style Guidelines

### TypeScript

- Use **strict mode** enabled in `tsconfig.json`
- Define explicit types for function parameters and return values
- Use interfaces for object shapes, types for unions/primitives
- Avoid `any`; use `unknown` when type is uncertain
- Use `null` rather than `undefined` for optional values

### Imports and Path Aliases

- Use absolute imports with `@/` alias (configured in `tsconfig.json`)
- Order imports: React → external libraries → absolute @/ imports → relative imports
- Group imports by type (separated by blank lines):
  1. React core imports
  2. Third-party library imports
  3. @/ alias imports (components, hooks, stores, lib, etc.)
  4. Relative imports

```tsx
import { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useTranslation } from "react-i18next";
import { useAuthStore } from "@/stores/authStore";
import { supabase } from "@/lib/supabase";
import { Colors } from "@/constants/Colors";
import { formatDate } from "@/utils/format";
```

### Naming Conventions

| Pattern           | Convention                    | Examples                                     |
| ----------------- | ----------------------------- | -------------------------------------------- |
| Components        | PascalCase                    | `ThemedText`, `ParallaxScrollView`           |
| Component files   | PascalCase                    | `themed-text.tsx`, `Sidebar.tsx`             |
| Hooks             | camelCase with `use` prefix   | `useAuth`, `useTheme`, `useColorScheme`      |
| Stores            | camelCase                     | `authStore`, `themeStore`                    |
| Variables         | camelCase                     | `isLoading`, `userData`, `sessionToken`      |
| Constants         | UPPER_SNAKE_CASE or camelCase | `Colors`, `Fonts`                            |
| Functions         | camelCase                     | `handleSubmit`, `formatDate`, `getUserData`  |
| Types/Interfaces  | PascalCase                    | `AuthState`, `UserProps`, `LoginFormData`    |
| File-based Routes | kebab-case                    | `login.tsx`, `profile.tsx`, `+not-found.tsx` |

### Component Patterns

- Use **named exports** for all components
- Component props should have explicit type definitions with `export type`
- Use functional components with hooks
- Destructure props with default values where appropriate
- Keep components focused (single responsibility)

```tsx
import { View, type ViewProps } from "react-native";
import { useThemeColor } from "@/hooks/use-theme-color";

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
};

export function ThemedView({
  style,
  lightColor,
  darkColor,
  ...rest
}: ThemedViewProps) {
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background",
  );
  return <View style={[{ backgroundColor }, style]} {...rest} />;
}
```

### Hooks

- Prefix all custom hooks with `use`
- Return an object with named properties
- Keep hooks focused and composable

### State Management

- **Zustand** for global client state (auth, theme preferences)
- **TanStack Query** for server state (API data, caching)
- Store naming: `use[Name]Store` pattern, export the hook

```tsx
import { create } from "zustand";
import { Session } from "@supabase/supabase-js";

interface AuthState {
  session: Session | null;
  loading: boolean;
  setSession: (session: Session | null) => void;
  signOut: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  session: null,
  loading: true,
  setSession: (session) => set({ session, loading: false }),
  signOut: async () => {
    /* ... */
  },
}));
```

### Error Handling

- Use `console.warn` for expected errors (fallbacks, missing data)
- Use `try/catch` with async/await for API calls
- Provide user-friendly error messages for UI
- Never expose sensitive information in errors

```tsx
try {
  const { data, error } = await supabase.from("users").select("*").single();
  if (error) throw error;
  return data;
} catch (e) {
  console.warn("Error fetching user:", e);
  return null;
}
```

### Styling

- Use **NativeWind** (Tailwind CSS) via `className` for most styling
- Use `StyleSheet.create` for complex or reusable styles
- Support dark mode with `dark:` prefix in Tailwind classes
- Keep style objects at the bottom of the file

```tsx
<View className="flex-1 items-center justify-center bg-white dark:bg-black">
  <Text className="text-xl font-bold text-slate-800 dark:text-white">
    Hello World
  </Text>
</View>
```

### File Structure

```
app/                    # Expo Router (file-system routing)
├── (tabs)/             # Tab navigation group
├── (auth)/             # Auth routes (login, register)
├── _layout.tsx         # Root layout with providers
└── +not-found.tsx      # 404 fallback

components/             # Reusable UI components
├── ui/                 # Base components (buttons, inputs)
├── forms/              # Form components
└── Themed*.tsx         # Theme-aware components

hooks/                  # Custom React hooks
stores/                 # Zustand stores
lib/                    # Library configurations (supabase, i18n)
constants/              # Design tokens, colors, fonts
utils/                  # Pure utility functions
locales/                # i18n translation files
```

### React Native Specific

- Use platform-specific extensions when needed: `*.ios.tsx`, `*.web.tsx`
- Use `Platform.select()` for platform-dependent values
- Handle both web and native in shared code
- Use `ActivityIndicator` for loading states

### Testing

- Place tests alongside components: `Component.test.tsx`
- Use React Native Testing Library
- Mock native modules appropriately

### Excluded Patterns

- Do not use `console.log` in production code; use `console.warn` or proper logging
- Do not commit `.env` files; use `.env.example` as template
- Do not use relative imports (use `@/` aliases)
- Avoid class components; use functional components with hooks
