import { expect, test } from '@playwright/test';

test.describe('index page', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('/');
	});

	test('has expected canvas', async ({ page }) => {
		await page.waitForLoadState('domcontentloaded');

		// expect the canvas to be visible
		const canvas = page.locator('canvas');
		expect(canvas).toBeTruthy();

		// generate a screenshot of the page
		await page.screenshot({ path: 'static/screenshot.png', fullPage: true });
	});
});
