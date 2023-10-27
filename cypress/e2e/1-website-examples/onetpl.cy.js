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
    it('website renders navbar correctly',()=>{
        cy.get('[class^="Menu_navContainer"]').should('be.visible');
        cy.get('[class^="Menu_navWrapper"]').should('be.visible');
        cy.get('[class^="Menu_navMenuListItem"]').should('be.visible');
    })
    
    it('navbar contains correct names and links',()=>{
        const manuPositions = [
            {name: 'Wiadomości', link: 'https://wiadomosci.onet.pl/'},
            {name: 'Sport', link: 'https://przegladsportowy.onet.pl/'},
            {name: 'Premium', link: 'https://www.onet.pl/premium'},
            {name: 'Biznes', link: 'https://businessinsider.com.pl/'},
            {name: 'Regionalne', link: '#'},
            {name: 'Pogoda', link: 'https://pogoda.onet.pl/'},
            {name: 'Wideo i audio', link: 'https://video.onet.pl/'},
            {name: 'Motoryzacja', link: 'https://www.auto-swiat.pl/'},
            {name: 'Nieruchomości', link: 'https://www.morizon.pl/?utm_source=Onet-RASP&utm_medium=link&utm_campaign=onet-nav'}
        ]

        cy.get('[class^="Menu_navMenuListItem"]').each(($element, index) => {
            cy.wrap($element).should('contain', manuPositions[index].name);
          });
        cy.get('[class^="Menu_navMenuLink"]').each(($link, index) => {
            cy.wrap($link).should('have.attr', 'href', manuPositions[index].link);
          });
    })
      
})