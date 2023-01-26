Feature: Inventory page

    As a user
    I want to add or remove items in inventory page


    Scenario Outline: Try to add backpack
        Given I am logged in
        When I add to cart "backpack" 
        Then I wait for 3 seconds
        And I should see in cart badge "1"