"use client";

import { useEffect, useRef, useCallback } from "react";

const B64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
const EV = B64 + ":$#!%&";
const pick = (a: string) => a[Math.floor(Math.random() * a.length)];
const rndI = (a: number, b: number) => Math.floor(Math.random() * (b - a) + a);

interface CardData {
  num: string;
  name: string;
  exp: string;
  color: string;
}

const CARDS: CardData[] = [
  { num: "4242 4242 4242 4242", name: "Martha Jones", exp: "12 / 29", color: "rgba(30,14,80,.55)" },
  { num: "5319 7501 0000 0000", name: "Jeremy Wagemans", exp: "", color: "rgba(10,20,70,.55)" },
  { num: "5577 0000 5577 0004", name: "Chris Smith", exp: "04 / 28", color: "rgba(20,10,70,.55)" },
  { num: "4311 1111 1111 1111", name: "Frank Peters", exp: "12 / 29", color: "rgba(12,18,60,.55)" },
  { num: "4111 1111 1111 1111", name: "Emma Johnson", exp: "08 / 27", color: "rgba(25,12,75,.55)" },
  { num: "5319 7501 0000 0000", name: "Ben Miller", exp: "", color: "rgba(8,16,65,.55)" },
  { num: "5577 0000 5577 0004", name: "Julie Martin", exp: "04 / 28", color: "rgba(18,10,68,.55)" },
];

const CARD_W = 380;
const CARD_H = 240;
const GAP = 56;
const SLOT_W = CARD_W + GAP;
const COPIES = 4;
const ONE_SET = SLOT_W * CARDS.length;
const SPEED = 0.055;

interface GridCell {
  ch: string;
  hi: boolean;
}

interface CardEl {
  slot: HTMLDivElement;
  cvs: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  grid: GridCell[][];
  realEl: HTMLDivElement;
  GR: number;
  GC: number;
}

function scramble(grid: GridCell[][], GR: number, GC: number, frac: number) {
  const n = Math.floor(GR * GC * frac);
  for (let k = 0; k < n; k++) {
    grid[rndI(0, GR)][rndI(0, GC)] = { ch: pick(EV), hi: Math.random() < 0.07 };
  }
}

function drawCipher(el: CardEl, beamX: number) {
  const { ctx, grid, GR, GC } = el;
  ctx.clearRect(0, 0, CARD_W, CARD_H);
  ctx.font = '9px "Space Mono", monospace';
  ctx.textBaseline = "top";
  for (let r = 0; r < GR; r++) {
    for (let c = 0; c < GC; c++) {
      const cell = grid[r][c];
      ctx.fillStyle = cell.hi ? "rgba(220,200,255,.88)" : "rgba(130,82,240,.46)";
      ctx.fillText(cell.ch, c * 7.1, r * 13.5);
    }
  }
  const g = ctx.createLinearGradient(beamX - 16, 0, beamX + 16, 0);
  g.addColorStop(0, "rgba(0,0,0,0)");
  g.addColorStop(0.45, "rgba(0,0,0,.5)");
  g.addColorStop(0.6, "rgba(0,0,0,1)");
  g.addColorStop(1, "rgba(0,0,0,1)");
  ctx.globalCompositeOperation = "destination-in";
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, CARD_W, CARD_H);
  ctx.globalCompositeOperation = "source-over";
}

function maskReal(realEl: HTMLDivElement, beamX: number) {
  const pct = (beamX / CARD_W) * 100;
  const lo = Math.max(0, pct - 1.8);
  const hi = Math.min(100, pct + 1.8);
  const m = `linear-gradient(to right,black 0%,black ${lo}%,transparent ${hi}%,transparent 100%)`;
  realEl.style.maskImage = m;
  realEl.style.webkitMaskImage = m;
}

export default function HeroCardCarousel() {
  const sceneRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const cardElsRef = useRef<CardEl[]>([]);
  const trackXRef = useRef(-ONE_SET);
  const prevTRef = useRef<number | null>(null);
  const rafRef = useRef<number>(0);

  const buildCards = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    track.innerHTML = "";
    cardElsRef.current = [];

    for (let copy = 0; copy < COPIES; copy++) {
      for (const d of CARDS) {
        const slot = document.createElement("div");
        slot.className = "hero-card-slot";
        slot.style.cssText = `flex-shrink:0;width:${CARD_W}px;margin:0 ${GAP / 2}px;position:relative;`;

        slot.innerHTML = `
          <div style="width:${CARD_W}px;height:${CARD_H}px;border-radius:18px;position:relative;overflow:hidden;box-shadow:0 0 0 1px rgba(124,58,237,.2),0 24px 60px rgba(0,0,0,.65),0 0 80px rgba(100,50,220,.06)">
            <div style="position:absolute;inset:0;background:radial-gradient(ellipse 60% 70% at 18% 28%,${d.color} 0%,transparent 65%),linear-gradient(135deg,#111232 0%,#090a1e 100%)"></div>
            <div data-real style="position:absolute;inset:0;padding:20px 24px;display:flex;flex-direction:column;justify-content:space-between">
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
            </div>
            <canvas width="${CARD_W}" height="${CARD_H}" style="position:absolute;inset:0;pointer-events:none;border-radius:18px"></canvas>
          </div>`;

        track.appendChild(slot);

        const cvs = slot.querySelector("canvas") as HTMLCanvasElement;
        const ctx = cvs.getContext("2d")!;
        const realEl = slot.querySelector("[data-real]") as HTMLDivElement;
        const GR = Math.ceil(CARD_H / 13.5) + 2;
        const GC = Math.ceil(CARD_W / 7.1) + 2;
        const grid: GridCell[][] = Array.from({ length: GR }, () =>
          Array.from({ length: GC }, () => ({ ch: pick(EV), hi: Math.random() < 0.07 }))
        );
        cardElsRef.current.push({ slot, cvs, ctx, grid, realEl, GR, GC });
      }
    }

    track.style.width = SLOT_W * CARDS.length * COPIES + "px";
  }, []);

  useEffect(() => {
    buildCards();

    const scene = sceneRef.current;
    const track = trackRef.current;
    if (!scene || !track) return;

    const loop = (ts: number) => {
      if (prevTRef.current === null) prevTRef.current = ts;
      const dt = ts - prevTRef.current;
      prevTRef.current = ts;

      trackXRef.current += SPEED * dt;
      if (trackXRef.current >= 0) trackXRef.current -= ONE_SET;
      track.style.transform = `translateX(${trackXRef.current}px)`;

      const sb = scene.getBoundingClientRect();
      const beamVX = sb.left + sb.width / 2;

      for (const el of cardElsRef.current) {
        const cb = el.slot.getBoundingClientRect();
        if (cb.right < sb.left - 10 || cb.left > sb.right + 10) {
          scramble(el.grid, el.GR, el.GC, 0.01);
          continue;
        }
        const bx = beamVX - cb.left;
        scramble(el.grid, el.GR, el.GC, bx >= 0 && bx <= CARD_W ? 0.045 : 0.01);

        if (bx <= 0) {
          el.cvs.style.opacity = "1";
          drawCipher(el, 0);
          el.realEl.style.maskImage = el.realEl.style.webkitMaskImage = "linear-gradient(to right,transparent,transparent)";
        } else if (bx >= CARD_W) {
          el.cvs.style.opacity = "0";
          el.realEl.style.maskImage = el.realEl.style.webkitMaskImage = "none";
        } else {
          el.cvs.style.opacity = "1";
          drawCipher(el, bx);
          maskReal(el.realEl, bx);
        }
      }
      rafRef.current = requestAnimationFrame(loop);
    };

    rafRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafRef.current);
  }, [buildCards]);

  return (
    <div ref={sceneRef} className="relative w-full h-full overflow-hidden">
      {/* Side fades */}
      <div className="pointer-events-none absolute top-0 bottom-0 left-0 w-[200px] z-[15]" style={{ background: "linear-gradient(to right, #000, transparent)" }} />
      <div className="pointer-events-none absolute top-0 bottom-0 right-0 w-[200px] z-[15]" style={{ background: "linear-gradient(to left, #000, transparent)" }} />

      {/* Center beam */}
      <div className="pointer-events-none absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-[80px] z-20 flex items-stretch justify-center">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 72px 100% at 50% 50%, rgba(120,65,245,.15) 0%, transparent 100%)", filter: "blur(3px)" }} />
        <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-[32px]" style={{ background: "radial-gradient(ellipse 32px 100% at 50% 50%, rgba(155,100,255,.32) 0%, transparent 100%)", filter: "blur(2px)" }} />
        <div
          className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-[2px] rounded-sm"
          style={{
            background: "linear-gradient(to bottom, transparent 0%, rgba(180,150,255,.5) 6%, rgba(225,210,255,1) 25%, rgba(248,242,255,1) 50%, rgba(225,210,255,1) 75%, rgba(180,150,255,.5) 94%, transparent 100%)",
          }}
        />
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[6px] h-[6px] rounded-full bg-white animate-[corePulse_1.8s_ease-in-out_infinite]"
          style={{ boxShadow: "0 0 8px 3px rgba(210,190,255,.8), 0 0 22px 10px rgba(140,90,250,.35)" }}
        />
      </div>

      {/* Card track */}
      <div ref={trackRef} className="absolute top-0 bottom-0 flex items-center will-change-transform" />
    </div>
  );
}
