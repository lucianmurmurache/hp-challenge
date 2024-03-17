# Assessment test

This test requires knowledge in HTML, CSS and JavaScript.
You are free to choose small libraries (e.g. lodash, Axios) or even frameworks.
Preprocessors and tests of any kind are absolutely optional.
Attached mockups could be seen as a guideline to how the result should look.
If there are open questions, choose the most reasonable answers for yourself.
Should there be problems with the API endpoint, contact us with a detailed bug
description.
The task

## Implement a result list for hotels

- When the user clicks the „Load hotels“ button, the data of five hotels should be
  received from the API endpoint and rendered on the result page.
- When the user clicks on a „Show reviews“ button, the reviews should be loaded
  for this specific hotel and displayed in a list below the hotel information, but inside
  the hotel item container

## Find all needed API documentations here:

- REST: https://www.contentful.com/developers/docs/references/content-delivery-api/
- GraphQL: https://www.contentful.com/developers/docs/references/graphql/
- Use the rich-text-plain-text-renderer for parsing any RichText (e.g. hotel description).

## Additional requirements

- Should run without errors on current versions of Chrome, Firefox, Safari and Edge.
- HTML should be valid for current HTML5 standards. Responsive behavior is not requested, but feel free to be creative!

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
