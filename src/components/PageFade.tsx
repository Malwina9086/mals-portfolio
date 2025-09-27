import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function PageFade({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setVisible(false);
    const id = setTimeout(() => setVisible(true), 0); // następna klatka
    return () => clearTimeout(id);
  }, [pathname]);

  return (
    <div className={`transition-opacity duration-200 ${visible ? "opacity-100" : "opacity-0"}`}>
      {children}
    </div>
  );
}
