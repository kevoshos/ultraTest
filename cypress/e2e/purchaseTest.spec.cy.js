import loginPage from "../pages/login.page.cy"
import inventoryPage from "../pages/inventory.page.cy"
import logAccountFixture from "../fixtures/log-account.json"


describe("End to end purchase with standard user", () =>{
    const{ authorized_username, standard_password} = logAccountFixture

    beforeEach(()=>{
        
        cy.visit('/')
        loginPage.elements.userNameInput().invoke('show').as('userName')
        loginPage.elements.passwordInput().invoke('show').as('password')
        loginPage.elements.loginButton().invoke('show').as('login')

        cy.get('@userName')
            .should('be.visible')
            .type(authorized_username)
        cy.get('@password')
            .should('be.visible')
            .type(standard_password)
        cy.get('@login')
            .should('exist')
            .click()
         cy.url()
            should('eq', 'https://www.saucedemo.com/inventory.html')
         inventoryPage.elements.productsHeading()
            .should('exist')
        
    })


it("Verify standard user is able to complete an end to end purchase", () =>{

   

    })
})