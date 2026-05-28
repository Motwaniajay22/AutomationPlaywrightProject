import { Page, Locator, expect } from "@playwright/test"

export class OrderSuccessPage {

    readonly page: Page;
    readonly ordersucess: Locator;

    constructor(page: Page) {
        this.page = page;
        this.ordersucess = page.locator("#content h1");
    }

    async orderPlacedSuccssMsg() {
        await expect(this.ordersucess).toHaveText('Your order has been placed!');
        
    }

}

