import { useEffect, useState } from 'react';
import { supabase } from '../auth/supabaseClient';

export default function FinanceDashboard() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchFinance = async () => {
      const { data, error } = await supabase.from('finance').select('*');
      if (data) setTransactions(data);
    };
    fetchFinance();
  }, []);

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">Finance & Credit Lines</h1>
      <table className="mt-4 w-full border-collapse">
        <thead>
          <tr>
            <th className="border px-4 py-2">Customer</th>
            <th className="border px-4 py-2">Amount</th>
            <th className="border px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((t: any) => (
            <tr key={t.id}>
              <td className="border px-4 py-2">{t.customer}</td>
              <td className="border px-4 py-2">${t.amount}</td>
              <td className="border px-4 py-2">{t.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
