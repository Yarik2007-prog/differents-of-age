"use strict";

function getNameYear(year) {
    year = Math.abs(year);

    if (year === 1) {
        return "year";
    }
    return "years";
}

/**
 * @param {number} = ageOfFather;
 * @param {number} = ageOfSon;
 * @returns {number}
 * */

function getAgeDifference(ageOfFather, ageOfSon) {
    if (
        (ageOfFather - ageOfSon) < 15 ||
        ageOfSon < 0 ||
        ageOfFather < 0 ||
        typeof ageOfFather !== "number" ||
        typeof ageOfSon !== "number"
    ) {
        return NaN;
    }

    return 2 * ageOfSon - ageOfFather;
}

const FATHER_AGE = 60;
const SON_AGE = 40;
const year = getAgeDifference(FATHER_AGE, SON_AGE);
const strYears = getNameYear(year);

switch (true) {
    case Number.isNaN(year):
        console.log(`Invalid data!`);
        break;
    case year > 0:
        console.log(
            `The father was twice as old as the son ${year} ${strYears} ago`,
        );
        break;
    case year < 0:
        console.log(
            `The father will be twice as old as the son in ${-year} ${strYears}`,
        );
        break;
    default:
        console.log(`The father is twice as old as the son right now`);
}
