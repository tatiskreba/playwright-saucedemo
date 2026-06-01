import { Page, Locator } from "@playwright/test";

export class InventoryPage {
    readonly page: Page;
    readonly title: Locator;
    readonly burgerMenu: Locator;
    readonly logoutLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.title = page.locator('.title');                    // заголовок "Products"
        this.burgerMenu = page.locator('#react-burger-menu-btn'); // кнопка бургер-меню
        this.logoutLink = page.locator('#logout_sidebar_link');   // ссылка Logout в меню
    }

    async logout() {
        await this.burgerMenu.click();   // открываем меню
        await this.logoutLink.click();   // жмём Logout
    }
}