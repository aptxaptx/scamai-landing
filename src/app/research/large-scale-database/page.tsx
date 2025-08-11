export const metadata = { title: "ScamNet Database — ScamAI" };

import SiteShell from "@/components/SiteShell";
import ScamNetDatabaseProductPage from "./ScamNetDatabaseProductPage";

export default function LargeScaleDatabasePage() {
  return (
    <SiteShell>
      <ScamNetDatabaseProductPage />
    </SiteShell>
  );
}
