import DetectionModelPage from "../DetectionModelPage";
import { detectionModelsMetadata } from "../config";

export const metadata = detectionModelsMetadata["voice-clones"];

export default function VoiceClonesPage() {
  return <DetectionModelPage modelType="voice-clones" />;
}
