import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('http://localhost:3000');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Automation/);
});

test('Check the resources page', async ({ page }) => {
  await page.goto('http://localhost:3000/resources');

  // Click the get started link.
  const w3schoolsLinkValue = await page.getByRole('link', { name: 'w3schools.com' }).textContent()
  expect(w3schoolsLinkValue).toBe('w3schools.com')

  // const bodyContent = await page.innerText('.container')
  const bodyContent = await page.locator('.container').allTextContents()
  const wordsToAssert = ["Learning", "Standards", "Articles", "Community"]
  // console.log(bodyContent)
  // console.log(typeof bodyContent)

  for (const word of wordsToAssert) {
    // await expect(bodyContent).toContain(word)
    await expect(bodyContent[0]).toContain(word)

  }  
});
