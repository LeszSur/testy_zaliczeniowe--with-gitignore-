/// <reference types="cypress" />

import SelectorsPage from '../../support/PageObjects/selectorsPage';

const selectorsPage = new SelectorsPage();

context('Entering selected app, and tests its functionality', () => {

    describe('Test first-semester app - "Kalkulator-BMI"', () => {

        beforeEach(() => {
        cy.visit('https://leszsur.github.io/Kalkulator-BMI/');
        cy.viewport(1240, 760);
        cy.fixture('testdata.json').as('data');

      })
    
        it('test_1.1_what_contains_address_field_and_check_is_it_empty_archive_field', ()=>{
            cy.url().should('contain', 'https://leszsur.github.io/Kalkulator-BMI/');
            cy.get('.wpisyWynikow').should('be.empty');
        })

        it('test_1.2_enter_data_and_check_what_contain_result_fields', function () {

            selectorsPage.getSelectorWzrost().clear().type(this.data[0].wzrost);
            selectorsPage.getSelectorWaga().clear().type(this.data[0].waga);
            cy.get('.wyliczWynik').click();
            cy.get('.parametry').should('have.text', this.data[0].parametry);        
            cy.get('.stan').should('have.text', this.data[0].stan);
        })

        it('test_1.3_enter_data_and_check_what_contain_archive_fields', function () {
            selectorsPage.getSelectorWzrost().clear().type(this.data[1].wzrost);
            selectorsPage.getSelectorWaga().clear().type(this.data[1].waga);
            cy.get('.wyliczWynik').click();
            cy.get('.wpisyWynikow').should('include.text', this.data[1].wpisyWynikow1);
            cy.get('.wpisyWynikow').should('include.text', this.data[1].wpisyWynikow2); 
        })
        
        it('test_1.4_enter_data_and_check_cleaning button operation', function (){
            selectorsPage.getSelectorWzrost().clear().type(this.data[2].wzrost);
            selectorsPage.getSelectorWaga().clear().type(this.data[2].waga);
            cy.get('.wyliczWynik').click();
            cy.get('.wpisyWynikow').should('not.be.empty');
            cy.get('.usunWyniki').click();       
            cy.get('.wpisyWynikow').should('be.empty');
            })
        
        it('test_1.5_enter_data_and_check_what_contain_average_score_field', function (){
            selectorsPage.getSelectorWzrost().clear().type(this.data[3].wzrost1);
            selectorsPage.getSelectorWaga().clear().type(this.data[3].waga1);
            cy.get('.wyliczWynik').click();
            selectorsPage.getSelectorWzrost().clear().type(this.data[3].wzrost2);
            selectorsPage.getSelectorWaga().clear().type(this.data[3].waga2);
            cy.get('.wyliczWynik').click();
            cy.get('.srednia').should('have.text', this.data[3].srednia);
            })
    })
})