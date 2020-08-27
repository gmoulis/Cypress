//--Test Set Simulation Credit Profil Celib--
describe('Pour le profil Célibataire', () => {

    //--Cas Passant--
    it('Renseignements Type Crédit', () => {
        //Aller sur l'url d'YC
        cy.visit('https://www.younited-credit.com/')
            //Sélection du type de projet
        cy.get('#projectSelect').select('NEWCAR')
            //Sélection Montant
        cy.get('#amount').select('1K')
            //Sélection Durée de Remboursement
        cy.get('#creditMaturity').select('M6')
            //Validation
        cy.get('#simulator_1 > .simulator > .simulator-select > .btn').click()
        cy.wait(8000)
            //Vérification Page Suivante
        cy.url().should('eq', 'https://fr-funnel.younited-credit.com/email')
        cy.get('#content-email-step').contains('Découvrez votre offre de prêt de')
        cy.wait(2000)
    })

    it('Renseignement Email', () => {
        //Renseigner Email
        cy.get('#email-input').type('tatatiti@yopmail.com').should('have.class', 'ng-valid')
            //Validation
        cy.get('[data-test="navigator-compact-forward"]').click()
        cy.wait(8000)
            //Vérification Page Suivante
        cy.url().should('eq', 'https://fr-funnel.younited-credit.com/familysituation')
        cy.get('#content-familysituation-step').contains('Votre situation familiale')
        cy.wait(2000)
    })

    it('Renseignement Situation Familiale', () => {
        //Selection Statut
        cy.get('#maritalStatus-input').select('SINGLE').should('have.class', 'ng-valid')
            //Selection Nbr Enfant
        cy.get('#childNumberPropal-input').select('0').should('have.class', 'ng-valid')
            //Validation
        cy.get('[data-test="navigator-compact-forward"]').click()
        cy.wait(8000)
            //Vérification Page Suivante
        cy.url().should('eq', 'https://fr-funnel.younited-credit.com/housing')
        cy.get('#content-housingsituation-step').contains('Votre logement')
        cy.wait(2000)
    })

    it('Renseignement Hébergement', () => {
        //Selection Type d'Hébergement
        cy.get('#housingStatus-input').select('TENANT').should('have.class', 'ng-valid')
            //Selection Mois d'entrée
        cy.get('#housingStatusFrom-input-month').type('03').should('have.class', 'ng-valid')
            //Selection Année d'entrée
        cy.get('#housingStatusFrom-input-year').type('2016').should('have.class', 'ng-valid')
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
        cy.get('#activitySector-input').select('INDEPENDENT').should('have.class', 'ng-valid')
            //Selection Profession
        cy.get('#profession-input').select('ENTERTAINMENT_WORKER').should('have.class', 'ng-valid')
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
        cy.get('#mainIncome-input').type('1500').should('have.class', 'ng-valid')
            //Renseignement APL
        cy.get('#housingAssistance-input').type('150').should('have.class', 'ng-valid')
            //Renseignement Revenus Sup
        cy.get('#additionalIncome-input').type('50').should('have.class', 'ng-valid')
            //Validation
        cy.get('[data-test="navigator-compact-forward"]').click()
        cy.wait(8000)
            //Vérification Page Suivante
        cy.url().should('eq', 'https://fr-funnel.younited-credit.com/outcomes')
        cy.get('#content-outcomes-step').contains('Vos charges mensuelles')
        cy.wait(2000)
    })

    it('Renseignement Charges', () => {
        //Renseignement Loyer Hors APL
        cy.get('#rentAmount-input').type('600').should('have.class', 'ng-valid')
            //Selection Crédit en Cours
        cy.get('#loanCount-input').select('1').should('have.class', 'ng-valid')
            //Renseignement Type Crédit
        cy.get('#type-input').select('PERSONAL_LOAN').should('have.class', 'ng-valid')
            //Renseignement Type Crédit
        cy.get('#loanAmount-input').type('50').should('have.class', 'ng-valid')
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
        cy.get('#bankCode-input').select('CAISSE_D_EPARGNE').should('have.class', 'ng-valid')
            //Date Ouverture Compte
        cy.get('#bankFrom-input-year').type('1999').should('have.class', 'ng-valid')
            //Validation
        cy.get('[data-test="navigator-compact-forward"]').click()
        cy.wait(8000)
            //Vérification Page Suivante
        cy.url().should('eq', 'https://fr-funnel.younited-credit.com/identity')
        cy.get('#content-identity-step').contains('Vos informations')
        cy.wait(2000)
    })

    it('Renseignement Identité', () => {
        //Renseigner Civilité
        cy.get('#GENDERCODE_MLLE').check({ force: true }).should('have.class', 'ng-valid')
            //Renseigner Nom
        cy.get('#lastName-input').type('MOUMOU').should('have.class', 'ng-valid')
            //Renseigner Prénom
        cy.get('#firstName-input').type('JIJI').should('have.class', 'ng-valid')
            //Renseigner Jour Naissance
        cy.get('#dateOfBirth-input-day').type('15').should('have.class', 'ng-valid')
            //Renseigner Mois Naissance
        cy.get('#dateOfBirth-input-month').type('06').should('have.class', 'ng-valid')
            //Renseigner Année Naissance
        cy.get('#dateOfBirth-input-year').type('1992').should('have.class', 'ng-valid')
            //Renseigner CP Naissance
        cy.get('#postalCode-input').type('36000').should('have.class', 'ng-valid')
            //Sélectionner Ville Naissance
        cy.get('#city-input').select('3604436000').should('have.class', 'ng-valid')
            //Validation
        cy.get('[data-test="navigator-compact-forward"]').click()
        cy.wait(8000)
            //Vérification Page Suivante
        cy.url().should('eq', 'https://fr-funnel.younited-credit.com/contact')
        cy.get('#content-contact-step').contains('Vos coordonnées')
        cy.wait(2000)
    })

    it('Renseignement Contact', () => {
        //Renseigner Portable
        cy.get('#cellPhoneNumber-input').type('0600000000').should('have.class', 'ng-valid')
            //Renseigner Fixe
        cy.get('#phoneNumber-input').type('0100000000').should('have.class', 'ng-valid')
            //Renseigner Adresse
        cy.get('#address-input').type('70 Rue du Général Leclerc').should('have.class', 'ng-valid')
            //Renseigner CP
        cy.get('#postalCode-input').type('60140').should('have.class', 'ng-valid')
            //Renseigner Ville
        cy.get('#city-input').select('6004260140').should('have.class', 'ng-valid')
            //Renseigner Zone
        cy.get('#countryZone-input').select('EUR').should('have.class', 'ng-valid')
            //Renseigner Pays
        cy.get('#countryCode-input').select('BE').should('have.class', 'ng-valid')
        cy.wait(4000)
            //Validation
        cy.get('[data-test="navigator-compact-forward"]').click()
        cy.wait(10000)
            //Vérification Page Suivante
        cy.url().should('eq', 'https://fr-funnel.younited-credit.com/offers/refused_reoptin')
        cy.wait(2000)
    })


})