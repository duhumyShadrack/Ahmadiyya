// SupaBase/functions/FraudDetection.ts
import { supabase } from '../../packages/auth/supabaseClient';

export async function detectFraud(transactionId: string) {
  const { data: transaction } = await supabase
    .from('finance')
    .select('*')
    .eq('id', transactionId)
    .single();

  if (transaction && transaction.amount > 10000) {
    await supabase.from('fraud_logs').insert({
      transaction_id: transactionId,
      anomaly: 'High-value transaction flagged'
    });
  }
}

create table ai_alerts (
  id uuid primary key default gen_random_uuid(),
  type text check (type in ('predictive','anomaly','sustainability')),
  message text not null,
  created_at timestamp default now()
);

-- Example insert for predictive maintenance
insert into ai_alerts (type, message) values
('predictive', 'Vehicle #12 requires service within 500 miles'),
('anomaly', 'Unusual transaction detected in Finance module'),
('sustainability', 'Supplier ABC reduced carbon footprint by 15%');
