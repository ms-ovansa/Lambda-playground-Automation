# Lambda-playground-Automation

This project uses Cypress for testing of the Lambda Playground website. The following instructions will guide you on how to set up the project, run tests locally, and execute tests in a CI/CD pipeline (e.g., GitHub Actions).

# Prerequisites
Before running the tests, ensure the following software is installed on your machine:

Node.js: (v16 or later) Download here
npm: Comes with Node.js, used to manage dependencies.
Cypress: Installed as a dependency via npm.

# Installation
Clone the Repository:
1. git clone https://github.com/ms-ovansa/Lambda-playground-Automation.git
2. cd Lambda-playground-Automation

Install Project Dependencies:
1. npm install
# Running Tests Locally
To run the Cypress tests locally on your machine, follow the steps below:

**Open Cypress Test Runner (Interactive Mode):**
This will open Cypress in an interactive mode, allowing you to manually run and inspect tests: npx cypress open

**Run Cypress Tests in Headless Mode:**
To run the tests in headless mode (without a GUI), use: npx cypress run

# Running Tests on CI (GitHub Actions)
This project is configured to automatically run Cypress tests on every push to the main branch using GitHub Actions. The workflow configuration is located in .github/workflows/github-ci.yml.

# Steps to Run Tests on GitHub CI:
**Push Code to GitHub:**
Once changes are pushed to the main branch, the CI workflow will automatically trigger and run the Cypress tests.

**View Test Results:**

You can check the test run status, logs, and any uploaded artifacts (test reports, screenshots, videos) directly in the GitHub Actions tab of your repository.
