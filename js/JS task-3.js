function filterArray(numbers, value) {
    const filteredNumbers = []; 

    
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > value) { 
            filteredNumbers.push(numbers[i]); 
        }
    }

    return filteredNumbers; 
}


// task-3-results in HTML
document.getElementById("task-3-results").innerHTML = `
    <p>${filterArray([1, 2, 3, 4, 5], 3)}</p>
    <p>${filterArray([1, 2, 3, 4, 5], 4)}</p>
    <p>${filterArray([1, 2, 3, 4, 5], 5)}</p>
    <p>${filterArray([12, 24, 8, 41, 76], 38)}</p>
    <p>${filterArray([12, 24, 8, 41, 76], 20)}</p>
    
`;





// task-3-results
console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]


