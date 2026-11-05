
function mudarCor() {
    let cor = document.getElementById("cores").value;
    let texto = document.getElementById("texto");

    if (cor == "purple") {
        texto.style.color = "purple";
    }
    else if (cor == "yellow") {
        texto.style.color = "yellow";
    }
    else if (cor == "blue") {
        texto.style.color = "blue";
    }
}
