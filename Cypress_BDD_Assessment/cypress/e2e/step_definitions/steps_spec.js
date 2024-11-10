import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import createAccountPage from '../pages/createAccountPage';
import loginPage from '../pages/loginPage';  // Import the login page model
import AccountPage from '../pages/accountPage';

const generateRandomEmail = () => {
    const timestamp = Date.now(); // You can use timestamp or any other random method
    return `user${timestamp}@example.com`;
  };

  const tempEmail = generateRandomEmail();

// Step 1: Navigate to the "Create New Customer Account" page
Given('I navigate to the "Create New Customer Account" page', () => {
  createAccountPage.visit();
  
});

// Given I enter the first name "<firstname>"
Given('I enter the first name {string}', (firstname) => {
    createAccountPage.enterFirstName(firstname)
  });
  
  // Given I enter the last name "<lastname>"
  Given('I enter the last name {string}', (lastname) => {
    createAccountPage.enterLastName(lastname);
  });
  
  // Given I enter the email address "<email>"
  Given('I enter the email address {string}', (email) => {
    
    createAccountPage.enterEmail(tempEmail);  // Generate random email
  });
  
  // Given I enter the password "<password>"
  Given('I enter the password {string}', (password) => {
    createAccountPage.enterPassword(password);
  });
  
  // Given I confirm the password "<password>"
  Given('I confirm the password {string}', (password) => {
    createAccountPage.enterPasswordConfirmation(password);
  });
  
  // When I submit the registration form
  When('I submit the registration form', () => {
    createAccountPage.submitForm();
  });
  
  // Then I should see a success message indicating account creation
  Then('I should see a success message indicating account creation', () => {
    createAccountPage.validateAccountCreationSuccess('Thank you for registering with Main Website Store.');
  });

  Then('I sign out from Page', () => {
    AccountPage.clickChangeButton();
    AccountPage.clickSignOut();

  });


// Step 2: Submit the form with all fields empty
When('I submit the form with all fields empty', () => {
  createAccountPage.submitForm();
});

When('I submit the form', () => {
    createAccountPage.submitForm();
  });

Then('I should see the "Thank you for registering with Main Website Store" message', () => {
    // Validate the success message on the account page
    AccountPage.validateSuccessMessage('Thank you for registering with Main Website Store.');
});




// Step 3: Validate the error messages for required fields
Then('I should see error messages for all required fields:', (dataTable) => {
  const errorMessages = dataTable.hashes(); // Get the error messages from the table
  
  errorMessages.forEach((error) => {
    switch (error['Field Name']) {
      case 'First Name':
        createAccountPage.validateFirstNameError(error['Expected Error Message']);
        break;
      case 'Last Name':
        createAccountPage.validateLastNameError(error['Expected Error Message']);
        break;
      case 'Email Address':
        createAccountPage.validateEmailError(error['Expected Error Message']);
        break;
      case 'Password':
        createAccountPage.validatePasswordError(error['Expected Error Message']);
        break;
      case 'Confirm Password':
        createAccountPage.validatePasswordConfirmationError(error['Expected Error Message']);
        break;
    }
  });
});

// Step 4: Submit the form with invalid email
When('I enter the following details:', (dataTable) => {
  const data = dataTable.hashes()[0]; // Get the first row of the data table
  createAccountPage.enterFirstName(data.firstName);
  createAccountPage.enterLastName(data.lastName);
  createAccountPage.enterEmail(data.email);
  createAccountPage.enterPassword(data.password);
  createAccountPage.enterPasswordConfirmation(data.confirmPassword);
});

// Step 5: Submit the form and check for email validation error
Then('I should see an error message for the email field:', (dataTable) => {
  const error = dataTable.hashes()[0];
  createAccountPage.validateEmailError(error['Expected Error Message']);
});

// Step 6: Check for password confirmation mismatch
Then('I should see an error message for password confirmation:', (dataTable) => {
  const error = dataTable.hashes()[0];
  createAccountPage.validatePasswordConfirmationError(error['Expected Error Message']);
});

// Step 7: Check for password length validation
Then('I should see an error message for the password field:', (dataTable) => {
  const error = dataTable.hashes()[0];
  createAccountPage.validatePasswordError(error['Expected Error Message']);
});


Given('I navigate to the "Sign In" page', () => {
    // Navigate to the login page after registration
    loginPage.clickSignIn();
});

Given('I navigate to the "Log In" page', () => {
  // Navigate to the login page after registration
  cy.visit("https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS9jdXN0b21lci9hY2NvdW50L2NyZWF0ZS8%2C/")
});



When("I enter the login credentials {string} and {string}", (email,password) => {
    
    loginPage.enterEmail(tempEmail);
    loginPage.enterPassword(password);
    loginPage.submitLoginForm();
});

Then('I should be logged in successfully', () => {
    cy.url().should('include', '/customer/account');
});

When('I submit the login form with an empty {string}', (fieldName) => {
  switch (fieldName) {
    case 'Email Address and Password':
      loginPage.enterEmail(' ');
      loginPage.enterPassword(' ');  // You can use a valid password for testing
      break;
    // case 'Password':
    //   loginPage.enterEmail('john.doe@example.com');  // You can use a valid email for testing
    //   loginPage.enterPassword(' ');
    //   break;
    default:
      throw new Error(`Field name ${fieldName} is not recognized.`);
  }
  loginPage.submitLoginForm();
});

// Step for checking the error message for required fields
Then('I should see the error message {string}', (expectedErrorMessage) => {
  loginPage.checkEmailError(expectedErrorMessage);
  loginPage.checkPasswordError(expectedErrorMessage);
});

// Step for submitting the login form with an invalid email
When('I submit the login form with an invalid email {string}', (email) => {
  loginPage.enterEmail(email);
  loginPage.enterPassword('Password1');  // Use a valid password here for testing
  loginPage.submitLoginForm();
});

// Step for checking the email error message when it's invalid
Then('I should see the email error message {string}', (expectedErrorMessage) => {
  loginPage.checkEmailError(expectedErrorMessage);
});

// Step for submitting the login form with invalid credentials
When('I submit the login form with invalid credentials', () => {
  loginPage.enterEmail('invalid.email@example.com');
  loginPage.enterPassword('InvalidPassword');
  loginPage.submitLoginForm();
});

Then('I should see the general error message {string}', (expectedErrorMessage) => {
  loginPage.checkGeneralErrorMessage(expectedErrorMessage);
});