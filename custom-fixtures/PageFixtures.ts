import { test as base } from "@playwright/test"
import { LaunchPage } from "../pages/launchpage"
import { LoginPage } from "../pages/loginpage"
import { MyAccountPage } from "../pages/myaccountpage"
import { ProductSearchPage } from "../pages/productsearchpage"
import { ProductDetailPage } from "../pages/productdetailpage"

type PageFixtures = {
    launchPage: LaunchPage;
    loginPage: LoginPage;
    myaccountpage: MyAccountPage;
    productsearchpage: ProductSearchPage;
    productdetailpage: ProductDetailPage;
};
export const test = base.extend<PageFixtures>({
    launchPage: async ({ page }, use) => {
        const launchPage = new LaunchPage(page);
        await launchPage.openSite();
        await use(launchPage);
    },
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },
    myaccountpage: async ({ page }, use) => {
        await use(new MyAccountPage(page));
    },
    productsearchpage: async ({ page }, use) => {
        await use(new ProductSearchPage(page));
    },
    productdetailpage: async ({ page }, use) => {
        await use(new ProductDetailPage(page));
    }
});
export { expect } from "@playwright/test"


