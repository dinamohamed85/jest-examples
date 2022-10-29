function theSum(...numbers) {
    return numbers.reduce((prv_Val, curr_Val) => prv_Val + curr_Val, 0);
}

module.exports = theSum