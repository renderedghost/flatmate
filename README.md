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

### clean

```zsh
npm run clean
```

- **Purpose**: Removes the `dist` directory, which contains the built files.
- **Functionality**: Executes a command to delete the `dist` directory and all its contents.
- **When to Run**: Use this script to clean up the build artifacts before creating a new build.

### build

```zsh
npm run build
```

- **Purpose**: Compiles the TypeScript code, builds the project using Vite, and processes the CSS.
- **Functionality**: Runs TypeScript compiler, builds the application with Vite, and then runs the `build:css` script.
- **When to Run**: Execute this script to generate a new build of the application.

### build:css

```zsh
npm run build:css
```

- **Purpose**: Builds and minifies the CSS files using Tailwind CSS.
- **Functionality**: Processes the global CSS file and outputs a minified version to the `dist` directory.
- **When to Run**: This script is automatically called by the `build` script but can be run separately if only CSS changes are made.

> [!IMPORTANT]
> This will generate the production-ready files in the `dist` directory.

### start:express

```zsh
npm run start:express
```

- **Purpose**: Starts the Express server.
- **Functionality**: Runs the Node.js script to start the backend server from the `dist` directory.
- **When to Run**: Use this script to start the backend server, usually after a successful build.

### start:storybook

`npm run start:storybook`

- **Purpose**: Starts Storybook for UI component development.
- **Functionality**: Launches Storybook on port 6006.
- **When to Run**: Execute this script to start Storybook and develop or test UI components in isolation.

> [!IMPORTANT]
> Storybook will be available at [http://localhost:6006].

### build-all

`npm run build-all`

- **Purpose**: Cleans the build directory and creates a new build.
- **Functionality**: Runs the `clean` script followed by the `build` script.
- **When to Run**: Use this script to reset the build environment and generate a fresh build.

### start-all

`npm run start-all`

- **Purpose**: Starts both the Express server and Storybook simultaneously.
- **Functionality**: Uses `concurrently` to run the `start:express` and `start:storybook` scripts at the same time.
- **When to Run**: Execute this script to run both the backend server and Storybook together, useful for development.

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
