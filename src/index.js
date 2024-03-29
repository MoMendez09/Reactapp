import * as React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

const root = createRoot(document.getElementById("root"));
function App() {
  return (
    <BrowserRouter basename="/app">
      <Routes>
        <Route path="/bio" /> {}
      </Routes>
    </BrowserRouter>
  );
}

root.render(
  <BrowserRouter>{/* The rest of your app goes here */}</BrowserRouter>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
