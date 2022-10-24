import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import UserContext from "./context/UserContext";
import App from "./App";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <>
            <UserContext>
                <App />
            </UserContext>
            <ToastContainer position="top-right" autoClose={1500} />
        </>
    </React.StrictMode>
);
