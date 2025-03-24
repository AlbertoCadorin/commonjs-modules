
// Crea una funzione che accetta due parametri: firstName, lastName. La funzione dovrebbe restituire un oggetto con le proprietà firstName e lastName.
function  CreateName(firstName, lastName) {
    return {
        firstName,
        lastName
    }
}

console.log(CreateName())
// Esporta la funzione dal file
module.exports = CreateName