// src/App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { I18nProvider } from "./i18n";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import WorkPage from "./pages/WorkPage";
import ContactPage from "./pages/ContactPage";
import PageFade from "./components/PageFade";
import ResumePage from "./pages/ResumePage"


export default function App() {
  return (
    <I18nProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-background text-foreground">
          <Navbar />
          <main className="pt-24">
              <PageFade>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/work" element={<WorkPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/resume" element={<ResumePage />} />
              <Route path="*" element={<HomePage />} />
            </Routes>
            </PageFade>
          </main>
        </div>
      </BrowserRouter>
    </I18nProvider>
  );
}
