class checkoutPage {
   
    get categoryButton() {
      return cy.get('.icon-left.both.text-reset');
    }
  
    get mp3PlayerButton() {
      return cy.contains('MP3 Players');
    }
  
    get productImage() {
      return cy.get("div[class='carousel-item active'] img[title='HTC Touch HD']");
    }
  
    get cartIcon() {
      return cy.get("button.btn.btn-cart.cart-28 > i");
    }
  
    get checkoutButton() {
      return cy.get("a[class='btn btn-secondary btn-block']");
    }

    get agreeCheckbox1() {
        return cy.get("label[for='input-account-agree']"); 
      }
    
      get agreeCheckbox2() {
        return cy.get("label[for='input-agree']"); 
      }
      get newsLetterCheckbox() {
        return cy.get("label[for='input-newsletter']"); 
      }
    
      get submitButton() {
        return cy.get('#button-save'); 
      }
      get confirmButton() {
        return cy.get('#button-confirm'); 
      }

      visit() {
        cy.visit('/');
      }
    
      selectCategory() {
        this.categoryButton.click();
      }
    
      selectMP3Player() {
        this.mp3PlayerButton.click();
      }
    
      hoverOverProduct() {
        this.productImage.trigger('mouseover');
      }
    
      addToCart() {
        this.cartIcon.click({ force: true });
      }
    
      proceedToCheckout() {
        this.checkoutButton.click();
      }
    
      agreeToTerms() {
        this.agreeCheckbox1.click();
        this.agreeCheckbox2.click();

      }
      clickNewsLetter() {
        this.newsLetterCheckbox.click();
        

      }

      submitCheckout() {
        this.submitButton.click();
      }
      
      confirmCheckout() {
        this.confirmButton.click();
      }
    }
    
    export default checkoutPage;
