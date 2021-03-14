document.querySelector('#calcTotal').addEventListener('click', quickMafs)

function quickMafs () {
const firstNum = document.querySelector('#firstNum').value
const secondNum = document.querySelector('#secondNum').value
const thirdNum = document.querySelector('#thirdNum').value

let sum = firstNum * secondNum - thirdNum
console.log(sum)
  
document.querySelector('#placeToPutResult').innerText = sum

}




// Create a function that takes in 3 numbers. The function should return the first number multiplied by the second and then subtract the third. Console.log() the resulting value