import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes.jsx";
import AuthProvider from "./Providers/AuthProvider";
import { DarkModeProvider } from "./Providers/DarkModeProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DarkModeProvider>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
    </DarkModeProvider>
  </React.StrictMode>
);
