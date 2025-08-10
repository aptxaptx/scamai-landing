export const metadata = {
  title: "For Individuals — ScaMai",
  description:
    "Mobile app and browser plugin for scam protection. Block calls, detect fake messages, and browse safely.",
};
import IndividualsClient from "./IndividualsClient";
import { Suspense } from "react";

export default function IndividualsPage() {
  return (
    <Suspense fallback={<div />}> 
      <IndividualsClient />
    </Suspense>
  );
}


