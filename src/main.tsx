import React from "react";
import ReactDOM from "react-dom/client";
import {App} from "./App";
import "./index.css";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ErrorPage from "./ErrorPage";
import {MainPage, UserInfoPage, UsersPage} from "./pages";

const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);

root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);
