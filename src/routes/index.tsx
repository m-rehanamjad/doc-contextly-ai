import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Github, FileText, MessageSquare, Presentation, Mic, Network, GraduationCap, Sparkles, Youtube, Globe, Table, Search, Database, Layers, Play, TextSearch, Settings } from "lucide-react";
import { toast } from "sonner";
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
const YOUTUBE_URL = "https://youtu.be/uC39hg5Jrds";
const YOUTUBE_EMBED = "https://www.youtube-nocookie.com/embed/uC39hg5Jrds";

// Order matters — indexes are passed to ZoomableImage below.
const GALLERY = [
  { src: chatImg, alt: "DocContextly chat interface showing RAG-grounded answers over uploaded sources" },
  { src: pdfImg, alt: "PDF preview with full document viewer" },
  { src: csvImg, alt: "CSV preview with tabular exploration" },
  { src: ytImg, alt: "YouTube embed with transcript extraction" },
  { src: deckImg, alt: "Slide deck artifact preview" },
  { src: voiceImg, alt: "Podcast voiceover artifact preview" },
  { src: mindImg, alt: "Mind map artifact preview" },
  { src: quizImg, alt: "Quiz artifact preview" },
  { src: studyImg, alt: "Study guide artifact preview" },
];
const GALLERY_INDEX = new Map(GALLERY.map((g, i) => [g.src, i]));

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
          <a href="#demo" className="hover:text-foreground transition">Demo</a>
          <a href="#sources" className="hover:text-foreground transition">Sources</a>
          <a href="#artifacts" className="hover:text-foreground transition">Artifacts</a>
          <a href="#stack" className="hover:text-foreground transition">Stack</a>
        </div>
        <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="btn-primary hover:btn-primary-hover text-sm">
          <Github className="h-4 w-4" /> View code
        </a>
      </nav>
    </div>
  );
}

// Poster first, player on click: keeps the hero light and puts the working
// product directly under the headline.
function DemoVideo() {
  const [playing, setPlaying] = useState(false);

  // YouTube picks quality per viewer, so nudge it and tell people how to lock it.
  const play = () => {
    setPlaying(true);
    toast("Tip: set the quality to 1080p", {
      description:
        "Click the gear icon in the player and choose 1080p (or 720p if your connection is slow) for the sharpest view.",
      duration: 9000,
      icon: <Settings className="h-4 w-4" style={{ color: "oklch(0.5 0.28 305)" }} />,
    });
  };


  return (
    <div id="demo" className="mt-14 scroll-mt-28">
      <div className="relative">
        <div className="absolute -inset-4 rounded-3xl blur-2xl opacity-60" style={{ background: "linear-gradient(120deg, oklch(0.85 0.15 305 / 0.5), oklch(0.85 0.12 330 / 0.4))" }} />
        <div className="relative aspect-video overflow-hidden rounded-2xl border border-border bg-card shadow-[0_40px_100px_-30px_oklch(0.3_0.15_290/0.4)]">
          {playing ? (
            <iframe
              className="h-full w-full"
              src={`${YOUTUBE_EMBED}?autoplay=1&rel=0&vq=hd1080`}
              title="DocContextly — full product demo walkthrough"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          ) : (
            <button
              type="button"
              onClick={play}
              aria-label="Play the DocContextly demo walkthrough"
              className="group relative block h-full w-full cursor-pointer"
            >
              <img src={chatImg} alt={GALLERY[0]!.alt} className="h-full w-full object-cover object-top" />
              <span
                className="absolute inset-0 opacity-100 transition-opacity duration-300 group-hover:opacity-75"
                style={{ background: "oklch(0.22 0.05 285 / 0.55)" }}
              />
              <span className="absolute left-1/2 top-1/2 grid h-20 w-20 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-card shadow-[0_20px_60px_-10px_oklch(0.2_0.05_285/0.6)] transition-transform duration-300 group-hover:scale-110">
                <Play className="ml-1 h-7 w-7" style={{ color: "oklch(0.5 0.28 305)" }} strokeWidth={2.2} />
              </span>
              <span className="absolute inset-x-0 bottom-7 flex items-center justify-center gap-2 text-sm font-medium text-background">
                <Youtube className="h-4 w-4" />
                Watch the full walkthrough
              </span>
            </button>
          )}
        </div>
      </div>
      <div className="mt-5 text-center">
        <a href={YOUTUBE_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition">
          <Youtube className="h-4 w-4" /> Watch on YouTube
        </a>
      </div>
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

      <DemoVideo />
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
        <p className="mt-3 text-lg text-muted-foreground">
          Nothing to upload? Type a topic instead and the workspace researches the web for you.
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
            <ZoomableImage src={c.img} alt={c.label} className="w-full aspect-[4/3] object-cover object-top" gallery={GALLERY} index={GALLERY_INDEX.get(c.img) ?? 0} />
            <figcaption className="px-4 py-3 text-xs text-muted-foreground">{c.label}</figcaption>
          </figure>
        ))}
      </div>

      <WebResearch />
    </section>
  );
}

// The "I have nothing to upload" path: a topic becomes a notebook of sources.
function WebResearch() {
  const topics = [
    "Quantum computing for beginners",
    "CRISPR basics",
    "Post-2008 banking regulation",
    "React Server Components",
  ];
  const results = [
    { icon: FileText, label: "Introduction to Quantum Computing" },
    { icon: Globe, label: "Quantum Computing Report — explainer" },
    { icon: Youtube, label: "Qubits & superposition (lecture)" },
  ];
  return (
    <div className="mt-16 rounded-3xl border border-border bg-white overflow-hidden shadow-sm">
      <div className="grid md:grid-cols-2 gap-0">
        <div className="p-8 md:p-12">
          <span className="chip">No files? No problem</span>
          <h3 className="mt-5 font-display text-4xl md:text-5xl tracking-tight text-ink">
            Type a topic, <span className="italic text-brand-gradient">get your sources.</span>
          </h3>
          <p className="mt-4 text-lg text-muted-foreground">
            Don&apos;t have a PDF, a dataset, or a link handy? Just describe what you want to learn. DocContextly searches the web, ranks what it finds, and drops the best articles, papers and videos straight into your notebook — ready to chat with and turn into artifacts.
          </p>
          <div className="mt-7 flex flex-wrap gap-2">
            {topics.map((t) => (
              <span key={t} className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/60 px-3 py-1.5 text-xs text-muted-foreground">
                <Search className="h-3 w-3" /> {t}
              </span>
            ))}
          </div>
        </div>

        <div className="border-t md:border-t-0 md:border-l border-border bg-secondary/40 p-8 md:p-12 flex flex-col justify-center">
          <div className="rounded-2xl border border-border bg-white p-4 shadow-sm">
            <div className="flex items-center gap-3">
              <Search className="h-4 w-4 shrink-0 text-muted-foreground" />
              <span className="text-sm text-ink">Quantum computing for beginners</span>
              <span className="ml-auto inline-flex shrink-0 items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold" style={{ background: "oklch(0.94 0.1 155)", color: "oklch(0.4 0.18 155)" }}>
                <Sparkles className="h-3 w-3" /> 12 sources
              </span>
            </div>
          </div>
          <ul className="mt-4 space-y-2">
            {results.map((r) => (
              <li key={r.label} className="flex items-center gap-3 rounded-xl border border-border bg-white px-4 py-3">
                <span className="grid place-items-center h-7 w-7 rounded-lg bg-brand-soft shrink-0">
                  <r.icon className="h-3.5 w-3.5" style={{ color: "oklch(0.5 0.28 305)" }} />
                </span>
                <span className="text-sm text-ink truncate">{r.label}</span>
                <span className="ml-auto shrink-0 text-[11px] font-medium" style={{ color: "oklch(0.45 0.18 155)" }}>Added</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-muted-foreground">
            Everything pulled in is cited and previewable, just like an uploaded file.
          </p>
        </div>
      </div>
    </div>
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
          Turn any notebook into study material or a shareable output — regenerable anytime, always grounded in your own sources.
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
                <ZoomableImage src={a.img} alt={`${a.title} preview`} className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-500" gallery={GALLERY} index={GALLERY_INDEX.get(a.img) ?? 0} />
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


function CTA() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-24">
      <div className="relative rounded-3xl overflow-hidden border border-border p-12 md:p-16 text-center" style={{ background: "radial-gradient(ellipse at top, oklch(0.95 0.08 305), white)" }}>
        <h2 className="font-display text-5xl md:text-6xl tracking-tight text-ink">
          Think with your <span className="italic text-brand-gradient">knowledge.</span>
        </h2>
        <p className="mt-5 text-lg text-muted-foreground max-w-xl mx-auto">
          Dive into the source code, architecture notes, and the full feature walkthrough on GitHub — or replay the demo at the top of this page.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="btn-primary hover:btn-primary-hover">
            <Github className="h-4 w-4" /> Explore the repository <ArrowRight className="h-4 w-4" />
          </a>
          <a href="#demo" className="btn-ghost hover:bg-secondary">
            <Play className="h-4 w-4" /> Watch the demo
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

function Landing() {
  return (
    <div className="min-h-screen">
      <div className="pt-4">
        <Nav />
      </div>
      <main>
        <Hero />
        <SourcesSection />
        <ArtifactsSection />
        <Pipeline />
        <CTA />
      </main>
      <Footer />
      <LightboxHost />
    </div>
  );
}
