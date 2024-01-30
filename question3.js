let number = 8046957321;
let arrOfNum = [];

let numStr = number.toString();    // // converting the number into a string;

// converting the each char of string into number and storing them into an array "arrOfNum[]".
for(let i=0; i<numStr.length; i++){
    let num = Number(numStr[i]);
    arrOfNum.push(num);   
}


// Sorting array using Bubble Sort algorithm.
for(let i=0; i<arrOfNum.length; i++) {                    // n times
    for(let j=0; j<arrOfNum.length-i-1; j++) {           // n times n (O(n^2))
        if(arrOfNum[j] > arrOfNum[j+1]) {
            // swapping the positions
            let temp = arrOfNum[j];
            arrOfNum[j] = arrOfNum[j+1];
            arrOfNum[j+1] = temp;
        }
    }
}

console.log(arrOfNum);