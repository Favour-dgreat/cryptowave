// main.tsx
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import AuthProvider from "./context/AuthProvider";

// Check if the screen width is less than or equal to 768px (common mobile breakpoint)

ReactDOM.createRoot(document.getElementById("root")!).render(
      <BrowserRouter>
        <AuthProvider>
          <App />
        </AuthProvider>
      </BrowserRouter>
    );
  