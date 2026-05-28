import "../hooks/testHooks";
import { test, expect } from "../custom-fixtures/baseTest";

test.only('TC_001 Verify end to end order completion',{tag:['@regression', '@smoke']}, 
    async ({page,launchPage,loginPage,myaccountpage,productsearchpage,productdetailpage, ordersuccesspage }) => {

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
    await productdetailpage.checkOutClick();
    await productdetailpage.bilingDeatailContinueButton();
    await productdetailpage.deliveryDetailContinueButton();
    await productdetailpage.deliveryMethodContinueButton();
    await productdetailpage.termsConditionChecked();
    await productdetailpage.paymentDoneContinueButton();
    await productdetailpage.orderConfirmContinueButton();

    //assertion
    await   ordersuccesspage.orderPlacedSuccssMsg();
    

    



});