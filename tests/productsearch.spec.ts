import "../hooks/testHooks";
import { test, expect } from "../custom-fixtures/baseTest";


test("TC_001 Verify product text after search",{tag:["@regression"]}, async ({ launchPage, loginPage, myaccountpage, productsearchpage }) => {
    await launchPage.clickDropDown();
    await launchPage.clickLoginOption();
    await loginPage.loginToApp(process.env.USER_EMAIL!, process.env.USER_PASSWORD!);
    await myaccountpage.searchBar("HP");
    await myaccountpage.searchButton();
    await expect(productsearchpage.searchtext).toContainText("HP");
});