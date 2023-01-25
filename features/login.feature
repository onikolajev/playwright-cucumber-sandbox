Feature: Login action

    As a user
    I want to login into application

    Scenario: Login with valid credentials
        Given I visit a login page
        And I fill the login form with valid credentials
        Then I should see the home page

    Scenario Outline: Try to login with invalid credentials
        Given I visit a login page
        When I fill the login form with "<username>" and "<password>"
        Then I see error message "<errorMessage>"
        Examples:
            | username        | password       | errorMessage                                                              |
            | locked_out_user | secret_sauce   | Epic sadface: Sorry, this user has been locked out.                       |
            | wrong_username  | secret_sauce   | Epic sadface: Username and password do not match any user in this service |
            | standard_user   | wrong_password | Epic sadface: Username and password do not match any user in this service |
            | any_username    |                | Epic sadface: Password is required                                        |
            |                 | any_password   | Epic sadface: Username is required                                        |

    Scenario: Try to login as problematic user
        Given I visit a login page
        When I fill the login form with "problem_user" and "secret_sauce"
        Then I see a doge pictures

    Scenario: Try to login as user with performance issue
        Given I visit a login page
        When I fill the login form with "performance_glitch_user" and "secret_sauce"
        Then I should see the home page
