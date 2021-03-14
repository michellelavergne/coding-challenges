document.querySelector('#submit').addEventListener('click', convert)



function convert () {
    const selseeyus = document.querySelector('#toConvert').value
    const convertedValue = Math.round((5/9) * (selseeyus - 32))
    document.querySelector('#placeToPutResult').innerText = convertedValue
    

}