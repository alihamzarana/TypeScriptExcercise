// Question 09
// Favorite Number: Store your favorite number in a variable. Then, using that variable,
// create a message that reveals your favorite number. Print that message.

const favouriteNumberr = () => {
    try {
        /* First it will store the number in the variable and then store that 
          variable with a message in second variable and print the message */
        const favNumber: Number = 147;
        const message: String = `My favourite number is ${favNumber}`;
        console.log(message);
    } catch (error: any) {
        throw new Error(error)
    }
}

favouriteNumberr();