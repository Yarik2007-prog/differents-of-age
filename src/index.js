function getNameYear(year) {
    year = Math.abs(year);

    if (year === 1) {
        return "year";
    }
    return "years";
};

function getAgeDifference(ageOfFather, ageOfSon) {
    let diff = ageOfFather - 2 * ageOfSon;

    let years = getNameYear(diff);

    if (
        ageOfFather - ageOfSon < 15 ||
        ageOfFather < 0 ||
        ageOfSon < 0 ||
        typeof ageOfFather !== "number" ||
        typeof ageOfSon !== "number"
    )
        return NaN;

    if (diff > 0) {
        return `The father was twice as old as the son ${diff} ${years} ago`;
    }
    if (diff < 0) {
        return `The father will be twice as old as the son in ${-diff} ${years}`;
    }
    return `The father is twice as old as the son right now`;
};

console.log(getAgeDifference(40, 20));
