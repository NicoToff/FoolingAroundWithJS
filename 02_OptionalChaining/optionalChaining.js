class Person {
    constructor(name, address, hobbies) {
        this.name = name;
        this.address = address;
        this.hobbies = hobbies;
    }

    print() {
        console.log(this);
    }
}

let fullName = "NicoToff";
let address = { street: "666, Fake Street", city: "Gotham" };
let hobbies = ["Gaming", "Programming", "Surfing"];

let person = new Person(fullName, address, hobbies);

person.print();

/*
    The way variables work in JS makes it easy to pass anything as an argument to create a "Person".
    Was it created with a JSON? With a simple string?
    This makes a function like this quite dangerous:
*/
// function printPersonStreet(person) {
//     console.log(person.address.street);
// }
/*
    If the person has no address, the script will crash trying to access a property on a null value.
    Thankfully, optionnal chaining has us covered: "?."
*/

function printPersonStreet(person) {
    console.log(`Street: ${person?.address?.street}`);
}

/* Note that this lenghty function does a very similar job: */
// function printPersonStreet(person) {
//     if (person == null) return;
//     if (!("address" in person)) return;
//     if (person.address == null) return;
//     if ("street" in person.address) console.log(`Street: ${person.address.street}`);
// }

printPersonStreet(person);
person.address = null;
printPersonStreet(person); // this doesn't crash!
printPersonStreet(null); // this doesn't even print "Street: ", because the function does a "return"

// It can be used on functions, too!
person.liftWeight?.();
