function findUnique(str) {
    let uniq = "";
    for (let i = 0; i < str.length; i++) {
         if (uniq.includes(str[i]) === false) {
          uniq += str[i]
        }
    }
    return uniq;
}

console.log(findUnique("My Mother is the great "))
console.log(findUnique("My father is the  great"))
