"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";

export default function LogoBar() {
  const logos = [
    { src: "/aws.webp", alt: "AWS", link: null, className: "filter grayscale brightness-150 opacity-70 hover:opacity-100 transition-opacity" },
    { src: "/nvidia.webp", alt: "NVIDIA", link: null, className: "filter grayscale brightness-150 opacity-70 hover:opacity-100 transition-opacity" },
    { src: "/google.webp", alt: "Google", link: null, className: "filter grayscale brightness-150 opacity-70 hover:opacity-100 transition-opacity" },
    { src: "/University_of_California,_Berkeley_logo.svg.png", alt: "UC Berkeley", link: null, className: "filter grayscale brightness-[2.5] opacity-70 hover:opacity-100 transition-opacity" },
    { src: "/skydeck.png", alt: "SkyDeck", link: null, className: "filter grayscale brightness-150 opacity-70 hover:opacity-100 transition-opacity" },
    { 
      src: "/producthunt.svg", 
      alt: "Product Hunt", 
      link: "https://www.producthunt.com/products/scam-ai",
      width: 160,
      height: 50,
      className: "filter grayscale brightness-150 opacity-70 hover:opacity-100 transition-opacity"
    }
  ];
  
  // Duplicate logos for seamless looping
  const allLogos = [...logos, ...logos];
  
  return (
    <section className="w-full bg-black/80 py-10 border-t border-white/10 overflow-hidden">
      <div className="logo-carousel">
        <div className="logo-track animate-carousel">
          {allLogos.map((logo, index) => (
            <div key={index} className="logo-slide">
              {logo.link ? (
                <a 
                  href={logo.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`${logo.width ? `w-[${logo.width}px]` : 'w-[120px]'} ${logo.height ? `h-[${logo.height}px]` : 'h-[40px]'} mx-12 flex items-center justify-center`}
                >
                  <img 
                    src={logo.src} 
                    alt={logo.alt}
                    width={logo.width || 120}
                    height={logo.height || 40}
                    className={`w-full h-full object-contain ${logo.className || "opacity-70 hover:opacity-100 transition-opacity"}`}
                  />
                </a>
              ) : (
                <div className={`${logo.width ? `w-[${logo.width}px]` : 'w-[120px]'} ${logo.height ? `h-[${logo.height}px]` : 'h-[40px]'} mx-12 flex items-center justify-center`}>
                  <img 
                    src={logo.src} 
                    alt={logo.alt}
                    width={logo.width || 120}
                    height={logo.height || 40}
                    className={`w-full h-full object-contain ${logo.className || "opacity-70 hover:opacity-100 transition-opacity"}`}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .logo-carousel {
          position: relative;
          width: 100%;
          height: 70px;
          overflow: hidden;
        }
        
        .logo-track {
          display: flex;
          align-items: center;
          position: absolute;
          width: fit-content;
        }
        
        .logo-slide {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        @keyframes carousel {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-carousel {
          animation: carousel 40s linear infinite;
        }
        
        .animate-carousel:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
