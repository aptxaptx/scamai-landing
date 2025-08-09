export const metadata = {
  title: "Deepfake Detection — ScaMai",
  description: "Real-Time Deepfake Detection: Defending the Truth in Visual Content",
};

import SiteShell from "@/components/SiteShell";
import DeepfakeDetectionProductPage from "./DeepfakeDetectionProductPage";

export default function DeepfakesPage() {
  return (
    <SiteShell>
      <DeepfakeDetectionProductPage />
    </SiteShell>
  );
}
