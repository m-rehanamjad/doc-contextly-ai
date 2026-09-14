import { useEffect, useState } from "react";
import { X, Github, ArrowRight, Rocket } from "lucide-react";

const GITHUB_URL = "https://github.com/mrehanamjad/DocContextly-AI-notebooklm-clone";

export function DeploymentModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);
  }, []);

  const dismiss = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[90] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        role="dialog"
        aria-modal="true"
        className="relative w-full max-w-lg rounded-3xl border border-border bg-white p-8 shadow-[0_40px_100px_-30px_oklch(0.2_0.15_290/0.5)]"
      >
        <button
          onClick={dismiss}
          className="absolute top-4 right-4 grid h-8 w-8 place-items-center rounded-full text-muted-foreground transition hover:bg-secondary hover:text-foreground"
          aria-label="Close"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="mb-6 grid h-14 w-14 place-items-center rounded-2xl bg-brand-soft border border-[oklch(0.85_0.1_305/0.5)]">
          <Rocket className="h-6 w-6" style={{ color: "oklch(0.5 0.28 305)" }} />
        </div>

        <h2 className="font-display text-3xl tracking-tight text-ink">
          The live app is on its way.
        </h2>

        <p className="mt-3 text-muted-foreground leading-relaxed">
          DocContextly is currently in the deployment process. In the meantime, you can explore the full feature walkthrough, screenshots, and source code on GitHub.
        </p>

        <div className="mt-6 rounded-2xl border border-border bg-secondary/50 p-4">
          <p className="text-sm text-ink font-medium">What you can do right now:</p>
          <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand shrink-0" />
              Browse screenshots of the workspace below
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand shrink-0" />
              Read the architecture and feature overview
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand shrink-0" />
              View the complete codebase on GitHub
            </li>
          </ul>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            className="btn-primary hover:btn-primary-hover justify-center"
            onClick={dismiss}
          >
            <Github className="h-4 w-4" />
            View code on GitHub
            <ArrowRight className="h-4 w-4" />
          </a>
          <button
            onClick={dismiss}
            className="btn-ghost hover:bg-secondary justify-center"
          >
            Explore the page
          </button>
        </div>
      </div>
    </div>
  );
}
