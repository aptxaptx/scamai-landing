export const metadata = { title: "For Individuals — ScamAI" };
import IndividualsClient from "./IndividualsClient";
import { Suspense } from "react";

export default function IndividualsPage() {
  return (
    <Suspense fallback={<div />}> 
      <IndividualsClient />
    </Suspense>
  );
}


