class LoginPage {
   
    // Locators for the form fields
    get emailField() { return cy.get('#email'); }
    get passwordField() { return cy.get('#pass'); }
    get loginButton() { return cy.get('button[type="submit"].action.login.primary'); }

    // Locators for the error messages
    get emailError() { return cy.get('#email-error'); }
    get passwordError() { return cy.get('#pass-error'); }
    get generalErrorMessage() { return cy.get('div[data-bind*="html: $parent.prepareMessageForHtml"]'); }
  
    // Method to click Sign In button
    clickSignIn() {
        this.loginButton.click();
    }

    // Method to enter the email
    enterEmail(email) {
        this.emailField.clear().type(email);
    }

    // Method to enter the password
    enterPassword(password) {
        this.passwordField.clear().type(password);
    }

    // Method to submit the login form
    submitLoginForm() {
        this.loginButton.click();
    }

    // Method to check if the email error message appears
    checkEmailError(message) {
        this.emailError.should('be.visible').and('contain', message);
    }

    // Method to check if the password error message appears
    checkPasswordError(message) {
        this.passwordError.should('be.visible').and('contain', message);
    }

    // Method to check if the general error message appears
    checkGeneralErrorMessage(message) {
        this.generalErrorMessage.should('be.visible').and('contain', message);
    }

    // Method to visit the login page
    visit() {
        cy.visit('https://magento.softwaretestingboard.com/customer/account/login/');
    }
}

export default new LoginPage();
