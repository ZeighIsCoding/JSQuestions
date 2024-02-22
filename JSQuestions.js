var randomnumbah = Math.floor(Math.random() * 255);

if(randomnumbah % 7 == 0 ){
    console.log(randomnumbah + " -> this is a good numbah");
}
else{
    console.log(randomnumbah + " -> this is a bad numbah");
}

var studentgrade = Math.floor(Math.random() * 100);

var check = studentgrade < 70 ? "F" : studentgrade > 70 && studentgrade < 80 ? "C" : studentgrade > 80 && studentgrade < 90 ?  "B" : "A";
console.log(studentgrade + " -> " + check);

function multiplication(number){
    return number * number;
}

console.log(randomnumbah + " * " + studentgrade + " = " + multiplication(randomnumbah, studentgrade));

multiplyrandom = (Math.random() * 100, Math.random() * 100) => {
    multiplication(multiplyrandom);
}

multiplication(Math.random() * 100, Math.random() * 100) => number * number;


arryay = new Array.from(length = 15), String() => "stringex";
console.log(arryay.size)





