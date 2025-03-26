Feature: Akulaku Content Page
  As a website visitor
  Alice want to view and search a list of corporate activities 
  So that She can stay informed about Akulaku’s latest events and corporate activities

  Background:
    Given Alice open the Akulaku Finance website homepage
    And the homepage is successfully displayed

  Scenario: Display Corporate Activities Information
    When She navigate to the Kegiatan page
    Then She should see the Kegiatan page is displayed
    And She should see a list of 6 activity thumbnails on the Kegiatan page
    And She should see pagination controls at the bottom of the list

  Scenario: Search for content by keyword
    When She navigate to the Kegiatan page
    And She enter "vaksin" into the search field
    Then She should see 2 suggested results appear in the search dropdown
