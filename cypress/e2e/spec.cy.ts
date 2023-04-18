describe('General app test', () => {
  it('Should navigate through pages', () => {
    cy.visit('/');
    cy.contains('About').click();
    cy.url().should('include', '/about');
    cy.contains('Form').click();
    cy.url().should('include', '/form');
  });

  it('Should redirect to 404 page', () => {
    cy.visit('/test');
    cy.get('h1').should('contain', 'Page is not found!');
  });
});

describe('Homepage test', () => {
  it('Should fetch cards from API', () => {
    cy.visit('/');
    cy.get('input[type=search]').type('test{enter}');
  });
});
