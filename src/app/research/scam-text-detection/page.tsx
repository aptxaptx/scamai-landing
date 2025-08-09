export const metadata = {
  title: "Scam Text Detection — ScaMai",
  description: "Instantly Identify and Neutralize Malicious Texts",
};

import SiteShell from "@/components/SiteShell";
import ScamTextDetectionProductPage from "./ScamTextDetectionProductPage";

export default function ScamTextDetectionPage() {
  return (
    <SiteShell>
      <ScamTextDetectionProductPage />
    </SiteShell>
  );
}
