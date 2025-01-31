import test from "@playwright/test";
import LoginPage from "../Pages/LoginPage";
import userCredentials from "../.github/workflows/helpers/UserCredentials";

test ('sanity', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  const loginPage = new LoginPage(page);
  await loginPage.loginToApplication(userCredentials.STANDARD_USER,userCredentials.PASSWD);
});