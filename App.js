import React from "react";

import ReactDOM from "react-dom/client";

const element = <h1>This is React Element</h1>;
// \\\\


const AnotherComponent = () => (
  <h2 style={{ color: "purple" }}> This is an Another Component </h2>
);

const Header = () => (
  <div style={{ backgroundColor: "lightblue" }}>
    <h1 className="title">This is an h1 tag</h1>
    <h2 className="title">This is an h2 tag</h2>
    <h3 className="title">This is an h3 tag</h3>
    <AnotherComponent />
    <AnotherComponent></AnotherComponent>
    {<AnotherComponent />}
    {AnotherComponent()}
    {element}
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />);
