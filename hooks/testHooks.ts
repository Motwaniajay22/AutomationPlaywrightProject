import { test } from "../custom-fixtures/baseTest"

//Before each test
test.beforeEach(async ({ launchPage }, testInfo) => {
    //open application
    await launchPage.openSite();
    console.log("Test execution started for ", testInfo.title);
})

//After each test
test.afterEach(async ({ page }, testInfo) => {

    console.log("Test execution finished for ", testInfo.title);
    console.log(`Test Status: ${testInfo.status}`);

    //Capture screenshot
    if (testInfo.status !== testInfo.expectedStatus) {
        const screenshot = await page.screenshot({
            fullPage: true
        });

        await testInfo.attach("Failure Screenshot", {
            body: screenshot,
            path: `test-results/${testInfo.title}.png`,
            contentType: "image/png"
        });

        console.log("Screenshot attached to Allure report");
    }

});



