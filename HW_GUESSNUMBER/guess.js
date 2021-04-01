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




button.onclick = function(){
    container.appendChild(inputMax);
    container.appendChild(inputMin);
    container.appendChild(inputAtempts);
    container.appendChild(buttonGenerate);
    guess.appendChild(container);
};




