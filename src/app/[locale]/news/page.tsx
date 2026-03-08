import { redirect } from 'next/navigation';

export default function NewsPage() {
  // News content lives in the newsletter section
  redirect('/newsletter');
}
