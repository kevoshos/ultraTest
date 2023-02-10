import loginPage from "../pages/login.page.cy"
import inventoryPage from "../pages/inventory.page.cy"
import cartPage from "../pages/cart.page.cy"
import customerInfoPage from "../pages/customerInfo.page.cy"
import checkoutOverviewPage from "../pages/overview.page.cy"
import logAccountFixture from "../fixtures/log-account.json"
import customerInfoFixture from "../fixtures/customer-information.json"

describe("End to end purchase with a standard user", () =>{
    const{ authorized_username, standard_password} = logAccountFixture
    const{first_name, last_name, zip_code} = customerInfoFixture

    before(()=>{
        
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
            .should('eq', Cypress.config().baseUrl + '/inventory.html')
            .should('exist')
        
    })


it("Verify standard user is able to complete an end to end purchase", () =>{

    // Add all items available to the cart shop
    let addButton = inventoryPage.elements.addToCartButton()
    addButton.then(($ele) => { 
    const itemCount = Cypress.$($ele).length;

        cy.get('.inventory_container').each(($button) => {

            cy.wrap($button).find('button', 'Add to cart').click({multiple:true})

            inventoryPage.elements.shoppingCartLink()
                .should('contain',itemCount)
                .click()

           })  
        })

    cartPage.elements.cartHeading()
            .should('exist')
            .and('have.text', 'Your Cart')
    cartPage.elements.checkoutButton()
            .should('be.enabled')
            .click()

    // Add customer information
    customerInfoPage.elements.infoHeader()
        .should('exist')
        .and('have.text', 'Checkout: Your Information')
    customerInfoPage.fillCustomerInfo(first_name,last_name,zip_code)

    // Overview and complete order
    checkoutOverviewPage.elements.overviewHeader()
        .should('exist')
        .and('have.text','Checkout: Overview')
    checkoutOverviewPage.elements.finishButton()
        .should('be.enabled')
        .click()
    checkoutOverviewPage.elements.checkoutComplete()
        .should('be.visible')

  })

    })    