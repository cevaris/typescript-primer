/**
 * Strings
 * See all the functions built into strings
 * - https://www.tutorialspoint.com/typescript/typescript_strings.htm
 */

/**
 * Strings can be created with either single, double quotes or backticks.
 * Single quotes are preferred; https://bytearcher.com/articles/single-or-double-quotes-strings-javascript/
 * 
 * Note, even if we defined the strings using different quotes, because the value is always alphabet,
 * these strings are considered equal, or contain the same value.
 */
const doubleQuotedString: string = "alphabet";
const singleQuoteString: string = 'alphabet';
const backtickString: string = `alphabet`;

///////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Strings come with many functions.
 */
var a: string = 'ele'
var b: string = 'phant';

a.concat(b) // creates the string 'elephant' using string concatenation
a + b       // alternate way of concatenation strings

///////////////////////////////////////////////////////////////////////////////////////////////////////////

/** 
 * You can format strings easily using backticks
 */
var username: string = 'lskywalker';
var birthDate: string = '19 BBY';

console.log(`User ${username} was born on ${birthDate}.`); // User lskywalker was born on 19 BBY.

/** 
 * You can even insert logic into the curly braces when formatting
 */
console.log(`Testing, ${3 - 2}, ${2 * 1}, ${33 / 11}`);       // 'Testing, 1, 2, 3'
console.log(`The ${'ele' + 'phant'} in the room`);            // 'The elephant in the room'
console.log(`I have a ${'big'.toUpperCase()} announcement!`); // 'I have a BIG announcement!'

