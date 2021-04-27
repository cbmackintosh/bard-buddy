describe('bard-buddy', () => {

  beforeEach(() => {
    cy.visit(`http://localhost:3000`)
  })

  it('should show an error message if the user navigates to a nonexistent page', () => {
    cy.visit(`http://localhost:3000/test`)
    cy.contains('This page doth not exist, or hath moved')
    cy.visit(`http://localhost:3000/tragedies/test`)
    cy.contains('This page doth not exist, or hath moved')
  })

  it('should provide a button to reload the home page if a 400 error is displayed', () => {
    cy.visit(`http://localhost:3000/test`)
    cy.get('button').contains('BACK').click()
    cy.get('button').contains('HISTORIES')
    .get('button').contains('TRAGEDIES')
    .get('button').contains('COMEDIES')
    .get('button').contains('SONNETS AND POEMS')
  })

  it('should have four buttons for the four genres on the home page', () => {
    cy.get('button').contains('HISTORIES')
    .get('button').contains('TRAGEDIES')
    .get('button').contains('COMEDIES')
    .get('button').contains('SONNETS AND POEMS')
  })

  it('saved passages section should indicate if no passages have been saved', () => {
    cy.get('a.navlink').contains('SAVED PASSAGES').click()
    cy.contains('You have no saved passages!')
  })

  it('should display all the histories when the histories button is clicked', () => {
    cy.get('button').contains('HISTORIES').click()
    cy.get('button').contains('Henry IV, Part I')
    .get('button').contains('Henry IV, Part II')
    .get('button').contains('Henry V')
    .get('button').contains('Henry VI, Part I')
    .get('button').contains('Henry VI, Part II')
    .get('button').contains('Henry VI, Part III')
    .get('button').contains('Henry VIII')
    .get('button').contains('King John')
    .get('button').contains('Pericles')
    .get('button').contains('Richard II')
    .get('button').contains('Richard II')
  })

  it('should display all the tragedies when the tragedies button is clicked', () => {
    cy.get('button').contains('TRAGEDIES').click()
    cy.get('button').contains('Antony and Cleopatra')
    .get('button').contains('Coriolanus')
    .get('button').contains('Cymbeline')
    .get('button').contains('Hamlet')
    .get('button').contains('Julius Caesar')
    .get('button').contains('King Lear')
    .get('button').contains('Macbeth')
    .get('button').contains('Othello')
    .get('button').contains('Romeo and Juliet')
    .get('button').contains('Timon of Athens')
    .get('button').contains('Titus Andronicus')
    .get('button').contains('Troilus and Cressida')
  })

  it('should display all the comedies when the comedies button is clicked', () => {
    cy.get('button').contains('COMEDIES').click()
    cy.get('button').contains(`All's Well That Ends Well`)
    .get('button').contains('As You Like It')
    .get('button').contains('Comedy of Errors')
    .get('button').contains(`Love's Labour's Lost`)
    .get('button').contains('Measure for Measure')
    .get('button').contains('Merchant of Venice')
    .get('button').contains('Merry Wives of Windsor')
    .get('button').contains(`Midsummer Night's Dream`)
    .get('button').contains('Much Ado About Nothing')
    .get('button').contains('Taming of the Shrew')
    .get('button').contains('Tempest')
    .get('button').contains('Twelth Night')
    .get('button').contains('Two Gentlement of Verona')
    .get('button').contains(`Winter's Tale`)
  })

  it('should display 154 sonnets when the sonnets and poems button is clicked', () => {
    const sonnetsArray = []
    for (var i = 1; i < 155; i++) {
      sonnetsArray.push(`Sonnet #${i} ▽`)
    }
    cy.get('button').contains('SONNETS AND POEMS').click()
    sonnetsArray.forEach(sonnet => {
      cy.get('button').contains(sonnet)
    })
  })

  it('should display all five poems on the sonnets and poems page as well', () => {
    cy.get('button').contains('SONNETS AND POEMS').click()
    cy.get('button').contains(`Lover's Complaint ▽`)
    .get('button').contains(`Passionate Pilgrim ▽`)
    .get('button').contains(`Phoenix and the Turtle ▽`)
    .get('button').contains(`Rape of Lucrece ▽`)
    .get('button').contains(`Venus and Adonis ▽`)
  })

  it('should be able to view a directory of acts and scenes when a play is selected', () => {
    cy.get('button').contains('TRAGEDIES').click()
    .get('button').contains('Romeo and Juliet').click()
    cy.contains('Act I')
    cy.contains('Act II')
    cy.contains('Act III')
    cy.contains('Act IV')
    cy.contains('Act V')
    cy.get('button').contains(`Character List ▽`)
    cy.get('button').contains(`Scene i ▽`)
    cy.get('button').contains(`Scene iii ▽`)
    cy.get('button').contains(`Scene iii ▽`)
  })

  it('should be able to click on any scene button to', () => {
    cy.get('button').contains('TRAGEDIES').click()
    cy.get('button').contains('Romeo and Juliet').click()
    cy.get('button').contains(`Scene i ▽`).click()
    cy.contains('Two households, both alike in dignity,')
  })

  it('should be able to click on multiple lines of a play and they should appear in the saved passages section', () => {
    cy.get('button').contains('TRAGEDIES').click()
    cy.get('button').contains('Romeo and Juliet').click()
    cy.get('button').contains(`Scene i ▽`).click()
    cy.get('td').contains('Two households, both alike in dignity,').click()
    cy.get('a.navlink').contains('SAVED PASSAGES').click()
    cy.get('h3').contains('Romeo and Juliet: line 1')
    cy.get('td').contains('Two households, both alike in dignity,')
  })

  it('should be able to delete saved passages from memory by clicking on them again', () => {
    cy.get('button').contains('TRAGEDIES').click()
    cy.get('button').contains('Romeo and Juliet').click()
    cy.get('button').contains(`Scene i ▽`).click()
    cy.get('td').contains('Two households, both alike in dignity,').click()
    cy.get('a.navlink').contains('SAVED PASSAGES').click()
    cy.get('h3').contains('Romeo and Juliet: line 1')
    cy.get('td').contains('Two households, both alike in dignity,').click()
    cy.reload()
    cy.contains('You have no saved passages!')
  })

  it('home button should navigate back to the main page', () => {
    cy.get('button').contains('TRAGEDIES').click()
    cy.get('button').contains('Romeo and Juliet').click()
    cy.get('a.navlink').contains('HOME').click()

    cy.get('button').contains('HISTORIES')
    .get('button').contains('TRAGEDIES')
    .get('button').contains('COMEDIES')
    .get('button').contains('SONNETS AND POEMS')
  })

  it('should be able to save passages from sonnets and poems too', () => {
    cy.get('button').contains('SONNETS AND POEMS').click()
    cy.get('button').contains(`Sonnet #18 ▽`).click()
    cy.contains(`Shall I compare thee to a summer's day?`).click()
    cy.get('a.navlink').contains('SAVED PASSAGES').click()
    cy.get('h3').contains('Sonnet #18: line 1')
    cy.get('td').contains(`Shall I compare thee to a summer's day?`).click()
    cy.reload()
    cy.contains('You have no saved passages!')
  })

  it('handle 500 errors and allow user to navigate back', () => {
    cy.intercept({
      method: 'GET',
      url: 'https://bard-buddy-api.herokuapp.com/play/henry5'
    },
    {
      statusCode: 500
    })
    cy.get('button').contains('HISTORIES').click()
    cy.get('button').contains('Henry V').click()
    cy.contains('Zounds! There was a problem with our system. Pray, try again later.')
    cy.get('button').contains('BACK').click()
    cy.get('button').contains('HISTORIES')
    .get('button').contains('TRAGEDIES')
    .get('button').contains('COMEDIES')
    .get('button').contains('SONNETS AND POEMS')
  })

  it('handle 500 errors for Sonnets section as well', () => {
    cy.intercept({
      method: 'GET',
      url: 'https://bard-buddy-api.herokuapp.com/sonnets'
    },
    {
      statusCode: 500
    })
    cy.get('button').contains('SONNETS AND POEMS').click()
    cy.contains('Zounds! There was a problem with our system. Pray, try again later.')
    cy.get('button').contains('BACK').click()
    cy.get('button').contains('HISTORIES')
    .get('button').contains('TRAGEDIES')
    .get('button').contains('COMEDIES')
    .get('button').contains('SONNETS AND POEMS')
  })

})