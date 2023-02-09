class inventory{
    
    elements = {

        productsHeading: () => cy.get('.title').findByText("Products"),
        addToCartButton: () => cy.get('.inventory_container').find('button', 'Add to cart'),
        shoppingCartValue: () => cy.get('.shopping_cart_link').find("span[class='shopping_cart_badge']"),
        shoppingCartLink: () => cy.get('.shopping_cart_link')
    
    }
}
    export default new inventory()
