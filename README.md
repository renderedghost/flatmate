# FlatMate

> Flatmate is ...

## Features

- TBD

## Installation

To get started with Flatmate, follow these steps:

### Clone the Repository

```sh
git clone https://github.com/renderedghost/flatmate.git
cd flatmate
```

### Install Dependencies

```sh
npm install
```

### Environment Variables

Create a `.env` file in the root of the project and add the necessary environment variables.

Here is an example:

```env
TDB_URL=https://api.example.com
```

## Scripts

The `package.json` file contains various scripts that automate different tasks in the development lifecycle of the React app. These scripts provide a streamlined workflow for developing, building, and running the React application. Each script is designed to handle specific tasks efficiently, making the development process more manageable and organised.

The `dev` script serves as the comprehensive command to fully reset, build, and start all necessary services for development.

### dev

```zsh
npm run dev
```

- **Purpose**: The 'master boot switch' for a clean start to the app, with a full reset, build, and boot up of servers.
- **Functionality**: Cleans and builds the project, waits for the build to complete, and then starts both the Express server and Storybook.
- **When to Run**: Use this script for a clean start of the application, ensuring everything is built and running properly.

> [!IMPORTANT]
> The application will be available at [http://localhost:3000].


| **Name**            | **Command**               | **Purpose**                                                                         | **Functionality**                                                                                 | **When to Run**                                                                                                   |
| ------------------- | ------------------------- | ----------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| **clean**           | `npm run clean`           | Removes the `dist` directory, which contains the built files.                       | Executes a command to delete the `dist` directory and all its contents.                           | Use this script to clean up the build artifacts before creating a new build.                                      |
| **build**           | `npm run build`           | Compiles the TypeScript code, builds the project using Vite, and processes the CSS. | Runs TypeScript compiler, builds the application with Vite, and then runs the `build:css` script. | Execute this script to generate a new build of the application.                                                   |
| **build:css**       | `npm run build:css`       | Builds and minifies the CSS files using Tailwind CSS.                               | Processes the global CSS file and outputs a minified version to the `dist` directory.             | This script is automatically called by the `build` script but can be run separately if only CSS changes are made. |
| **start:express**   | `npm run start:express`   | Starts the Express server.                                                          | Runs the Node.js script to start the backend server from the `dist` directory.                    | Use this script to start the backend server, usually after a successful build.                                    |
| **start:storybook** | `npm run start:storybook` | Starts Storybook for UI component development.                                      | Launches Storybook on port 6006.                                                                  | Execute this script to start Storybook and develop or test UI components in isolation.                            |
| **build-all**       | `npm run build-all`       | Cleans the build directory and creates a new build.                                 | Runs the `clean` script followed by the `build` script.                                           | Use this script to reset the build environment and generate a fresh build.                                        |
| **start-all**       | `npm run start-all`       | Starts both the Express server and Storybook simultaneously.                        | Uses `concurrently` to run the `start:express` and `start:storybook` scripts at the same time.    | Execute this script to run both the backend server and Storybook together, useful for development.                |


> [!IMPORTANT]
> Storybook will be available at [http://localhost:6006].



## Project Structure

```sh
./
├── node_modules/
├── public/
│   ├── index.html
├── src/
│   ├── components/
│   │   ├── Button.tsx
│   │   ├── Button.css
│   ├── pages/
│   │   ├── HomePage.tsx
│   │   ├── AboutPage.tsx
│   ├── services/
│   │   ├── api.ts
│   ├── styles/
│   │   ├── globals.css
│   ├── App.tsx
│   ├── main.tsx
│   ├── index.tsx
│   ├── stories/
│       ├── Button.stories.tsx
├── .storybook/
│   ├── main.js
│   ├── preview.js
├── dist/
│   ├── output.css
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
├── package.json
└── .env
```

## License

This project is licensed under TBD...
