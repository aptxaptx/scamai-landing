import { ProductPage } from "../research/ProductPage";
import { DetectionModelType, getDetectionModelConfig } from "./config";

interface DetectionModelPageProps {
  modelType: DetectionModelType;
}

export default function DetectionModelPage({
  modelType,
}: DetectionModelPageProps) {
  const config = getDetectionModelConfig(modelType);

  return <ProductPage data={config} />;
}
