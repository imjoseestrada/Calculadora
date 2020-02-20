class Calculadora {
    constructor(operacionAnteriorElementoTexto, operacionActualElementoTexto) {
        this.operacionAnteriorElementoTexto = operacionAnteriorElementoTexto
        this.operacionActualElementoTexto = operacionActualElementoTexto
        this.limpiar();
    }

    limpiar() {
        this.operacionActual = ''
        this.operacionAnterior = ''
        this.operacion = undefined
    }

    eliminar() {
        this.operacionActual = this.operacionActual.toString().slice(0, -1)
    }

    agregarNumero(numero) {
        if(numero === '.' && this.operacionActual.includes('.')) return 
        this.operacionActual = this.operacionActual.toString() + numero.toString()
    }

    escogerOperacion(operacion) {
        if(this.operacionActual === '') return
        if(this.operacionAnterior !== '') {
            this.calcular()
        }
        this.operacion = operacion
        this.operacionAnterior = this.operacionActual
        this.operacionActual = ''
    }

    calcular() {
        let calculo
        const anterior = parseFloat(this.operacionAnterior)
        const actual = parseFloat(this.operacionActual)
        if (isNaN(anterior) || isNaN(actual)) return
        switch (this.operacion) {
            case '+':
                calculo = anterior + actual
                break
            case '-':
                calculo = anterior - actual
                break
            case '×':
                calculo = anterior * actual
                break
            case '÷':
                calculo = anterior / actual
                break
            default:
                return
        }
        this.operacionActual = calculo
        this.operacion = undefined
        this.operacionAnterior = ''
    }

    obtenerNumeroPantalla(numero) {
        const cadenaNumeros = numero.toString()
        const digitosEnteros = parseFloat(cadenaNumeros.split('.')[0])
        const digitosDecimales = cadenaNumeros.split('.')[1]
        let MostrarEnteros
        if(isNaN(digitosEnteros)) {
            MostrarEnteros = ''
        } else {
            MostrarEnteros = digitosEnteros.toLocaleString('en', {maximumFractionDigits: 0})
        }
        if(digitosDecimales != null) {
            return `${MostrarEnteros}.${digitosDecimales}`
        } else {
            return MostrarEnteros
        }
    }

    actualizarPantalla() {
        this.operacionActualElementoTexto.innerText = this.obtenerNumeroPantalla(this.operacionActual)
        if(this.operacion != null) {
            this.operacionAnteriorElementoTexto.innerText = `${this.obtenerNumeroPantalla(this.operacionAnterior)} ${this.operacion}`
        } else {
            this.operacionAnteriorElementoTexto.innerText = ''
        }
    }
}

const btnNumero = document.querySelectorAll('[data-numero]')
const btnOperador = document.querySelectorAll('[data-operador]')
const btnIgual = document.querySelector('[data-igual]')
const btnEliminar = document.querySelector('[data-eliminar-ultimo]')
const btnLimpiar = document.querySelector('[data-limpiar]');
const btnInvertir = document.querySelector('[data-invertir]')
const operacionAnteriorElementoTexto = document.querySelector('[data-operacion-anterior]')
const operacionActualElementoTexto = document.querySelector('[data-operacion-actual]')

const calculadora = new Calculadora(operacionAnteriorElementoTexto, operacionActualElementoTexto)

btnNumero.forEach(div => {
    div.addEventListener('click', () => {
        calculadora.agregarNumero(div.innerText)
        calculadora.actualizarPantalla()
    })
})

btnOperador.forEach(div => {
    div.addEventListener('click', () => {
        calculadora.escogerOperacion(div.innerText)
        calculadora.actualizarPantalla()
    })
})

btnIgual.addEventListener('click', div => {
    calculadora.calcular()
    calculadora.actualizarPantalla()
})

btnLimpiar.addEventListener('click', div => {
    calculadora.limpiar()
    calculadora.actualizarPantalla()
})

btnEliminar.addEventListener('click', div => {
    calculadora.eliminar()
    calculadora.actualizarPantalla()
})
