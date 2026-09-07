const form = document.getElementById("formNotas");
const resultado = document.getElementById("resultado");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const nota1 = Number(document.getElementById("nota1").value);
    const nota2 = Number(document.getElementById("nota2").value);
    const nota3 = Number(document.getElementById("nota3").value);

    const media = (nota1 + nota2 + nota3) / 3;

    if(media >= 7){
        resultado.textContent = `Média: ${media.toFixed(2)} - Aprovado`;
        resultado.style.color = "green";
    }else{
        resultado.textContent = `Média: ${media.toFixed(2)} - Reprovado`;
        resultado.style.color = "red";
    }
});