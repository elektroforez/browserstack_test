class HomePage {
  get loginTabButton() {
    return $("~Login");
  }

  async goToLogin() {
    await this.loginTabButton.click();
  }
}
module.exports = new HomePage();
