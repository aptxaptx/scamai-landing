export const metadata = {
  title: "For Individuals — ScaMai",
  description:
    "Protect yourself from scam calls and texts. Join the waitlist for our mobile app and browser plugin.",
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


