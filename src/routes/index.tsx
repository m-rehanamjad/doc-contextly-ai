import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Github, FileText, MessageSquare, Presentation, Mic, Network, GraduationCap, Sparkles, Youtube, Globe, Table, Search, Zap, Database, Layers, Info,TextSearch } from "lucide-react";
import { LightboxHost, ZoomableImage } from "@/components/Lightbox";

import chatImg from "@/assets/screenshots/chat_preview.png";
import deckImg from "@/assets/screenshots/side_deck_preview.png";
import voiceImg from "@/assets/screenshots/voice_over_preview.png";
import mindImg from "@/assets/screenshots/mind_map_preview.png";
import quizImg from "@/assets/screenshots/quiz_preview.png";
import studyImg from "@/assets/screenshots/study_guid_preview.png";
import pdfImg from "@/assets/screenshots/pdf_source_preview.png";
import csvImg from "@/assets/screenshots/csv_source_preview.png";
import ytImg from "@/assets/screenshots/yt_source_preview.png";

const GITHUB_URL = "https://github.com/mrehanamjad/DocContextly-AI-notebooklm-clone";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DocContextly — AI Knowledge Workspace for Research & Learning" },
      { name: "description", content: "A NotebookLM-style workspace: chat with your PDFs, docs, websites and YouTube videos, then generate slide decks, podcasts, mind maps, quizzes and study guides — all grounded in your sources." },
      { property: "og:title", content: "DocContextly — Think with your knowledge" },
      { property: "og:description", content: "Upload sources, chat with them, and generate slide decks, podcasts, mind maps and quizzes grounded in your own knowledge." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Landing,
});

function LogoMark() {
  return (
    <div className="flex items-center gap-2">
      <div className="grid place-items-center h-9 w-9 rounded-xl bg-brand-soft border border-[oklch(0.85_0.1_305/0.5)]">
        <TextSearch className="h-4 w-4" style={{ color: "oklch(0.5 0.28 305)" }} strokeWidth={2.5} />
      </div>
      <span className="text-lg font-semibold tracking-tight">DocContextly</span>
    </div>
  );
}

function Nav() {
  return (
    <div className="sticky top-4 z-50 mx-auto max-w-5xl px-4">
      <nav className="flex items-center justify-between rounded-full bg-white/80 backdrop-blur-xl border border-[oklch(0.9_0.02_290/0.8)] pl-5 pr-2 py-2 shadow-[0_10px_40px_-15px_oklch(0.3_0.1_290/0.25)]">
        <LogoMark />
        <div className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
          <a href="#sources" className="hover:text-foreground transition">Sources</a>
          <a href="#artifacts" className="hover:text-foreground transition">Artifacts</a>
          <a href="#stack" className="hover:text-foreground transition">Stack</a>
          <a href="#status" className="hover:text-foreground transition">Status</a>
        </div>
        <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="btn-primary hover:btn-primary-hover text-sm">
          <Github className="h-4 w-4" /> View code
        </a>
      </nav>
    </div>
  );
}

function Hero() {
  return (
    <section className="mx-auto max-w-5xl px-6 pt-20 pb-16 text-center">
      <span className="chip">
        <span className="h-1.5 w-1.5 rounded-full" style={{ background: "oklch(0.55 0.28 305)" }} />
        AI Knowledge Workspace
      </span>
      <h1 className="mt-8 font-display text-6xl md:text-8xl leading-[0.95] tracking-tight text-ink">
        Think with your
        <br />
        <span className="text-brand-gradient italic">knowledge.</span>
      </h1>
      <p className="mx-auto mt-8 max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed">
        A NotebookLM-style workspace where documents, websites, YouTube videos, and notes come together. Chat with your sources and generate presentations, podcasts, quizzes, study guides, mind maps — all grounded in your own knowledge.
      </p>
      <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
        <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="btn-primary hover:btn-primary-hover">
          <Github className="h-4 w-4" /> View on GitHub <ArrowRight className="h-4 w-4" />
        </a>
        <a href="#artifacts" className="btn-ghost hover:bg-secondary">
          See it in action
        </a>
      </div>
      <div className="mt-6 inline-flex items-center gap-2 text-xs text-muted-foreground">
        <span className="h-2 w-2 rounded-full animate-pulse" style={{ background: "oklch(0.7 0.18 60)" }} />
        Production deployment currently in progress — explore the code & feature preview below.
      </div>

      <div className="mt-16 relative">
        <div className="absolute -inset-4 rounded-3xl blur-2xl opacity-60" style={{ background: "linear-gradient(120deg, oklch(0.85 0.15 305 / 0.5), oklch(0.85 0.12 330 / 0.4))" }} />
        <div className="relative rounded-2xl overflow-hidden border border-border shadow-[0_40px_100px_-30px_oklch(0.3_0.15_290/0.4)] bg-white">
          <ZoomableImage src={chatImg} alt="DocContextly chat interface showing RAG-grounded answers over uploaded sources" className="w-full block" />
        </div>
      </div>
    </section>
  );
}

function SourcesSection() {
  const types = [
    { icon: FileText, label: "PDF" },
    { icon: FileText, label: "DOCX" },
    { icon: Table, label: "CSV" },
    { icon: FileText, label: "Markdown" },
    { icon: Globe, label: "Websites" },
    { icon: Youtube, label: "YouTube" },
  ];
  return (
    <section id="sources" className="mx-auto max-w-6xl px-6 py-24">
      <div className="max-w-2xl">
        <span className="chip">Sources</span>
        <h2 className="mt-5 font-display text-5xl md:text-6xl tracking-tight text-ink">
          Every source, previewed in place.
        </h2>
        <p className="mt-5 text-lg text-muted-foreground">
          Drop in PDFs, DOCX, CSVs, Markdown, websites, or YouTube links. Each source renders inline — no downloads, no tab-switching. YouTube even brings its own transcript.
        </p>
      </div>

      <div className="mt-8 flex flex-wrap gap-2">
        {types.map((t) => (
          <div key={t.label} className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-3.5 py-1.5 text-sm">
            <t.icon className="h-3.5 w-3.5 text-muted-foreground" />
            {t.label}
          </div>
        ))}
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
        {[
          { img: pdfImg, label: "PDF preview with full document viewer" },
          { img: csvImg, label: "CSV preview with tabular exploration" },
          { img: ytImg, label: "YouTube embed with transcript extraction" },
        ].map((c) => (
          <figure key={c.label} className="group rounded-2xl overflow-hidden border border-border bg-white shadow-sm hover:shadow-xl transition-shadow">
            <ZoomableImage src={c.img} alt={c.label} className="w-full aspect-[4/3] object-cover object-top" />
            <figcaption className="px-4 py-3 text-xs text-muted-foreground">{c.label}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

function ArtifactsSection() {
  const artifacts = [
    { icon: Presentation, title: "Slide Decks", desc: "Multi-theme, presentation mode, export to PDF/PPTX.", img: deckImg },
    { icon: Mic, title: "Podcast Voiceovers", desc: "Two-host AI-scripted audio grounded in your sources.", img: voiceImg },
    { icon: Network, title: "Mind Maps", desc: "Visualize concepts, branches and relationships.", img: mindImg },
    { icon: GraduationCap, title: "Quizzes", desc: "Auto-generated questions with explanations.", img: quizImg },
    { icon: FileText, title: "Study Guides", desc: "Structured breakdowns for deep review.", img: studyImg },
    { icon: MessageSquare, title: "Chat + Citations", desc: "RAG answers with inline source references.", img: chatImg },
  ];
  return (
    <section id="artifacts" className="mx-auto max-w-6xl px-6 py-24">
      <div className="max-w-2xl">
        <span className="chip">Artifacts</span>
        <h2 className="mt-5 font-display text-5xl md:text-6xl tracking-tight text-ink">
          One notebook, <span className="italic text-brand-gradient">nine ways</span> to learn.
        </h2>
        <p className="mt-5 text-lg text-muted-foreground">
          Turn any notebook into study material or a shareable output — regenerable anytime, always grounded in your uploaded sources.
        </p>
      </div>

      <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
        {artifacts.map((a, i) => (
          <article
            key={a.title}
            className={`group rounded-3xl border border-border bg-white overflow-hidden shadow-sm hover:shadow-2xl transition-all ${i === 0 || i === 3 ? "md:col-span-2" : ""}`}
          >
            <div className={`grid ${i === 0 || i === 3 ? "md:grid-cols-[1fr_1.4fr]" : "grid-cols-1"} gap-0`}>
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <div className="grid place-items-center h-11 w-11 rounded-xl bg-brand-soft">
                  <a.icon className="h-5 w-5" style={{ color: "oklch(0.5 0.28 305)" }} />
                </div>
                <h3 className="mt-5 font-display text-3xl tracking-tight text-ink">{a.title}</h3>
                <p className="mt-2 text-muted-foreground">{a.desc}</p>
              </div>
              <div className="relative overflow-hidden bg-secondary/50 border-t md:border-t-0 md:border-l border-border">
                <ZoomableImage src={a.img} alt={`${a.title} preview`} className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-500" />
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Pipeline() {
  const steps = [
    { icon: FileText, t: "Ingest", d: "PDF, DOCX, CSV, MD, web, YouTube" },
    { icon: Layers, t: "Chunk", d: "Clean & split content intelligently" },
    { icon: Database, t: "Embed", d: "Store vectors in Qdrant" },
    { icon: Search, t: "Retrieve", d: "Semantic search per query" },
    { icon: Sparkles, t: "Generate", d: "Grounded answers & artifacts" },
  ];
  return (
    <section id="stack" className="mx-auto max-w-6xl px-6 py-24">
      <div className="rounded-3xl p-10 md:p-14 border border-border" style={{ background: "linear-gradient(135deg, oklch(0.16 0.02 270), oklch(0.22 0.06 290))" }}>
        <div className="max-w-2xl">
          <span className="chip" style={{ background: "oklch(0.3 0.15 305 / 0.4)", color: "oklch(0.9 0.08 305)", borderColor: "oklch(0.6 0.2 305 / 0.3)" }}>
            Architecture
          </span>
          <h2 className="mt-5 font-display text-5xl md:text-6xl tracking-tight text-white">
            A RAG pipeline built for <span className="italic" style={{ color: "oklch(0.85 0.15 305)" }}>scale</span>.
          </h2>
          <p className="mt-5 text-lg text-white/70">
            Async background workers handle heavy AI generation. Vector search returns relevant chunks in milliseconds. Everything is grounded — no hallucinated citations.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-5 gap-4">
          {steps.map((s, i) => (
            <div key={s.t} className="relative">
              <div className="rounded-2xl p-5 border border-white/10 bg-white/5 backdrop-blur">
                <div className="grid place-items-center h-10 w-10 rounded-lg" style={{ background: "oklch(0.6 0.25 305 / 0.2)" }}>
                  <s.icon className="h-4 w-4" style={{ color: "oklch(0.85 0.15 305)" }} />
                </div>
                <div className="mt-4 text-white font-medium">{s.t}</div>
                <div className="mt-1 text-xs text-white/60">{s.d}</div>
              </div>
              {i < steps.length - 1 && (
                <ArrowRight className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/30" />
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          {[
            { k: "Frontend", v: "Next.js · React · TypeScript · Tailwind · TanStack Query" },
            { k: "Backend", v: "FastAPI · Python · SQLAlchemy · PostgreSQL · Pydantic" },
            { k: "AI / ML", v: "LangChain · RAG · HF Embeddings · Qdrant · LLMs" },
            { k: "Infra", v: "Redis · ARQ · ImageKit · Object Storage" },
          ].map((row) => (
            <div key={row.k} className="rounded-2xl p-5 border border-white/10 bg-white/[0.03]">
              <div className="text-xs uppercase tracking-wider text-white/50">{row.k}</div>
              <div className="mt-2 text-white/90 leading-relaxed">{row.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Status() {
  const rows = [
    ["Multi-source ingestion (PDF, DOCX, CSV, MD, web, YouTube)", true],
    ["RAG-based chat with citations", true],
    ["In-app source preview system", true],
    ["Summary / FAQ / Quiz / Flashcard / Study Guide generation", true],
    ["Mind map generation", true],
    ["Slide deck generation (multi-theme, exportable)", true],
    ["Podcast-style voiceover generation", true],
    ["Redis + ARQ background workers", true],
    ["Vector search with Qdrant", true],
    ["Production deployment", false],
    ["Performance optimization", false],
    ["End-to-end testing", false],
  ] as const;
  return (
    <section id="status" className="mx-auto max-w-4xl px-6 py-24">
      <div className="text-center">
        <span className="chip">Project Status</span>
        <h2 className="mt-5 font-display text-5xl md:text-6xl tracking-tight text-ink">
          Core is <span className="italic text-brand-gradient">done</span>. Shipping soon.
        </h2>
        <p className="mt-5 text-muted-foreground max-w-xl mx-auto">
          Every feature you see above works end-to-end. Focus right now: production infra, perf tuning, and full E2E test coverage.
        </p>
      </div>
      <ul className="mt-12 rounded-2xl border border-border bg-white divide-y divide-border overflow-hidden">
        {rows.map(([label, done]) => (
          <li key={label} className="flex items-center justify-between px-5 py-4">
            <span className="text-sm md:text-base text-ink">{label}</span>
            {done ? (
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full" style={{ background: "oklch(0.94 0.1 155)", color: "oklch(0.4 0.18 155)" }}>
                <span className="h-1.5 w-1.5 rounded-full" style={{ background: "oklch(0.55 0.2 155)" }} /> Done
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full" style={{ background: "oklch(0.95 0.08 75)", color: "oklch(0.45 0.15 60)" }}>
                <Zap className="h-3 w-3" /> In progress
              </span>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}

function CTA() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-24">
      <div className="relative rounded-3xl overflow-hidden border border-border p-12 md:p-16 text-center" style={{ background: "radial-gradient(ellipse at top, oklch(0.95 0.08 305), white)" }}>
        <h2 className="font-display text-5xl md:text-6xl tracking-tight text-ink">
          The live app is <span className="italic text-brand-gradient">on the way</span>.
        </h2>
        <p className="mt-5 text-lg text-muted-foreground max-w-xl mx-auto">
          In the meantime, dive into the source code, architecture notes, and full feature walkthrough on GitHub.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="btn-primary hover:btn-primary-hover">
            <Github className="h-4 w-4" /> Explore the repository <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <LogoMark />
        <div className="text-sm text-muted-foreground">
          Built by <span className="text-ink font-medium">Muhammad Rehan Amjad</span>
        </div>
        <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="text-sm text-muted-foreground hover:text-foreground inline-flex items-center gap-1.5">
          <Github className="h-4 w-4" /> GitHub
        </a>
      </div>
    </footer>
  );
}

function StatusBanner() {
  return (
    <div className="w-full text-white text-sm" style={{ background: "linear-gradient(90deg, oklch(0.35 0.2 305), oklch(0.4 0.22 285))" }}>
      <div className="mx-auto max-w-6xl px-4 py-2.5 flex flex-col sm:flex-row items-center justify-center gap-x-4 gap-y-1 text-center">
        <span className="inline-flex items-center gap-2">
          <Info className="h-4 w-4 opacity-90" />
          <span><strong className="font-semibold">Heads up:</strong> the live app is still being deployed — this page walks through the full product with screenshots, features & architecture.</span>
        </span>
        <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 font-semibold underline underline-offset-2 hover:opacity-90 whitespace-nowrap">
          <Github className="h-3.5 w-3.5" /> View code on GitHub <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </div>
  );
}

function Landing() {
  return (
    <div className="min-h-screen">
      <StatusBanner />
      <div className="pt-4">
        <Nav />
      </div>
      <main>
        <Hero />
        <SourcesSection />
        <ArtifactsSection />
        <Pipeline />
        <Status />
        <CTA />
      </main>
      <Footer />
      <LightboxHost />
    </div>
  );
}
