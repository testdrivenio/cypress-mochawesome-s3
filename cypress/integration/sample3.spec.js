describe('S3 Upload Example Success', () => {

  it('should display the home page correctly', () => {
    cy.visit(`https://mherman.org`);
    cy.get('a').contains('Michael Herman');
  });

});
