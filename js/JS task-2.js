function makeArray(firstArray, secondArray, maxLength) {
    const combinedArray = firstArray.concat(secondArray);

    if (combinedArray.length > maxLength) {
        return combinedArray.slice(0, maxLength);
    }

    return combinedArray;
}

// task-2-results in HTML
document.getElementById("task-2-results").innerHTML = `
    <p>${makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)}</p>
    <p>${makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)}</p>
    <p>${makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)}</p>
    <p>${makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)}</p>
    <p>${makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)}</p>
    <p>${makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)}</p>
`;



// task-2-results
console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []

