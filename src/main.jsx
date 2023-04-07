import React from "react";
import ReactDOM from "react-dom/client";
import { Homepage } from "./components/homePage/HomePage";
import { Provider } from "react-redux";
import store from "./store/store.js";
import ErrorPage from "./ErrorPage";
import App from "./App";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/craftpage",
    element: <App />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
