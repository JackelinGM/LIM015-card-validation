import validator from "./validator.js"
//console.log(validator);

const tarjeta = document.querySelector('#tarjeta'),
    btnAbrirFormulario = document.querySelector('#btn-abrir-formulario'),
    formulario = document.querySelector('#formulario-tarjeta');

tarjeta.addEventListener('click', () => {
    tarjeta.classList.toggle('active');
});

btnAbrirFormulario.addEventListener('click', () => {
    btnAbrirFormulario.classList.toggle('active');
    formulario.classList.toggle('active');
});

function capturaDatos(e) {
    e.preventDefault()
    let number = document.getElementById("inputNumero").value;

    if (validator.isValid(number) === true) {
        alert("!Tarjeta Valida¡");
    } else {
        alert("!Tarjeta no Valida¡");
    }

    //console.log(validator.isValid(number));
    //console.log(validator.maskify(number),"este es el resultado de maskify");
    let creditCardNumber = document.getElementById("creditCardNumber");
    return creditCardNumber.innerHTML = validator.maskify(number);
}

//--aqui termina la funcion

document.getElementById("enviar").addEventListener("click", capturaDatos);







