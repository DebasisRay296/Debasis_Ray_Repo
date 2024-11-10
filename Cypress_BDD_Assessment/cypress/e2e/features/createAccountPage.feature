Feature: Create New Customer Account

  As a user
  I want to create a new customer account
  So that I can access the features of the website

  Background:
    Given I navigate to the "Create New Customer Account" page

  Scenario Outline: Successfully creating a new customer account with a random email
    Given I navigate to the "Create New Customer Account" page
    And I enter the first name "<firstname>"
    And I enter the last name "<lastname>"
    And I enter the email address "<email>"
    And I enter the password "<password>"
    And I confirm the password "<password>"
    Given I submit the registration form
    Then I should see the "Thank you for registering with Main Website Store" message
    # Then I sign out from Page

    Examples:
      | firstname | lastname | email                       | password  |
      | John      | Doe      | john.doe<random_number>@example.com | Password1 |
      # | Alice     | Smith    | alice.smith<random_number>@example.com | Password2 |
    #   | Bob       | Johnson  | bob.johnson<random_number>@example.com | Password3 |

    # After registration, the user should be able to log in using the same credentials
    Scenario Outline: Login customer account with a created email
    When I navigate to the "Log In" page
    And I enter the login credentials "<email>" and "<password>"
    Then I should be logged in successfully
    Examples:
      | email                                 | password  |
      | john.doe<random_number>@example.com    | Password1 |
      # | alice.smith<random_number>@example.com | Password2 |
      # | bob.johnson<random_number>@example.com | Password3 |

    