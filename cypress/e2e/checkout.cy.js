
import CheckoutPage from '../support/pages/checkoutPage'; 
import UserPage from '../support/pages/userPage'; 

describe('Lambda Playground Checkout Flow', () => {
  const checkoutPage = new CheckoutPage();
  const userPage = new UserPage(); 
  beforeEach(() => {
    checkoutPage.visit();
  });
  before(() => {
    cy.generateUserFixture();
  });

  it('Complete checkout flow for MP3 player', () => {
    cy.fixture('billingData.json').then((userData) => {
      checkoutPage.selectCategory(); 
      checkoutPage.selectMP3Player(); 
      checkoutPage.hoverOverProduct(); 
      checkoutPage.addToCart(); 
      checkoutPage.proceedToCheckout();
      userPage.fillUserData();

    // cy.get('#input-payment-firstname').type(userData.first_name);
    // cy.get('#input-payment-lastname').type(userData.last_name);
    //   cy.get('#input-payment-email').type(userData.email);
    //   cy.get('#input-payment-telephone').type(userData.phone);
    //   cy.get('#input-payment-password').type(userData.password);
    //   cy.get('#input-payment-confirm').type(userData.password);
    //   cy.get('#input-payment-company').type(userData.company);
    //    cy.get('#input-payment-address-1').type(userData.address);
    //   cy.get('#input-payment-address-2').type(userData.address2);
    //   cy.get('#input-payment-city').type(userData.city);
    //   cy.get('#input-payment-postcode').type(userData.postcode);
    //   cy.get('#input-payment-country').select(userData.country);
    //   cy.get('#input-payment-zone').select(userData.state);

      checkoutPage.agreeToTerms(); 
      checkoutPage.clickNewsLetter();
      checkoutPage.submitCheckout(); 

      

cy.contains("Confirm Order").should('be.visible');
checkoutPage.confirmCheckout();
cy.contains("Your order has been placed!").should('be.visible');


});
});
});
