// Testes Automatizado para o formulario
describe('Validação dos campos do formulario', () => {
    beforeEach(() => {
      cy.visit('/Url') // URL do site do formulario
    })
  
// Validação do campo "Name"
    it('[TF01] Deve aceitar letras, espaços e números sem erro', () => {
      cy.get('input[name="Name"]').type('Anne Vitoria 26')
      cy.get('input[name="Name"]').should('have.value', 'Anne Vitoria 26')
    })
  
    it('[TF02] Deve aceitar até 255 caracteres e impedir entrada de mais caracteres', () => {
      cy.get('input[name="Name"]').type('A'.repeat(255))
      cy.get('input[name="Name"]').should('have.value', 'A'.repeat(255))
  
      cy.get('input[name="Name"]').type('B') // Tentativa de adicionar mais um caractere
      cy.get('input[name="Name"]').should('have.value', 'A'.repeat(255)) // Deve manter o valor máximo
    })
  
    it('[TF03] Deve exibir mensagem de erro ao deixar campo em branco', () => {
      cy.get('button[type="submit"]').click() // Submete o formulário 
  
      cy.get('.error-message').should('be.visible').and('contain', 'Campo obrigatório')   // menssagem de erro
    })
  
    it('[TF04] Deve exibir mensagem de erro ao preencher com caracteres inválidos', () => {
      cy.get('input[name="Name"]').type('!@#$%') // Preenche com caracteres inválidos
  
      cy.get('.error-message').should('be.visible').and('contain', 'Caracteres inválidos')
    })
  
  // Teste automatizado do campo de e-mail 
    it('[TF05] Deve aceitar letras, números, arroba e ponto sem erro', () => {
      cy.get('input[name="Email"]').type('anne.rodrigues11@gmail.com')
      cy.get('input[name="Email"]').should('have.value', 'anne.rodrigues11@gmail.com')
    })
  
    it('[TF06] Deve aceitar até 150 caracteres e impedir entrada de mais caracteres', () => {
      cy.get('input[name="Email"]').type('a'.repeat(150))
      cy.get('input[name="Email"]').should('have.value', 'a'.repeat(150))
  
      cy.get('input[name="Email"]').type('b') // Tentativa de adicionar mais um caractere
      cy.get('input[name="Email"]').should('have.value', 'a'.repeat(150)) // Deve manter o valor máximo
    })
  
    it('[TF07] Deve exibir mensagem de erro ao deixar campo em branco', () => {
      cy.get('button[type="submit"]').click() // Submete o formulário em branco
  
      cy.get('.error-message').should('be.visible').and('contain', 'Campo obrigatório')
    })
  
    it('[TF08] Deve exibir mensagem de erro ao preencher com caracteres inválidos', () => {
      cy.get('input[name="Email"]').type('anne.rodriguesgmailcom') // Preenche com caractere inválido
  
      cy.get('.error-message').should('be.visible').and('contain', 'E-mail inválido')
    })
  })

  // Teste automatizado do campo "Company"
  it('[TF09] Deve aceitar letras, espaços e números no campo "Company"', () => {
    cy.get('input[name="Company"]').type('Anne SA 2024')
    cy.get('input[name="Company"]').should('have.value', 'Anne SA 2024')
  })

  it('[TF10] Deve aceitar até 200 caracteres no campo "Company"', () => {
    cy.get('input[name="Company"]').type('A'.repeat(200))
    cy.get('input[name="Company"]').should('have.value', 'A'.repeat(200))

    cy.get('input[name="Company"]').type('B') // Tentativa de adicionar mais um caractere
    cy.get('input[name="Company"]').should('have.value', 'A'.repeat(200)) // Deve manter o valor máximo
  })

  it('[TF11] Deve exibir mensagem de erro ao deixar campo "Company" em branco', () => {
    cy.get('button[type="submit"]').click() // Submete o formulário em branco

    cy.get('.error-message').should('be.visible').and('contain', 'Campo obrigatório')
  })

  // Teste automatizado do campo Website
  it('[TF12] Deve aceitar até 200 caracteres no campo "Website" e impedir entrada de mais caracteres', () => {
    cy.get('input[name="Website"]').type('example.com'.repeat(25))
    cy.get('input[name="Website"]').should('have.value', 'example.com'.repeat(25))

    cy.get('input[name="Website"]').type('B') // Tentativa de adicionar mais um caractere
    cy.get('input[name="Website"]').should('have.value', 'example.com'.repeat(25)) // Deve manter o valor máximo
  })

  it('[TF13] Deve aceitar caracteres válidos no campo "Website"', () => {
    cy.get('input[name="Website"]').type('https://www.annevitoria.com')
    cy.get('input[name="Website"]').should('have.value', 'https://www.annevitoria.com')
  })

// Teste automatizado do campo "phone"
  it('[TF14] Deve aceitar apenas números, parênteses e hífen no campo "Phone"', () => {
    cy.get('input[name="Phone"]').type('(92) 12345-6789')
    cy.get('input[name="Phone"]').should('have.value', '(92) 12345-6789')
  })

  it('[TF15] Deve aceitar até 15 caracteres no campo "Phone"', () => {
    cy.get('input[name="Phone"]').type('1234567890123()')
    cy.get('input[name="Phone"]').should('have.value', '1234567890123()')
  })

// Teste automatizado do campo "Inquiry"
  it('[TF16] Deve aceitar até 500 caracteres no campo "Inquiry"', () => {
    cy.get('textarea[name="Inquiry"]').type('A'.repeat(500))
    cy.get('textarea[name="Inquiry"]').should('have.value', 'A'.repeat(500))

    cy.get('textarea[name="Inquiry"]').type('B') // Tentativa de adicionar mais um caractere
    cy.get('textarea[name="Inquiry"]').should('have.value', 'A'.repeat(500)) // Deve manter o valor máximo
  })

  it('[TF17] Deve aceitar letras, espaços e números no campo "Inquiry"', () => {
    cy.get('textarea[name="Inquiry"]').type('Ola, tudo bem')
    cy.get('textarea[name="Inquiry"]').should('have.value', 'Ola, tudo bem')
  })
