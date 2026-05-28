import { Before, After } from '@cucumber/cucumber';
import { chromium } from '@playwright/test';
import { CustomWorld } from '../support/world';
import { LoginPage } from '../pages/LoginPage';

Before(async function (this: CustomWorld) {
  this.browser = await chromium.launch({
    headless: true
  });

  const context = await this.browser.newContext();

  this.page = await context.newPage();

  this.loginPage = new LoginPage(this.page);
});

After(async function (this: CustomWorld) {
  await this.page.close();
  await this.browser.close();
});