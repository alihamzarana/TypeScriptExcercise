// Question 05
// Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person.
//  Then compose your message and store it in a new variable called message. Print your message.

const famousQuotee = () => {

    try {
        const famous_person: String = "Nelson Mandela";
        const message: String = '"Education is the most powerful weapon you can use to change the world."';

        console.log(`${famous_person} once said, ${message}`)

    } catch (error: any) {
        console.log("Error", error);
        throw new Error(error);
    }
}

famousQuotee();