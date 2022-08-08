var temp = 820;
var whatTemp;
var f;
var c;

function celsiusToFah (whatTemp) {
    if (whatTemp == "c") {
        f = temp * 9/5 + 32

        return f    
    }
    
    if (whatTemp == "f") {
        c = (temp - 32) * 5/9

        return c
    }
        
}

console.log(celsiusToFah("c"));

