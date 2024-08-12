function countEvenNumbers(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            count++;
        }
    }
    return count;
}
let numbers = [11,4,38,20,15,66,999,1998];
console.log(countEvenNumbers(numbers)); 
