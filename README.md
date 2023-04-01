

## IPM - Challenge

### Table of contents
[Project structure](#project-structure)

[Installation](#installation)

[Technologies used](#technologies-used)

### Project structure

````

src/
|- components/                                # All components
|    |- Contact/ 
        |- ContactList.tsx __________________________ # View Component
|       |- StyleContactList.ts __________________________ # Css modules styles
|    |- Snapping/ 
        |- StyleSnappingList.ts __________________________ # Css modules styles
|       |- SnappingList.tsx__________________________ # View Component

|- screens/      
    |- Home.tsx  __________________________ # View Component
    |- StyleHome.ts  ______________________________ # Css modules styles

|- utils/
     |- Regex.ts  __________________________ # View Functions
````


### Installation

1- Clone the project

`git clone git clone https://github.com/Thyagorc/ipmApp.git`

2-`npm install` to install npm packages

3- start dev server using `npx expo start`.

#### Technologies used

* [Webpack 4](https://github.com/webpack/webpack) 
* [Babel 8](https://github.com/babel/babel) [ transforming JSX and ES6,ES7,ES8 ]
* [React](https://github.com/facebook/react)
* [React expo](https://redux.js.org/)

Create by Thyago Rodrigues Campos
