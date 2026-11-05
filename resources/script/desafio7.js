const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    // Pegar os valores digitados
    const nome = document.getElementById("nome").value;
    const nota1 = Number(document.getElementById("nota1").value);
    const nota2 = Number(document.getElementById("nota2").value);
    const nota3 = Number(document.getElementById("nota3").value);

    // Calcular a média
    const media = (nota1 + nota2 + nota3) / 3;

    // Mostrar o resultado
    const resultado = document.getElementById("resultado");

    if (media >= 7) {

        resultado.innerHTML = `Olá, ${nome}, você passou! Média: ${media.toFixed(2)}`;

        resultado.style.color = "green";

    } else {

        resultado.innerHTML = `Olá, ${nome}, você reprovou! Média: ${media.toFixed(2)}`;

        resultado.style.color = "red";

    }

});