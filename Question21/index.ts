// Question 21
// They think of something you could store in a JavaScript Object. 
// Write a program that creates Objects containing these items.
interface Places {
    countries: String[];
    cities: String[];
}
const placesObj: Places = {
    countries: ['Pakistan', 'Russia', 'China'],
    cities: ['Islamabad', 'Lahore', 'Karachi']
}

console.log("placesObj", placesObj)