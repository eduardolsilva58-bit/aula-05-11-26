
let botao = document.querySelector("#botao");

botao.addEventListener("click", () => {

    let numero1 = Number(document.querySelector("#numero1").value);

    let numero2 = Number(document.querySelector("#numero2").value);

    let resultado = document.querySelector("#resultado");

    let soma = numero1 + numero2;

    resultado.innerHTML = "O resultado da soma é: " + soma;

});