export class CustomerDataPage{

    searchCustomer(){
        cy.get("[ng-model='searchCustomer']").type("firstName")
    }

    deleteCustomer(){
        cy.get("button[ng-click='deleteCust(cust)']").click()
    }

}
