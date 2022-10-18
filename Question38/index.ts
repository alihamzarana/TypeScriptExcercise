// Question 38

// Cities: Write a function called describe_city() that accepts the name of a city and its country. 
// The function should print a simple sentence, such as Karachi is in Pakistan. 
// Give the parameter for the country a default value. 
// Call your function for three different cities, at least one of which is not in the default country.

const describe_city = (city: String, country: String='Pakistan') => {
console.log(`${city} is in ${country}`);
}

describe_city('Paris', 'France');
describe_city('Lahore');
describe_city('Faislabad');
describe_city('Paris', 'Pakistan');