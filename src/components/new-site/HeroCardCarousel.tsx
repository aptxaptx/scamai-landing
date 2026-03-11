"use client";

import { useEffect, useRef, useCallback } from "react";

const B64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
const EV = B64 + ":$#!%&";
const EV_LEN = EV.length;
const pick = () => EV[(Math.random() * EV_LEN) | 0];
const rndI = (a: number, b: number) => (Math.random() * (b - a) + a) | 0;

interface Detection {
  verdictColor: string;
  confidence: string;
  label: string;
}

interface CardData {
  num: string;
  name: string;
  exp: string;
  color: string;
  image?: string;
  detection?: Detection;
}

const CARDS: CardData[] = [
  {
    num: "", name: "", exp: "", color: "rgba(30,14,80,.55)",
    image: "/genai.png",
    detection: { verdictColor: "#ef4444", confidence: "99.2%", label: "AI Detected" },
  },
  {
    num: "", name: "", exp: "", color: "rgba(10,20,70,.55)",
    image: "/woman.png",
    detection: { verdictColor: "#22c55e", confidence: "98.7%", label: "Likely Real" },
  },
  {
    num: "", name: "", exp: "", color: "rgba(20,10,70,.55)",
    image: "/man.png",
    detection: { verdictColor: "#ef4444", confidence: "97.4%", label: "Likely Deepfake" },
  },
  {
    num: "", name: "", exp: "", color: "rgba(12,18,60,.55)",
    image: "/woman.png",
    detection: { verdictColor: "#22c55e", confidence: "96.1%", label: "Likely Real" },
  },
  {
    num: "", name: "", exp: "", color: "rgba(25,12,75,.55)",
    image: "/genai.png",
    detection: { verdictColor: "#ef4444", confidence: "99.5%", label: "AI Detected" },
  },
  {
    num: "", name: "", exp: "", color: "rgba(8,16,65,.55)",
    image: "/man.png",
    detection: { verdictColor: "#ef4444", confidence: "98.3%", label: "Likely Deepfake" },
  },
  {
    num: "", name: "", exp: "", color: "rgba(18,10,68,.55)",
    image: "/woman.png",
    detection: { verdictColor: "#22c55e", confidence: "95.8%", label: "Likely Real" },
  },
  {
    num: "", name: "", exp: "", color: "rgba(15,12,65,.55)",
    image: "/passport.jpg",
    detection: { verdictColor: "#ef4444", confidence: "96.8%", label: "AI Detected" },
  },
  {
    num: "", name: "", exp: "", color: "rgba(22,15,58,.55)",
    image: "/receipt.png",
    detection: { verdictColor: "#ef4444", confidence: "94.6%", label: "AI Detected" },
  },
];

// Desktop defaults — mobile scales by 0.6
const D_CARD_W = 440;
const D_CARD_H = 300;
const D_GAP = 120;

function getDims() {
  const mobile = typeof window !== "undefined" && window.innerWidth < 640;
  const s = mobile ? 0.6 : 1;
  const cw = Math.round(D_CARD_W * s);
  const ch = Math.round(D_CARD_H * s);
  const gap = Math.round(D_GAP * s);
  return { CARD_W: cw, CARD_H: ch, GAP: gap, SLOT_W: cw + gap, ONE_SET: (cw + gap) * CARDS.length };
}

const COPIES = 4;
const SPEED = 0.08;
const CELL_W = 7.1;
const CELL_H = 13.5;

interface CardEl {
  slot: HTMLDivElement;
  cvs: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  chars: string[];    // flat array [r * GC + c]
  highlights: boolean[];
  realEl: HTMLDivElement;
  tagEl: HTMLDivElement | null;
  detection: Detection | null;
  GR: number;
  GC: number;
}

function scramble(chars: string[], highlights: boolean[], total: number, frac: number) {
  const n = (total * frac) | 0;
  for (let k = 0; k < n; k++) {
    const idx = (Math.random() * total) | 0;
    chars[idx] = pick();
    highlights[idx] = Math.random() < 0.07;
  }
}

const COL_DIM = "rgba(130,82,240,.46)";
const COL_HI = "rgba(220,200,255,.88)";

function drawCipher(el: CardEl, beamX: number, cw: number, ch: number) {
  const { ctx, chars, highlights, GR, GC } = el;
  ctx.clearRect(0, 0, cw, ch);
  ctx.font = '9px "Space Mono", monospace';
  ctx.textBaseline = "top";

  ctx.fillStyle = COL_DIM;
  for (let r = 0; r < GR; r++) {
    const row = r * GC;
    const y = r * CELL_H;
    for (let c = 0; c < GC; c++) {
      if (!highlights[row + c]) ctx.fillText(chars[row + c], c * CELL_W, y);
    }
  }
  ctx.fillStyle = COL_HI;
  for (let r = 0; r < GR; r++) {
    const row = r * GC;
    const y = r * CELL_H;
    for (let c = 0; c < GC; c++) {
      if (highlights[row + c]) ctx.fillText(chars[row + c], c * CELL_W, y);
    }
  }

  const g = ctx.createLinearGradient(beamX - 16, 0, beamX + 16, 0);
  g.addColorStop(0, "rgba(0,0,0,0)");
  g.addColorStop(0.45, "rgba(0,0,0,.5)");
  g.addColorStop(0.6, "rgba(0,0,0,1)");
  g.addColorStop(1, "rgba(0,0,0,1)");
  ctx.globalCompositeOperation = "destination-in";
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, cw, ch);
  ctx.globalCompositeOperation = "source-over";
}

function maskReal(realEl: HTMLDivElement, beamX: number, cw: number) {
  const pct = (beamX / cw) * 100;
  const lo = Math.max(0, pct - 1.8);
  const hi = Math.min(100, pct + 1.8);
  const m = `linear-gradient(to right,black 0%,black ${lo}%,transparent ${hi}%,transparent 100%)`;
  realEl.style.maskImage = m;
  realEl.style.webkitMaskImage = m;
}

// Spark particle pool — fixed-size array, no splice/push
interface Spark {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  alive: boolean;
}

const MAX_SPARKS = 80;

function createSparkPool(): Spark[] {
  const pool: Spark[] = [];
  for (let i = 0; i < MAX_SPARKS; i++) {
    pool.push({ x: 0, y: 0, vx: 0, vy: 0, life: 0, maxLife: 1, size: 1, alive: false });
  }
  return pool;
}

function spawnSparks(pool: Spark[], h: number) {
  let spawned = 0;
  for (let i = 0; i < MAX_SPARKS && spawned < 3; i++) {
    if (!pool[i].alive) {
      const s = pool[i];
      s.x = (Math.random() - 0.5) * 6;
      s.y = Math.random() * h;
      s.vx = Math.random() * 1.2 + 0.3;
      s.vy = (Math.random() - 0.5) * 0.4;
      s.life = s.maxLife = (Math.random() * 25 + 10) | 0;
      s.size = Math.random() * 2 + 0.5;
      s.alive = true;
      spawned++;
    }
  }
}

function drawSparks(ctx: CanvasRenderingContext2D, pool: Spark[], w: number, h: number) {
  ctx.clearRect(0, 0, w, h);
  for (let i = 0; i < MAX_SPARKS; i++) {
    const s = pool[i];
    if (!s.alive) continue;
    s.x += s.vx;
    s.y += s.vy;
    s.life--;
    if (s.life <= 0 || s.x > w) {
      s.alive = false;
      continue;
    }
    const alpha = s.life / s.maxLife;
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255,255,255,${(alpha * 0.9).toFixed(2)})`;
    ctx.fill();
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.size * 2.5, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255,255,255,${(alpha * 0.25).toFixed(2)})`;
    ctx.fill();
  }
}

export default function HeroCardCarousel() {
  const sceneRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const beamRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const sparkCvsRef = useRef<HTMLCanvasElement>(null);
  const sparksRef = useRef<Spark[]>(createSparkPool());
  const cardElsRef = useRef<CardEl[]>([]);
  const dimsRef = useRef(getDims());
  const trackXRef = useRef(-dimsRef.current.ONE_SET);
  const prevTRef = useRef<number | null>(null);
  const rafRef = useRef<number>(0);

  const buildCards = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    track.innerHTML = "";
    cardElsRef.current = [];

    const dims = getDims();
    dimsRef.current = dims;
    trackXRef.current = -dims.ONE_SET;
    const { CARD_W, CARD_H, GAP } = dims;

    for (let copy = 0; copy < COPIES; copy++) {
      for (const d of CARDS) {
        const slot = document.createElement("div");
        slot.className = "hero-card-slot";
        slot.style.cssText = `flex-shrink:0;width:${CARD_W}px;margin:0 ${GAP / 2}px;position:relative;`;

        const det = d.detection;
        const tagHtml = det
          ? `<div data-tag style="position:absolute;top:10px;right:10px;z-index:5;display:none">
              <div style="display:inline-flex;align-items:center;gap:6px;padding:6px 12px;border-radius:8px;background:rgba(0,0,0,.7);backdrop-filter:blur(8px);border:1px solid ${det.verdictColor}44">
                <div style="width:8px;height:8px;border-radius:50%;background:${det.verdictColor};box-shadow:0 0 8px ${det.verdictColor}"></div>
                <span style="font-family:'Space Mono',monospace;font-size:12px;font-weight:700;color:${det.verdictColor};letter-spacing:.5px">${det.label}</span>
                <span style="font-family:'Space Mono',monospace;font-size:11px;color:rgba(255,255,255,.6)">${det.confidence}</span>
              </div>
            </div>`
          : "";

        const cardContent = d.image
          ? `<div data-real style="position:absolute;inset:0;z-index:3">
              <img src="${d.image}" alt="" style="width:100%;height:100%;object-fit:cover;${d.image === "/man.png" ? "object-position:center 30%;" : ""}border-radius:18px" />
            </div>${tagHtml}`
          : `<div data-real style="position:absolute;inset:0;padding:20px 24px;display:flex;flex-direction:column;justify-content:space-between">
              <div style="display:flex;align-items:center;justify-content:space-between">
                <div style="width:38px;height:28px;border-radius:5px;background:linear-gradient(135deg,#d4a843,#f0c96b,#c89840,#e8be60);position:relative;overflow:hidden;box-shadow:inset 0 1px 2px rgba(255,210,80,.3),0 1px 4px rgba(0,0,0,.5)"></div>
                <div style="display:flex;align-items:center;opacity:.42">
                  <span style="display:block;border:2px solid #fff;border-right:none;border-radius:0 8px 8px 0;margin-left:2px;width:5px;height:9px"></span>
                  <span style="display:block;border:2px solid #fff;border-right:none;border-radius:0 8px 8px 0;margin-left:2px;width:7px;height:14px"></span>
                  <span style="display:block;border:2px solid #fff;border-right:none;border-radius:0 8px 8px 0;margin-left:2px;width:9px;height:19px"></span>
                </div>
              </div>
              <div style="font-family:'Space Mono',monospace;font-size:17.5px;letter-spacing:2.5px;color:rgba(255,255,255,.88)">${d.num}</div>
              <div style="display:flex;align-items:flex-end;justify-content:space-between">
                <div style="display:flex;flex-direction:column;gap:2px">
                  <div style="font-size:7.5px;font-weight:500;letter-spacing:1.3px;text-transform:uppercase;color:rgba(255,255,255,.32);font-family:sans-serif">Card Holder</div>
                  <div style="font-size:12.5px;font-weight:500;color:rgba(255,255,255,.78);font-family:sans-serif">${d.name}</div>
                </div>
                ${d.exp ? `<div style="display:flex;flex-direction:column;gap:2px"><div style="font-size:7.5px;font-weight:500;letter-spacing:1.3px;text-transform:uppercase;color:rgba(255,255,255,.32);font-family:sans-serif">Expires</div><div style="font-size:12.5px;font-weight:500;color:rgba(255,255,255,.78);font-family:sans-serif">${d.exp}</div></div>` : ""}
                <div style="display:flex;align-items:center">
                  <div style="width:26px;height:26px;border-radius:50%;background:rgba(235,0,27,.8)"></div>
                  <div style="width:26px;height:26px;border-radius:50%;background:rgba(255,163,0,.8);margin-left:-9px"></div>
                </div>
              </div>
            </div>`;

        slot.innerHTML = `
          <div style="width:${CARD_W}px;height:${CARD_H}px;border-radius:18px;position:relative;overflow:hidden;box-shadow:0 0 0 1px rgba(124,58,237,.2),0 24px 60px rgba(0,0,0,.65),0 0 80px rgba(100,50,220,.06)">
            <div style="position:absolute;inset:0;background:radial-gradient(ellipse 60% 70% at 18% 28%,${d.color} 0%,transparent 65%),linear-gradient(135deg,#111232 0%,#090a1e 100%)"></div>
            ${cardContent}
            <canvas width="${CARD_W}" height="${CARD_H}" style="position:absolute;inset:0;pointer-events:none;border-radius:18px;z-index:1"></canvas>
          </div>`;

        track.appendChild(slot);

        const cvs = slot.querySelector("canvas") as HTMLCanvasElement;
        const ctx = cvs.getContext("2d")!;
        const realEl = slot.querySelector("[data-real]") as HTMLDivElement;
        const tagEl = slot.querySelector("[data-tag]") as HTMLDivElement | null;
        const GR = Math.ceil(CARD_H / CELL_H) + 2;
        const GC = Math.ceil(CARD_W / CELL_W) + 2;
        const total = GR * GC;
        const chars: string[] = new Array(total);
        const highlights: boolean[] = new Array(total);
        for (let i = 0; i < total; i++) {
          chars[i] = pick();
          highlights[i] = Math.random() < 0.07;
        }
        cardElsRef.current.push({ slot, cvs, ctx, chars, highlights, realEl, tagEl, detection: d.detection ?? null, GR, GC });
      }
    }

    track.style.width = dims.SLOT_W * CARDS.length * COPIES + "px";
  }, []);

  useEffect(() => {
    buildCards();

    const scene = sceneRef.current;
    const track = trackRef.current;
    const sparkCvs = sparkCvsRef.current;
    if (!scene || !track || !sparkCvs) return;

    const sparkCtx = sparkCvs.getContext("2d")!;
    const SPARK_W = 140;
    sparkCvs.width = SPARK_W;
    sparkCvs.height = dimsRef.current.CARD_H;

    // Rebuild on resize
    const onResize = () => {
      const prev = dimsRef.current;
      const next = getDims();
      if (prev.CARD_W !== next.CARD_W) {
        buildCards();
        sparkCvs.height = next.CARD_H;
      }
    };
    window.addEventListener("resize", onResize);

    const loop = (ts: number) => {
      if (prevTRef.current === null) prevTRef.current = ts;
      const dt = ts - prevTRef.current;
      prevTRef.current = ts;

      const { CARD_W, CARD_H, ONE_SET } = dimsRef.current;

      spawnSparks(sparksRef.current, CARD_H);
      drawSparks(sparkCtx, sparksRef.current, SPARK_W, CARD_H);

      trackXRef.current += SPEED * dt;
      if (trackXRef.current >= 0) trackXRef.current -= ONE_SET;
      track.style.transform = `translateX(${trackXRef.current}px)`;

      const sb = scene.getBoundingClientRect();
      const beamVX = sb.left + sb.width / 2;
      const sbLeft = sb.left - 10;
      const sbRight = sb.right + 10;

      // Single pass: update cards + detect beam hit
      let beamHitsCard = false;
      const els = cardElsRef.current;
      for (let i = 0, len = els.length; i < len; i++) {
        const el = els[i];
        const cb = el.slot.getBoundingClientRect();

        // Skip offscreen cards
        if (cb.right < sbLeft || cb.left > sbRight) continue;

        const bx = beamVX - cb.left;
        const crossing = bx > 0 && bx < CARD_W;
        if (crossing) beamHitsCard = true;

        if (el.detection) {
          // Detection card: image always visible, tag fades in after beam passes
          el.cvs.style.opacity = "0";
          el.realEl.style.maskImage = el.realEl.style.webkitMaskImage = "none";
          if (el.tagEl) {
            const revealStart = CARD_W * 0.6;
            if (bx < revealStart) {
              const progress = Math.min(1, (revealStart - bx) / (revealStart * 0.4));
              el.tagEl.style.display = "block";
              el.tagEl.style.opacity = String(progress);
            } else {
              el.tagEl.style.display = "none";
              el.tagEl.style.opacity = "0";
            }
          }
        } else {
          // Normal card: cipher effect
          const total = el.GR * el.GC;
          scramble(el.chars, el.highlights, total, crossing ? 0.045 : 0.01);

          if (bx <= 0) {
            el.cvs.style.opacity = "1";
            drawCipher(el, 0, CARD_W, CARD_H);
            el.realEl.style.maskImage = el.realEl.style.webkitMaskImage = "linear-gradient(to right,transparent,transparent)";
          } else if (bx >= CARD_W) {
            el.cvs.style.opacity = "0";
            el.realEl.style.maskImage = el.realEl.style.webkitMaskImage = "none";
          } else {
            el.cvs.style.opacity = "1";
            drawCipher(el, bx, CARD_W, CARD_H);
            maskReal(el.realEl, bx, CARD_W);
          }
        }
      }

      if (beamRef.current) beamRef.current.style.opacity = beamHitsCard ? "1" : "0";
      if (lineRef.current) lineRef.current.style.opacity = beamHitsCard ? "0" : "1";

      rafRef.current = requestAnimationFrame(loop);
    };

    rafRef.current = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", onResize);
    };
  }, [buildCards]);

  return (
    <div ref={sceneRef} className="relative w-full h-full overflow-hidden">
{/* Side fades removed */}

      {/* Clean line — visible when no card is passing */}
      <div ref={lineRef} className="pointer-events-none absolute left-1/2 top-0 bottom-0 -translate-x-1/2 z-20 transition-opacity duration-200">
        <div
          className="w-[2px] h-full rounded-sm"
          style={{
            background: "linear-gradient(to bottom, rgba(36,95,255,.08) 0%, rgba(80,140,255,.25) 15%, rgba(130,175,255,.35) 50%, rgba(80,140,255,.25) 85%, rgba(36,95,255,.08) 100%)",
          }}
        />
      </div>

      {/* Particle beam — only visible when a card passes through */}
      <div ref={beamRef} className="pointer-events-none absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-[80px] z-20 flex items-stretch justify-center transition-opacity duration-200" style={{ opacity: 0 }}>
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 72px 100% at 50% 50%, rgba(36,95,255,.15) 0%, transparent 100%)", filter: "blur(3px)" }} />
        <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-[32px]" style={{ background: "radial-gradient(ellipse 32px 100% at 50% 50%, rgba(60,120,255,.32) 0%, transparent 100%)", filter: "blur(2px)" }} />
        <div
          className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-[2px] rounded-sm"
          style={{
            background: "linear-gradient(to bottom, rgba(36,95,255,.3) 0%, rgba(100,160,255,1) 15%, rgba(180,210,255,1) 50%, rgba(100,160,255,1) 85%, rgba(36,95,255,.3) 100%)",
          }}
        />
        <canvas
          ref={sparkCvsRef}
          className="absolute top-0"
          style={{ left: "50%", width: "140px", height: "100%" }}
        />
      </div>

      {/* Card track */}
      <div ref={trackRef} className="absolute top-0 bottom-0 flex items-center will-change-transform" />
    </div>
  );
}
