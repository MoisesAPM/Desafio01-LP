let X = parseFloat(prompt('Digite o primeiro número:'))
let Y = parseFloat(prompt('Digite o segundo número:'))

const Sum = X + Y
alert(`A soma dos dois números é: ${Sum}`)

const Sub = X - Y
alert(`A subtração entre os dois números é: ${Sub}`)

const Mult = X * Y
alert(`A multiplicação dos dois números é: ${Mult}`)

const Div = (X / Y).toFixed(2)
alert(`A divisão dos dois números é: ${Div}`)

const Rest = X % Y
alert(`O resto da divisão dos dois números é: ${Rest}`)

let parImp = (Sum % 2 == 0)
if (parImp) {
  alert(`O resultado da soma dos dois números é par.`)
} else {
  alert(`O resultado da soma é impar.`)
}

let equality = X === Y;
if (X === Y) {
  alert(`Os números são iguais`)
} else {
  alert(`Os numéros são diferentes.`)
}

