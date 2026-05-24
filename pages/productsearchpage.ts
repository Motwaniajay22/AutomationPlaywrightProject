import{Locator, Page, } from"@playwright/test"
export class ProductSearchPage{
    
    readonly page:Page;
    readonly searchtext : Locator;
    readonly addcart:Locator;


    constructor(page : Page){
        this.page = page;
        this.searchtext = page.locator("#content h1");   // page.getByRole('heading', { level: 1 })
        this.addcart = page.getByText("Add to Cart");
    }

    async addToCartButton(){
        await this.addcart.click();
    }
}
