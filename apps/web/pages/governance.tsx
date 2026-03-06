import { supabase } from '../../packages/auth/supabaseClient';

export default function Governance() {
  const assignRole = async (userId: string, role: string) => {
    await supabase.from('user_roles').upsert({ user_id: userId, role });
  };

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">Governance & Security</h1>
      <p className="mt-4">Admins can assign/revoke roles and set rate limits.</p>
      {/* Example UI for role assignment */}
      <button
        onClick={() => assignRole('some-user-id', 'manager')}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
      >
        Assign Manager Role
      </button>
    </main>
  );
}
