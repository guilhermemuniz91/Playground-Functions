// Desafio 1 - Crie a função compareTrue

function compareTrue(boolean1, boolean2) {
  if (boolean1 === true && boolean2 === true) {
    return true;
  }
  return false;
}

// Desafio 2 - Crie a função splitSentence

function splitSentence(array) {
  return array.split(' ');
}

// Desafio 3 - Crie a função concatName

function concatName() {
  let ultimoItem = concatName.length - 1;
  let primeiroItem = concatName[0];
  return ultimoItem, primeiroItem;
}

// Desafio 4 - Crie a função footballPoints

function footballPoints(wins, ties) {
  let resultado = wins * 3 + ties * 1;
  return resultado;
}

// Desafio 5 - Crie a função highestCount

/* function highestCount (array) {
  let Count = 0;
  let maiorNumero = array[0];

  for (let index = 0; index < arguments.length; index += 1) {
    if (arguments[index] > Count) {
      count = arguments[i];
    }
  }
  return count
} */

// Desafio 6 - Crie as funções calcTriangleArea, calcRectangleArea e calcAllAreas

function calcTriangleArea(base, height) {
  return (base * height) / 2;
}
function calcRectangleArea(base, height) {
  return base * height;
}
function calcAllAreas(base, height, form) {
  let retorno = ``;
  switch (form) {
  case 'triângulo':
    retorno = `O valor da área do triângulo é de: ${calcTriangleArea(base, height)}`;
    break;
  case 'retângulo':
    retorno = `O valor da área do retângulo é de: ${calcRectangleArea(base, height)}`;
    break;
  default:
    retorno = `Não foi possível fazer o cálculo, insira uma forma geométrica válida`;
  break;
  }
  return retorno;
}

// Desafio 7 - Crie a função catAndMouse

// Desafio 8 - Crie a função fizzBuzz

// Desafio 9 - Crie a função encode e a função decode

// Desafio 10 - Crie a função techList

// Não modifique essas linhas
module.exports = {
  calcTriangleArea:
    typeof calcTriangleArea === 'function' ? calcTriangleArea : () => { },
  calcRectangleArea:
    typeof calcRectangleArea === 'function' ? calcRectangleArea : () => { },
  calcAllAreas: typeof calcAllAreas === 'function' ? calcAllAreas : () => { },
  catAndMouse: typeof catAndMouse === 'function' ? catAndMouse : () => { },
  compareTrue: typeof compareTrue === 'function' ? compareTrue : () => { },
  concatName: typeof concatName === 'function' ? concatName : () => { },
  decode: typeof decode === 'function' ? decode : () => { },
  encode: typeof encode === 'function' ? encode : () => { },
  fizzBuzz: typeof fizzBuzz === 'function' ? fizzBuzz : () => { },
  footballPoints:
    typeof footballPoints === 'function' ? footballPoints : () => { },
  highestCount: typeof highestCount === 'function' ? highestCount : () => { },
  splitSentence: typeof splitSentence === 'function' ? splitSentence : () => { },
  techList: typeof techList === 'function' ? techList : () => { },
};
