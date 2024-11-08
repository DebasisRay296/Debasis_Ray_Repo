Feature: Sending an email via Gmail

  # Scenario 1: Positive Test Case - Sending an email with valid subject and body
  Scenario: User sends an email with valid details
    Given the user is logged into Gmail
    When the user clicks on the "Compose" button
    And enters "Incubyte" in the "Subject" field
    And enters "QA test for Incubyte" in the "Body" field
    And clicks the "Send" button
    Then the email should be sent successfully
    And a confirmation message "Message sent" should appear

  # Scenario 2: Negative Test Case - Subject Field is Empty
  Scenario: User attempts to send an email without a subject
    Given the user is logged into Gmail
    When the user clicks on the "Compose" button
    And leaves the "Subject" field empty
    And enters "QA test for Incubyte" in the "Body" field
    And clicks the "Send" button
    Then the system should display a warning message "Subject is required"
    And the email should not be sent

  # Scenario 3: Negative Test Case - Body Field is Empty
  Scenario: User attempts to send an email without a body
    Given the user is logged into Gmail
    When the user clicks on the "Compose" button
    And enters "Incubyte" in the "Subject" field
    And leaves the "Body" field empty
    And clicks the "Send" button
    Then the system should display a warning message "Body is required"
    And the email should not be sent

  # Scenario 4: Negative Test Case - Missing Recipient
  Scenario: User attempts to send an email with an empty recipient field
    Given the user is logged into Gmail
    When the user clicks on the "Compose" button
    And leaves the "Recipient" field empty
    And enters "Incubyte" in the "Subject" field
    And enters "QA test for Incubyte" in the "Body" field
    And clicks the "Send" button
    Then the system should display a warning message "Recipient is required"
    And the email should not be sent
