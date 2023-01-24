const {Given, When, Then, defineStep} =require('@cucumber/cucumber')
const {LoginPage} = require('../page-objects/login-page')

const loginPage = new LoginPage()

Given("I visit a login page", async function (){
    await loginPage.navigateToLoginScreen()
})

When("I fill the login form with valid credentials", async function(){
    await loginPage.submitLoginForm()
})

Then("I should see the home page", async function(){
    await loginPage.assertUserIsLoggedIn()
})

Then(/^I wait for (.*) seconds$/, async function(waitTime){
    await loginPage.waitForSometime(waitTime)
})

When(/^I fill the login form with "([^"]*)" and "([^"]*)"$/, async function(username, password){
    await loginPage.submitLoginFormWithParameters(username, password)
})