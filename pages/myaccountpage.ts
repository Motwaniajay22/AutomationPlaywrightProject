import { Locator, Page } from "@playwright/test"

export class MyAccountPage {

    readonly page: Page;
    readonly search: Locator;
    readonly searchBtn: Locator;
    readonly loginsucces: Locator;
    
    constructor(page: Page) {
        this.page = page;
        this.search = page.locator("//input[@name='search']");
        this.searchBtn = page.locator("//button[@type='button']/i[@class='fa fa-search']");
        this.loginsucces = page.locator('#content h2').filter({ hasText: 'My Account' });
    }

    async searchBar(entertext: string) {

        await this.search.fill(entertext)
    }

    async searchButton() {

        await this.searchBtn.click();
    }

    





}