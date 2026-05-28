import { Given, When, Then } from '@cucumber/cucumber';
import { CustomWorld } from '../support/world';

Given('User launches login page', async function (this: CustomWorld) {
  await this.loginPage.navigate();
});

When(
  'User logs in with username {string} and password {string}',
  async function (
    this: CustomWorld,
    username: string,
    password: string
  ) {
    await this.loginPage.login(username, password);
  }
);

Then('User should see dashboard page', async function (this: CustomWorld) {
  await this.loginPage.verifyHomePage();
});