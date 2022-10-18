// Question 36

// T-Shirt: Write a function called make_shirt() that accepts a 
// size and the text of a message that should be printed on the shirt. 
// The function should print a sentence summarizing the size of the shirt and the message printed on it. 
// Call the function.

const make_shirt = (size: String, text: String ) => {
    console.log(`Size of T-Shirt ${size}`);
    console.log(`Text on T-Shirt ${text}`);
}

make_shirt('Medium', 'Not Again!')
