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

## Contributing
Contributions to [@mbicycle/foundation-ui-kit](https://github.com/mbicycle/foundation-ui-kit) are welcome! 
If you find any bugs or have suggestions for new features, please open an issue on GitHub or submit a pull request.