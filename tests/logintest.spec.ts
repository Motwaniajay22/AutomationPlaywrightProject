import "../hooks/testHooks";
import { test, expect } from "../custom-fixtures/baseTest"

test("TC_001 Valid Login", { tag: ['@smoke', '@regression'] }, async ({ launchPage, loginPage, myaccountpage }) => {
    await launchPage.clickDropDown();
    await launchPage.clickLoginOption();
    await loginPage.loginToApp(process.env.USER_EMAIL!, process.env.USER_PASSWORD!);
    await expect(myaccountpage.loginsucces).toContainText("My Account");
});

test("TC_002 Invalid Login", { tag: '@regression' }, async ({ launchPage, loginPage }) => {
    await launchPage.clickDropDown();
    await launchPage.clickLoginOption();
    await loginPage.loginToApp("dd", "SA");
    await expect(loginPage.invalidloginerr).toContainText(/No match|exceeded/);
});

test("TC_003 verify forgot password", { tag: '@regression' }, async ({launchPage, loginPage, forgotpasswordpage }) => {
    await launchPage.clickDropDown();
    await launchPage.clickLoginOption();
    await loginPage.forgotPasswordClick();
    await forgotpasswordpage.enterEmail("ajm@gmail.com");
    await forgotpasswordpage.continueButtonClick();
    await loginPage.forgotPasswordMailSentMsg();

})