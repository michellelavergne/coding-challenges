const words = document.querySelector('#paragraph').innerText.toLowerCase()

document.querySelector('#clickToChange').addEventListener('click', lowerCase)

function lowerCase() {
document.querySelector('#paragraph').innerText = words
  
}
/*
PSEUDO CODE
1. grab paragraph and make a variable
2. add event listener on the button
3. put lowercase back into DOM
*/