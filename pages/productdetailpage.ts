import { Locator, Page } from "@playwright/test";
export class ProductDetailPage {

    readonly page: Page;
    readonly addtocartbtn: Locator;
    readonly successmsg: Locator;
    readonly itemcart: Locator;
    readonly totalitems: Locator;
    readonly checkout: Locator;
    readonly bilingdetail: Locator;
    readonly deliverydetail: Locator;
    readonly deliverymethod: Locator;
    readonly tc: Locator;
    readonly paymentdone: Locator;
    readonly ordercrf: Locator;

    constructor(page: Page) {
        this.page = page;
        this.addtocartbtn = page.locator("#button-cart");
        this.successmsg = page.getByText("Success: You have added ");
        this.itemcart = page.locator("#cart-total");
        //this.totalitems = page.locator('#cart-total');
        this.totalitems = page.getByText('item(s)');
        this.checkout = page.getByText('Checkout').last();
        this.bilingdetail = page.locator("#button-payment-address");
        this.deliverydetail = page.locator("#button-shipping-address");
        this.deliverymethod = page.locator("#button-shipping-method");
        this.tc = page.locator('[name="agree"]');
        this.paymentdone = page.locator("#button-payment-method");
        this.ordercrf = page.locator("#button-confirm");


    }

    async addCartButton() {
        await this.addtocartbtn.click();
    }
    async itemCartButton() {
        await this.itemcart.click();
    }
    async checkOutClick() {
        await this.checkout.click();
    }
    async bilingDeatailContinueButton() {
        await this.bilingdetail.click();
    }
    async deliveryDetailContinueButton() {
        await this.deliverydetail.click();
    }
    async deliveryMethodContinueButton() {
        await this.deliverymethod.click();
    }
    async termsConditionChecked() {
        await this.tc.check();
    }
    async paymentDoneContinueButton() {
        await this.paymentdone.click();
    }
    async orderConfirmContinueButton() {
        await this.ordercrf.click();
    }

}