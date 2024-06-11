function calcularCompra() {
    var nome = document.getElementById("nome").value;
    var codigo = document.getElementById("codigo").value;
    var qtd = parseInt(document.getElementById("qtd").value);

    var valorcompra = qtd * 1.99;

    var resultado = document.getElementById("resultado");
    resultado.innerHTML = "----------------------------------------------<br>";
    resultado.innerHTML += "Cliente: " + nome + "<br>";
    resultado.innerHTML += "Código do Produto: " + codigo + "<br>";
    resultado.innerHTML += "Valor Total da Compra: R$" + valorcompra.toFixed(2);
}
