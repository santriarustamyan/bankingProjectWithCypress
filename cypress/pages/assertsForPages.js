export class AssertForPages{

    assertUrl(expectedUrl){
        cy.url().should('include', expectedUrl) 
    }

    assertCustomerIsAdded(){
        cy.get("tbody td:nth-child(1)").should('have.text',"firstName")
    }

    assertCustomerIsDeleted(){
        cy.get('tbody').should('not.have.text',"firstName")
    }
    
}
