import { Page, expect } from '@playwright/test';

export class LoginPage {

  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto('https://rahulshettyacademy.com/client');
  }

  async login(email: string, password: string) {
    await this.page.locator('#userEmail').fill(email);
    await this.page.locator('#userPassword').fill(password);
    await this.page.locator('#login').click();
  }

  async verifyHomePage() {
    await expect(this.page).toHaveURL(/dashboard/);
  }
}