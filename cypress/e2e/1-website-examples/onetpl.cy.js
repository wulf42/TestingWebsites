describe('Testing onet.pl',() => {    

    beforeEach(() => {
        cy.visit('https://www.onet.pl');  

    })

    it('contains Onet in title', () => {
        cy.title().should('contain', 'Onet')
    })

    it('search enginge works corretcly', () => {
        cy.get('[class^="Search_field"]').type('testowe wyszukanie');
        cy.get('[class^="Search_button"]').click();
        cy.url().should('contain', 'https://szukaj.onet.pl/wyniki.html?qt=testowe+wyszukanie')
 
    })






})