import { checkAndReorder } from '../reorder';

describe('Inventory Auto-Reorder Logic', () => {
  it('should trigger reorder when quantity is below threshold', async () => {
    const item = { id: 'item1', name: 'Brake Pads', quantity: 5, reorder_threshold: 10, supplier: 'supplier1' };
    const result = await checkAndReorder(item);
    expect(result.triggered).toBe(true);
    expect(result.order.quantity).toBe(20); // double threshold
  });

  it('should not trigger reorder when quantity is above threshold', async () => {
    const item = { id: 'item2', name: 'Oil Filter', quantity: 15, reorder_threshold: 10, supplier: 'supplier2' };
    const result = await checkAndReorder(item);
    expect(result.triggered).toBe(false);
  });

  it('should handle missing supplier gracefully', async () => {
    const item = { id: 'item3', name: 'Coolant', quantity: 3, reorder_threshold: 10 };
    const result = await checkAndReorder(item);
    expect(result.triggered).toBe(false);
    expect(result.reason).toContain('Missing supplier');
  });
});
