# Selenium Java BDD Automation Framework

## 🚀 Getting Started

### Prerequisites

A comprehensive test automation framework using Selenium WebDriver with Java and Cucumber (BDD), supporting UI and API testing with a clean, maintainable structure.

Environment configuration: logical environments (develop, uat, prod) are defined under src/test/java/config/environments/; secrets stay in environment variables (config/Secrets.java); getResolvedEnvConfig() merges typed defaults with optional .env / CI overrides; tests receive envConfig via shared test context (context/TestContext.java), which step definitions and hooks use.

## 📋 Table of Contents

- Getting Started  
- Project Structure  
- Environment Configuration  
- Folder Purpose & Rules  
- Naming Conventions  
- Best Practices  
- Examples  
- Running Tests  
- CI/CD Integration  

---

## 🚀 Getting Started

### Prerequisites

- Java 11+ (17 recommended)  
- Maven or Gradle  
- Chrome / Firefox  
- IDE (IntelliJ recommended)  

---

### Installation

Clone the repository (if applicable)

Install dependencies:

```bash
mvn clean install
WebDriver Setup

Selenium 4 includes Selenium Manager, so no manual driver setup is required.

Note: For remote execution (Grid/Docker), configure driver in DriverFactory.java.

Environment variables and .env files

Selecting the environment:
Set TEST_ENV or ENVIRONMENT to develop, uat, or prod (TEST_ENV wins if both are set). Defaults to uat.

Local dotenv:
When not in CI, framework loads env/.env.<name> where <name> is lowercased
(e.g. env/.env.uat, env/.env.develop, env/.env.prod).

Defaults vs overrides:
URLs and non-secret defaults live in config/environments/*.java.
Optional variables in .env override them — e.g. BASE_URL, API_BASE_URL, LOGIN_VALID_USERNAME.

Secrets:
Passwords, API keys, tokens must not be committed.
Use .env locally and CI secrets. Access via getSecrets().

Verify installation
mvn test -Dcucumber.options="--dry-run"
---

# 🏗️ Architecture Overview

The framework follows a **layered architecture**:

```text
Test Layer (TestNG / Cucumber)
        ↓
Service Layer (Business Logic)
        ↓
Page Object Layer (UI Interaction)
        ↓
Core Layer (Driver, Config, Utilities)
```

---

# 📁 Project Structure

```text
project-root/
├── src/
│   ├── main/java/
│   │   ├── base/                  # BaseTest, DriverFactory
│   │   ├── pages/                 # Page Objects
│   │   ├── services/              # Business logic layer
│   │   ├── utils/                 # Reusable utilities
│   │   ├── config/                # Config readers
│   │
│   ├── test/java/
│   │   ├── tests/                 # Test classes (TestNG)
│   │   ├── stepdefinitions/       # (BDD) Step definitions
│   │   ├── runners/               # Test runners
│   │
│   ├── resources/
│   │   ├── config.properties      # Environment config
│   │   ├── testdata/              # External test data
│   │   ├── features/              # Cucumber feature files
│
├── drivers/                       # Driver binaries (optional if using WebDriverManager)
├── reports/                       # Execution reports
├── logs/                          # Logging output
├── screenshots/                   # Failure evidence
│
├── pom.xml
├── testng.xml
└── README.md
```

---

# 🧱 Design Patterns Used

## ✅ Page Object Model (POM)

* Encapsulates locators and UI actions
* Promotes reusability

## ✅ Factory Pattern (DriverFactory)

* Centralized driver creation
* Supports cross-browser execution

## ✅ Singleton Pattern (Driver Management)

* Ensures single driver instance per thread

## ✅ Builder Pattern (Test Data)

* Flexible test data creation

## ✅ Dependency Injection (Optional)

* Cleaner object management (via PicoContainer / Spring)

---

# 🔄 Execution Flow

### TestNG Flow

```text
Test Class → BaseTest → DriverFactory → Page Objects → Assertions
```

### BDD Flow (Optional)

```text
Feature File → Step Definitions → Services → Page Objects → Driver
```

---

# ⚙️ Configuration Strategy

## 🔹 Config Management

* Centralized in `config.properties`
* Environment-based execution supported

```properties
browser=chrome
baseUrl=https://test-env.com
timeout=10
environment=uat
```

## 🔹 Best Practices

* No hardcoding values
* Use environment variables for secrets
* Support multiple environments

---

# 🧪 Test Design Principles

## ✅ 1. Separation of Concerns

* Tests = validation
* Pages = UI interaction
* Services = business logic

---

## ✅ 2. AAA Pattern

* Arrange → Act → Assert

---

## ✅ 3. Independent Tests

* No shared state
* Parallel-safe execution

---

## ✅ 4. Data-Driven Testing

* Externalize test data
* Use JSON / Excel / DB

---

# 🚀 Advanced Features

## 🔹 Parallel Execution

* Enabled via TestNG
* Thread-safe driver using ThreadLocal

## 🔹 Retry Mechanism

* Automatic retry for flaky tests

## 🔹 Screenshot on Failure

* Captured via TestNG listeners

## 🔹 Logging

* Integrated with Log4j

## 🔹 Reporting

* Extent Reports / Allure

## 🔹 Cross-Browser Testing

* Chrome, Firefox, Edge

## 🔹 Headless Execution

* CI-friendly execution

---

# 🧪 Running Tests

## Run all tests

```bash
mvn clean test
```

## Run specific suite

```bash
mvn test -DsuiteXmlFile=testng.xml
```

## Run by environment

```bash
mvn test -Denvironment=uat
```

## Run BDD tests

```bash
mvn test -Dcucumber.filter.tags="@smoke"
```

---

# 🔄 CI/CD Integration

Supports:

* Jenkins
* GitHub Actions
* Azure DevOps

## Pipeline Flow

1. Checkout code
2. Install dependencies
3. Run tests
4. Generate reports
5. Publish artifacts

---

# ✍️ Best Practices

## 🔹 Code Quality

* Follow clean code principles
* Use meaningful method names

## 🔹 Wait Strategy

* Explicit waits only
* No Thread.sleep()

## 🔹 Locators

* Prefer stable locators (id, name, data-testid)
* Avoid brittle XPath

## 🔹 Test Stability

* Avoid flaky tests
* Use retry only as fallback

---

# ⚠️ Common Pitfalls

❌ Hardcoding values
❌ Tight coupling between tests and UI
❌ Overusing BDD for all tests
❌ Poor locator strategy
❌ Ignoring parallel execution issues

---

# 🎯 When to Use BDD (Cucumber)

Use BDD only when:

✅ Collaboration with business stakeholders
✅ Requirement traceability

Avoid BDD when:

❌ Pure technical automation
❌ Complex logic-heavy scenarios

---

# 🧠 Key Design Decisions

* **POM + Service Layer** → Better scalability
* **ThreadLocal Driver** → Safe parallel execution
* **Config-driven framework** → Easy environment switching
* **Optional BDD layer** → Flexibility

---

# 🏁 Conclusion

This framework is designed to:

* Scale with growing applications
* Reduce maintenance effort
* Provide reliable test results
* Integrate seamlessly with CI/CD

---

# 🤝 Contributing

1. Follow framework structure
2. Write clean, reusable code
3. Keep tests independent
4. Add proper logging and reporting

---

# 🚀 Final Thought

> A good automation framework is not about tools —
> it's about design, maintainability, and reliability.

---

**Happy Testing 🔥**
