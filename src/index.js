import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import HomeScreen from "./screens/HomeScreen.jsx";
import UserScreen from "./screens/UserScreen.jsx";
import RegisterScreen from "./screens/RegisterScreen.jsx";
import store from "./store.js";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="" element={<App />}>
        <Route path="/" index={true} element={<HomeScreen />} />
        <Route path="/user/:name" element={<UserScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
      </Route>
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
