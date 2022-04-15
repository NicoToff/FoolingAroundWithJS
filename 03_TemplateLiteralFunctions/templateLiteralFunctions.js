console.log("***Part ONE :***");
function gather(strings, ...values) {
    console.log(strings);
    console.table(values);
}

const myName = "NicoToff";
const hobby = "surfing";
gather`My name is ${myName} and I love ${hobby}`;

console.log("***Part TWO :***");
{
    function gather(strings, ...values) {
        return values.reduce((finalString, value, index) => {
            return `${finalString}<b>${value}<b>${strings[index + 1]}`;
        }, strings[0]);
    }

    console.log(gather`My name is ${myName} and I love ${hobby}.`);
}

// More info here: https://blog.webdevsimplified.com/2020-03/tagged-template-literals/
