import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { authOptions, isEmailAllowed } from '@/lib/auth';
import AdminHeader from '@/components/admin/AdminHeader';

export default async function AuthenticatedAdminLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(authOptions);

  if (!session || !isEmailAllowed(session.user?.email)) {
    redirect('/admin/login');
  }

  return (
    <>
      <AdminHeader />
      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        {children}
      </main>
    </>
  );
}
