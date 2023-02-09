class inventory{
    
    elements = {

        productsHeading: () => cy.get('.title').findByText("Products"),
    
    }
}
    export default new inventory()
