import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { InventoryPage } from "../pages/InventoryPage";

test.describe("Login tests", () => {
    let loginPage: LoginPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        await loginPage.open();
    });

    test("Login successfully and see products page", async ({ page }) => {
        await loginPage.login('standard_user', 'secret_sauce');

        await expect(page).toHaveURL(/.*inventory.html/);

        const inventoryPage = new InventoryPage(page);
        await expect(inventoryPage.title).toHaveText('Products');
    });

    test("Login with invalid password shows error", async () => {
        await loginPage.login('standard_user', 'wrong_password');

        await expect(loginPage.errorMessage).toBeVisible();
        await expect(loginPage.errorMessage).toContainText('Username and password do not match');
    });

    test("Locked out user cannot login", async () => {
        await loginPage.login('locked_out_user', 'secret_sauce');

        await expect(loginPage.errorMessage).toBeVisible();
        await expect(loginPage.errorMessage).toContainText('locked out');
    });

    const validUsers = ['standard_user', 'problem_user', 'performance_glitch_user'];

    for (const username of validUsers) {
        test(`Login successfully as ${username}`, async ({ page }) => {
            await loginPage.login(username, 'secret_sauce');
            await expect(page).toHaveURL(/.*inventory.html/);
        });
    }

    test("User can logout", async ({ page }) => {
        await loginPage.login('standard_user', 'secret_sauce');

        const inventoryPage = new InventoryPage(page);
        await inventoryPage.logout();

        await expect(loginPage.loginButton).toBeVisible();
        await expect(page).toHaveURL('https://www.saucedemo.com/');
    });
});