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

function concatName(names) {
  return `${names[names.length - 1]}, ${names[0]}`;
}

// Desafio 4 - Crie a função footballPoints

function footballPoints(wins, ties) {
  let resultado = wins * 3 + ties * 1;
  return resultado;
}

// Desafio 5 - Crie a função highestCount

function highestCount(numberArray) {
  let highestNumber = numberArray[0];
  let highestNumberCount = 0;
  for (let i = 0; i < numberArray.length; i += 1) {
    if (numberArray[i] > highestNumber) {
      highestNumber = numberArray[i];
    }
  }
  for (let i = 0; i < numberArray.length; i += 1) {
    if (numberArray[i] === highestNumber) {
      highestNumberCount += 1;
    }
  }
  return highestNumberCount;
}

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
      retorno = `O valor da área do triângulo é de: ${calcTriangleArea(
        base,
        height
      )}`;
      break;
    case 'retângulo':
      retorno = `O valor da área do retângulo é de: ${calcRectangleArea(
        base,
        height
      )}`;
      break;
    default:
      retorno = `Não foi possível fazer o cálculo, insira uma forma geométrica válida`;
      break;
  }
  return retorno;
}

// Desafio 7 - Crie a função catAndMouse

function catAndMouse(mouse, cat1, cat2) {
  let distcat1 = Math.abs(mouse - cat1);
  let distcat2 = Math.abs(cat2 - mouse);

  if (distcat1 < distcat2) {
    return 'cat1';
  } else if (distcat1 > distcat2) {
    return 'cat2';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8 - Crie a função fizzBuzz

function fizzBuzz (array) {
  let retorno = [];
  for (let index in array) {
    if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      retorno.push('fizzBuzz');
    } else if (array[index] % 3 === 0 && array[index] % 5 !== 0) {
      retorno.push('fizz');
    } else if (array[index] % 3 !== 0 && array[index] % 5 === 0) {
      retorno.push('buzz');
    } else {
      retorno.push('bug!')
    }
}
return retorno
}

// Desafio 9 - Crie a função encode e a função decode

function encode(string) {
  let splited = string.split('');
  for (let index = 0; index < splited.length; index += 1) {
    if (splited[index] == 'a') {
      splited[index] = 1;
    } else if (splited[index] == 'e') {
      splited[index] = 2;
    } else if (splited[index] == 'i') {
      splited[index] = 3;
    } else if (splited[index] == 'o') {
      splited[index] = 4;
    } else if (splited[index] == 'u') {
      splited[index] = 5;
    }
  } return splited.join('');
}

function decode (string) {
  let splited = string.split('');
  for (let index = 0; index < splited.length; index += 1) {
    if(splited[index] == 1) {
      splited[index] = 'a';
    } else if (splited[index] == 2){
      splited[index] = 'e';
    } else if (splited[index] == 3){
      splited[index] = 'i';
    } else if (splited[index] == 4){
      splited[index] = 'o';
    } else if (splited[index] == 5){
      splited[index] = 'u';
    }
  } return splited.join('');
}


// Desafio 10 - Crie a função techList

// Não modifique essas linhas
module.exports = {
  calcTriangleArea:
    typeof calcTriangleArea === 'function' ? calcTriangleArea : () => {},
  calcRectangleArea:
    typeof calcRectangleArea === 'function' ? calcRectangleArea : () => {},
  calcAllAreas: typeof calcAllAreas === 'function' ? calcAllAreas : () => {},
  catAndMouse: typeof catAndMouse === 'function' ? catAndMouse : () => {},
  compareTrue: typeof compareTrue === 'function' ? compareTrue : () => {},
  concatName: typeof concatName === 'function' ? concatName : () => {},
  decode: typeof decode === 'function' ? decode : () => {},
  encode: typeof encode === 'function' ? encode : () => {},
  fizzBuzz: typeof fizzBuzz === 'function' ? fizzBuzz : () => {},
  footballPoints:
    typeof footballPoints === 'function' ? footballPoints : () => {},
  highestCount: typeof highestCount === 'function' ? highestCount : () => {},
  splitSentence: typeof splitSentence === 'function' ? splitSentence : () => {},
  techList: typeof techList === 'function' ? techList : () => {},
};
