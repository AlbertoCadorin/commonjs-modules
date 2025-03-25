// Importa la tua funzione da names.js
const CreateName = require("./names.js")
// Importa la tua funzione da hobbies.js
const hobbies = require("./hobbies.js")
//  Crea una funzione che non ha parametri. La funzione dovrebbe restituire un oggetto con due proprietà: fullName ed hobbies. All'interno della tua funzione, usa le tue due funzioni precedenti per costruire l'oggetto.
function person() {
    
    return {
        fullName : CreateName('Alberto','Cadorin'),
        personHobbies: hobbies('Video Games', 'Cucinare','Guardare Anime')

    }
}

console.log(person())