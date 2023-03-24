let name = "Marcin";
let lastName = "Kieruzel"
const age = 38;

{
    let name = "Paweł"
    const age = "very young"
    lastName = "X"

    console.log("Inside block", name, lastName, age)
}

console.log("Outside block", name, lastName, age)


