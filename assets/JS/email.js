const btn = document.querySelector('button')
const inputs = document.querySelector('form')
btn.addEventListener('click', () => {

    const name = (inputs.elements["name"].value).trim()
    const email = (inputs.elements["email"].value).trim()
    const msg = (inputs.elements["message"].value.trim())
    const phone = (inputs.elements["phone"].value).trim()
    if (!name.length > 0 || !email.length > 0 || !msg.length > 0 || !phone.length > 0) {
        alert("Esse campo é obrigatório")
        return
    }
    email.send({
        Host: "smtp.mailtrap.io",
        Username: "fe398f530b3dee",
        Password: "9ae44c79299335",
        To: "projetos4@valcucinebrasil.com.br",
        From: email,
        Subject: "Show, você tem um novo orçamento",
        Body: msg + "<br>" + name + "<br>" + phone
    }).then(msg => alert("Sua mensagem foi enviada com sucesso!")
})