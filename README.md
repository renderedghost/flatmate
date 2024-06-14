# FlatMate

> Flatmate is ...

## Features

- TBD

## Important Locations

- Frontend App: [http://localhost:5173]
- Storybook: [http://localhost:6006]
- Backend App: [http://localhost:3000]
- Webhooks: [http://localhost:8080]

> [!CAUTION]
> Changing the `.env` file will break these links.

## Installation

To get started with Flatmate, follow these steps:

### 1. Clone the Repository

```sh
git clone https://github.com/renderedghost/flatmate.git
```

### 2. Install Dependencies

```sh
npm install
```

### 3. Set up your Environment Variables

These environment variables are referenced in the app configs and scripts.

> [!IMPORTANT]
>The application uses these default values as a fallback, but you can change them according to your development environment needs.

#### Set Up Your `.env` File

Create a `.env` file in the root of the project and add the following variables.

```dotenv
# PORTS
VITE_APP_PORT=5173
VITE_BACKEND_PORT=3000
VITE_STORYBOOK_PORT=6006
VITE_WEBSOCKET_PORT=8080

# API Keys and Secrets
VITE_OPENAI_API_KEY=yourOpenAISecretKey
```

These variables define the default port settings and API keys required for the application to function correctly. You can customize the port values if needed.

**Explanation of Environment Variables:**

- `VITE_APP_PORT`: Specifies the port on which the frontend application will run. The default value is `5173`.
- `VITE_BACKEND_PORT`: Specifies the port on which the Express backend server will run. The default value is `3000`.
- `VITE_STORYBOOK_PORT`: Specifies the port on which Storybook will run. The default value is `6006`.
- `VITE_WEBSOCKET_PORT`: Specifies the port on which the WebSocket server will run. The default value is `8080`.
- `VITE_OPENAI_API_KEY`: This is the API key required to access OpenAI services.

## Scripts

> [!IMPORTANT]
> **The `package.json` file contains various scripts that automate different tasks in the development lifecycle of the React app.** These scripts provide a streamlined workflow for developing, building, and running the React application. Each script is designed to handle specific tasks efficiently, making the development process more manageable and organized.

### Available Scripts

| **Name**            | **Command**               | **Purpose**                                                                         | **Functionality**                                                                              | **When to Run**                                                                                                  |
| ------------------- | ------------------------- | ----------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| **clean:all**       | `npm run clean:all`       | Removes all build artifacts and temporary files.                                    | Executes a command to delete the `dist` directory and TypeScript build info files.             | Use this script to clean up the project before a fresh build.                                                    |
| **build:all**       | `npm run build:all`       | Cleans the build directory and creates a new build for the app, CSS, and Storybook. | Runs `build:css`, `build:storybook`, and `build:app` scripts.                                  | Use this script to reset the build environment and generate a fresh build of all components.                     |
| **build:app**       | `npm run build:app`       | Compiles the TypeScript code and builds the Vite project.                           | Runs TypeScript compiler, builds the application with Vite.                                    | Execute this script to generate a new build of the application.                                                  |
| **build:css**       | `npm run build:css`       | Builds and minifies the CSS files using Tailwind CSS.                               | Processes the global CSS file and outputs a minified version to the `dist` directory.          | This script can be run separately if only CSS changes are made.                                                  |
| **build:storybook** | `npm run build:storybook` | Builds the static files for Storybook.                                              | Runs the `sb build` command to generate static Storybook files.                                | Use this script to build Storybook for deployment or static hosting.                                             |
| **start:all**       | `npm run start:all`       | Starts both the Express server and Storybook simultaneously.                        | Uses `concurrently` to run the `start:express` and `start:storybook` scripts at the same time. | Execute this script to run both the backend server and Storybook together, useful for comprehensive development. |
| **start:express**   | `npm run start:express`   | Starts the Express server.                                                          | Runs the Node.js script to start the backend server.                                           | Use this script to start the backend server during development.                                                  |
| **start:storybook** | `npm run start:storybook` | Starts Storybook for UI component development.                                      | Launches Storybook on port 6006.                                                               | Execute this script to develop and test UI components in isolation.                                              |
| **reset**           | `npm run reset`           | Cleans, builds, and starts all necessary services.                                  | Runs `clean:all`, `build:all`, and `start:all` scripts sequentially.                           | Use this script to completely reset the project, build all components, and start the necessary services.         |

## License

This project is licensed under TBD...
