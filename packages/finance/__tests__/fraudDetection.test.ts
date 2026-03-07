import { detectFraud } from '../fraudLogic';

describe('Finance Fraud Detection', () => {
  it('should flag high-value transactions as suspicious', async () => {
    const transaction = { id: 'tx1', amount: 15000, customer: 'ABC Corp' };
    const result = await detectFraud(transaction);
    expect(result.flagged).toBe(true);
    expect(result.reason).toContain('High-value transaction');
  });

  it('should not flag normal transactions', async () => {
    const transaction = { id: 'tx2', amount: 500, customer: 'XYZ Ltd' };
    const result = await detectFraud(transaction);
    expect(result.flagged).toBe(false);
  });

  it('should flag negative amounts as anomalies', async () => {
    const transaction = { id: 'tx3', amount: -200, customer: 'Test User' };
    const result = await detectFraud(transaction);
    expect(result.flagged).toBe(true);
    expect(result.reason).toContain('Negative amount anomaly');
  });
});
