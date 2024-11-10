// cypress/support/pages/AccountPage.js

class AccountPage {
    // Locators for elements in the "Contact Information" section
    get successMessage() {
        return cy.get('.message-success');  // Locate the div with the success message
    }
    get contactInformationSection() { return cy.get('.box.box-information'); }
    get nameField() { return cy.get('.box-content p').first(); } // Assuming name is the first element in <p>
    get emailField() { return cy.get('.box-content p').eq(1); }  // Assuming email is the second element in <p>
    get changeButton() { return cy.get('button[data-action="customer-menu-toggle"]'); }
    get signOutLink() {
        return cy.get('a[href="https://magento.softwaretestingboard.com/customer/account/logout/"]'); 
        // Or use the data-label option: 
        // return cy.get('li[data-label="or"] a').contains('Sign Out');
    }
    
    // Method to visit the account page after successful login or registration
    visit() {
        cy.visit('https://magento.softwaretestingboard.com/customer/account/');
    }

    // Method to validate the user's name
    validateName(expectedName) {
        this.nameField.should('be.visible').and('contain', expectedName);
    }

    // Method to validate the user's email address
    validateEmail(expectedEmail) {
        this.emailField.should('be.visible').and('contain', expectedEmail);
    }

    // Optional: Validate both name and email together
    validateNameAndEmail(expectedName, expectedEmail) {
        this.validateName(expectedName);
        this.validateEmail(expectedEmail);
    }

    validateSuccessMessage(expectedMessage) {
        this.successMessage.should('be.visible').and('contain', expectedMessage);
    }
   clickChangeButton() {
    this.changeButton.should('be.visible')
    this.changeButton.click();  // Click the button to toggle the customer menu
}

clickSignOut() {
    this.signOutLink.should('be.visible').click();  // Click on the Sign Out link
}
}

export default new AccountPage();
