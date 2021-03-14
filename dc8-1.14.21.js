// Please create a function that takes in the name of a person. This function should add this person to a names list and let them know their position on the list. The names list should be created outside of the function. 

let listOfNames = ['Elena', 'Michelle', 'Fergie', 'Hannah', 'Rosie', 'Evelyn', 'Vanessa', 'Ali', 'Javi']


function onTheList (name) {
listOfNames.push(name)
console.log(`You are ${listOfNames.length} on the list`)
}

onTheList ('Sandi')