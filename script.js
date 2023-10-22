const form = document.querySelector(".form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const messageTextarea = document.querySelector("#message");

console.log(form, nameInput, emailInput);


form.addEventListener("submit", (event) => {
    event.preventDefault();

//verifica se o nome está vazio
    if(nameInput.value === ""){
        alert("O campo não pode ficar vazio!");
        return;
    }


//verifica se o email preenchido é válido
    if(emailInput.value === "" || !isEmailValid(emailInput.value)){
        alert("O campo não pode ficar vazio!");
        return;
    }

//se todos os campos estiverem preenchidos, envia o form
    form.submit();

});

//função que vai validar o email
function isEmailValid(email) {
    //regex para validar o email
    const emailregex = new RegExp(
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    );

    if(emailregex.test(email)) {
        return true
    }

    return false;
}

