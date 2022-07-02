export class BankManagerPage{
    clickAddCustomer(){
        cy.contains('Add Customer').click()
    }

    clickCustomer(){
        cy.get("button[ng-click='showCust()']").click()
    }

}
