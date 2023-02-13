
# Technical test for Ultra with Cypress

This repository includes the UI test automation of https://www.saucedemo.com/.com provided by Swag Labs using Cypress 12.5.1 + Javascript.


## Installation

Prerequisites
```bash
  nodejs
  visual studio code or other IDE
```
---
    
## Run Locally

Clone the project

```bash
  git clone https://github.com/kevoshos/ultraTest.git
```

Go to the project directory

```bash
  cd project-cloned-directory
```

Install dependencies and packages

```bash
  npm install
```
---
### Test Run

#### Headless mode
Entire Suite

```jsx
npx cypress run
npm run test
```

A Single Spec

```scheme
npm run test -- --spec "cypress/e2e/spec.cy.js"
```

#### Headed mode

Entire Suite

```scheme
npx cypress run --headed
```

A Single Spec:
```scheme

npm run test -- --spec "cypress/e2e/spec.cy.js" --headed
```

## Suggestions

1. For the Selectors strategy I suggest using Testing Library instead of regular selectors via cy.get or using xpath. This allow to identify selectors in the way end user is using the application.
2. Fixtures files for data driven testing, as the suites and number of test cases grows it will allow to have data located and maintain in a single place.
3. Cypress Custom Commands, as the suite starts to increase and more test are added many of the validation we have in current test won't be needed to be checked again in every test, we can use commands for that i.e getting the login and purchase flow in two separate commands and reuse them on every test.
