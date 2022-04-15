function calculatePrice(price, percentTax, itemName) {
    percentTax = percentTax || 0.05; // Default tax is 0.05
    itemName = itemName || "Default item";
    const total = price * (1 + percentTax);
    console.log(`${itemName} VAT incl. = $${total}`);
}

console.log("***Using OR ||***");
calculatePrice(100, 0.07, "First item");
calculatePrice(100, 0, "Second item");
calculatePrice(100, null, "");

/*
    The problem here is that we're passing "0" % tax, but the truthiness of 0 ends up "false" on line 2.
    The expression falls backs on the 0.05% tax, which is not what we'd like.
    Same goes for "" or null; they're always evaluated as "false".
*/

function calculatePrice(price, percentTax, itemName) {
    percentTax = percentTax ?? 0.05;
    itemName ??= "Default item"; // Note that this shortened syntax is also valid
    const total = price * (1 + percentTax);
    console.log(`${itemName} VAT incl. = $${total}`);
}
console.log("***Using ??***");
calculatePrice(100, 0.07, "First item");
calculatePrice(100, 0, "Second item");
calculatePrice(100, undefined, "");

/*
    The ?? operator is checking whether the expression is "null" or "undefined"; which is being "nullish".
    If it is, it goes to the next element in the expression. If not, it stops checking.
    This means that 0 and "" are now valid for this expression, as we aren't checking their truthiness.

    NB:*/
//     percentTax = percentTax ?? 0.05;
// // is the same as:
//     if(percentTax == null)
//         percentTax = 0.05;
