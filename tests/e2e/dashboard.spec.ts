import { test, expect } from '@playwright/test';

test.describe('Unified Dashboard E2E', () => {
  test('Admin sees all modules', async ({ page }) => {
    // Simulate login as admin
    await page.goto('http://localhost:3000/login');
    await page.fill('input[name="email"]', 'admin@example.com');
    await page.fill('input[name="password"]', 'password123');
    await page.click('button[type="submit"]');

    // Navigate to dashboard
    await page.goto('http://localhost:3000/dashboard');

    // Verify links
    await expect(page.getByText('Fleet Management')).toBeVisible();
    await expect(page.getByText('Finance')).toBeVisible();
    await expect(page.getByText('Inventory & Suppliers')).toBeVisible();
    await expect(page.getByText('Customer Checkout')).toBeVisible();
    await expect(page.getByText('Governance & Security')).toBeVisible();
  });

  test('Manager sees Fleet, Finance, Inventory, AI Oversight', async ({ page }) => {
    await page.goto('http://localhost:3000/login');
    await page.fill('input[name="email"]', 'manager@example.com');
    await page.fill('input[name="password"]', 'password123');
    await page.click('button[type="submit"]');

    await page.goto('http://localhost:3000/dashboard');

    await expect(page.getByText('Fleet Management')).toBeVisible();
    await expect(page.getByText('Finance')).toBeVisible();
    await expect(page.getByText('Inventory & Suppliers')).toBeVisible();
    await expect(page.getByText('AI Oversight')).toBeVisible();
    await expect(page.getByText('Governance & Security')).toHaveCount(0);
  });

  test('Team member sees only Checkout', async ({ page }) => {
    await page.goto('http://localhost:3000/login');
    await page.fill('input[name="email"]', 'team@example.com');
    await page.fill('input[name="password"]', 'password123');
    await page.click('button[type="submit"]');

    await page.goto('http://localhost:3000/dashboard');

    await expect(page.getByText('Customer Checkout')).toBeVisible();
    await expect(page.getByText('Fleet Management')).toHaveCount(0);
    await expect(page.getByText('Finance')).toHaveCount(0);
    await expect(page.getByText('Inventory
