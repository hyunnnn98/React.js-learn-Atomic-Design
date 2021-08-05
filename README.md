# React Hooks + Redux API Template

## Installation With Run

```bash
$ npm install
$ npm run start
```

## Tech Stacks

- JavaScript
- React 17.x
- Hooks
- Redux API
- React-intl
- styled-components

## Use Pattern

- ***Atomic Design***
- ***Containers, Presentationals Pattern***

## Folder Structure

- src
  - assets: common styles and public assets
  - components: layout components
    - atoms: element layouts
    - molecules: grouping layouts
    - organisms: molecules + atoms + etc layouts
  - pages: state, data components
  - hooks: React Custom Hook, useSelector, useDispatch로 리덕스 상태 Get 
  - modules: global store (use redux)