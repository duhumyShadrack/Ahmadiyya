import { supabase } from '../auth/supabaseClient';

export async function checkAndReorder(itemId: string) {
  const { data: item } = await supabase
    .from('inventory')
    .select('*')
    .eq('id', itemId)
    .single();

  if (item && item.quantity <= item.reorder_threshold) {
    await supabase.from('orders').insert({
      item_id: itemId,
      supplier: item.supplier,
      quantity: item.reorder_threshold * 2, // reorder double threshold
      status: 'pending'
    });
    console.log(`Reorder triggered for ${item.name}`);
  }
}
