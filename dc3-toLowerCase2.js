document.querySelector('#clickToConvert').addEventListener('click', convertToLowerCase)

function convertToLowerCase () {
  const words = document.querySelector('#placeToType').value.toLowerCase()  
  document.querySelector('#lowerCaseResult').innerText = words
}


// take input value and store in variable
// press button to convert to lower case
// put back into the dom