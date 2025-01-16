
Feature: Check the login functionality

  @new1 
  Scenario: Check login Functionality with valid Credential
    Given User Launch the site URL
    When The user enters valid user Email and Password
    And Click on login button
    Then User navigate on dashboard
  
  