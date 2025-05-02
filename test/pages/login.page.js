class LoginPage {
  get emailInput() {
    return $("~input-email");
  }

  get passwordInput() {
    return $("~input-password");
  }

  get loginButton() {
    return $("~button-LOGIN");
  }

  get singUpTabButton() {
    return $("~button-sign-up-container");
  }

  get emailError() {
    return $(
      "//android.widget.TextView[@text='Please enter a valid email address']"
    );
  }

  get passwordError() {
    return $(
      "//android.widget.TextView[@text='Please enter at least 8 characters']"
    );
  }

  async enterEmail(email) {
    await this.emailInput.setValue(email);
  }

  async enterPassword(password) {
    await this.passwordInput.setValue(password);
  }

  async tapLoginButton() {
    await this.loginButton.click();
  }

  async tapSingUpTab() {
    await this.singUpTabButton.click();
  }

  async login(email, password) {
    await this.enterEmail(email);
    await this.enterPassword(password);
    await driver.hideKeyboard();
    await this.tapLoginButton();
  }
}
module.exports = new LoginPage();
