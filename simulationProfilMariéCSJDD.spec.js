//--Test Set Simulation Credit Profil Marié--
describe('Pour le profil Marié', () => {

    const credentials = require('../../fixtures/credentials.json')

    //--Cas Passant--
    it('Renseignements Type Crédit', () => {
        //Aller sur l'url d'YC
        cy.visit('https://www.younited-credit.com/')
            //Sélection du type de projet
        cy.projet(credentials[2].type, credentials[2].amount, credentials[2].duration)
        cy.wait(8000)
            //Vérification Page Suivante
        cy.url().should('eq', 'https://fr-funnel.younited-credit.com/email')
        cy.get('#content-email-step').contains('Découvrez votre offre de prêt de')
        cy.wait(2000)
    })

    it('Renseignement Email', () => {
        //Renseigner Email
        cy.email(credentials[2].email)
        cy.wait(8000)
            //Vérification Page Suivante
        cy.url().should('eq', 'https://fr-funnel.younited-credit.com/familysituation')
        cy.get('#content-familysituation-step').contains('Votre situation familiale')
        cy.wait(2000)
    })

    it('Renseignement Situation Familiale', () => {
        cy.situationFamiliale(credentials[2].statut, credentials[2].child)
        cy.wait(8000)
            //Vérification Page Suivante
        cy.url().should('eq', 'https://fr-funnel.younited-credit.com/housing')
        cy.get('#content-housingsituation-step').contains('Votre logement')
        cy.wait(2000)
    })

    it('Renseignement Hébergement', () => {
        //Selection Type d'Hébergement
        cy.Logement(credentials[2].type1, credentials[2].month, credentials[2].year)
        cy.wait(2000)
            //Décocher Option
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
        cy.Profession(credentials[2].secteur, credentials[2].profession)
            //Selection Type Contrat
        cy.get('#contractType-input').select('CIEDI').should('have.class', 'ng-valid')
            //Renseigner Date Commencement
        cy.get('#employedFrom-input-month').type('11').should('have.class', 'ng-valid')
        cy.get('#employedFrom-input-year').type('2010').should('have.class', 'ng-valid')
            //Validation
        cy.get('[data-test="navigator-compact-forward"]').click()
        cy.wait(8000)
            //Vérification Page Suivante
        cy.url().should('eq', 'https://fr-funnel.younited-credit.com/partnerprofession')
        cy.get('#content-professionalsituation-step').contains('Profession de votre conjoint')
        cy.wait(2000)
    })

    it('Renseignement Pro Conjoint', () => {
        //Renseigner Situation Pro
        cy.ProfessionCo(credentials[2].secteurCo, credentials[2].professionCo)
            //Selection Type Contrat
        cy.get('#partnerContractType-input').select('CDI').should('have.class', 'ng-valid')
            //Renseigner Date Commencement
        cy.get('#partnerEmployedFrom-input-month').type('05').should('have.class', 'ng-valid')
        cy.get('#partnerEmployedFrom-input-year').type('2005').should('have.class', 'ng-valid')
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
        cy.Revenus(credentials[2].salaire, credentials[2].APL, credentials[2].sup)
            //Renseignement Conjoint
        cy.get('#coIncome-input').type('3500').should('have.class', 'ng-valid')
            //Validation
        cy.get('[data-test="navigator-compact-forward"]').click()
        cy.wait(8000)
            //Vérification Page Suivante
        cy.url().should('eq', 'https://fr-funnel.younited-credit.com/outcomes')
        cy.get('#content-outcomes-step').contains('Vos charges mensuelles')
        cy.wait(2000)
    })

    it('Renseignement Charges', () => {
        //Renseignement
        cy.get('#mortgageAmount-input').type(1200).should('have.class', 'ng-valid')
            //Selection Pension Ali
        cy.get('#childSupportPaymentsAmount-input').type('0').should('have.class', 'ng-valid')
            //Renseignement Frais de Garde
        cy.get('#childCareExpensesAmount-input').type('500').should('have.class', 'ng-valid')
        cy.get('#loanCount-input').select('0').should('have.class', 'ng-valid')
            //Validation
        cy.get('[data-test="navigator-compact-forward"]').click()
        cy.wait(8000)
            //Vérification Page Suivante
        cy.url().should('eq', 'https://fr-funnel.younited-credit.com/bank')
        cy.get('#content-bank-step').contains('Votre banque')
        cy.wait(2000)
    })

    it('Renseignement Banque', () => {
        //Renseigner Banque
        cy.Banque(credentials[2].banque, credentials[2].dateOuverture)
        cy.wait(8000)
            //Vérification Page Suivante
        cy.url().should('eq', 'https://fr-funnel.younited-credit.com/identity')
        cy.get('#content-identity-step').contains('Vos informations')
        cy.wait(2000)
    })

    it('Renseignement Identité', () => {
        //Renseigner Civilité
        cy.get('#GENDERCODE_MME').check({ force: true }).should('have.class', 'ng-valid')
        cy.identité(credentials[2].nom, credentials[2].prenom, credentials[2].jourNais, credentials[2].moisNais, credentials[2].dateNais, credentials[2].CPNais, credentials[2].villeNais)
            //Renseigner Nom Jeune Fille
        cy.get('#maidenName-input').type('JUJU').should('have.class', 'ng-valid')
            //Validation
        cy.get('[data-test="navigator-compact-forward"]').click()
        cy.wait(8000)
            //Vérification Page Suivante
        cy.url().should('eq', 'https://fr-funnel.younited-credit.com/partneridentity')
        cy.get('#content-partner-identity-step').contains('Les informations de votre conjoint')
        cy.wait(2000)
    })

    it('Renseignement Identité Conjoint', () => {
        //Renseigner Civilité
        cy.get('#GENDERCODE_M').check({ force: true }).should('have.class', 'ng-valid')
        cy.identité(credentials[2].nomCo, credentials[2].prenomCo, credentials[2].jourNaisCo, credentials[2].moisNaisCo, credentials[2].anneeNaisCo, credentials[2].CPNaisCo, credentials[2].villeNaisCo)
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
        cy.contact(credentials[2].portable, credentials[2].domicile, credentials[2].adresse, credentials[2].codePostal, credentials[2].ville, credentials[2].zone)
            //Renseigner Pays
        cy.get('#countryCode-input').select('BE').should('have.class', 'ng-valid')
            //Validation
        cy.get('[data-test="navigator-compact-forward"]').click()
        cy.wait(10000)
            //Vérification Page Suivante
        cy.url().should('eq', 'https://fr-funnel.younited-credit.com/offers/refused_reoptin')
        cy.wait(2000)
    })


})