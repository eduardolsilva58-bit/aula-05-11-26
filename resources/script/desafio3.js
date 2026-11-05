
let preto = document.querySelector("#botao");

preto.addEventListener("click", () => {

    let numero1 = Number(document.querySelector("#numero1").value);
    let numero2 = Number(document.querySelector("#numero2").value);

    let resultado = document.querySelector("#resultado");

    if (numero1 > numero2) {
        resultado.innerHTML = "O maior número é: " + numero1;
    }
    else if (numero2 > numero1) {
        resultado.innerHTML = "O maior número é: " + numero2;
    }
    else {
        resultado.innerHTML = "Os dois números são iguais!";
    }

});
