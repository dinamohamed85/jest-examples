function filterName(name) {
    if (name === undefined)
        name = "UnKnown";

    return name.trim();
}

module.exports = filterName