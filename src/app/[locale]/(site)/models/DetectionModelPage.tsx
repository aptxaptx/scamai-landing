import { useTranslations } from "next-intl";

import { ProductPage } from "../research/ProductPage";
import {
  DetectionModelType,
  detectionModelNamespaces,
  getDetectionModelConfig,
} from "./config";

interface DetectionModelPageProps {
  modelType: DetectionModelType;
}

export default function DetectionModelPage({
  modelType,
}: DetectionModelPageProps) {
  const t = useTranslations(detectionModelNamespaces[modelType]);
  const config = getDetectionModelConfig(modelType, t);

  return <ProductPage data={config} />;
}
