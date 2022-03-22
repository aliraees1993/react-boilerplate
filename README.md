# React Boilerplate

This project is a boilerplate for quick start based on this [post](https://medium.com/@kumarvinoth/finally-a-better-react-js-folder-structure-821a2210835). It includes the necessary folder structure, eslint config, prettier config, tailwind and storybook.

Include `.env, .env.development, .env.production, .env.staging` in `.gitignore` before pushing to git

## Folder Structure

📦react-boilerplate  
┣ 📂.storybook --> storybook configuration folder  
┣ 📂public --> contains static files  
┣ 📂src --> contains the source code of the project  
┃ ┣ 📂**tests** --> contains unit test cases using jest  
┃ ┣ 📂assets --> contains the assets like images, css & fonts  
┃ ┣ 📂components --> contains the reusable atomic & molecular components  
┃ ┃ ┗ 📂Button  
┃ ┃ ┃ ┣ 📜Button.js --> contains the actual component code  
┃ ┃ ┃ ┗ 📜Button.style.js --> contains the component styles  
┃ ┣ 📂constants --> contains the constant file  
┃ ┣ 📂helpers --> contains the reusable helper functions  
┃ ┣ 📂layouts --> contains the layout components  
┃ ┣ 📂pages --> contains the page component  
┃ ┣ 📂routes --> contains the dynamic page routes  
┃ ┣ 📂service --> contains the dynamic http request functions  
┃ ┣ 📂store  
┃ ┃ ┣ 📂actions --> contains the action files, used to trigger action to update the redux state  
┃ ┃ ┣ 📂reducers --> contains the reducers files, will have various switch cases to update the redux state  
┃ ┃ ┣ 📜actionTypes.js --> contains the actionTypes which will be used to configure reducer & actions  
┃ ┃ ┗ 📜index.js --> contain the create store function which returns a store object  
┃ ┣ 📂styles --> contains styles  
┃ ┣ 📂stories --> contains the component documentation using storybook  
┃ ┣ 📜App.js --> main component in React which acts as a container for all other components  
┃ ┗ 📜index.js --> contain method to render the application into real dom  
┣ 📜.env  
┣ 📜.env.development  
┣ 📜.env.production  
┣ 📜.env.staging  

## Some Good Practices

-   Use .jsx extension for React components
-   Use PascalCase for filenames. E.g., RobotsList.jsx
-   Use PascalCase for React components
    -   `import RobotsList from './RobotsList';`
-   Use camelCase for React component instances
    -   `const robotsItem = <RobotsList />;`
-   Use the filename as the component name. For example, RobotsList.jsx should have a reference name of RobotsList
-   For root components of a directory, use index.jsx as the filename and use the directory name as the component name

## Available Scripts

In the project directory, you can run:

### `yarn`

Installs node_modules.

### `yarn start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload when changes are made.

### `yarn storybook`

Open [http://localhost:6006](http://localhost:6006) to view storybook in the browser.

### `yarn test`

Launches the test runner in the interactive watch mode.

### `yarn build`

Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance. The build is minified and the filenames include the hashes.

### `yarn lint`

Check for linting errors.

### `yarn lint:fix`

Fixes the linting errors if possible.

### `yarn format`

Checks the formatting using prettier configuration.

### `yarn format:fix`

Fixes the formatting using prettier configuration.