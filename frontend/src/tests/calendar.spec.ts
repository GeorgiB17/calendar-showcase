import { test, expect } from '@playwright/test';

test('user can open calendar', async ({ page }) => {
  await page.goto('https://georgi-calendar.onrender.com');

  await expect(page.locator('text=Calendar')).toBeVisible();
});