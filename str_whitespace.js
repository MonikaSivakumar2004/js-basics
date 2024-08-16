function checkWhitespace(str) {
    return /\s/.test(str);
}
let str = "I am Monika";
if (checkWhitespace(str))
 {
    console.log(
        "The string contains whitespace."
    );
} 
else 
{
    console.log(
        "The string does not contain whitespace."
    );
}
