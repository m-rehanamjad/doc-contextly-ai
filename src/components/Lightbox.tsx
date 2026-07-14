import { useCallback, useEffect, useRef, useState } from "react";
import { X, ZoomIn, ZoomOut, RotateCcw } from "lucide-react";

type Props = { src: string; alt: string; onClose: () => void };

export function Lightbox({ src, alt, onClose }: Props) {
  const [scale, setScale] = useState(1);
  const [tx, setTx] = useState(0);
  const [ty, setTy] = useState(0);
  const dragging = useRef<{ x: number; y: number; tx: number; ty: number } | null>(null);

  const reset = useCallback(() => { setScale(1); setTx(0); setTy(0); }, []);
  const zoomIn = () => setScale((s) => Math.min(s * 1.4, 8));
  const zoomOut = () => setScale((s) => Math.max(s / 1.4, 1));

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "+" || e.key === "=") zoomIn();
      else if (e.key === "-") zoomOut();
      else if (e.key === "0") reset();
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose, reset]);

  const onWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const factor = e.deltaY < 0 ? 1.15 : 1 / 1.15;
    setScale((s) => Math.min(Math.max(s * factor, 1), 8));
  };

  const onMouseDown = (e: React.MouseEvent) => {
    if (scale <= 1) return;
    dragging.current = { x: e.clientX, y: e.clientY, tx, ty };
  };
  const onMouseMove = (e: React.MouseEvent) => {
    if (!dragging.current) return;
    setTx(dragging.current.tx + (e.clientX - dragging.current.x));
    setTy(dragging.current.ty + (e.clientY - dragging.current.y));
  };
  const endDrag = () => { dragging.current = null; };

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center"
      onClick={onClose}
      onWheel={onWheel}
    >
      <div className="absolute top-4 right-4 flex items-center gap-2 z-10" onClick={(e) => e.stopPropagation()}>
        <button onClick={zoomOut} className="h-10 w-10 grid place-items-center rounded-full bg-white/10 hover:bg-white/20 text-white transition" aria-label="Zoom out">
          <ZoomOut className="h-4 w-4" />
        </button>
        <span className="text-white/80 text-sm tabular-nums w-14 text-center">{Math.round(scale * 100)}%</span>
        <button onClick={zoomIn} className="h-10 w-10 grid place-items-center rounded-full bg-white/10 hover:bg-white/20 text-white transition" aria-label="Zoom in">
          <ZoomIn className="h-4 w-4" />
        </button>
        <button onClick={reset} className="h-10 w-10 grid place-items-center rounded-full bg-white/10 hover:bg-white/20 text-white transition" aria-label="Reset zoom">
          <RotateCcw className="h-4 w-4" />
        </button>
        <button onClick={onClose} className="h-10 w-10 grid place-items-center rounded-full bg-white/10 hover:bg-white/20 text-white transition ml-2" aria-label="Close">
          <X className="h-5 w-5" />
        </button>
      </div>

      <div
        className="w-full h-full flex items-center justify-center overflow-hidden select-none"
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={endDrag}
        onMouseLeave={endDrag}
        onClick={(e) => e.stopPropagation()}
        style={{ cursor: scale > 1 ? (dragging.current ? "grabbing" : "grab") : "zoom-in" }}
      >
        <img
          src={src}
          alt={alt}
          draggable={false}
          onClick={() => scale === 1 && zoomIn()}
          style={{
            transform: `translate(${tx}px, ${ty}px) scale(${scale})`,
            transition: dragging.current ? "none" : "transform 0.2s ease-out",
            maxWidth: "92vw",
            maxHeight: "88vh",
          }}
          className="object-contain shadow-2xl rounded-lg"
        />
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 text-xs">
        Scroll to zoom · drag to pan · Esc to close
      </div>
    </div>
  );
}

type ZoomableProps = { src: string; alt: string; className?: string };

export function ZoomableImage({ src, alt, className }: ZoomableProps) {
  const open = () => {
    window.dispatchEvent(new CustomEvent("lightbox:open", { detail: { src, alt } }));
  };
  return (
    <button
      type="button"
      onClick={open}
      className="group relative block w-full h-full overflow-hidden cursor-zoom-in"
      aria-label={`Open ${alt} in full view`}
    >
      <img src={src} alt={alt} className={className} />
      <span className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors" />
      <span className="absolute top-3 right-3 h-9 w-9 grid place-items-center rounded-full bg-white/95 text-ink shadow-lg opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all">
        <ZoomIn className="h-4 w-4" />
      </span>
    </button>
  );
}

export function LightboxHost() {
  const [item, setItem] = useState<{ src: string; alt: string } | null>(null);
  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent).detail as { src: string; alt: string };
      setItem(detail);
    };
    window.addEventListener("lightbox:open", handler);
    return () => window.removeEventListener("lightbox:open", handler);
  }, []);
  if (!item) return null;
  return <Lightbox src={item.src} alt={item.alt} onClose={() => setItem(null)} />;
}
