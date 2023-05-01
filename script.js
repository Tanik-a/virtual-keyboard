//creating elements
const body = document.querySelector('body');
const container = document.createElement('div');
const header = document.createElement('header');
const title = document.createElement('h1');
const main = document.createElement('main');
const textArea = document.createElement('textarea');
const keyboard = document.createElement('div');
const footer = document.createElement('footer');
const info = document.createElement('p');
const line1 = document.createElement('div');
const line2 = document.createElement('div');
const line3 = document.createElement('div');
const line4 = document.createElement('div');
const line5 = document.createElement('div');


//adding class names
container.className = 'container';
title.className = 'title';
textArea.className = 'textarea';
keyboard.className = 'keyboard';
info.className = 'info';
line1.className = 'line1';
line2.className = 'line2';
line3.className = 'line3';
line4.className = 'line4';
line5.className = 'line5';

//adding content
title.innerText = 'Virtual keyboard';
info.innerText = `The virtual keyboard was created in operating system Windows.`;

//adding to page
body.appendChild(container);
container.appendChild(header);
container.appendChild(main);
container.appendChild(footer);
header.appendChild(title);
main.appendChild(textArea);
main.appendChild(keyboard);
footer.appendChild(info);
keyboard.appendChild(line1);
keyboard.appendChild(line2);
keyboard.appendChild(line3);
keyboard.appendChild(line4);
keyboard.appendChild(line5);

/////////

const keys1 = [96, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61, 8]
const keys2 = [9, 113, 119, 101, 114, 116, 121, 117, 105, 111, 112, 91, 93, 92, 127]
const keys3 = [20, 97, 115, 100, 102, 103, 104, 106, 107, 108, 59, 39, 13]
const keys4 = [16, 122, 120, 99, 118, 98, 110, 109, 44, 46, 47, 38, 16]
const keys5 = [17, 18, 32, 18, 37, 40, 39, 17]

function createKeyboard(){
  let result1 = '';
  let result2 = '';
  let result3 = '';
  let result4 = '';
  let result5 = '';

  for(let i = 0; i < keys1.length; i++){
    switch(keys1[i]) {
      case 8:
        result1 = result1 + `<div class = "key-btn key-backspace" data = "` + keys1[i] + `">Backspace</div>`;
        break;
      default:
        result1 = result1 + `<div class = "key-btn key-upper" data = "` + keys1[i] + `">` + String.fromCharCode(keys1[i]) + `</div>`;
    }
  }
  for(let i = 0; i < keys2.length; i++){
    switch(keys2[i]) {
      case 9:
        result2 = result2 + `<div class = "key-btn key-tab" data = "` + keys2[i] + `">Tab</div>`;
        break;
      case 127:
        result2 = result2 + `<div class = "key-btn key-del" data = "` + keys2[i] + `">Del</div>`;
        break;
      default:
        result2 = result2 + `<div class = "key-btn key-upper" data = "` + keys2[i] + `">` + String.fromCharCode(keys2[i]) + `</div>`;
    }
  }
  for(let i = 0; i < keys3.length; i++){
    switch(keys3[i]) {
      case 13:
        result3 = result3 + `<div class = "key-btn key-enter" data = "` + keys3[i] + `">Enter</div>`;
        break;
      case 20:
        result3 = result3 + `<div class = "key-btn key-capslock" data = "` + keys3[i] + `">CapsLock</div>`;
        break;
      default:
        result3 = result3 + `<div class = "key-btn key-upper" data = "` + keys3[i] + `">` + String.fromCharCode(keys3[i]) + `</div>`;
      }
    }
  for(let i = 0; i < keys4.length; i++){
    switch(keys4[i]) {
      case 38:
        result4 = result4 + `<div class = "key-btn key-arrow" data = "` + keys4[i] + `"><img class = "arrow-up" src="images/arrow.png"></div>`;
        break;
      case 16:
        result4 = result4 + `<div class = "key-btn key-shift" data = "` + keys4[i] + `">Shift</div>`;
        break;
      default:
        result4 = result4 + `<div class = "key-btn key-upper" data = "` + keys4[i] + `">` + String.fromCharCode(keys4[i]) + `</div>`;
      }
    }
    for(let i = 0; i < keys5.length; i++){
    switch(keys5[i]) {
      case 17:
        result5 = result5 + `<div class = "key-btn key-ctrl" data = "` + keys5[i] + `">Ctrl</div>`;
        break;
      case 18:
        result5 = result5 + `<div class = "key-btn key-alt" data = "` + keys5[i] + `">Alt</div>`;
        break;
      case 32:
        result5 = result5 + `<div class = "key-btn key-space" data = "` + keys5[i] + `"></div>`;
        break;
      case 37:
        result5 = result5 + `<div class = "key-btn key-arrow" data = "` + keys5[i] + `"><img class = "arrow-left" src="images/arrow.png"></div>`;
        break;
      case 39:
        result5 = result5 + `<div class = "key-btn key-arrow" data = "` + keys5[i] + `"><img class = "arrow-right" src="images/arrow.png"></div>`;
        break;
      case 40:
        result5 = result5 + `<div class = "key-btn key-arrow" data = "` + keys5[i] + `"><img class = "arrow-down" src="images/arrow.png"></div>`;
        break;
      default:
        result5 = result5 + `<div class = "key-btn key-upper" data = "` + keys5[i] + `">` + String.fromCharCode(keys5[i]) + `</div>`;
    }
  }
  document.querySelector('.line1').innerHTML = result1;
  document.querySelector('.line2').innerHTML = result2;
  document.querySelector('.line3').innerHTML = result3;
  document.querySelector('.line4').innerHTML = result4;
  document.querySelector('.line5').innerHTML = result5;
}
createKeyboard();

//подсвечивает функциональные клавиши
document.addEventListener('keydown', function(event){
  document.querySelectorAll('.keyboard .key-btn').forEach(function(element){
    element.classList.remove('pressed');
  });
  document.querySelector('.keyboard .key-btn[data = "' + event.keyCode + '"]').classList.add('pressed');
})
//подсвечивает символы
document.addEventListener('keypress', function(event){
  document.querySelectorAll('.keyboard .key-btn').forEach(function(element){
    element.classList.remove('pressed');
  });
  document.querySelector('.keyboard .key-btn[data = "' + event.keyCode + '"]').classList.add('pressed');
})

document.querySelectorAll('.keyboard .key-btn').forEach(function(element){
  element.addEventListener('click', function (event){
    document.querySelectorAll('.keyboard .key-btn').forEach(function(element){
      element.classList.remove('pressed');
    })
    let code = this.getAttribute('data');
    this.classList.add('pressed');
  })
})

//печать букв в textarea
function printChar(event){
  const char = event.target.attributes.data.nodeValue;
  textArea.value += String.fromCharCode(char);
}
function printLetter(event){
  const letter = event.keyCode;
  textArea.value += String.fromCharCode(letter);
}

let keys = document.querySelectorAll('.key-btn');
[...keys].forEach(item => item.addEventListener('click', printChar));
document.addEventListener('keypress', printLetter);

//функциональность backspace
document.querySelector('.key-backspace').addEventListener('click', () => {
  textArea.value = textArea.value.substring(0, textArea.value.length - 2);
})

document.addEventListener('keydown', function (event){
  if(event.keyCode === 8){
    textArea.value = textArea.value.substring(0, textArea.value.length - 1);
  }
})

//функциональность capslock
document.querySelector('.key-capslock').addEventListener('click', function (event) {
  this.classList.toggle('checked');
  textArea.value = textArea.value.substring(0, textArea.value.length - 1);
  if(this.classList.contains('checked')){
    document.querySelectorAll('.key-upper').forEach(function(element){
    element.classList.add('caps');

    element.addEventListener('click', function (event){
    console.log(event)
    textArea.value = textArea.value.toUpperCase();
    })
  })
  }else{

    document.querySelectorAll('.key-upper').forEach(function(element){
    element.classList.remove('caps');
    element.addEventListener('click', function (event){
    console.log(event)
    textArea.value = textArea.value.toLowerCase();
    })
    })
    }
  })

document.addEventListener('keydown', function (event){
  if(event.keyCode === 20){
    document.querySelectorAll('.key-upper').forEach(function(element){
      element.classList.toggle('caps');
      element.addEventListener('click', function (event){
        textArea.value = textArea.value.toLowerCase();
      })
    })
    document.querySelector('.key-capslock').classList.toggle('checked');
    textArea.value = textArea.value.substring(0, textArea.value.length - 1);
  }
})
document.addEventListener('keydown', function (event){
  if(event.keyCode === 20){
    document.querySelectorAll('.key-upper').forEach(function(element){
      element.classList.toggle('caps');
      element.addEventListener('keydown', function (event){
        textArea.value = textArea.value.toLowerCase();
      })
    })
    document.querySelector('.key-capslock').classList.toggle('checked');
    textArea.value = textArea.value.substring(0, textArea.value.length - 1);
  }
})