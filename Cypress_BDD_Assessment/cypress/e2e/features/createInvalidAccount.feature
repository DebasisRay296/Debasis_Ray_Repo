Feature: Create Account - Negative Test Cases

  # Scenario 1: Submit the form with empty fields
  Scenario: Submit the form with empty fields
    Given I navigate to the "Create New Customer Account" page
    When I submit the form with all fields empty
    Then I should see error messages for all required fields:
      | Field Name      | Expected Error Message                                |
      | First Name      | This is a required field.                            |
      | Last Name       | This is a required field.                            |
      | Email Address   | This is a required field.                            |
      | Password        | This is a required field.                            |
      | Confirm Password| This is a required field.                            |

  # Scenario 2: Submit the form with invalid email format using Data Table
  Scenario: Submit the form with invalid email format
    Given I navigate to the "Create New Customer Account" page
    When I enter the following details:
      | firstName | lastName | email           | password  | confirmPassword |
      | John      | Doe      | invalid-email   | Password1 | Password1       |
    And I submit the form
    Then I should see an error message for the email field:
      | Field Name   | Expected Error Message                                       |
      | Email Address| Please enter a valid email address (Ex: johndoe@domain.com). |

  # Scenario 3: Submit the form with passwords not matching using Data Table
  Scenario: Submit the form with passwords not matching
    Given I navigate to the "Create New Customer Account" page
    When I enter the following details:
      | firstName | lastName | email                     | password  | confirmPassword |
      | John      | Doe      | john.doe@example.com       | Password1 | Password2       |
    And I submit the form
    Then I should see an error message for password confirmation:
      | Field Name       | Expected Error Message                              |
      | Confirm Password | Please enter the same value again.                  |

  # Scenario 4: Submit the form with a password too short using Data Table
  Scenario: Submit the form with a password too short
    Given I navigate to the "Create New Customer Account" page
    When I enter the following details:
      | firstName | lastName | email                     | password  | confirmPassword |
      | John      | Doe      | john.doe@example.com       | Pwd1      | Pwd1            |
    And I submit the form
    Then I should see an error message for the password field:
      | Field Name | Expected Error Message                                       |
      | Password   | Minimum length of this field must be equal or greater than 8 symbols. Leading and trailing spaces will be ignored. |

