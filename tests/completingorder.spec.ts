import "../hooks/testHooks";
import { test, expect } from "../custom-fixtures/PageFixtures";

test('Verify end to end order completon', async ({launchPage,loginPage,myaccountpage,productsearchpage,productdetailpage }) => {

    await launchPage.clickDropDown();
    await launchPage.clickLoginOption();
    await loginPage.loginToApp(process.env.USER_EMAIL!, process.env.USER_PASSWORD!);
    await myaccountpage.searchBar('HP');
    await myaccountpage.searchButton();

    //printing searched product and verifying assertion
    console.log(await productsearchpage.searchtext.textContent());
    await expect( productsearchpage.searchtext).toContainText(/search/i);
   
    await productsearchpage.addToCartButton();
    await productdetailpage.addCartButton();

    //printing success msg for product added in itemcart and printing total items
    console.log(await productdetailpage.successmsg.textContent());
    console.log('total items', await productdetailpage.totalitems.textContent());
    await productdetailpage.itemCartButton();



});