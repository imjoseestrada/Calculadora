function formarExpresion(char){
    var expresion = document.getElementById("pantalla");

    expresion.value = expresion.value + char;
}

function calcular(){
    var resultado = eval(document.frmCalc.pantalla.value);
    document.frmCalc.pantalla.value = Math.fround(resultado);
}

function limpiar(){
    document.frmCalc.pantalla.value = null;
}