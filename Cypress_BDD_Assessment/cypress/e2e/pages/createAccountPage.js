class CreateAccountPage {
    // Locators for the form fields
    get firstNameField() { return cy.get('#firstname'); }
    get lastNameField() { return cy.get('#lastname'); }
    get emailField() { return cy.get('#email_address'); }
    get passwordField() { return cy.get('#password'); }
    get passwordConfirmationField() { return cy.get('#password-confirmation'); }

    // Locators for error messages
    get firstNameError() { return cy.get('#firstname-error'); }
    get lastNameError() { return cy.get('#lastname-error'); }
    get emailError() { return cy.get('#email_address-error'); }
    get passwordError() { return cy.get('#password-error'); }
    get passwordConfirmationError() { return cy.get('#password-confirmation-error'); }

    // Other form-related elements
    get submitButton() { return cy.get('.action.submit.primary'); }
    get backButton() { return cy.get('.action.back'); }

    get successMessageField(){return cy.get('.message-success');}

    // Method to visit the page
    visit() {
        cy.visit('https://magento.softwaretestingboard.com/customer/account/create/');
    }

    // Methods to interact with the form fields
    enterFirstName(firstName) {
        this.firstNameField.clear().type(firstName);
    }

    enterLastName(lastName) {
        this.lastNameField.clear().type(lastName);
    }

    enterEmail(email) {
        this.emailField.clear().type(email);
    }

    enterPassword(password) {
        this.passwordField.clear().type(password);
    }

    enterPasswordConfirmation(password) {
        this.passwordConfirmationField.clear().type(password);
    }

    submitForm() {
        this.submitButton.click();
    }

    goBack() {
        this.backButton.click();
    }

    // Error validation methods
    validateFirstNameError(expectedError) {
        this.firstNameError.should('be.visible').and('contain', expectedError);
    }

    validateLastNameError(expectedError) {
        this.lastNameError.should('be.visible').and('contain', expectedError);
    }

    validateEmailError(expectedError) {
        this.emailError.should('be.visible').and('contain', expectedError);
    }

    validatePasswordError(expectedError) {
        this.passwordError.should('be.visible').and('contain', expectedError);
    }

    validatePasswordConfirmationError(expectedError) {
        this.passwordConfirmationError.should('be.visible').and('contain', expectedError);
    }

    // Optional: Validate if all error messages are visible
    validateAllErrorMessages() {
        this.firstNameError.should('be.visible');
        this.lastNameError.should('be.visible');
        this.emailError.should('be.visible');
        this.passwordError.should('be.visible');
        this.passwordConfirmationError.should('be.visible');
    }

    // Optional: Validate form submission success (if any success message appears)
    validateAccountCreationSuccess(successMessage) {
        cy.get('.message-success').should('be.visible').and('contain', successMessage);
    }

  
}

export default new CreateAccountPage();
