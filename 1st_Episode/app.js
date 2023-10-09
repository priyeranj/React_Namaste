import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => ReactElement(Object) => HTMLElement(render)
// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Namaste React 🚀"
// );
// console.log("heading: ",heading);

//JSX(transpiled before it reaches the JS)-PARCEL - Babel

//JSX => Babel transpiled it to React.createElement => ReactElement -JS Object => HTMLElement(render)
const jsxHeading = <h1 id="heading" className="head">Namaste React using JSX 🚀</h1>;
console.log("JSX heading:", jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);


