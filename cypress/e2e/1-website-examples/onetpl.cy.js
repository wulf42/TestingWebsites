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
    it('navbar contains correct names',()=>{
       cy.get('[class^="Menu_navMenuListItem"]').eq(0).should('contain','Wiadomości');
       cy.get('[class^="Menu_navMenuListItem"]').eq(1).should('contain','Sport');
       cy.get('[class^="Menu_navMenuListItem"]').eq(2).should('contain','Premium');
       cy.get('[class^="Menu_navMenuListItem"]').eq(3).should('contain','Biznes');
       cy.get('[class^="Menu_navMenuListItem"]').eq(4).should('contain','Regionalne');
       cy.get('[class^="Menu_navMenuListItem"]').eq(5).should('contain','Pogoda');
       cy.get('[class^="Menu_navMenuListItem"]').eq(6).should('contain','Wideo i audio');
       cy.get('[class^="Menu_navMenuListItem"]').eq(7).should('contain','Motoryzacja');
       cy.get('[class^="Menu_navMenuListItem"]').eq(8).should('contain','Nieruchomości');
    })
    it('navbar contains correct link',()=>{
        cy.get('[class^="Menu_navMenuLink"]').eq(0).should('have.attr','href','https://wiadomosci.onet.pl/');
        cy.get('[class^="Menu_navMenuLink"]').eq(1).should('have.attr','href','https://przegladsportowy.onet.pl/');
        cy.get('[class^="Menu_navMenuLink"]').eq(2).should('have.attr','href','https://www.onet.pl/premium');
        cy.get('[class^="Menu_navMenuLink"]').eq(3).should('have.attr','href','https://businessinsider.com.pl/');
        cy.get('[class^="Menu_navMenuLink"]').eq(5).should('have.attr','href','https://pogoda.onet.pl/');
        cy.get('[class^="Menu_navMenuLink"]').eq(6).should('have.attr','href','https://video.onet.pl/');
        cy.get('[class^="Menu_navMenuLink"]').eq(7).should('have.attr','href','https://www.auto-swiat.pl/');
        cy.get('[class^="Menu_navMenuLink"]').eq(8).should('have.attr','href','https://www.morizon.pl/?utm_source=Onet-RASP&utm_medium=link&utm_campaign=onet-nav');

     })



})