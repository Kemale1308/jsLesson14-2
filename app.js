
function sortByBirth(arr) {
  return arr.sort((a, b) => +a.split(",")[1] - +b.split(",")[1]);
}

let people = ["aida, 2000", "Ali, 1995", "Bahar, 1998"]; 
let sortPeople = sortByBirth(people); 

console.log(sortPeople); 
