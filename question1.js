// initializing an array "arr" with some default values and variable "sum" with value 0.
let arr = [-2, 5, 3, -8, 10, -4, 2]; 
let sum = 0;

// initialize function with "arr" parameter.
function sumOfPositives(arr) {     
    for(let ele of arr) {
        if(ele > 0) {               // condition for filtering the positive numbers.
            sum += ele;             // sum is holding the previous addition and calculating the new one.
        }
    }
    return sum;                     // at the end of the loop we will get the sum of all the +ve nums.
}
console.log(sumOfPositives(arr));