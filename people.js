// Importa la tua funzione da names.js
const fullName = require("./names.js")
// Importa la tua funzione da hobbies.js
const personHobbies = require("./hobbies.js")
//  Crea una funzione che non ha parametri. La funzione dovrebbe restituire un oggetto con due proprietà: fullName ed hobbies. All'interno della tua funzione, usa le tue due funzioni precedenti per costruire l'oggetto.
function person() {
    const name = fullName('Alberto','Cadorin')
    const hobbies = personHobbies('Video Games', 'Cucinare','Guardare Anime')
    return {
        fullName:`${name.firstName} ${name.lastName}`,
        hobbies: hobbies

    }
}

console.log(person())