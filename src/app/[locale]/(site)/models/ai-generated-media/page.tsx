import DetectionModelPage from "../DetectionModelPage";
import { detectionModelsMetadata } from "../config";

export const metadata = detectionModelsMetadata["ai-generated-media"];

export default function AIGeneratedMediaPage() {
  return <DetectionModelPage modelType="ai-generated-media" />;
}
