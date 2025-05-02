const loginPage = require("../pages/login.page.js");
const homePage = require("../pages/home.page.js");
const SingInPage = require("../pages/singIn.page.js");
const singInPage = require("../pages/singIn.page.js");
const inputData = require("../features/testdata.js");
const { expect } = require("@wdio/globals");
const { faker } = require("@faker-js/faker");

describe("Login", () => {
  before(async () => {
    await homePage.goToLogin();
    await browser.pause(3000);
  });
  it("should show error message on login with invalid data | TC-MA-1", async () => {
    await loginPage.login(inputData.fakeData.invalidEmail, inputData.fakeData.invalidPassword);
    await browser.pause(3000);
    await expect(loginPage.emailError).toBeDisplayed();
    await expect(loginPage.passwordError).toBeDisplayed();
    await browser.pause(3000);
  });
  it("should show error message on singin up with invalid email | TC-MA-2", async () => {
    await loginPage.tapSingUpTab();
    await browser.pause(3000);
    await singInPage.singUp(
      inputData.fakeData.invalidEmail,
      inputData.fakeData.invalidPassword,
      inputData.fakeData.invalidPassword
    );
    await browser.pause(3000);
    await expect(singInPage.emailError).toBeDisplayed();
    await expect(singInPage.passwordError).toBeDisplayed();
  });
  it("should show error message on singin up with different passwords | TC-MA-3", async () => {
    await loginPage.tapSingUpTab();
    await browser.pause(3000);
    await singInPage.singUp(
      inputData.fakeData.invalidEmail,
      inputData.fakeData.password,
      inputData.fakeData.invalidPassword
    );
    await browser.pause(3000);
    await expect(singInPage.repeatPasswordError).toBeDisplayed();
  });
  it("should show success message on singin up with valid data | TC-MA-4", async () => {
    await singInPage.singUp(
      inputData.fakeData.email,
      inputData.fakeData.password,
      inputData.fakeData.password
    );
    await browser.pause(9000);
    expect(singInPage.alert).toHaveText("Signed Up!");
  });
  it("should show success message on login with valid data | TC-MA-5", async () => {
    await singInPage.closePopup();
    await singInPage.tapLoginButton();
    await browser.pause(3000);
    await loginPage.login(inputData.fakeData.email, inputData.fakeData.password);
    await browser.pause(3000);
    await expect(singInPage.alert).toHaveText("Success");
  });
});
