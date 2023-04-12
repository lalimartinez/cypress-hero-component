describe('Homepage Hero', () => {
  beforeEach(() => {
      cy.visit('https://www.webstacks.com/')
  })

  it('checks hero items', () => {
      //hero section exists
      cy.get('#homepage-hero-section').should('exist')

      //ratings badge exists
      cy.get('.RatingProof___StyledFlex-sc-1ixi3zc-0').should('exist').contains('5.0 Rating')

      //hero has an h1
      cy.get('h1').should('exist').contains('The #1 agency for high growth tech.')

      //hero has a subheading
      cy.get('.Hero___StyledFlex3-sc-zjufsq-4 > .Paragraph-sc-19yli7q-0').should('exist')

      //buttons exist
      cy.getByInternalName('Start a project button').should('exist').contains('Start a project')
      cy.getByInternalName('Watch video').should('exist').contains('Watch video')

      //animated image exists
      cy.getByAriaLabel('animation').should('exist')
  })

  it('checks rating badge url', () => {
      cy.get('.fekuDx > .Link__StyledLink-sc-1tyfjkq-0')
          .invoke('attr', 'href').should('eq', 'https://www.g2.com/products/webstacks/reviews')
  })

  it('clicks start a project button', () => {
      cy.getByInternalName('Start a project button').click()
      cy.location('pathname').should('eq', '/sales')
  })

  it('clicks watch video button to open video modal', () => {
      cy.getByInternalName('Watch video').click()
      cy.get('.vidyard-player-container').should('exist')
  })

  it('checks video modal elements', () => {
      cy.getByInternalName('Watch video').click()

      //video is visble
      cy.get('.vidyard-player-container').should('be.visible')

      //video heading is visible
      cy.get('.VideoPopup___StyledContainer3-sc-18im2oe-3 > .Heading-sc-1lllqhh-0').should('be.visible')
          .contains('Talk to an expert about turning your website into a product.')

      //button is visible
      cy.getByInternalName('Schedule a call Button Component').should('be.visible').contains('Schedule a call')
  })

  it('clicks schedule a call button in video modal', () => {
      cy.getByInternalName('Watch video').click()
      cy.getByInternalName('Schedule a call Button Component').click()
      cy.location('pathname').should('eq', '/sales')
  })

  it('checks video modal elements are not present when not opened', () => {
       //video is not visble
       cy.get('.vidyard-player-container').should('not.exist')

       //video heading is not visible
       cy.get('.VideoPopup___StyledContainer3-sc-18im2oe-3 > .Heading-sc-1lllqhh-0').should('not.exist')

       //button is not visible
       cy.getByInternalName('Schedule a call Button Component').should('not.exist')
  })
})