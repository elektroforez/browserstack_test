const loginPage = require("../pages/login.page.js");
const homePage = require("../pages/home.page.js");
const SingInPage = require("../pages/singIn.page.js");
const { expect } = require("@wdio/globals");
import { faker } from "@faker-js/faker";
import singInPage from "../pages/singIn.page.js";

var inputData = {
  email: faker.internet.email(),
  password: faker.internet.password(),
  invalidEmail: faker.lorem.word(),
  invalidPassword: "1234",
};

describe("Login", () => {
  before(async () => {
    await homePage.goToLogin();
    await browser.pause(3000);
  });
  it("should show error message on login with invalid data", async () => {
    await loginPage.login(inputData.invalidEmail, inputData.invalidPassword);
    await browser.pause(3000);
    await expect(loginPage.emailError).toBeDisplayed();
    await expect(loginPage.passwordError).toBeDisplayed();
    await browser.pause(3000);
  });
  it("should show error message on singin up with invalid email", async () => {
    await loginPage.tapSingUpTab();
    await browser.pause(3000);
    await singInPage.singUp(
      inputData.invalidEmail,
      inputData.invalidPassword,
      inputData.invalidPassword
    );
    await browser.pause(3000);
    await expect(singInPage.emailError).toBeDisplayed();
    await expect(singInPage.passwordError).toBeDisplayed();
  });
  it("should show error message on singin up with different passwords", async () => {
    await loginPage.tapSingUpTab();
    await browser.pause(3000);
    await singInPage.singUp(
      inputData.invalidEmail,
      inputData.password,
      inputData.invalidPassword
    );
    await browser.pause(3000);
    await expect(singInPage.repeatPasswordError).toBeDisplayed();
  });
  it("should show success message on singin up with valid data", async () => {
    await singInPage.singUp(
      inputData.email,
      inputData.password,
      inputData.password
    );
    await browser.pause(9000);
    expect(singInPage.alert).toHaveText("Signed Up!");
  });
  it("should show success message on login with valid data", async () => {
    await singInPage.closePopup();
    await singInPage.tapLoginButton();
    await browser.pause(3000);
    await loginPage.login(inputData.email, inputData.password);
    await browser.pause(3000);
    await expect(singInPage.alert).toHaveText("Success");
  });
});
