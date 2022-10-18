// Question 44

// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. 
// The function should have one parameter that collects as many items as the function call provides,
//  and it should print a summary of the sandwich that is being ordered. Call the function three times, 
// using a different number of arguments each time.

const make_sandwiches = (items: String[]) => {
    items.forEach(element => {
        console.log(element);
    });

}

make_sandwiches(['item1', 'item2']);
make_sandwiches(['item3', 'item4']);
make_sandwiches(['item5', 'item6']);


