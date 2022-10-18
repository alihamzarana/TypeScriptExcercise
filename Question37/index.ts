// Question 37

// Large Shirts: Modify the make_shirt() function so that shirts are large 
// by default with a message that reads I love JavaScript. Make a large shirt and a 
// medium shirt with the default message, and a shirt of any size with a different message.

const make_shirts = (size: String = 'Large', text: String = 'I love JavaScript') => {
    console.log(`Size of T-Shirt ${size}`);
    console.log(`Text on T-Shirt ${text}`);
}
make_shirts();
make_shirts("Large");
make_shirts("Medium");
make_shirts('XXL', 'Never Giveup');