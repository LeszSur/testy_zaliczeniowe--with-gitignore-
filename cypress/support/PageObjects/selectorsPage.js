/// <reference types="cypress" />

class SelectorsPage {
    getSelectorWzrost() {
        return cy.get('.wzrost');
    }
    getSelectorWaga() {
        return cy.get('.waga');
    }
}

export default SelectorsPage