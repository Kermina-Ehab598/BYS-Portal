import { BrowserRouter } from "react-router-dom";
import "./styles/global.css";
import AppRoutes from "./routes/AppRoutes";
import { VolunteerAuthProvider } from "./context/VolunteerAuthContext";

export default function App() {
  return (
    <BrowserRouter>
      <VolunteerAuthProvider>
        <AppRoutes />
      </VolunteerAuthProvider>
    </BrowserRouter>
  );
}
