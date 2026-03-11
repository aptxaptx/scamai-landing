export default function HeroBackground({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute inset-0 bg-black ${className}`}>
      {/* Blue gradient beam — flipped vertically so light rises from bottom */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/hero-bg.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-bottom"
        style={{ opacity: 0.85, transform: "scaleY(-1)" }}
      />
      {/* Bottom fade to black — seamless transition into next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[40%]"
        style={{
          background: "linear-gradient(to bottom, transparent 0%, black 100%)",
        }}
      />
      {/* Top fade for nav readability */}
      <div
        className="absolute top-0 left-0 right-0 h-[20%]"
        style={{
          background: "linear-gradient(to top, transparent 0%, rgba(0,0,0,0.4) 100%)",
        }}
      />
    </div>
  );
}
