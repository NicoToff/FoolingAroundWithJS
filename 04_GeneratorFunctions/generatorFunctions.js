/*  A generator function (function*) doesn't return a regular value when it's called. It returns a Generator<> object */
function* idGenerator() {
    let id = 1;

    while (true) {
        yield id;
        id++;
    }
}

/* That object can call the next() method to iterate through the various "yield" inside the function* */
const givingID = idGenerator();
for (let i = 0; i < 10; i++) {
    console.log(`Person #${1000 + givingID.next().value}`);
}

// Let's check the anatomy of the return of next().
console.log(givingID.next());
/*  { value: 11, done: false }
    We get a JSON with the yield and a flag stating if the end of the function has been reached.
    Being in an infinite loop, this flag will obviously never reach true... or can it?
*/

givingID.return();
console.log("Done? " + givingID.next().done);

/* The return() function puts an end to our Generator<> object. */

// More info here: https://blog.webdevsimplified.com/2021-01/javascript-generators/
// And here: https://youtu.be/IJ6EgdiI_wU
