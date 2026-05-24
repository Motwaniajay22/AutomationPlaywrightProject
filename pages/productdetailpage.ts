import { Locator, Page } from "@playwright/test";
export class ProductDetailPage {

    readonly page: Page;
    readonly addtocartbtn: Locator;
    readonly successmsg: Locator;
    readonly itemcart: Locator;
    readonly totalitems :Locator;
    

    constructor(page: Page) {
        this.page = page;
        this.addtocartbtn = page.locator("#button-cart");
        this.successmsg = page.getByText("Success: You have added ");
        this.itemcart = page.locator("#cart-total");
        //this.totalitems = page.locator('#cart-total');
        this.totalitems = page.getByText('item(s)');
       
    }

    async addCartButton() {
        await this.addtocartbtn.click();
    }
    async itemCartButton() {
        await this.itemcart.click();
    }

}