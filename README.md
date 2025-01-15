# BDD-Cucumber-Framework

## Overview
This repository contains a **Behavior-Driven Development (BDD)** test automation framework built using **Cucumber**, **Selenium WebDriver**, **JUnit**, and **Java**. The framework is designed to automate testing for web applications, with a focus on **user behavior scenarios** and easy-to-understand step definitions.

## Key Features:
- **BDD approach** with Gherkin syntax for writing clear, understandable tests
- **Selenium WebDriver** for automating web browser interactions
- **JUnit** for managing test execution
- Supports **parallel execution** and **cross-browser testing**
- Integration with **Maven** for dependency management and test execution

## Project Structure:
- **src/main/java**: Contains core classes for Selenium WebDriver configuration, browser management, and utilities.
- **src/test/resources**: Contains **.feature** files written in Gherkin format.
- **src/test/java**: Contains step definitions for Cucumber tests and supporting methods.
- **pom.xml**: Maven file with dependencies for Selenium, Cucumber, JUnit, and other required libraries.

## Getting Started:
1. Clone this repository:  
   `git clone https://github.com/yourusername/bdd-cucumber-framework.git`
2. Install dependencies using Maven:
   `mvn install`
3. Run tests with the following command:
   `mvn test`

## Example Feature:
```gherkin
Feature: Login functionality

  Scenario: Valid user login
    Given the user is on the login page
    When the user enters valid credentials
    Then the user should be redirected to the dashboard

