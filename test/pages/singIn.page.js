class SingInPage {
  get emailInput() {
    return $("~input-email");
  }

  get passwordInput() {
    return $("~input-password");
  }

  get repeatPasswordInput() {
    return $("~input-repeat-password");
  }

  get singInButton() {
    return $("~button-SIGN UP");
  }

  get closePopupButton() {
    return $('//android.widget.Button[@resource-id="android:id/button1"]');
  }

  get loginTabButton() {
    return $("~button-login-container");
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

  get repeatPasswordError() {
    return $(
      '//android.widget.TextView[@text="Please enter the same password"]'
    );
  }

  get alert() {
    return $('//android.widget.TextView[@resource-id="android:id/alertTitle"]');
  }

  async enterEmail(email) {
    await this.emailInput.setValue(email);
  }

  async enterPassword(password) {
    await this.passwordInput.setValue(password);
  }

  async enterRepeatPassword(repeatPassword) {
    await this.repeatPasswordInput.setValue(repeatPassword);
  }

  async tapSingInButton() {
    await this.singInButton.click();
  }

  async tapLoginButton() {
    await this.loginTabButton.click();
  }

  async closePopup() {
    await this.closePopupButton.click();
  }

  async singUp(email, password, repeatPassword) {
    await this.enterEmail(email);
    await this.enterPassword(password);
    await this.enterRepeatPassword(repeatPassword);
    await driver.hideKeyboard();
    await this.tapSingInButton();
  }
}
module.exports = new SingInPage();
