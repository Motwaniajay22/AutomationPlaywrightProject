import {Page, Locator} from "@playwright/test"

export class ForgotPasswordPage{

    readonly page : Page;
    readonly email : Locator;
    readonly continuebtn : Locator;


    constructor(page: Page){
        this.page =page;
        this.email = page.locator("#input-email");
        this.continuebtn = page.getByRole("button",{name: 'Continue'});
    }

    async enterEmail(emailtext:string){
        await this.email.fill(emailtext)
    }
    async continueButtonClick(){
        await this.continuebtn.click();
    }
}