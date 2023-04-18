describe('General app tests', () => {
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

describe('Homepage tests', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.intercept('GET', 'https://www.flickr.com/**').as('getFlickr');
  });
  it('Should fetch cards from API', () => {
    cy.get('input[type=search]').type('test{enter}');
    cy.get('[data-testid="card"]').should('have.length', 6);
  });

  it('Should show full card when clicking on the card', () => {
    cy.wait('@getFlickr');
    const card = cy.get('[data-testid="card"]').first();
    card.should('have.class', 'min');
    card.click();
    card.should('have.class', 'max');
    cy.get('body').click(0, 0);
    cy.get('[data-testid="card"]').first().should('have.class', 'min');
  });

  it('Should save the requested data when changing routes', () => {
    cy.get('input[type=search]').type('test{enter}');
    cy.contains('Form').click();
    cy.contains('Home').click();
    cy.get('input[type=search]').should('have.value', 'test');
  });

  it('Should toggle card buttons', () => {
    cy.wait('@getFlickr');
    const card = cy.get('[data-testid="card"]').first();
    card.click();
    cy.get('[data-testid="likes"]').first().click().should('contain', '1');
    cy.get('[data-testid="likes"]').first().click().should('contain', '0');
    cy.get('[data-testid="bookmarks"]').first().click().should('contain', '1');
    cy.get('[data-testid="bookmarks"]').first().click().should('contain', '0');
  });
});

describe('Formpage tests', () => {
  beforeEach(() => {
    cy.visit('/form');
  });

  it('Should generate a card', () => {
    cy.get('[data-testid="title"]').type('test');
    cy.get('[data-testid="price"]').type('1');
    cy.get('[data-testid="descr"]').type('test');
    cy.get('[data-testid="date"]').type('2020-12-11');
    cy.get('[data-testid="radio"]').check();
    cy.get('[data-testid="select"]').select('Bemowo');
    cy.get('[data-testid="form"]').submit();
    cy.get('[data-testid="card"]').should('be.visible');
  });
});
