// cypress/page-objects/LoginPage.js
class LoginPage {
    visit() {
      cy.visit('/login');
    }

    getUsernameInput() {
      return cy.get('input[name=username]');
    }

    getPasswordInput() {
      return cy.get('input[name=password]');
    }

    getLoginButton() {
      return cy.get('button[name=loginButton]');
    }

    getLogoutButton() {
        return cy.get('a[href="/logout"]')
    }

    login(username, password) {
      this.visit();
      this.getUsernameInput().type(username).should('have.value', username);
      this.getPasswordInput().type(password).should('have.value', password);
      this.getLoginButton().click();
    }

    verifyLogin() {
      cy.url().should('include', '/campgrounds');
      cy.contains('welcome back!');
    }

    logout() {
      this.getLogoutButton().click();
      cy.contains('Goodbye!');
    }
}

export default LoginPage;