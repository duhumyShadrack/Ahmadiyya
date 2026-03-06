export function calculatePoints(amount: number) {
  // Example: 1 point per $10 spent
  return Math.floor(amount / 10);
}

export function applyDiscount(points: number) {
  // Example: 100 points = $10 discount
  return (points / 100) * 10;
}
