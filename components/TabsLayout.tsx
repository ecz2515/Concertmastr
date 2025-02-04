import Link from 'next/link';
import { useRouter } from 'next/router';

export default function TabsLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  // Highlight the active tab
  const isActive = (path: string) => router.pathname === path;

  return (
    <div>
      {/* Navigation */}
      <nav style={{ display: 'flex', gap: '1rem', padding: '1rem', background: '#333', color: 'white' }}>
        <Link href="/" style={{ color: isActive('/') ? 'gold' : 'white' }}>Home</Link>
        <Link href="/program" style={{ color: isActive('/program') ? 'gold' : 'white' }}>Program</Link>
        <Link href="/biographies" style={{ color: isActive('/biographies') ? 'gold' : 'white' }}>Biographies</Link>
        <Link href="/program-notes" style={{ color: isActive('/program-notes') ? 'gold' : 'white' }}>Program Notes</Link>
        <Link href="/meet-orchestra" style={{ color: isActive('/meet-orchestra') ? 'gold' : 'white' }}>Meet the Orchestra</Link>
        <Link href="/bios" style={{ color: isActive('/bios') ? 'gold' : 'white' }}>Bios</Link>
        <Link href="/pnotes" style={{ color: isActive('/pnotes') ? 'gold' : 'white' }}>PNotes</Link>
      </nav>
      {/* Page Content */}
      <main style={{ padding: '1rem' }}>
        {children}
      </main>
    </div>
  );
}
