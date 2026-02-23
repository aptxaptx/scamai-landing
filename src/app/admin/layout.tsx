import SessionProvider from '@/components/admin/SessionProvider';
import { Toaster } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';

export const metadata = {
  title: 'Newsletter Admin',
  robots: { index: false, follow: false },
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <TooltipProvider>
        <div className="min-h-screen bg-black text-white">
          {children}
          <Toaster theme="dark" />
        </div>
      </TooltipProvider>
    </SessionProvider>
  );
}
