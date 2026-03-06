// apps/web/components/Layout.tsx
import Link from 'next/link';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gray-800 text-white p-4">
        <h1 className="text-xl">AHMAIYYA MANAGEMENT</h1>
        <nav className="mt-2 space-x-4">
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/fleet">Fleet</Link>
          <Link href="/finance">Finance</Link>
          <Link href="/inventory">Inventory</Link>
          <Link href="/checkout">Checkout</Link>
        </nav>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="bg-gray-200 text-center p-4">
        © 2026 AHMAIYYA MANAGEMENT
      </footer>
    </div>
  );
}
