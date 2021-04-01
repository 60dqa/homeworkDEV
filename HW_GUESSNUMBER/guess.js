var guess = document.querySelector('.guess');

var button = document.createElement('button');
button.innerHTML = "lets play";
button.setAttribute('class' , 'guess__button');
guess.appendChild(button);

var container = document.createElement('div');
container.setAttribute('class' , 'container');

var inputMin = document.createElement('input');
inputMin.setAttribute('class' , 'container__inputMin');
inputMin.setAttribute('type' , 'number');

var inputMax = document.createElement('input');
inputMax.setAttribute('class' , 'container__inputMax');
inputMax.setAttribute('type' , 'number');

var inputAtempts = document.createElement('input');
inputAtempts.setAttribute('class' , 'container__inputAtempts');
inputAtempts.setAttribute('type' , 'number');

var buttonGenerate = document.createElement('button');
buttonGenerate.setAttribute('class' , 'container__buttonGenerate');
buttonGenerate.setAttribute('type' , 'number');
buttonGenerate.innerHTML = 'Generate';

var page2 = document.createElement('div');
var inputPage2 = document.createElement('input');
var buttonStart = document.createElement('button');
buttonStart.innerHTML = 'Угадывай';
var buttonEndGame = document.createElement('button');
buttonEndGame.innerHTML = 'Канец';

page2.appendChild(inputPage2);
page2.appendChild(buttonStart);
page2.appendChild(buttonEndGame);

button.onclick = function(){
    guess.innerHTML ="Выбери диапазон от 0 до 200,количество попыток от 1 до 15 и попрбуй угдать число)";
    container.appendChild(inputMin);
    container.appendChild(inputMax);
    container.appendChild(inputAtempts);
    container.appendChild(buttonGenerate);
    guess.appendChild(container);
};


buttonGenerate.onclick = function() {

    inputMin = Number(inputMin.value);
    inputMax = Number(inputMax.value);
    inputAtempts = Number(inputAtempts.value);
    randomNumber = getRandom(inputMin , inputMax);
    console.log(randomNumber);
    guess.innerHTML = `Ты выбрал диапазон от ${inputMin} до  ${inputMax} 
    с количеством попыток - ${inputAtempts},попробуй угадать мое число))`;
    if (isValid(inputMin,inputMax,inputAtempts)){
        guess.innerHTML = `Ты выбрал диапазон от ${inputMin} до  ${inputMax} 
    с количеством попыток - ${inputAtempts},попробуй угадать мое число))`;
        guess.appendChild(page2);
    } else {
        guess.innerHTML = `go home`;
    }
    
    
};
var randomNumber = 0;
function getRandom(min, max) {
    randomNumber = Math.floor(Math.random() * (max - min) + min);
    return randomNumber;
  }

buttonStart.addEventListener('click' ,  function() {
    inputAtempts--;
    var userNumber = Number(inputPage2.value);
    console.log(userNumber);
    if (inputAtempts !== 0) {
        if (randomNumber === inputPage2){
            console.log('Y WIN');
        }
         else  {
            console.log('LOKS');
        }
    }else {
        guess.innerHTML = 'bay bay';
    }


    
});

function isValid(num1, num2, num3) {
    if (num1 < 1 ||num1 >= 200 ||
      num2 > 200 ||num2 < 1 ||
      num1 >= num2 ||
      num3 < 1 ||num3 > 15  ) {
      return false;
    } else if (num1 % 1 != 0 || num2 % 1 != 0 || num3 % 1 != 0) {
      return false;
    }
    return true;
  }