// apps/web/pages/index.tsx
import { useUser } from '@supabase/auth-helpers-react';

export default function Home() {
  const user = useUser();
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">Welcome to AHMAIYYA MANAGEMENT</h1>
      {user ? (
        <p className="mt-4">Logged in as: {user.email}</p>
      ) : (
        <p className="mt-4">Please log in to access your dashboard.</p>
      )}
    </main>
  );
}
