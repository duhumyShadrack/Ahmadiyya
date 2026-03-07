export async function detectFraud(transaction: any) {
  let flagged = false;
  let reason = '';

  if (transaction.amount > 10000) {
    flagged = true;
    reason = 'High-value transaction flagged';
  } else if (transaction.amount < 0) {
    flagged = true;
    reason = 'Negative amount anomaly';
  }

  return { flagged, reason };
}
