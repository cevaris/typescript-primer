/**
 * Strings can be created with either single, double quotes or backticks.
 * Single quotes are preferred; https://bytearcher.com/articles/single-or-double-quotes-strings-javascript/
 * 
 * Note, even if we defined the strings using different quotes, because the value is always alphabet,
 * these strings are considered equal, or contain the same value.
 */
const doubleQuotedString = "alphabet";
const singleQuoteString = 'alphabet';
const backtickString = `alphabet`;

///////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Strings come with many functions.
 */
var a = 'ele'
var b = 'phant';

a.concat(b) // creates the string 'elephant' using string concatenation
a + b       // alternate way of concatenation strings

///////////////////////////////////////////////////////////////////////////////////////////////////////////

/** 
 * You can format strings easily using backticks
 */
var username = 'lskywalker';
var birthDate = '19 BBY';

`User ${username} was born on ${birthDate}.`; // User lskywalker was born on 19 BBY.

/** 
 * You can even insert logic into the curly braces when formatting
 */

`Testing, ${3 - 2}, ${2 * 1}, ${33 / 11}`;  // `Testing, 1, 2, 3`;
`The ${'ele' + 'phant'} in the room`;       // 'The elephant in the room'