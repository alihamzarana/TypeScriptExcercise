// Question 26
// Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// • Write one version of this program that runs the if block and another that runs the else block.

const alien_colors: String = 'green'
const prompt1 = require('prompt-sync')({ sigint: true })
console.log(
    'Guess Alien Color from the following? \n 1.Red \n 2.Yellow \n 3.Green\n'
)
const output: String = prompt1('Output: ')
console.log(`Hey  your output is ${output}!`)
if (output.toLowerCase().trim() == alien_colors) {
    console.log('You got 5 points')
} else if (output.toLowerCase().trim() != alien_colors) {
    console.log('You got 10 points')
}