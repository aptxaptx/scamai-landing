import SessionProvider from '@/components/admin/SessionProvider';

export const metadata = {
  title: 'Newsletter Admin',
  robots: { index: false, follow: false },
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <div className="min-h-screen bg-black text-white">
        {children}
      </div>
    </SessionProvider>
  );
}
