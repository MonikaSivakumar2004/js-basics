function longest(str){
    str = str.split(" ") 
   
    return str.sort((a, b) => b.length - a.length)[0] 
} 

console.log(longest("Hello guys this is monika.s"+ 
                        " who studies in vcew")) 
