import SiteShell from "@/components/SiteShell";
import VoiceCloneProductPage from "./VoiceCloneProductPage";

export const metadata = { title: "Voice Clone Detection — ScamAI" };

export default function Page() {
  return (
    <SiteShell>
      <VoiceCloneProductPage />
    </SiteShell>
  );
}
