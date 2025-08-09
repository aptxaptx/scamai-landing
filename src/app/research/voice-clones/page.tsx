import SiteShell from "@/components/SiteShell";
import VoiceCloneProductPage from "./VoiceCloneProductPage";

export const metadata = {
  title: "Voice Clone Detection — ScaMai",
  description: "AI Voice Clone Detection product page.",
};

export default function Page() {
  return (
    <SiteShell>
      <VoiceCloneProductPage />
    </SiteShell>
  );
}
