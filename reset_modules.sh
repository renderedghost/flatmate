#!/bin/bash

# List of dependencies
dependencies=(
  "@nlux/openai-react@latest"
  "@nlux/react@latest"
  "@nlux/themes@latest"
  "body-parser@latest"
  "class-variance-authority@latest"
  "clsx@latest"
  "dotenv@latest"
  "express@latest"
  "init@latest"
  "lucide-react@latest"
  "node-fetch@latest"
  "react@latest"
  "react-dom@latest"
  "react-router-dom@latest"
  "tailwind-merge@latest"
  "tailwindcss-animate@latest"
)

devDependencies=(
  "@chromatic-com/storybook@latest"
  "@storybook/addon-a11y@latest"
  "@storybook/addon-actions@latest"
  "@storybook/addon-controls@latest"
  "@storybook/addon-designs@latest"
  "@storybook/addon-docs@latest"
  "@storybook/addon-essentials@latest"
  "@storybook/addon-interactions@latest"
  "@storybook/addon-links@latest"
  "@storybook/addon-mdx-gfm@latest"
  "@storybook/addon-onboarding@latest"
  "@storybook/addon-outline@latest"
  "@storybook/addon-storysource@latest"
  "@storybook/addon-themes@latest"
  "@storybook/addon-viewport@latest"
  "@storybook/blocks@latest"
  "@storybook/cli@latest"
  "@storybook/react@latest"
  "@storybook/react-vite@latest"
  "@storybook/test@latest"
  "@types/express@latest"
  "@types/node@latest"
  "@types/react@latest"
  "@types/react-dom@latest"
  "@types/ws@latest"
  "@typescript-eslint/eslint-plugin@latest"
  "@typescript-eslint/parser@latest"
  "@vitejs/plugin-react@latest"
  "autoprefixer@latest"
  "concurrently@latest"
  "eslint@latest"
  "eslint-plugin-react-hooks@latest"
  "eslint-plugin-react-refresh@latest"
  "eslint-plugin-storybook@latest"
  "nodemon@latest"
  "npm-run-all@latest"
  "postcss@latest"
  "storybook@latest"
  "tailwindcss@latest"
  "ts-node@latest"
  "ts-node-esm@latest"
  "typescript@latest"
  "vite@latest"
  "wait-on@latest"
)

# Install dependencies
for package in "${dependencies[@]}"; do
  npm install "$package"
done

# Install devDependencies
for package in "${devDependencies[@]}"; do
  npm install --save-dev "$package"
done