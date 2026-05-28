import { expect, Locator, Page } from "@playwright/test";

export class LoginPage {

    readonly page: Page;
    readonly email: Locator;
    readonly password: Locator;
    readonly loginbtn: Locator;
    readonly invalidloginerr: Locator;
    readonly forgotlink:Locator;
    readonly forgotpasswordmsg:Locator;

    constructor(page: Page) {
        this.page = page;
        this.email = page.locator("#input-email");
        this.password = page.locator("#input-password");
        this.loginbtn = page.getByRole('button', { name: 'Login' });
        this.invalidloginerr = page.locator('.alert-danger');
        this.forgotlink = page.getByRole('link',{name :'Forgotten Password'}).first();
        this.forgotpasswordmsg = page.locator(".alert-dismissible");

    }

    async loginUrl() {
        await this.page.goto("/index.php?route=account/login");
    }
    async loginToApp(username: string, userpassword: string) {
        await this.email.fill(username);
        await this.password.fill(userpassword);
        await this.loginbtn.click();
    }
    async forgotPasswordClick(){
        await this.forgotlink.click();
    }
    async forgotPasswordMailSentMsg(){
      await expect ( this.forgotpasswordmsg).toHaveText("An email with a confirmation link has been sent your email address.");
    }
}