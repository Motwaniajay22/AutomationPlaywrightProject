import "../hooks/testHooks";
import { test, expect } from "../custom-fixtures/PageFixtures";


test("Verify product text after search", async ({ launchPage, loginPage, myaccountpage, productsearchpage }) => {
    await launchPage.clickDropDown();
    await launchPage.clickLoginOption();
    await loginPage.loginToApp(process.env.USER_EMAIL!, process.env.USER_PASSWORD!);
    await myaccountpage.searchBar("HP");
    await myaccountpage.searchButton();
    await expect(productsearchpage.searchtext).toContainText("HP");
});