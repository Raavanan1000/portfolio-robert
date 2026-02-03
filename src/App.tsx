import { Portfolio } from "./pages/Portfolio";
import { LanguageProvider } from "./context/LanguageContext";

export function App() {
  return (
    <LanguageProvider>
      <Portfolio />
    </LanguageProvider>
  );
}
