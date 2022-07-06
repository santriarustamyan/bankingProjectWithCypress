import { AddCustomerPage } from "../pages/addCustomerPage"
import { AssertForPages } from "../pages/assertsForPages"
import { BankManagerPage } from "../pages/bankManagerPage"
import { CustomerDataPage } from "../pages/customerDataPage"
import { HomePage } from "../pages/homePage"


const homePage = new HomePage()
const bankManagerPage = new BankManagerPage()
const addCustomerPage = new AddCustomerPage()
const customerDataPage = new CustomerDataPage()
const assertForPages = new AssertForPages()


it('should navigate to the XYZ Bank App',()=>{
    
    homePage.navigateBankPage()

    homePage.clickBankManagerLogin()
    
    assertForPages.assertUrl("/manager")

    bankManagerPage.clickAddCustomer()

    assertForPages.assertUrl("/manager/addCust")

    addCustomerPage.addCustomerData()
    
    cy.on ('window:alert', cy.stub())

    bankManagerPage.clickCustomer()

    assertForPages.assertUrl("/manager/list")

    customerDataPage.searchCustomer()
    assertForPages.assertCustomerIsAdded()

    customerDataPage.deleteCustomer()
    assertForPages.assertCustomerIsDeleted()   

})
