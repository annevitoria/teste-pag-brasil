function checkErrorNome(nome){
    if (nome == '' || nome == undefined){       //Função para verificar se o campo nome está vazio
       return false
    }

    if (nome.length > 255){         //Função para informar o numero maximo de caractere
        return false
    }

    const temEspecial = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(nome);

    if (temEspecial){       //Função para verificar se no campo possui algum caractere invalido
        return false
    }

    return true
}
function checkErrorEmail(email){
    if (email == '' || email == undefined){           //Função para verificar se o campo email está vazio
       return false
    }
    
    if (email.length > 150){            //Função para informar o numero maximo de caractere
        return false
    }

    const temEspecial = /[!#$%^&*()_+\-=\[\]{};':"\\|,<>\/?]+/.test(email);

    if (temEspecial){       //Função para verificar se no campo possui algum caractere invalido
        return false
    }

    const emailformat = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    if (!emailformat){      //Função para informar o padrão do e-mail
        return false
    }
    return true
}

function checkErrorCompany(company){
    if (company == '' || company == undefined){         //Função para verificar se o campo company está vazio
       return false
    }

    if (company.length > 200){              //Função para informar o numero maximo de caractere
        return false
    }

    const temEspecial = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(company);

    if (temEspecial){       //Função para verificar se no campo possui algum caractere invalido
        return false
    }

    return true
}

function checkErrorWebsite(website){
    if (website == '' || website == undefined){             //Função para verificar se o campo websiteestá vazio
       return false
    }

    if (website.length > 200){          //Função para informar o numero maximo de caractere
        return false
    }

    const temEspecial = /[!@#$%^&*()_+\-=\[\]{};'"\\|,<>\?]+/.test(website);

    if (temEspecial){       //Função para verificar se no campo possui algum caractere invalido
        return false
    }

    return true
}

function checkErrorPhone(phone){
    if (phone == '' || phone == undefined){             //Função para verificar se o campo phone está vazio
       return false
    }

    if (phone.length > 15){         //Função para informar o numero maximo de caractere
        return false
    }

    const temEspecial = /[!@#$%^&*_+\=\[\]{};':"\\|,.<>\/?]+/.test(phone);
    const temLetra = /[a-zA-Z]/.test(phone);
    const phoneMascara = /^\(\d{2}\) \d{5}-\d{4}$/.test(phone);

    if (temEspecial || temLetra){       //Função para verificar se no campo possui algum caractere invalido
        return false
    }
    if (!phoneMascara){     //Função para verificar se os dados estão com a mascara (xx) xxxxx-xxxx
        return false
    }

    return true
}

function checkErrorInquiry(inquiry){
    if (inquiry == '' || inquiry == undefined){             //Função para verificar se o campo inquiry está vazio
       return false
    }

    if (inquiry.length > 500){               //Função para informar o numero maximo de caractere
        return false
    }

    return true
}

module.exports = { checkErrorNome, checkErrorEmail, checkErrorCompany, checkErrorWebsite, checkErrorPhone, checkErrorInquiry };