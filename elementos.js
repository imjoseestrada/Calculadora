window.onload = function() {
    const textoBotones = ['AC', 'DEL', '+/-', '÷', '7', '8', '9', '×', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '=']

    let contBotones = document.getElementsByClassName('botones')[0]
    
    for (let i = 0; i < textoBotones.length; i++) {
        let nuevoBoton = document.createElement('div')
        let texto = document.createTextNode(textoBotones[i])
        nuevoBoton.appendChild(texto)

        if(textoBotones[i] == 'AC') {
            nuevoBoton.setAttribute('data-limpiar', '')
        } else if (textoBotones[i] == 'DEL') {
            nuevoBoton.setAttribute('data-eliminar', '')
        } else if (textoBotones[i] == '÷' || textoBotones[i] == '×' || textoBotones[i] == '-' || textoBotones[i] == '+') {
            nuevoBoton.setAttribute('data-operador', '')
        } else if (textoBotones[i] == '+/-') {
            
        } else if (textoBotones[i] == '=') {
            nuevoBoton.setAttribute('data-igual', '')
        } else {
            nuevoBoton.setAttribute('data-numero', '')

            if (textoBotones[i] == 0) {
                nuevoBoton.setAttribute('id', 'doble')
            }
        }
        contBotones.appendChild(nuevoBoton)
    }
}