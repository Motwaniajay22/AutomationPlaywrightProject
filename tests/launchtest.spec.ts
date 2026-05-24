import "../hooks/testHooks";
import { test, expect } from "../custom-fixtures/PageFixtures"

test("Verify myaccount drop-down options", async ({ launchPage }) => {
    await launchPage.clickDropDown();
    const options = await launchPage.dropDownOptions();
    console.log(options);
    await expect(options).toHaveText(['Register', 'Login']);
});

