import React from "react";
import ReactDom from "react-dom";
import Page from "./Page";

let App = Page;
const app = document.createElement("div");
document.body.appendChild(app);
function render() {
  ReactDom.render(<App />, app);
}
render();

if (module.hot) {
  module.hot.accept("./Page", () => {
    const nextApp = require("./Page").default;
    App = nextApp;
    render();
  });
}
