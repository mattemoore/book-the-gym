/// <reference types="cypress" />
let bookingData;

describe('Automatically book the gym', () => {
    before (() => {
      cy.fixture('data').then(function(data) {
        bookingData = data;
      })
    });

    beforeEach(() => {
      cy.log(bookingData.url)
      cy.visit(bookingData.url, {timeout:120000})
    })

    it('Book the 6am slot of the last day that is bookable...', () => {

      // Enter password blocking booking page
      cy.get('#pwbox-331').type(bookingData.password);
      cy.get('[type="submit"]').click();

      // Enter personal info
      cy.get('#fieldname4_1').type(bookingData.name);
      cy.get('#fieldname2_1').type(bookingData.apt);
      cy.get('#email_1').type(bookingData.email);

      // Answer NO to all questions and accept terms
      cy.get(':nth-child(2) > label > #fieldname6_1').check();
      cy.get(':nth-child(2) > label > #fieldname7_1').check();
      cy.get(':nth-child(2) > label > #fieldname8_1').check();
      cy.get(':nth-child(2) > label > #fieldname9_1').check();
      cy.get(':nth-child(2) > label > #fieldname10_1').check();
      cy.get(':nth-child(2) > label > #fieldname11_1').check();
      cy.get('#fieldname5_1').check();

      // Select next month in calendar (is possible if upcoming week spans end of a month)
      cy.get('.ui-datepicker-next').click();

      // Select last selectable day on calendar
      cy.get('td[data-handler="selectDay"]:last').click();

      // Select 6am slot
      cy.get('[h1="6"] > a').click();
      cy.get('.pbSubmit').click();
      cy.wait(5000);

      // Assert confirmation message
      cy.get('.page-title > span').should('have.text', 'Booking Confirmation');
    })
});
