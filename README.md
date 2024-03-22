# @mbicycle/foundation-ui-kit

@mbicycle/foundation-ui-kit is a collection of reusable React components built with TypeScript, Vite, Tailwind CSS, and Storybook.
It is designed to provide basic UI elements for the Foundation projects.

## Installation

You can install @mbicycle/foundation-ui-kit via npm or yarn:

```bash
npm install @mbicycle/foundation-ui-kit
# or
yarn add @mbicycle/foundation-ui-kit
```

### <span style="color: orange;">Important Note:</span>

It's essential to add `@mbicycle/foundation-ui-kit` to your Tailwind CSS configuration file 
to ensure that Tailwind CSS classes from the library are included in your project's build.

Here's how you can do it:
1. Open your Tailwind CSS configuration file (usually `tailwind.config.js`).
2. Inside the `content` option, add the path to your `node_modules/@mbicycle/foundation-ui-kit` directory to ensure that Tailwind CSS scans and includes classes from `@mbicycle/foundation-ui-kit`:

```js
content: [
  ...
'./node_modules/@mbicycle/foundation-ui-kit/**/*.{js,ts,jsx,tsx}'
]
```

## Usage

```tsx
import React from 'react';
import { Button, Input } from '@mbicycle/foundation-ui-kit';

const App = () => {
  return (
    <div>
      <Input placeholder="Enter your name" />
      <Button onClick={() => alert('Button clicked')}>Click me</Button>
    </div>
  );
};

export default App;
```

## GitHub Actions Workflow

This project includes GitHub Actions workflows to automate certain tasks. Below are the available workflows and their purposes:

### Build and Publish Storybook to GitHub Pages

This workflow automates the process of building and publishing Storybook to GitHub Pages whenever changes are pushed
to the `main` branch or manually triggered.
It uses the [bitovi/github-actions-storybook-to-github-pages](https://github.com/bitovi/github-actions-storybook-to-github-pages) action.
You can customize the workflow file `.github/workflows/deploy-github-pages.yml` as needed,
adjusting the installation command, build command, and path to the Storybook static files.

#### Trigger

- The workflow is triggered by either manual dispatch or whenever changes are pushed to the `main` branch.

### Build and Publish to npm

This workflow automates the process of publishing components library to npm whenever a release is made.
It ensures that latest changes are available to users who depend on the library.
There is a configured GitHub secret `NPM_AUTH_TOKEN` with npm token for CI\CD.
ou can customize the workflow file `.github/workflows/npm-publish.yaml` as needed.

#### Trigger

- The workflow is triggered by either manual dispatch or a new release is published.


## Storybook 

@mbicycle/foundation-ui-kit comes with a Storybook environment to showcase and test its components. 
The Storybook is deployed here:[https://mbicycle.github.io/foundation-ui-kit/](https://mbicycle.github.io/foundation-ui-kit/)


## Contributing
Contributions to [@mbicycle/foundation-ui-kit](https://github.com/mbicycle/foundation-ui-kit) are welcome! 
If you find any bugs or have suggestions for new features, please open an issue on GitHub or submit a pull request.