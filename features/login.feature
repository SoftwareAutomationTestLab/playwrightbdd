Feature: Login functionality

  @smoke
  Scenario: Successful Login

    Given User launches login page

    When User logs in with username "rahulshettyacademy@gmail.com" and password "learning"

    Then User should see dashboard page