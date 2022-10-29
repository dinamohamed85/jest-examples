function theSum(...numbers) {
    return numbers.reduce((prv_Val, curr_Val) => prvV + curV, 0);
}

module.exports = theSum