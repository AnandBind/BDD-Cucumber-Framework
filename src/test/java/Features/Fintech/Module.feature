Feature: Check Beneficiaries Functionality

  Background: Check login Functionality with valid Credential
    Given User Launch the site URL
    When The user enters valid user Email and Password
    And Click on login button
    Then User navigate on dashboard


  @smoke @regrassion
  Scenario: Verify Different Modules Of Leftside Pannel
    When User is on Dashboard Page
    Then User Should See Different Left Pannel Modules:
      | Dashboard           |
      | Transfer            |
      | Beneficiaries       |
      | Transaction History |
      | Maker Request       |
      | Sokin Pay           |
      | Direct Debit        |
      | Partner Portal      |

 