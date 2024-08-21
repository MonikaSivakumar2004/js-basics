function findFirstGreater(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > target) {
            return arr[i];
        }
    }
    return null;
}

const arr = [2, 5, 1, 7, 3, 9];
const target = 4;
const result = findFirstGreater(arr, target);
console.log(result);
