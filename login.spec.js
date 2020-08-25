//--Test set--
describe('Login Backmarket', () => {

    //--Cas passant--
    it('Login Ok', () => {
        //Aller sur l'url du site web
        cy.visit('https://preprod.backmarket.fr/register')
            //Tempo fixe
        cy.wait(4000)
        cy.get('#email-signin').type('ganelle94350@hotmail.fr')
        cy.get('#password-signin').type('Aaliyah30juillet')
        cy.get('[data-test="submit-button-login"]').click()
        cy.wait(4000)
        cy.url().should('eq', 'https://preprod.backmarket.fr/dashboard/orders')
        cy.get('[data-test=caddie-icon]').should('be.visible')
        cy.wait(4000)
        cy.get('[href="/logout"]').eq(0).click({ force: true })
    })

    //--Cas non passant--
    it('Login incorrect', () => {
        cy.visit('https://preprod.backmarket.fr/register')
        cy.wait(4000)
        cy.get('#email-signin').type('ganelle94351@hotmail.fr')
        cy.get('#password-signin').type('Aaliyah30juillet')
        cy.get('[data-test="submit-button-login"]').click()
        cy.url().should('eq', 'https://preprod.backmarket.fr/register')
        cy.get('[data-test="login-credential-error"]').contains('Mauvaise combinaison')
        cy.url().should('eq', 'https://preprod.backmarket.fr/register')

    })

    //--Cas non passant--
    it('Password incorrect', () => {
        cy.visit('https://preprod.backmarket.fr/register')
        cy.wait(4000)
        cy.get('#email-signin').type('ganelle94350@hotmail.fr')
        cy.get('#password-signin').type('Aaliyah30juillet!')
        cy.get('[data-test="submit-button-login"]').click()
        cy.get('[data-test="login-credential-error"]').contains('Mauvaise combinaison')
        cy.url().should('eq', 'https://preprod.backmarket.fr/register')
    })

    //--Cas non passant--
    it('Password less than 8 characters', () => {
        cy.visit('https://preprod.backmarket.fr/register')
        cy.wait(4000)
        cy.get('#email-signin').type('ganelle94350@hotmail.fr')
        cy.get('#password-signin').type('Aaliyah')
        cy.get('[data-test=submit-button-login]').click()
        cy.get('[data-test="login-credential-error"]').contains('Mauvaise combinaison')
        cy.url().should('eq', 'https://preprod.backmarket.fr/register')
    })

    //--Cas non passant--
    it('Password without uppercase', () => {
        cy.visit('https://preprod.backmarket.fr/register')
        cy.wait(4000)
        cy.get('#email-signin').type('ganelle9435O@hotmail.fr')
        cy.get('#password-signin').type('aaliyah30juillet')
        cy.get('[data-test=submit-button-login]').click()
        cy.get('[data-test="login-credential-error"]').contains('Mauvaise combinaison')
        cy.url().should('eq', 'https://preprod.backmarket.fr/register')

    })

    //--Cas non passant--
    it('Password without numbers', () => {
        cy.visit('https://preprod.backmarket.fr/register')
        cy.wait(4000)
        cy.get('#email-signin').type('ganelle94350@hotmail.fr')
        cy.get('#password-signin').type('Aaliyah"àjuillet')
        cy.get('[data-test="submit-button-login"]').click()
        cy.get('[data-test="login-credential-error"]').contains('Mauvaise combinaison')
        cy.url().should('eq', 'https://preprod.backmarket.fr/register')
    })

    it.skip('Nothing', () => {
        cy.visit('https://preprod.backmarket.fr/register')
        cy.get('#email-signin').
        cy.get('#password-signin')
        cy.get('[data-test="submit-button-login"]').click()
        cy.get('[data-test="login-credential-error"]').should('Veuillez renseigner ce champ')
    })

    //--Cas non passant--
    it('Nothing in Email', () => {
        cy.visit('https://preprod.backmarket.fr/register')
        cy.wait(4000)
        cy.get('#email-signin')
        cy.get('#password-signin').type('Aaliyah30juillet')
        cy.get('[data-test=list-item]').contains('Le champ')
        cy.wait(4000)
        cy.get('[data-test="list-item"]').contains('Le champ "Email" ')
        cy.url().should('eq', 'https://preprod.backmarket.fr/register')
    })

    //--Cas non passant--
    it.skip('Nothing in Password', () => {
        cy.visit('https://preprod.backmarket.fr/register')
        cy.wait(4000)
        cy.get('#email-signin').type('ganelle9435O@hotmail.fr')
        cy.get('#password-signin')
        cy.get('[data-test="submit-button-login"]').click()
        cy.get('[data-test="list-item"]').contains('Veuillez renseigner ')
    })

    //--Scénario avec clear--
    it.only('Nothing in Password', () => {
        cy.visit('https://preprod.backmarket.fr/register')
        cy.wait(4000)
        cy.get('#email-signin').type('ganelle9435O@hotmail.fr')
        cy.get('#email-signin').clear()
        cy.wait(4000)
        cy.get('#password-signin').type("Aaliyah30juillet")
        cy.wait(4000)
        cy.get('[type=password]').eq(0).clear().click()
        cy.wait(4000)
        cy.get('[data-test="submit-button-login"]').click({ force: true })
        cy.get('[data-test=form-group-errors] > [data-test=list-item]').contains('Merci de')

    })

})