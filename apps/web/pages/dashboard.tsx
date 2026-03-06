import AIOversight from '../../packages/ai-core';

export default function Dashboard() {
  // ...existing role logic

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">AHMAIYYA MANAGEMENT Dashboard</h1>
      <p className="mt-2">Logged in as: {user?.email}</p>
      <p className="mt-2">Role: {role}</p>

      <nav className="mt-6 space-y-4">
        {/* existing role-based links */}
      </nav>

      {/* AI Oversight section visible to managers/admins */}
      {(role === 'admin' || role === 'manager') && <AIOversight />}
    </main>
  );
}
