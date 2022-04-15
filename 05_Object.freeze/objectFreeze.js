/*  As you might know, the "const" keyword doesn't prevent you from modifying the properties of an JS object.
    Since it's an object, what the "const" doesn't allow is only the change of the reference.
    By modifying the properties, the reference to the object isn't affected.

    To make sure an object is immutable, you can use the Object.freeze() function.
    This makes the object "Readonly"
*/

const person = Object.freeze({
    name: "NicoToff",
    age: 33,
    address: Object.freeze({
        street: "Fake Street",
        number: 66,
    }),
    hobbies: Object.freeze(["surfing", "eating", "programming"]), // This also works for arrays!
});

console.log(`Is "person" frozen? ${Object.isFrozen(person)}`);
console.table(person);
person.address = null;
person.age = 999;
console.table(person); // Unchanged!
try {
    person.hobbies.push("being lazy"); // This will crash without try/catch.
} catch (error) {
    console.error(error);
}
console.table(person); // Unchanged!
