class cart{
    elements = {

        cartHeading: () =>  cy.get('.header_secondary_container').findByText('Your Cart'),
        checkoutButton: () => cy.get('.cart_footer').findByRole('button', {name:/checkout/i}),
        continueShoppingButton: () => cy.findByRole('button', {name:/Continue Shopping/i})
  
    }
}

export default new cart