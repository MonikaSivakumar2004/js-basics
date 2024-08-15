function countConsonants(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        let char = str[i].toLowerCase();
        if (char.match(/[a-z]/) && !char.match(/[aeiou]/)) {
            count++;
        }
    }
    return count;
}

console.log(countConsonants("monika from CSE B"));
