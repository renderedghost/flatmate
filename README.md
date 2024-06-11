# FlatMate

> Flatmate is ...

## Features

- TBD

## Installation

To get started with Flatmate, follow these steps:

### Prerequisites

> [!IMPORTANT]
> Ensure you have the following installed:
>
> - [Node.js](https://nodejs.org/) (v14 or later)
> - [npm](https://www.npmjs.com/) (v6 or later)

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

### Run the Development Server

Start the development server using Vite:

```sh
npm run dev
```

> [!IMPORTANT]
> The application will be available at `http://localhost:3000`.

### Build the Project

To build the project for production, run:

```sh
npm run build
```

> [!IMPORTANT]
> This will generate the production-ready files in the `dist` directory.

### Lint the Project

To lint the project and check for code quality issues, run:

```sh
npm run lint
```

### Storybook

Flatmate uses Storybook for developing and managing UI components in isolation.

#### Run Storybook

```sh
npm run storybook
```

> [!IMPORTANT]
> Storybook will be available at `http://localhost:6006`.

#### Build Storybook

To build the Storybook for production, run:

```sh
npm run build-storybook
```

> [!IMPORTANT]
> This will generate the Storybook static files in the `storybook-static` directory.

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

## Scripts

- `dev`: Start the development server using Vite.
- `build`: Compile the TypeScript files and build the project for production, including Tailwind CSS processing.
- `lint`: Lint the project and check for code quality issues.
- `preview`: Preview the production build locally using Vite.
- `storybook`: Start Storybook for developing and managing UI components in isolation.
- `build-storybook`: Build Storybook for production.
- `build:css`: Build the Tailwind CSS file.

## License

This project is licensed under TBD...
