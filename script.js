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

//adding class names
container.className = 'container';
title.className = 'title';
textArea.className = 'textarea';
keyboard.className = 'keyboard';
info.className = 'info';

// header.className = 'header';
// main.className = 'main';
// footer.className = 'footer';

//adding content
title.innerText = 'Virtual keyboard';
info.innerText = `The virtual keyboard was created in operating system Windows.\n
Switch languages: Ctrl+Alt (on the left)`;

//adding to page
body.appendChild(container);
container.appendChild(header);
container.appendChild(main);
container.appendChild(footer);
header.appendChild(title);
main.appendChild(textArea);
main.appendChild(keyboard);
footer.appendChild(info);
