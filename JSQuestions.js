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


// console.log(randomnumbah + " * " + studentgrade + " = " + multiplication(randomnumbah, studentgrade));


function multiplication(number, number2){
    return number * number2;
}

multiplyrandom = (Number, Number2) => {
    console.log(Number , " ",Number2)
   console.log( multiplication(Number, Number2));
}

console.log(randomnumbah + " * " + studentgrade + " = " + multiplication(randomnumbah, studentgrade));

multiplyrandom(Math.random() * 100, Math.random() * 100);

//const array1 = new Array;
const array1 = [];

for(var x = 0; x < 15; x++){
    array1[x] = "stringex";
    console.log(array1[x]);
}
var z = Math.random()*14
console.log(array1.length, array1.lastIndexOf("stringex"), array1[z]);

//array1 = Array.from({length: 15}, () => "stringex");
// console.log(array1.size)





