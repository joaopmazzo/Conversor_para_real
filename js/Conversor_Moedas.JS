function calc() {

    var moeda = document.getElementById('moeda').value
    var valor = parseFloat(document.getElementById('valorDigitado').value)

    if (moeda === "dolar") {
        valorReal = valor * 5.51
        alert("O valor é equivalente a R$ " + (valorReal).toFixed(2))
    }
    else if (moeda === "euro") {
        valorReal = valor * 6.57
        alert("O valor é equivalente a R$ " + (valorReal).toFixed(2))
    }

}
