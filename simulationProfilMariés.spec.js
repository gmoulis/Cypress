//--Test Set Simulation Credit Profil Marié--
describe('Pour le profil Marié', () => {

    //--Cas Passant--
    it('Renseignements Type Crédit', () => {
        //Aller sur l'url d'YC
        cy.visit('https://www.younited-credit.com/')
            //Sélection du type de projet
        cy.get('#projectSelect').select('VACATION')
            //Sélection Montant
        cy.get('#amount').select('6K')
            //Sélection Durée de Remboursement
        cy.get('#creditMaturity').select('M12')
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
        cy.get('#email-input').type('oliveetom@yopmail.com').should('have.class', 'ng-valid')
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
        cy.get('#maritalStatus-input').select('MARRIED').should('have.class', 'ng-valid')
            //Selection Nbr Enfant
        cy.get('#childNumberPropal-input').select('2').should('have.class', 'ng-valid')
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
        cy.get('#housingStatus-input').select('HOME_OWNERSHIP_WITH_MORTGAGE').should('have.class', 'ng-valid')
            //Selection Mois d'entrée
        cy.get('#housingStatusFrom-input-month').type('12').should('have.class', 'ng-valid')
            //Selection Année d'entrée
        cy.get('#housingStatusFrom-input-year').type('2018').should('have.class', 'ng-valid')
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
        cy.get('#activitySector-input').select('PRIVATE_SECTOR').should('have.class', 'ng-valid')
            //Selection Profession
        cy.get('#profession-input').select('SENIOR_EXECUTIVE').should('have.class', 'ng-valid')
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
        cy.get('#partnerActivitySector-input').select('PUBLIC_SECTOR').should('have.class', 'ng-valid')
            //Selection Profession
        cy.get('#partnerProfession-input').select('POLICEMAN_FIREMAN_MILITARY').should('have.class', 'ng-valid')
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
        cy.get('#mainIncome-input').type('4000').should('have.class', 'ng-valid')
            //Renseignement Conjoint
        cy.get('#coIncome-input').type('4000').should('have.class', 'ng-valid')
            //Renseignement APL
        cy.get('#housingAssistance-input').type('0').should('have.class', 'ng-valid')
            //Renseignement Revenus Sup
        cy.get('#additionalIncome-input').type('1500').should('have.class', 'ng-valid')
            //Validation
        cy.get('[data-test="navigator-compact-forward"]').click()
        cy.wait(8000)
            //Vérification Page Suivante
        cy.url().should('eq', 'https://fr-funnel.younited-credit.com/outcomes')
        cy.get('#content-outcomes-step').contains('Vos charges mensuelles')
        cy.wait(2000)
    })

    it('Renseignement Charges', () => {
        //Renseignement Mensualité Prêt
        cy.get('#mortgageAmount-input').type('1200').should('have.class', 'ng-valid')
            //Selection Pension Ali
        cy.get('#childSupportPaymentsAmount-input').type('0').should('have.class', 'ng-valid')
            //Renseignement Frais de Garde
        cy.get('#childCareExpensesAmount-input').type('500').should('have.class', 'ng-valid')
            //Selection Crédit en Cours
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
        cy.get('#bankCode-input').select('SOCIETE_GENERALE').should('have.class', 'ng-valid')
            //Date Ouverture Compte
        cy.get('#bankFrom-input-year').type('2015').should('have.class', 'ng-valid')
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
        cy.get('#GENDERCODE_MME').check({ force: true }).should('have.class', 'ng-valid')
            //Renseigner Nom
        cy.get('#lastName-input').type('TITI').should('have.class', 'ng-valid')
            //Renseigner Nom Jeune Fille
        cy.get('#maidenName-input').type('JUJU').should('have.class', 'ng-valid')
            //Renseigner Prénom
        cy.get('#firstName-input').type('BOUBOU').should('have.class', 'ng-valid')
            //Renseigner Jour Naissance
        cy.get('#dateOfBirth-input-day').type('30').should('have.class', 'ng-valid')
            //Renseigner Mois Naissance
        cy.get('#dateOfBirth-input-month').type('01').should('have.class', 'ng-valid')
            //Renseigner Année Naissance
        cy.get('#dateOfBirth-input-year').type('1954').should('have.class', 'ng-valid')
            //Renseigner CP Naissance
        cy.get('#postalCode-input').type('36000').should('have.class', 'ng-valid')
            //Sélectionner Ville Naissance
        cy.get('#city-input').select('3604436000').should('have.class', 'ng-valid')
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
            //Renseigner Nom
        cy.get('#lastName-input').type('TOM').should('have.class', 'ng-valid')
            //Renseigner Prénom
        cy.get('#firstName-input').type('OMAR').should('have.class', 'ng-valid')
            //Renseigner Jour Naissance
        cy.get('#dateOfBirth-input-day').type('25').should('have.class', 'ng-valid')
            //Renseigner Mois Naissance
        cy.get('#dateOfBirth-input-month').type('09').should('have.class', 'ng-valid')
            //Renseigner Année Naissance
        cy.get('#dateOfBirth-input-year').type('1961').should('have.class', 'ng-valid')
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
        cy.get('#cellPhoneNumber-input').type('0600000000')
            //Renseigner Fixe
        cy.get('#phoneNumber-input').type('0100000000')
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
            //Validation
        cy.get('[data-test="navigator-compact-forward"]').click()
        cy.wait(10000)
            //Vérification Page Suivante
        cy.url().should('eq', 'https://fr-funnel.younited-credit.com/offers/refused_reoptin')
        cy.wait(2000)
    })


})