import { Locator, Page, expect } from "@playwright/test"

export class LaunchPage {

    readonly page: Page;
    readonly myaccountdrpdwn: Locator;
    readonly loginoption: Locator;
    readonly dropdownoptn: Locator;

    constructor(page: Page) {
        this.page = page;
        this.myaccountdrpdwn = page.locator('#top a[title="My Account"]');
        this.loginoption = page.getByRole('link', { name: 'Login' });
        this.dropdownoptn = page.locator(".dropdown-menu.dropdown-menu-right a");
    }
    
    async openSite() {
        await this.page.goto(process.env.BASE_URL!);
    }
    async clickDropDown() {
        await this.myaccountdrpdwn.click();
    }
    async clickLoginOption() {
        await this.loginoption.click();
    }
    async dropDownOptions() {
        return this.dropdownoptn;
    }
}