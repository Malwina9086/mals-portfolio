// src/App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
<<<<<<< HEAD
=======
import { I18nProvider } from "./i18n";
>>>>>>> 5606bca (Initial commit (full project from old laptop))
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import WorkPage from "./pages/WorkPage";
import ContactPage from "./pages/ContactPage";
import PageFade from "./components/PageFade";
<<<<<<< HEAD
import ResumePage from "./pages/ResumePage";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white text-zinc-900 dark:bg-zinc-900 dark:text-zinc-100">
        <Navbar />
        <main className="pt-24">
          <PageFade>
=======
import ResumePage from "./pages/ResumePage"


export default function App() {
  return (
    <I18nProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-background text-foreground">
          <Navbar />
          <main className="pt-24">
              <PageFade>
>>>>>>> 5606bca (Initial commit (full project from old laptop))
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/work" element={<WorkPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/resume" element={<ResumePage />} />
              <Route path="*" element={<HomePage />} />
            </Routes>
<<<<<<< HEAD
          </PageFade>
        </main>
      </div>
    </BrowserRouter>
=======
            </PageFade>
          </main>
        </div>
      </BrowserRouter>
    </I18nProvider>
>>>>>>> 5606bca (Initial commit (full project from old laptop))
  );
}
