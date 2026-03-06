// packages/inventory/index.tsx
import { useEffect, useState } from 'react';
import { supabase } from '../auth/supabaseClient';

export default function InventoryDashboard() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchInventory = async () => {
      const { data, error } = await supabase.from('inventory').select('*');
      if (data) setItems(data);
    };
    fetchInventory();
  }, []);

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">Inventory & Suppliers</h1>
      <table className="mt-4 w-full border-collapse">
        <thead>
          <tr>
            <th className="border px-4 py-2">Item</th>
            <th className="border px-4 py-2">Quantity</th>
            <th className="border px-4 py-2">
