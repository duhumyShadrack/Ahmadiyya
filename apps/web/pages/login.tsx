// apps/web/pages/login.tsx
import { supabase } from '../../packages/auth/supabaseClient';

export default function Login() {
  const handleLogin = async () => {
    await supabase.auth.signInWithOAuth({ provider: 'google' });
  };

  return (
    <main className="p-8">
      <h1 className="text-xl font-bold">Login</h1>
      <button onClick={handleLogin} className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">
        Sign in with Google
      </button>
    </main>
  );
}
