// main.tsx
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import AuthProvider from "./context/AuthProvider";
import MobileMessage from "./Mobilemessage";

// Check if the screen width is less than or equal to 768px (common mobile breakpoint)
const isMobile = window.innerWidth <= 768;

const rootElement = document.getElementById("root");

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  if (isMobile) {
    root.render(<MobileMessage />);
  } else {
    root.render(
      <BrowserRouter>
        <AuthProvider>
          <App />
        </AuthProvider>
      </BrowserRouter>
    );
  }
}
