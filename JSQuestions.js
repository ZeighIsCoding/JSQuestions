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
// var z = Math.random()*14
// console.log(array1.length, array1.lastIndexOf("stringex"), array1[z]);

//next array

const arrayQ6 = [];

for(var x = 0; x < 10; x++){
    arrayQ6[x] = Math.floor(Math.random() * 59 + 29)
    console.log(arrayQ6[x], " <- this is Q6's value");
}
   var z = 0;
for(x = 1; x< 10; x++){
    var localdiff = 0;    
    localdiff = Math.abs(arrayQ6[x] - arrayQ6[x-1]);
    if(localdiff > z){
    z = localdiff;
    }
}
    console.log("Z Value = ", z);

//Start of Q7
const arrayQ7 = arrayQ6.map(squareThis);
function squareThis(num) {
    return num * num;
}
console.log(arrayQ7);

//Start of Q8

var maxnum = 0;
for(x = 0; x< 10; x++){ 
    currentnum = arrayQ7[x];
    if(currentnum > maxnum){
    maxnum = currentnum;
    }
}
    console.log(maxnum);

    const arrayQ8 = arrayQ7.filter(e => e >= .5 * maxnum);

    console.log(arrayQ8);

//Start of Q9

const initialValue = 0;
const sumWithInitial = arrayQ8.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

const arrayQ9 = sumWithInitial;

console.log(sumWithInitial);

//Q10: Start!
var index = 0;
arrayQ8.forEach(value =>{  
    console.log("arrayQ8[", index,  "] = ",value)
    index++;
})

//It's lights out and away we go with Q11!

class car {
    constructor(hp, chassisnum, brand){
        this.hp = hp;
        this.chassisnum = chassisnum;
        this.brand = brand;
    }

    printthisout(){
        console.log("In this ", this.brand, ", you have ", this.hp, " Brake HP on tap, and the Chassis Number is: ", this.chassisnum);
    }
}

const huayra = new car(741, 32, "Pagani");
huayra.printthisout();
const mr2 = new car(240, 650, "Toyota");
const bulldog = new car(500, 1, "Aston Martin");
const regera = new car(1231, 3, "Koenigsegg");
const giulia = new car(360, 500, "Alfa Romeo");
const a110 = new car(230, 267, "Alpine");
const nsx = new car(450, 62, "Honda");
const quattro = new car(400, 54, "Audi");
const gtr = new car(350, 40, "Nissan");
const gr86 = new car(250, 3000, "Toyota");

//Q12
const arrayQ12 = [];
arrayQ12.push(huayra)
arrayQ12.push(mr2);
arrayQ12.push(bulldog);
arrayQ12.push(regera);
arrayQ12.push(giulia);
arrayQ12.push(a110);
arrayQ12.push(nsx);
arrayQ12.push(quattro);
arrayQ12.push(gtr);
arrayQ12.push(gr86);

const arrayQ121 = arrayQ12.filter(e => e.brand=="Alfa Romeo");

arrayQ121[0].printthisout();

const arrayQ122 = arrayQ12.map(e => tuneUp(e.hp));
function tuneUp(hp){
    return hp * 2;
}

console.log(arrayQ122);

arrayQ12.forEach(e => e.chassisnum=1);

for(var x = 0; x < 10; x++){
arrayQ12[x].printthisout();
}


const sortedArrayQ12 = arrayQ12.sort(function(x, y){
    if (x.brand < y.brand) {
        return -1;
     }
     if (x.brand > y.brand) {
        return 1;
     }
     return 0;
});

console.log("loading...");

for(var x = 0; x < 10; x++){
    sortedArrayQ12[x].printthisout();
    }

















