var Tekst = "Akademia 108";
console.log("Akademia 108");

function reverseString(str){
  var array = str.split("");
    array.reverse();
    var result = array.join("");
    return result;
    
}

console.log(reverseString("Akademia 108"));