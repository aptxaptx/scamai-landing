export const metadata = {
  title: "AI-Generated Media Detection — ScaMai",
  description: "Detect AI-Generated Images & Video: Verifying Reality in a Synthetic World",
};

import SiteShell from "@/components/SiteShell";
import AIGeneratedMediaProductPage from "./AIGeneratedMediaProductPage";

export default function AIGeneratedMediaPage() {
  return (
    <SiteShell>
      <AIGeneratedMediaProductPage />
    </SiteShell>
  );
}
