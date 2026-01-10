import SiteShell from "@/components/SiteShell";
import AboutContent from "./AboutContent";

export const metadata = { title: "About Us — ScamAI" };

export default function AboutPage() {
  return (
    <SiteShell>
      <AboutContent />
    </SiteShell>
  );
}
