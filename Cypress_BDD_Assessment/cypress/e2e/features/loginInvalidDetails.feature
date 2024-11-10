Feature: Negative Test Cases for Login

  As a user
  I want to handle errors when I provide incorrect or empty login details
  So that I can be informed of the errors and correct them

  Background:
  Given I navigate to the "Create New Customer Account" page
  Given I navigate to the "Log In" page

  # Scenario 1: Empty Fields Validation
  Scenario Outline: Verify the error message when a field is left empty
    When I submit the login form with an empty "<Field Name>"
    Then I should see the error message "<Expected Error Message>"

    Examples:
      | Field Name      | Expected Error Message                               |
      | Email Address and Password   | This is a required field.               |
      
      
#   Scenario 2: Invalid Email Format
  Scenario Outline: Verify the error message for invalid email format
    When I submit the login form with an invalid email "<Email Address>"
    Then I should see the email error message "Please enter a valid email address (Ex: johndoe@domain.com)."

    Examples:
      | Email Address                  |
      | invalid_email.com              |
      | @missingusername.com           |
      | example@domain                 |

  # Scenario 3: Incorrect Login Credentials (Invalid email or password)
  Scenario: Verify the error message when the login credentials are incorrect
    When I submit the login form with invalid credentials
    Then I should see the general error message "The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later."
