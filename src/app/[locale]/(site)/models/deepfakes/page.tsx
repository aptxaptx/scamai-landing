import DetectionModelPage from "../DetectionModelPage";
import { detectionModelsMetadata } from "../config";

export const metadata = detectionModelsMetadata["deepfakes"];

export default function DeepfakesPage() {
  return <DetectionModelPage modelType="deepfakes" />;
}
