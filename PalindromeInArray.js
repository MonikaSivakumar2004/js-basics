function isPalindrome(str) {
    return str === str.split('').reverse().join('');
}
function countPalindromes(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (isPalindrome(arr[i])) {
            count++;
        }
    }
    return count;
}
let arr = ["abc", "car", "ada", "racecar", "cool"];
console.log(countPalindromes(arr)); 
