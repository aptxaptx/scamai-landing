"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function LogoBar() {
  const t = useTranslations("HomePage.LogoBar");
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  const logos = [
    { src: "/aws.webp", alt: t("aws"), link: null, className: "filter grayscale brightness-150 opacity-70 hover:opacity-100 transition-opacity" },
    { src: "/nvidia.webp", alt: t("nvidia"), link: null, className: "filter grayscale brightness-150 opacity-70 hover:opacity-100 transition-opacity" },
    { src: "/google.webp", alt: t("google"), link: null, className: "filter grayscale brightness-150 opacity-70 hover:opacity-100 transition-opacity" },
    { src: "/skydeck.png", alt: t("skydeck"), link: null, className: "filter grayscale brightness-150 opacity-70 hover:opacity-100 transition-opacity" },
    { src: "/21972-312_SOC_NonCPA_Blk.png", alt: t("soc"), link: null, width: 180, height: 60, className: "filter grayscale brightness-150 opacity-70 hover:opacity-100 transition-opacity" },
    { 
      src: "/producthunt.svg", 
      alt: t("productHunt"),
      link: "https://www.producthunt.com/products/scam-ai",
      width: 240,
      height: 75,
      className: "filter grayscale brightness-150 opacity-70 hover:opacity-100 transition-opacity"
    }
  ];
  
  // Duplicate logos for seamless looping
  const allLogos = [...logos, ...logos];
  
  return (
    <section className="w-full bg-white py-10 border-t border-gray-200 overflow-hidden">
      <div className="logo-carousel">
        <div className={`logo-track ${isLoaded ? 'animate-carousel' : ''}`}>
          {allLogos.map((logo, index) => (
            <div key={index} className="logo-slide">
              {logo.link ? (
                <a 
                  href={logo.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-40 h-12 mx-12 flex items-center justify-center"
                  style={{ width: logo.width ? `${logo.width}px` : '120px', height: logo.height ? `${logo.height}px` : '40px' }}
                >
                  <Image 
                    src={logo.src} 
                    alt={logo.alt}
                    width={logo.width || 120}
                    height={logo.height || 40}
                    className={`w-full h-full object-contain ${logo.className || "opacity-70 hover:opacity-100 transition-opacity"}`}
                  />
                </a>
              ) : (
                <div className="w-40 h-12 mx-12 flex items-center justify-center"
                     style={{ width: logo.width ? `${logo.width}px` : '120px', height: logo.height ? `${logo.height}px` : '40px' }}>
                  <Image 
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
