function theSum(...numbers) {
    return numbers.reduce((prv_val, curr_val) =>
        prv_val + curr_val, 0);
}

module.exports = theSum