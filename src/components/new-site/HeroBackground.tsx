export default function HeroBackground({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute inset-0 bg-black ${className}`} />
  );
}
