export class HomePage{

    navigateBankPage(){
        cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login')
    }

    clickBankManagerLogin(){
        cy.contains('Bank Manager Login').click()    
    }

}
