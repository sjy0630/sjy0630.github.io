"use client";

import { useEffect, useRef, useState } from "react";
import { site } from "@/content/site";

export default function Terminal() {
  const [open, setOpen] = useState(false);
  const [history, setHistory] = useState([
    { type: "out", text: `${site.nameEn} :: terminal — 输入 help 看命令` },
  ]);
  const [input, setInput] = useState("");
  const inputRef = useRef(null);
  const bodyRef = useRef(null);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
  }, [history, open]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  function scrollToId(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }

  function run(raw) {
    const cmd = raw.trim();
    const [name, ...args] = cmd.split(/\s+/);
    const push = (text, type = "out") => setHistory((h) => [...h, { type, text }]);
    push(`$ ${cmd}`, "cmd");

    switch (name) {
      case "":
        break;
      case "help":
        push("命令: about · projects · writing · contact · ls · open <区块> · sudo hire-me · clear · exit");
        break;
      case "whoami":
      case "about":
        push(site.about.join("\n"));
        break;
      case "ls":
        push("about/   projects/   writing/   contact/");
        break;
      case "projects":
        push(site.projects.map((p) => "• " + p.title).join("\n") || "(空)");
        break;
      case "writing":
        scrollToId("writing");
        push("→ 跳到 writing");
        break;
      case "contact":
      case "socials": {
        const lines = Object.entries(site.socials || {})
          .filter(([, v]) => v)
          .map(([k, v]) => `${k}: ${v}`)
          .join("\n");
        push(lines || "(还没填社交方式)");
        break;
      }
      case "open":
        if (args[0] && ["about", "projects", "writing", "contact", "top"].includes(args[0])) {
          scrollToId(args[0]);
          push("→ open " + args[0]);
        } else {
          push("用法: open about|projects|writing|contact", "err");
        }
        break;
      case "sudo":
        push(args.join(" ") === "hire-me" ? "Permission granted. 😎 给我发邮件吧！" : "Nice try.");
        break;
      case "clear":
        setHistory([]);
        return;
      case "exit":
        setOpen(false);
        return;
      default:
        push(`command not found: ${name}（试试 help）`, "err");
    }
  }

  function onSubmit(e) {
    e.preventDefault();
    run(input);
    setInput("");
  }

  return (
    <>
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="open terminal"
        className="neon-border fixed bottom-5 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-background/80 font-mono text-accent backdrop-blur transition-transform hover:scale-110"
      >
        {">_"}
      </button>

      {open && (
        <div className="neon-border fixed bottom-20 right-5 z-50 w-[min(92vw,420px)] overflow-hidden rounded-lg bg-[#05060c]/95 font-mono text-xs shadow-2xl backdrop-blur">
          <div className="flex items-center justify-between border-b border-white/10 px-3 py-2 text-muted">
            <span>{site.nameEn.toLowerCase()}@web ~</span>
            <button onClick={() => setOpen(false)} className="hover:text-accent">
              ✕
            </button>
          </div>
          <div
            ref={bodyRef}
            onClick={() => inputRef.current?.focus()}
            className="h-64 space-y-1 overflow-y-auto px-3 py-2"
          >
            {history.map((line, i) => (
              <pre
                key={i}
                className={`whitespace-pre-wrap break-words ${
                  line.type === "err"
                    ? "text-accent2"
                    : line.type === "cmd"
                    ? "text-accent"
                    : "text-foreground/80"
                }`}
              >
                {line.text}
              </pre>
            ))}
            <form onSubmit={onSubmit} className="flex items-center gap-2 pt-1">
              <span className="text-accent">$</span>
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 bg-transparent text-foreground outline-none"
                autoComplete="off"
                spellCheck="false"
              />
            </form>
          </div>
        </div>
      )}
    </>
  );
}
