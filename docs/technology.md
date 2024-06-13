# FlatMate: Technology Stack Overview

## Product Description

FlatMate is a web application designed to streamline the management of shared living spaces. It helps roommates manage expenses, track chores, communicate effectively, and maintain a harmonious living environment. The application offers a user-friendly interface for managing shared responsibilities and ensures transparency and ease of communication among flatmates.

## Technology Stack

FlatMate is built using a modern web development stack that leverages React for a dynamic and responsive front-end, Express for a robust back-end, and TypeScript for type safety across the codebase.

- The use of Vite for the build process ensures rapid development and optimized production builds.
- TailwindCSS facilitates quick and consistent styling, while Storybook enhances component development and documentation.
- Tools like ESLint, PostCSS, and Nodemon streamline the development workflow, ensuring code quality and ease of development.
- Environment configuration is managed through dotenv, allowing seamless transitions between different stages of development. This comprehensive stack enables the efficient development of a feature-rich and user-friendly application aimed at improving the shared living experience.

**Front-End:**

- **React**: The core library for building the user interface. React is chosen for its component-based architecture, allowing for reusable and maintainable code.
- **React Router DOM**: Used for client-side routing, enabling seamless navigation between different pages and components of the application.
- **TailwindCSS**: A utility-first CSS framework that provides a set of predefined classes to build responsive and modern user interfaces efficiently. TailwindCSS is complemented by `tailwindcss-animate` for animations and `tailwind-merge` for merging TailwindCSS classes dynamically.
- **Storybook**: A tool for developing and testing UI components in isolation. Storybook is utilized to build a component library, ensuring consistent design and functionality across the application. Several addons like `@storybook/addon-a11y` for accessibility, `@storybook/addon-actions` for logging events, and `@storybook/addon-controls` for dynamic component manipulation enhance its functionality.

**Back-End:**

- **Express**: A lightweight and flexible Node.js web application framework used to build the server-side logic of FlatMate. It handles API requests, middleware, and routing.
- **Body-Parser**: Middleware for parsing incoming request bodies in a middleware before handlers, available under the `req.body` property.

**Build Tools and Development Environment:**

- **Vite**: A fast development server and build tool that leverages native ES modules and provides a lightning-fast development experience. It is used for both development (`vite`) and production builds (`vite build`).
- **TypeScript**: Provides static type-checking along with enhanced code editor support, enabling early detection of bugs and improving code quality and maintainability.
- **ESLint**: A static code analysis tool used to identify problematic patterns found in JavaScript/TypeScript code. It helps in maintaining code quality and consistency across the project.
- **Nodemon**: A tool that helps develop node.js based applications by automatically restarting the node application when file changes are detected in the directory.
- **PostCSS and Autoprefixer**: Used to process CSS, adding vendor prefixes to CSS rules using values from "Can I Use". This ensures that the CSS is compatible with different browsers.

**Environment Configuration:**

- **dotenv**: A module that loads environment variables from a `.env` file into `process.env`. This allows the application to have different configurations for development, testing, and production environments.

**Testing and Documentation:**

- **Storybook**: In addition to component development, Storybook serves as a documentation tool. Components are documented with stories that describe their usage and variations.
- **Chromatic**: For visual regression testing of Storybook stories, ensuring that UI changes do not introduce unexpected visual defects.
