
let preto = document.querySelector("#meuBotão");

let body = document.querySelector("body");

preto.addEventListener("click", () => {
    body.classList.toggle("dark");
    body.classList.toggle("blueTheme");
});
