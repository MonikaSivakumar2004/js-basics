let str = "Monika@2004&66";
console.log("Given String is: " + str);
for (let i = 0; i < str.length; ++i) 
{
    let ch = str.charCodeAt(i);
    if (
        !(ch >= 65 && ch <= 90) && 
        !(ch >= 97 && ch <= 122) && 
        !(ch >= 48 && ch <= 57) 
    )
    {
        return console.log("String contains special characters");
    }
}
console.log("String does not contain any special character.");

