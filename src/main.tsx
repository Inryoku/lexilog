import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App";
import "./styles/index.css";
import { Provider } from "react-redux";
import { store } from "./store/store";

import { AuthProvider } from "./features/auth/AuthContext";

console.log("🔵 main.tsx On");

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <AuthProvider>
      <App />
    </AuthProvider>
  </Provider>
);
