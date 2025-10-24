# Agent Guidelines for genAI-style-app

## Commands
- **Build**: `vite build`
- **Lint**: `eslint .`
- **Dev server**: `vite`
- **Preview**: `vite preview`
- **Single test**: No test framework configured

## Code Style
- **Language**: JavaScript with JSX (no TypeScript)
- **Components**: Function components with PascalCase names
- **Imports**: ES6 modules, React hooks first, then local imports
- **Naming**: camelCase for variables/functions, ALL_CAPS for constants
- **Styling**: Tailwind CSS classes
- **Hooks**: useState, useRef, useCallback, useEffect as needed
- **Error handling**: Basic, no complex error boundaries visible
- **Formatting**: 2-space indentation, single quotes for strings
- **Linting**: ESLint with React hooks and refresh rules enabled