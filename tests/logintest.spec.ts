import "../hooks/testHooks";
import { test, expect } from "../custom-fixtures/PageFixtures"

test("Valid Login",{tag:['@smoke','@regression']}, async ({ launchPage, loginPage, myaccountpage}) => {
    await launchPage.clickDropDown();
    await launchPage.clickLoginOption();
    await loginPage.loginToApp(process.env.USER_EMAIL!, process.env.USER_PASSWORD!);
    await expect(myaccountpage.loginsucces).toContainText("My Account");
});

test("Invalid Login",{tag: '@regression'}, async ({ launchPage, loginPage }) => {
    await launchPage.clickDropDown();
    await launchPage.clickLoginOption();
    await loginPage.loginToApp("dd", "SA");
    await expect(loginPage.invalidloginerr).toContainText(/No match|exceeded/);
});