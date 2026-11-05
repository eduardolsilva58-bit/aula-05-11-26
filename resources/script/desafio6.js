  const formulario = document.getElementById("formulario");

        formulario.addEventListener("submit", function(event) {
            event.preventDefault();

            const numero = document.getElementById("numero").value;
            const resultado = document.getElementById("resultado");

            if (numero.trim() === "" || !Number.isInteger(Number(numero))) {
                resultado.textContent = "Digite um número inteiro válido!";
                resultado.style.color = "red";
                return;
            }

            if (Number(numero) % 2 === 0) {
                resultado.textContent = "O número é PAR! ☺";
                resultado.style.color = "green";
            } else {
                resultado.textContent = "O número é ÍMPAR! ☺";
                resultado.style.color = "blue";
            }
        });
