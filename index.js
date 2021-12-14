//1) Save this array in a variable called genres: ["Comedy", "Drama", "Romance", "Horror", "Sci-Fi", "Documentary"]
let genres = ["Comedy", "Drama", "Romance", "Horror", "Sci-Fi", "Documentary"]

//2) Create an unordered list using JavaScript and save it in a variable
let newUl = document.createElement("ul")
let ulParent = document.getElementsByClassName('js-list-container')
console.log(ulParent)
ulParent[0].appendChild(newUl)

let newUlNode = document.getElementsByTagName("ul")
//3) Cycle the array and create a list-item via JavaScript for every element
for (let i = 0; i < genres.length; i++) {
    let newLi = document.createElement("li")
    newLi.innerText = genres[i]    
    newUlNode[0].appendChild(newLi)
}

console.log(newUlNode[0])


//4) Insert the genere as text in the list-item
//5) Append the list items in the unordered list
//6) Append the unordered list in the document. The list should appear in the page. 