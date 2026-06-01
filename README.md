# SauceDemo Login - UI Test Automation

End-to-end UI test automation for the [SauceDemo](https://www.saucedemo.com/) login flow, built with **Playwright** and **TypeScript** following the **Page Object Model** pattern.

This project demonstrates a clean, maintainable test architecture: reusable page objects, data-driven scenarios, and both positive and negative coverage.

## Tech Stack

- **TypeScript**
- **Playwright Test**
- Page Object Model (POM)

## Test Coverage

| Scenario | Type |
|---|---|
| Standard user logs in and lands on the products page | Positive |
| Login with an invalid password shows an error | Negative |
| Locked-out user cannot log in | Negative |
| Login with multiple valid users (data-driven) | Positive |
| User can log out and return to the login page | E2E flow |

**Techniques used:** Page Object Model, data-driven testing, `beforeEach` hooks, test grouping with `describe`, multi-page flows, and trace capture for debugging.

## Project Structure

```
pages/
  LoginPage.ts        # selectors & actions for the login page
  InventoryPage.ts    # products page + logout
tests/
  login.spec.ts       # test specs
playwright.config.ts  # base URL, trace, project config
```

## Getting Started

```bash
# install dependencies
npm install
 
# install Playwright browsers
npx playwright install
 
# run all tests
npx playwright test
 
# run in interactive UI mode
npx playwright test --ui
 
# open the HTML report
npx playwright show-report
```

## Why This Project

Built as a portfolio piece to practice scalable UI test automation. The focus is not on the number of tests, but on test design and maintainability - selectors live in one place, page logic is separated from assertions, and the same test logic runs across multiple data sets.

## Notes

- Test credentials are publicly provided by SauceDemo and are safe to use.
- Traces are captured on first retry to simplify debugging of failed runs.