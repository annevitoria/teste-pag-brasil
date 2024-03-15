const express = require ('express')
const bodyParser = require ('body-parser')
const {checkErrorNome, checkErrorEmail, checkErrorCompany, checkErrorWebsite, checkErrorPhone, checkErrorInquiry} = require('./validations')

const app = express()
app.use(bodyParser.json())


app.post('/api/form', (request, response) => {      // caminho da API
    const  {nome, email, company, website, phone, inquiry}= request.body; 
    

    if (!checkErrorNome(nome)){
        response.status(412).json({
            "sucesso": false, "erro": "Campo nome inválido."
        })

        return
    }

    if (!checkErrorEmail(email)){
        response.status(412).json({
            "sucesso": false, "erro": "Campo email inválido."
        })
        return
    }

    if (!checkErrorCompany(company)){
        response.status(412).json({
            "sucesso": false, "erro": "Campo company inválido."
        })
        return
    }

    if (!checkErrorWebsite(website)){
        response.status(412).json({
            "sucesso": false, "erro": "Campo website inválido."
        })
        return
    }

    if (!checkErrorPhone(phone)){
        response.status(412).json({
            "sucesso": false, "erro": "Campo phone inválido."
        })
        return
    }
    
    if (!checkErrorInquiry(inquiry)){
        response.status(412).json({
            "sucesso": false, "erro": "Campo inquiry inválido."
        })
        return
    }
    response.status(200).json({"sucesso": true})     
})

app.listen(5000, () => console.log('Servidor online'))