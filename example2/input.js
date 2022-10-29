function filterName(name) {

    if (name === undefined)
        name = "UnKnown";

    name = name.trim();
    
    if (name.length)
        name = name.substring(0, 10);

    if (name.startsWith("_"))
        name = name.substring(1);

    return name;
}

module.exports = filterName