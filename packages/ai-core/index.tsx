// packages/ai-core/index.tsx
import { useEffect, useState } from 'react';
import { supabase } from '../auth/supabaseClient';

export default function AIOversight() {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    const fetchAlerts = async () => {
      const { data } = await supabase.from('ai_alerts').select('*').order('created_at', { ascending: false });
      if (data) setAlerts(data);
    };
    fetchAlerts();
  }, []);

  return (
    <section className="mt-8 p-6 border rounded bg-gray-50">
      <h2 className="text-xl font-semibold">AI Oversight</h2>
      <ul className="mt-4 space-y-2">
        {alerts.map((a: any) => (
          <li key={a.id} className="p-2 border-b">
