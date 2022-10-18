// Question 39

// City Names: Write a function called city_country() that takes in the name of a city and its country. 
// The function should return a string formatted like this: "Lahore, Pakistan"
// Call your function with at least three city - country pairs, and print the value that’s returned.

const city_country = (city: String, country: String) => {
    return `${city}, ${country}`
}

const outputs = city_country('Paris', 'France');
console.log(outputs);
const output1 = city_country('Karachi', 'Pakistan');
console.log(output1);
const outputs2  =city_country('Peshawar', 'Pakistane');
console.log(outputs2);
