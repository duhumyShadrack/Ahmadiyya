import { calculatePoints, applyDiscount } from '../loyalty';
import { createCheckoutSession } from '../checkoutLogic';

describe('Checkout Module', () => {
  describe('Loyalty Program', () => {
    it('should calculate points correctly', () => {
      const points = calculatePoints(250);
      expect(points).toBe(25); // 1 point per $10
    });

    it('should apply discount correctly', () => {
      const discount = applyDiscount(200); // 200 points
      expect(discount).toBe(20); // $20 discount
    });

    it('should return zero discount if points are insufficient', () => {
      const discount = applyDiscount(50);
      expect(discount).toBe(0.5); // $0.50 discount
    });
  });

  describe('Stripe Checkout Session', () => {
    it('should create a checkout session with valid cart', async () => {
      const cart = [{ name: 'Fleet Service', price: 200 }];
      const session = await createCheckoutSession(cart);
      expect(session).toHaveProperty('id');
      expect(session
