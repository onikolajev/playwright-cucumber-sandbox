
const {Given, When, Then, defineStep} =require('@cucumber/cucumber')
const {InventoryPage} = require('../page-objects/inventory-page')
const { LoginPage } = require('../page-objects/login-page')

const inventoryPage = new InventoryPage()
const loginPage = new LoginPage()

Given(/^I am logged in$/, async function(){
    await loginPage.navigateToLoginScreen()
    await loginPage.submitLoginFormWithParameters('standard_user', 'secret_sauce')
})

When(/^I add to cart "([^"]*)"$/, async function(item){
    await inventoryPage.addToCart(item)
})

Then(/^I should see in cart badge "1"$/, async function(){
    await inventoryPage.assertCartBadge(1)
})