var textoBtns = ['AC', 'DEL', '+/-', '÷', '7', '8', '9', '×', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '=']

var calc = document.getElementsByName('frmCalc')[0]

calc.innerHTML += '<div class="pantalla"></div>'
calc.innerHTML += '<div class="botones"></div>'

pantalla = document.getElementsByClassName('pantalla')[0]

pantalla.innerHTML += '<div data-operacion-anterior class="operacionAnterior"></div>'
pantalla.innerHTML += '<div data-operacion-actual class="operacionActual"></div>'

botones = document.getElementsByClassName('botones')[0]

for(let i = 0; i < (textoBtns.length); i++){
  botones.innerHTML += '<div>' + textoBtns[i] + '</div>'
  boton = document.getElementsByClassName('botones')[0].getElementsByTagName('div')[i]

  if(textoBtns[i] === 'AC') {
    boton.setAttribute('data-limpiar', '')
  } else if(textoBtns[i] === 'DEL') {
    boton.setAttribute('data-eliminar-ultimo', '')
  } else if(textoBtns[i] === '+/-'){
    boton.setAttribute('data-invertir', '')
  } else if(textoBtns[i] === '÷' || textoBtns[i] === '×' || textoBtns[i] === '-' || textoBtns[i] === '+') {
    boton.setAttribute('data-operador', '')
  } else if(textoBtns[i] === '=') {
    boton.setAttribute('data-igual', '')
  } else {
    boton.setAttribute('data-numero', '')
    if(textoBtns[i] === '0') {
      boton.setAttribute('id', 'doble')
    }
  }
}