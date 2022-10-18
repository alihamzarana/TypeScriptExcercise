// Question 3
// Name Cases: Store a person’s name in a variable, and 
// then print that person’s name in lowercase, uppercase, and titlecase.

const personName: String = 'Ali Hamza'
const titleCase = (str: String) => {

    return str.replace(/\w\S*/g, function (txt) {
        return txt[0].toUpperCase() + txt.substr(1).toLowerCase()
    })


}
console.log(
    `  In Lowercase: "${personName.toLowerCase()}"
       In Uppercase: "${personName.toUpperCase()}"
       In Titlecase: "${titleCase(personName)}"
    `
);

