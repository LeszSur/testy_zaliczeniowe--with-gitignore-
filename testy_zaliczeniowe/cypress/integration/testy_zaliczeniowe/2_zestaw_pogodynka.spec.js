/// <reference types="cypress" />

context('Entering selected app, and tests its functionality', () => {

    describe('Test second-semester app - "Pogodynka"', () => {
   
    beforeEach(() => {
        cy.visit('https://leszsur.github.io/Pogodynka/');
        cy.viewport(1280, 1024);
      })
    
        it('test_2.1_what_contains_address_field_and_first_response', ()=>{
            cy.url().should('contain', 'https://leszsur.github.io/Pogodynka/');
            cy.get('#naglowek').should('include.text', 'Pogoda aktualna - Białystok');

        })

        it('test_2.2_enter_search_parametr_and_check_what_contain_result_fields', ()=>{
            cy.get('#naglowek').should('have.text', 'Pogoda aktualna - Białystok'); 
            cy.get('#szukaj').clear().type('k');
            cy.get('#przycisk').click().wait(2000);
            cy.get('#naglowek').should('have.text', 'Pogoda aktualna - Kraków');
        })

        it('test_2.3_test_error_handling_when_enter_wrong_search_parameter', ()=>{
            cy.get('#opisAktualna').should('not.be.empty');
            cy.get('#szukaj').clear().type('-');
            cy.get('#przycisk').click().wait(2000);
            cy.get('#opisAktualna').should('have.text', 'błąd wczytywania danych');
        })
        
        it('test_2.4_clear_search_parametr_and_check_what_contain_result_fields', ()=>{
            cy.get('#naglowek').should('have.text', 'Pogoda aktualna - Białystok'); 
            cy.get('#szukaj').clear().type('o');
            cy.get('#przycisk').click().wait(2000);
            cy.get('#naglowek').should('have.text', 'Pogoda aktualna - Olsztyn');
            cy.get('#szukaj').clear(); 
            cy.get('#przycisk').click().wait(2000);
            cy.get('#naglowek').should('have.text', 'Pogoda aktualna - Białystok');          
            })

        it('test_2.5_what_contains_footer_after_searching_data', ()=>{
            cy.get('#containerMessages').should('have.text', 'zakończono wczytywanie danych@żródło:wowapi.Hubert.Zub');
            })

    })
})