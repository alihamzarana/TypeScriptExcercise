// Question 12
// Greetings: Start with the array you used in Exercise 11, 
// but instead of just printing each person’s name, print a message to them.
// The text of each message should be the same, but each message should be personalized with the person’s name.

const friendssName = () => {
    try {
        const names: String[] = ['Ali', 'Hamza', 'Ali Hamza'];

        names.forEach(ele => {
            console.log(`Hi ${ele}, how are you?`);
        })

    } catch (error: any) {
        throw new Error(error)

    }
}

friendssName();