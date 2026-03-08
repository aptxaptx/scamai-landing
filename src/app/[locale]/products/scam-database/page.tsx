import { redirect } from 'next/navigation';

export default function ScamDatabasePage() {
  // Scam Database is not yet launched — redirect to products overview
  redirect('/products');
}
