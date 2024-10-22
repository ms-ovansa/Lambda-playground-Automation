class userPage {
    
    get firstNameInput() {
      return cy.get('#input-payment-firstname'); 
    }
  
    get lastNameInput() {
      return cy.get('#input-payment-lastname'); 
    }
  
    get emailInput() {
      return cy.get('#input-payment-email'); 
    }
  
    get phoneInput() {
      return cy.get('#input-payment-telephone'); // Adjust the selector
    }
  
    get passwordInput() {
      return cy.get('#input-payment-password'); // Adjust the selector
    }
  
    get confirmPasswordInput() {
      return cy.get('#input-payment-confirm'); // Adjust the selector
    }
    get companyInput() {
        return cy.get('#input-payment-company'); // Adjust the selector
      }
    get addressInput() {
      return cy.get('#input-payment-address-1'); 
    }
  
    get addressInput2() {
        return cy.get('#input-payment-address-2'); 
    }
    get cityInput() {
      return cy.get('#input-payment-city'); 
    }
  
    get postcodeInput() {
      return cy.get('#input-payment-postcode'); 
    }
    get countrySelect() {
      return cy.get('#input-payment-country'); 
    }
  
    get stateSelect() {
      return cy.get('#input-payment-zone'); 
    }
  
   
    fillUserData(userData) {
    
          cy.fixture('billingData.json').then((userData) => {

      this.firstNameInput.type(userData.first_name);
      this.lastNameInput.type(userData.last_name);
      this.emailInput.type(userData.email);
      this.phoneInput.type(userData.phone);
      this.passwordInput.type(userData.password);
      this.confirmPasswordInput.type(userData.password);
      this.companyInput.type(userData.company)
      this.addressInput.type(userData.address);
      this.addressInput2.type(userData.address2);
      this.cityInput.type(userData.city);
      this.postcodeInput.type(userData.postcode);
    this.countrySelect.select(userData.country); // Ensure country is from your user data
      this.stateSelect.select(userData.state); // Ensure state is from your user data
    }
)};
}
  export default userPage;