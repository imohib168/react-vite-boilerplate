# React Boilerplate with Enhanced Development Experience

This repository serves as a comprehensive React boilerplate configured to streamline your development process. With a focus on code quality, maintainability, and a hassle-free setup, this boilerplate integrates various tools and packages to enhance your development experience.

## Features

### Vite - Lightning-Fast React Setup

[Vite](https://vitejs.dev/) is a next-generation frontend tooling that provides a rapid development server and optimized build setup for React applications. With Vite, you can enjoy lightning-fast development and seamless integration with the latest React features.

### Prettier and ESLint

Maintaining a consistent and clean codebase is crucial for any project. This boilerplate incorporates [Prettier](https://prettier.io/) and [ESLint](https://eslint.org/) to enforce code formatting and style rules. The configuration is based on the popular [create-vite-pretty-lint](https://www.npmjs.com/package/create-vite-pretty-lint) package, ensuring a uniform coding style across your project.

### File Naming Convention

Consistency in file naming is essential for project organization and collaboration. The boilerplate integrates [eslint-plugin-check-file](https://www.npmjs.com/package/eslint-plugin-check-file) to enforce a standardized file naming convention, reducing confusion and enhancing project structure.

### Folder Structure Linting

Maintain a clean and organized project structure with the help of [folderslint](https://github.com/denisraslov/folderslint). This tool ensures that your project adheres to predefined folder structure rules, promoting a well-organized and easily navigable codebase.

### Commit Linting with Husky

Improve collaboration and code quality by incorporating [Husky](https://typicode.github.io/husky/#/) for Git hooks. This boilerplate configures Husky to run [Commitlint](https://commitlint.js.org/) and check folder linting before each commit. This ensures that your commits follow a consistent format and that your project's folder structure remains intact.

### JSConfig Paths

Simplify import statements in your code with the setup of [jsconfig-paths](https://www.npmjs.com/package/vite-jsconfig-paths). This package allows you to use the `@` symbol as a shortcut to reference the 'src' directory in your imports, enhancing code readability and reducing the complexity of file paths.

---
### Folder Lint Rules

The folder structure in this project is linted to ensure adherence to the React feature-based architecture model. This promotes maintainability and scalability by organizing code related to each feature in a structured manner.

**Note:** If you want to modify the project's architecture, ensure to update the rules in the `.folderslintrc` file.

## Project Architecture Model
![React Feature-Based Architecture](https://github.com/imohib168/react-vite-boilerplate/assets/50514728/5e7217ae-af84-46a0-a1df-7f7676655937)

*Image credit: [React Anti-patterns](https://www.amazon.com/React-Anti-Patterns-maintainable-applications-test-driven/dp/1805123971)*

## Book Reference

For more insights into React best practices, check out the book [React Anti-patterns](link-to-the-book) for a detailed exploration of React development patterns and anti-patterns.

---

## Getting Started

1. Clone this repository:

   ```bash
   git clone https://github.com/imohib168/react-vite-boilerplate.git

2. Install dependencies:

   ```bash
   cd react-vite-boilerplate
   npm install

3. Start the development server:
   ```bash
   npm run dev

## Maintainer

[Mohib Ismail](https://www.linkedin.com/in/imohib168/)

Connect with me on LinkedIn for any inquiries or collaboration opportunities.

## Contributing

Feel free to contribute to this project by [submitting issues](https://github.com/imohib168/react-vite-boilerplate.git) or [pull requests](https://github.com/imohib168/react-vite-boilerplate/pulls). Your input is valuable, and together, we can make this React boilerplate even better.

## License

This project is licensed under the [MIT License](https://github.com/imohib168/react-vite-boilerplate/blob/main/LICENSE), making it open for contributions and usage in both personal and commercial projects.

Thank you for choosing this React boilerplate. Happy coding! 🚀
