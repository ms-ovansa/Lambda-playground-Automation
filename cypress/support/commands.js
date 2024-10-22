import { faker } from '@faker-js/faker';

Cypress.Commands.add('generateUserFixture', () => {
  const user = {
    first_name: faker.person.firstName(),
    last_name: faker.person.lastName(),
    email: faker.internet.email(),
    phone: faker.phone.number(),
    password: faker.internet.password(),
    company: faker.company.name(),
    address: faker.location.streetAddress(),
    address2: faker.location.streetAddress(),
    city: faker.location.city(),
    postcode: faker.location.zipCode(),
    country: "Nigeria",
    state: "2389"

  };
  cy.writeFile('cypress/fixtures/billingData.json', user);
});