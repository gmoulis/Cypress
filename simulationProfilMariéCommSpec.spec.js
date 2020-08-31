//--Test Set Simulation Credit Profil Marié--
describe('Pour le profil Marié', () => {

    //--Cas Passant--
    it('Renseignements Type Crédit', () => {
        //Aller sur l'url d'YC
        cy.visit('https://www.younited-credit.com/')
            //Sélection du type de projet
        cy.projet('VACATION', '6K', 'M12')
        cy.wait(8000)
            //Vérification Page Suivante
        cy.url().should('eq', 'https://fr-funnel.younited-credit.com/email')
        cy.get('#content-email-step').contains('Découvrez votre offre de prêt de')
        cy.wait(2000)
    })

    it('Renseignement Email', () => {
        //Renseigner Email
        cy.email('oliveettom@yopmail.com')
        cy.wait(8000)
            //Vérification Page Suivante
        cy.url().should('eq', 'https://fr-funnel.younited-credit.com/familysituation')
        cy.get('#content-familysituation-step').contains('Votre situation familiale')
        cy.wait(2000)
    })

    it('Renseignement Situation Familiale', () => {
        cy.situationFamiliale('MARRIED', '2')
        cy.wait(8000)
            //Vérification Page Suivante
        cy.url().should('eq', 'https://fr-funnel.younited-credit.com/housing')
        cy.get('#content-housingsituation-step').contains('Votre logement')
        cy.wait(2000)
    })

    it('Renseignement Hébergement', () => {
        //Selection Type d'Hébergement
        cy.Logement('HOME_OWNERSHIP_WITH_MORTGAGE', '12', '2018')
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
        cy.Profession('PRIVATE_SECTOR', 'SENIOR_EXECUTIVE')
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
        cy.ProfessionCo('PUBLIC_SECTOR', 'POLICEMAN_FIREMAN_MILITARY')
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
        cy.Revenus('4000', '0', '1500')
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
        cy.Banque('SOCIETE_GENERALE', '2015')
        cy.wait(8000)
            //Vérification Page Suivante
        cy.url().should('eq', 'https://fr-funnel.younited-credit.com/identity')
        cy.get('#content-identity-step').contains('Vos informations')
        cy.wait(2000)
    })

    it('Renseignement Identité', () => {
        //Renseigner Civilité
        cy.get('#GENDERCODE_MME').check({ force: true }).should('have.class', 'ng-valid')
        cy.identité('TITI', 'BOUBOU', '30', '01', '1954', '36000', '3604436000')
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
        cy.identité('TOM', 'OMAR', '25', '09', '1951', '36000', '3604436000')
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
        cy.contact('0600000000', '0100000000', '70 Rue du Général Leclerc', '60140', '6004260140', 'EUR')
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