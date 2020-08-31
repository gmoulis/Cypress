//--Test Set Simulation Credit Profil Celib--
describe('Pour le profil Célibataire', () => {

    const credentials = require('../../fixtures/credentials.json')

    //--Cas Passant--
    it('Renseignements Type Crédit', () => {
        //Aller sur l'url d'YC
        cy.visit('https://www.younited-credit.com/')
            //Sélection du type de projet
        cy.projet(credentials[0].type, credentials[0].amount, credentials[0].duration)
        cy.wait(8000)
            //Vérification Page Suivante
        cy.get('#content-email-step').contains('Découvrez votre offre de prêt de')
        cy.wait(2000)
    })

    it('Renseignement Email', () => {
        cy.email(credentials[0].email)
        cy.wait(8000)
            //Vérification Page Suivante
        cy.url().should('eq', 'https://fr-funnel.younited-credit.com/familysituation')
        cy.get('#content-familysituation-step').contains('Votre situation familiale')
        cy.wait(2000)
    })

    it('Renseignement Situation Familiale', () => {
        cy.situationFamiliale(credentials[0].statut, credentials[0].child)
        cy.wait(8000)
            //Vérification Page Suivante
        cy.url().should('eq', 'https://fr-funnel.younited-credit.com/housing')
        cy.get('#content-housingsituation-step').contains('Votre logement')
        cy.wait(2000)
    })

    it('Renseignement Hébergement', () => {
        //Selection Type d'Hébergement
        cy.Logement(credentials[0].type1, credentials[0].month, credentials[0].year)
        cy.get('[type="checkbox"]').uncheck({ force: true }).should('have.class', 'ng-valid')
            //Validation
        cy.get('[data-test="navigator-compact-forward"]').click()
        cy.wait(8000)
            //Vérification Page Suivante
        cy.url().should('eq', 'https://fr-funnel.younited-credit.com/professionalsituation')
        cy.get('#content-professionalsituation-step').contains('Votre situation professionnelle')
        cy.wait(2000)
    })

    it('Renseignement Pro', () => {
        //Renseigner Situation Pro
        cy.Profession(credentials[0].secteur, credentials[0].profession)
            //Validation
        cy.get('[data-test="navigator-compact-forward"]').click()
        cy.wait(8000)
            //Vérification Page Suivante
        cy.url().should('eq', 'https://fr-funnel.younited-credit.com/incomes')
        cy.get('#content-incomes-step').contains('Vos revenus mensuels')
        cy.wait(2000)
    })

    it('Renseignement Revenus', () => {
        //Renseignement Salaire
        cy.Revenus(credentials[0].salaire, credentials[0].APL, credentials[0].sup)
            //Validation
        cy.get('[data-test="navigator-compact-forward"]').click()
        cy.wait(8000)
            //Vérification Page Suivante
        cy.url().should('eq', 'https://fr-funnel.younited-credit.com/outcomes')
        cy.get('#content-outcomes-step').contains('Vos charges mensuelles')
        cy.wait(2000)
    })

    it('Renseignement Charges', () => {
        //Loyer
        cy.get('#rentAmount-input').type(600).should('have.class', 'ng-valid')
            //Nombre Crédit
        cy.get('#loanCount-input').select('1').should('have.class', 'ng-valid')
            //Type
        cy.get('#type-input').select('PERSONAL_LOAN').should('have.class', 'ng-valid')
            //Cout
        cy.get('#loanAmount-input').type('50').should('have.class', 'ng-valid')
            // Validation
        cy.get('[data-test="navigator-compact-forward"]').click()
        cy.wait(8000)
            //Vérification Page Suivante
        cy.url().should('eq', 'https://fr-funnel.younited-credit.com/bank')
        cy.get('#content-bank-step').contains('Votre banque')
        cy.wait(2000)
    })

    it('Renseignement Banque', () => {
        //Renseigner Banque
        cy.Banque(credentials[0].banque, credentials[0].dateOuverture)
        cy.wait(8000)
            //Vérification Page Suivante
        cy.url().should('eq', 'https://fr-funnel.younited-credit.com/identity')
        cy.get('#content-identity-step').contains('Vos informations')
        cy.wait(2000)
    })

    it('Renseignement Identité', () => {
        //Renseigner Civilité
        cy.get('#GENDERCODE_MLLE').check({ force: true }).should('have.class', 'ng-valid')
        cy.identité(credentials[0].nom, credentials[0].prenom, credentials[0].jourNais, credentials[0].moisNais, credentials[0].dateNais, credentials[0].CPNais, credentials[0].villeNais)
            //Validation
        cy.get('[data-test="navigator-compact-forward"]').click()
        cy.wait(8000)
            //Vérification Page Suivante
        cy.url().should('eq', 'https://fr-funnel.younited-credit.com/contact')
        cy.get('#content-contact-step').contains('Vos coordonnées')
        cy.wait(2000)
    })

    it('Renseignement Contact', () => {
        //Infos Contact
        cy.contact(credentials[0].portable, credentials[0].domicile, credentials[0].adresse, credentials[0].CP, credentials[0].ville, credentials[0].zone)
        cy.get('[data-test="navigator-compact-forward"]').click()
        cy.wait(10000)
            //Vérification Page Suivante
        cy.url().should('eq', 'https://fr-funnel.younited-credit.com/offers/refused_reoptin')
        cy.wait(2000)
    })


})