
import CheckoutPage from '../support/pages/checkoutPage'; 
import UserPage from '../support/pages/userPage'; 

describe('Lambda Playground Checkout Test', () => {
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
      checkoutPage.agreeToTerms(); 
      checkoutPage.clickNewsLetter();
      checkoutPage.submitCheckout(); 

      

cy.contains("Confirm Orders").should('be.visible');
checkoutPage.confirmCheckout();
cy.contains("Your order has been placed!").should('be.visible');


});
});
});
