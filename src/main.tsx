import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App";
import "./styles/index.css";
import { Provider } from "react-redux";
import { store, persistor } from "./store/store";
import { PersistGate } from "redux-persist/integration/react";
import { AuthProvider } from "./features/auth/AuthContext";

console.log("🔵 main.tsx On");
if (typeof import.meta.env !== "undefined" && import.meta.env.DEV) {
  persistor.purge();
} // 一度だけ状態をリセットしたいときに

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <AuthProvider>
      <PersistGate loading={<p>Loading...</p>} persistor={persistor}>
        <App />
      </PersistGate>
    </AuthProvider>
  </Provider>
);
