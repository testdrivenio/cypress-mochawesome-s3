describe('S3 Upload Example Failure', () => {

  it('should display the home page correctly', () => {
    cy.visit(`https://mherman.org`);
    cy.get('H1').contains('Hello, World');
  });

});
