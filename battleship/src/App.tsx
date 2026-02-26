import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./router/AppRouter";
import { CookieConsentBanner } from "./components/CookieConsent";

function App() {
  return (
    <Router>
      <CookieConsentBanner />
      <AppRouter />
    </Router>
  );
}

export default App;
