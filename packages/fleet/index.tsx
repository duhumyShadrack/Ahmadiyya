// packages/fleet/index.tsx

import { useEffect, useState } from 'react';
import { supabase } from '../auth/supabaseClient';

export default function FleetDashboard() {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    const fetchFleet = async () => {
      const { data, error } = await supabase.from('fleet').select('*');
      if (data) setVehicles(data);
    };
    fetchFleet();
  }, []);

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">Fleet Maintenance</h1>
      <ul className="mt-4">
        {vehicles.map((v: any) => (
          <li key={v.id} className="border-b py-2">
            {v.name} — Next Service: {v.next_service_date}
          </li>
        ))}
      </ul>
    </main>
  );
} import { useEffect, useState } from 'react';
import { supabase } from '../auth/supabaseClient';

export default function FleetDashboard() {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    const fetchFleet = async () => {
      const { data, error } = await supabase.from('fleet').select('*');
      if (data) setVehicles(data);
    };
    fetchFleet();
  }, []);

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">Fleet Maintenance</h1>
      <ul className="mt-4">
        {vehicles.map((v: any) => (
          <li key={v.id} className="border-b py-2">
            {v.name} — Next Service: {v.next_service_date}
          </li>
        ))}
      </ul>
    </main>
  );
}
