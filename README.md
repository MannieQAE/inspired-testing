# Playwright QA Assessment

A focused Playwright test suite for [Sauce Demo](https://www.saucedemo.com/), demonstrating a successful checkout and invalid-login validation.

## Prerequisites

- Node.js 18 or later

## Run the tests

```bash
npm install
npx playwright install --with-deps chromium
npm test
```

## Coverage

- Happy path: login, add an item to the cart, checkout, and confirm the order.
- Negative path: verify invalid credentials produce the expected error message.

The tests use Sauce Demo's `data-test` attributes to keep selectors stable and readable.
