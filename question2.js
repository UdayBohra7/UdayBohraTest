// initialized an array of object "students".
const students = [
    {name: "Alice", score: 85},
    {name: "Bob", score: 60},
    {name: "Charlie", score: 92},
    {name: "David", score: 75}
];
// implementing a new array for storing the student names from the function.
let newArr = [];

// function for getting high scorer students 
function getHighScorers(students, merit){
    students.forEach((obj) => {
        if(obj.score > merit) {
            newArr.push(obj.name);
        }
    })
    return newArr;
}

console.log(getHighScorers(students, 70));