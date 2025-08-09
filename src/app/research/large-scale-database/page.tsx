export const metadata = {
  title: "ScamNet Database — ScaMai",
  description: "The Intelligence Engine Powering Next-Generation Fraud Defense",
};

import SiteShell from "@/components/SiteShell";
import ScamNetDatabaseProductPage from "./ScamNetDatabaseProductPage";

export default function LargeScaleDatabasePage() {
  return (
    <SiteShell>
      <ScamNetDatabaseProductPage />
    </SiteShell>
  );
}
