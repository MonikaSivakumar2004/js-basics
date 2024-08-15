function containsUppercase(str) {
  return /^[A-Z]+$/.test(str);
}
console.log(containsUppercase("Monika"));
console.log(containsUppercase("CSE")); 
console.log(containsUppercase("vcew"));
