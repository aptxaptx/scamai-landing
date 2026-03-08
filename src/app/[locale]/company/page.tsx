import { redirect } from 'next/navigation';

export default function CompanyPage({ params }: { params: Promise<{ locale: string }> }) {
  // Company page redirects to About — all company info lives there
  redirect('/about');
}
