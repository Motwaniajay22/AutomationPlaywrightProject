import "../hooks/testHooks";
import { test, expect } from "../custom-fixtures/baseTest"

test("TC_001 Verify myaccount drop-down options",{tag:['@regression']}, async ({ launchPage }) => {
    await launchPage.clickDropDown();
    const options = await (await launchPage.dropDownOptions()).allInnerTexts();
    console.log(options);
    expect(options).toEqual(expect.arrayContaining(["Register", "Login"]));
});



