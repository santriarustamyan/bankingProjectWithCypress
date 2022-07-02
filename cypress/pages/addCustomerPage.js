export class AddCustomerPage{

    addCustomerData(){
    cy.get("[ng-model='fName']").type("firstName")
    cy.get("[ng-model='lName']").type("lastName")
    cy.get("[ng-model='postCd']").type("postCode")


    cy.get("button[type='submit']").click()
}
}
