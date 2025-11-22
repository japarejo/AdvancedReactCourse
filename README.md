# Advanced React Course

This project is a comprehensive resource for learning advanced React concepts, including Design Patterns, Custom Hooks, Performance Optimization, and Refactoring techniques. It uses React with Vite, HMR, and configured ESLint rules.

## 📚 Course Structure

The content is organized into the `src/lessons` directory, covering the following main topics:

- **Design Patterns** (`src/lessons/designPatterns`):
  - Container/Presentational
  - Render Props
  - Compound Components
  - Control Props
  - Hooks Factory
  - And more...

- **Hooks & Context** (`src/lessons/hooksAndContext`):
  - Deep dive into `useMemo`, `useCallback`, `useReducer`
  - Custom Hooks creation
  - Context API best practices
  - React Query integration

- **Refactoring** (`src/lessons/refactorings`):
  - Real-world examples of refactoring legacy code to modern React patterns.

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher recommended)
- npm or yarn

### Installation & Running

1.  **Install dependencies:**

    ```bash
    npm install
    ```

2.  **Start the development server:**

    ```bash
    npm run dev
    ```

3.  **Open the application:**
    The server usually starts at `http://localhost:5173`.

## 🧭 Navigation

The application uses **React Router** for navigation.

- `/` → **Home**: Landing page.
- `/about` → **About**: Project information.
- **Navigation Bar**: Use the top navigation bar to access specific lessons and examples grouped by category.

## React Compiler Deactivated

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
