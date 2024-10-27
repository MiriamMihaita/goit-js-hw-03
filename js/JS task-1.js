function slugify(title) {
    return title.toLowerCase().split(' ').join('-');
}

//  task-1-results in HTML
document.getElementById("task-1-results").innerHTML = `
    <p>${slugify("Arrays for begginers")}</p>
    <p>${slugify("English for developer")}</p>
    <p>${slugify("Ten secrets of JavaScript")}</p>
    <p>${slugify("How to become a JUNIOR developer in TWO WEEKS")}</p>
    
`;




// task-1-results
console.log(slugify("Arrays for begginers")); // "arrays-for-begginers"
console.log(slugify("English for developer")); // "english-for-developer"
console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"
