// Question 43

// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() 
// with a copy of the array of magicians’ names. Because the original array will be unchanged, 
// return the new array and store it in a separate array. Call show_magicians() with each 
// array to show that you have one array of the original names and one array with the Great added to each magician’s name.

const magicians3: String[] = ['Magician One', 'Magaician Two', 'Magaician Three'];
const magiciansClone = [];

const make_greats = (magicians3: String[]) => {
    magicians3.forEach((element) => {
        console.log(`Great ${element}`);
        magiciansClone.push(element);
    })
}

make_greats(magicians3);

const show_magicians2 = (magicians: String[]) => {
    magicians.forEach((element) => {
        console.log(element);
    })
}

show_magicians2(magicians3);
