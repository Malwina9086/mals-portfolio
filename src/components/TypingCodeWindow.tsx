// src/components/TypingCodeWindow.tsx
import { useEffect, useRef, useState } from "react";

const LINES: string[] = [
  `// Technologia, którą lubię:`,
  'const stack = ["HTML","CSS","JavaScript","React","Node.js","TypeScript"];',
  "stack.forEach(s => console.log(`✔ ${s}`));",
];

export default function TypingCodeWindow() {
  const [text, setText] = useState<string>("");
  const [line, setLine] = useState<number>(0);
  const [idx, setIdx] = useState<number>(0);
  const [blink, setBlink] = useState<boolean>(true);

  const blinkIntervalRef = useRef<number | null>(null);
  const tickTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    blinkIntervalRef.current = window.setInterval(() => {
      setBlink((b) => !b);
    }, 500);
    return () => {
      if (blinkIntervalRef.current) window.clearInterval(blinkIntervalRef.current);
    };
  }, []);

  useEffect(() => {
    const current = LINES[line] ?? "";

    if (idx < current.length) {
      tickTimeoutRef.current = window.setTimeout(() => {
        setText((prev) => prev + current.charAt(idx));
        setIdx((i) => i + 1);
      }, 40);
    } else {
      tickTimeoutRef.current = window.setTimeout(() => {
        if (line < LINES.length - 1) {
          setText((prev) => prev + "\n");
          setLine((l) => l + 1);
          setIdx(0);
        } else {
          window.setTimeout(() => {
            setText("");
            setLine(0);
            setIdx(0);
          }, 1500);
        }
      }, 600);
    }

    return () => {
      if (tickTimeoutRef.current) window.clearTimeout(tickTimeoutRef.current);
    };
  }, [idx, line]);

  return (
<div className="rounded-2xl bg-neutral-900 text-neutral-100 code-window-glow">
      <div className="flex items-center gap-2 px-4 py-2 border-b border-zinc-800 bg-zinc-900">
        <span className="h-3 w-3 rounded-full bg-red-500" />
        <span className="h-3 w-3 rounded-full bg-yellow-400" />
        <span className="h-3 w-3 rounded-full bg-green-500" />
        <span className="ml-3 text-xs text-zinc-400">Malwina.jsx — Visual Studio Code</span>
      </div>
      <pre className="p-4 text-sm font-mono whitespace-pre-wrap min-h-[180px]">
        {text}
        <span className={`inline-block w-2 h-5 align-[-2px] ${blink ? "bg-zinc-100" : "bg-transparent"}`} />
      </pre>
    </div>
  );
}
