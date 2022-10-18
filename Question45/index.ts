// Question 45

// Cars: Write a function that stores information about a car in a Object. 
// The function should always receive a manufacturer and a model name. 
// It should then accept an arbitrary number of keyword arguments. 
// Call the function with the required information and two other name-value pairs, 
// such as a color or an optional feature. Print the Object that’s 
// returned to make sure all the information was stored correctly.
const promptISs = require('prompt-sync')({ sigint: true })
interface Car {
    manufacture: String;
    modelName: String;
    keywords: String;
    color: String;
    door: String;


}
const car_info = () => {
    let manufacturer = false, model = false, keyword = false, car: Car = {
        manufacture: '',
        modelName: '',
        keywords: '',
        color: '',
        door: ''

    };

    while (!manufacturer) {
        const manufacture = promptISs('Enter Manufacturer Name?')
        if (manufacture.length) {
            manufacturer = true
        }
        car = { ...car, manufacture }
    }

    while (!model) {
        const modelName = promptISs('Enter Model Name?')
        if (modelName.length) {
            model = true
        }
        car = { ...car, modelName }
    }

    while (!keyword) {
        const keywords = promptISs('Enter keyword?')
        if (keywords.length) {
            keyword = true
        }
        car = { ...car, keywords }
    }

    const color = promptISs('Enter color?')
    const door = promptISs('Enter door?')

    car = { ...car, color, door }

    console.log(car);

}

car_info();