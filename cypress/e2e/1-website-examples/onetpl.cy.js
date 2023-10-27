describe('Testing onet.pl',() => {    

    beforeEach(() => {
        //visit onet.pl
        cy.visit('https://www.onet.pl');
        //acept cookies  (Testing on electron browser)
        cy.get('[class^="cmp-button_button cmp-intro_acceptAll"]').should('exist')
        cy.get('[class^="cmp-button_button cmp-intro_acceptAll"]').click();
        cy.get('[class^="cmp-button_button cmp-intro_acceptAll"]').should('not.be.visible')
        });
    

    it('should contain Onet in title', () => {
        cy.title().should('contain', 'Onet')
    })

    it('should correctly search for a query', () => {
        cy.get('[class^="Search_field"]').type('testowe wyszukanie');
        cy.get('[class^="Search_button"]').click();
        cy.get('[class^="SearchPanel-module"]').should('be.visible'); 
        cy.url().should('include', 'https://szukaj.onet.pl/wyniki/?qt=testowe+wyszukanie');
    })
    it('should render the navbar correctly',()=>{
        cy.get('[class^="Menu_navContainer"]').should('be.visible');
        cy.get('[class^="Menu_navWrapper"]').should('be.visible');
        cy.get('[class^="Menu_navMenuListItem"]').should('be.visible');
    })
    
    it('should have correct names and links in the navbar',()=>{
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