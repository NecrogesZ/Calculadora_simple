function suma() {
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var resultado = num1 + num2;
    document.getElementById("resultado").value = resultado;
}

function resta() {
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var resultado = num1 - num2;
    document.getElementById("resultado").value = resultado;
}

function multiplica() {
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var resultado = num1 * num2;
    document.getElementById("resultado").value = resultado;
}

function divide() {
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var resultado = num1 / num2;
    document.getElementById("resultado").value = resultado;
}
function potencia() {
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var resultado = num1 ** num2;
    document.getElementById("resultado").value = resultado;
}

