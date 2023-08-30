//######################################################################
//###########################           SSTech       ###################
//###########################   Programming Courses  ###################
//######################################################################
console.log('hello');

let num1: number;
let num2: number;
let num3: number;

num1 = 600;
num2 = 200;
num3 = num1 + num2;

console.log(num3);

let num4, num5, num6, num7: number;
num4 = 50;
num5 = 50;
num6 = 2000;
num7 = num4 * num5 - num6;
console.log(num7);

let meraText: string;
meraText = "السلام عليكم ورحمة الله وبركاته je m'appelle amina ";
meraText = meraText + '我是很高兴';
console.log(meraText);

let numéro1, numéro2: number;
numéro1 = 20;
numéro2 = 30;
numéro1 = numéro1 + 10;
numéro2 = numéro2 - 10;
console.log(numéro1, numéro2);

let mynumber1, mynumber2: number;
let mynumber3: number;
mynumber1 = 151;
mynumber2 = 256;
mynumber3 = mynumber1;
mynumber1 = mynumber2;
mynumber2 = mynumber3;
console.log('continent1', mynumber1);
console.log('continent2', mynumber2);

let mynumber: number;
mynumber = parseInt(prompt('sign in the number'));
if (mynumber > 0) {
  console.log('num positive');
} else {
  console.log('num negative');
}

console.log('the end');

let teranum1, teranum2, teranum3: number;
teranum1 = parseInt(prompt('sign num1'));
teranum2 = parseInt(prompt('sign num2'));
teranum3 = teranum1 * teranum2;
console.log(teranum3);

let mynuber1, mynuber2, mynuber3: number;
mynuber1 = parseInt(prompt('sign 1'));
mynuber2 = parseInt(prompt('sign2'));
mynuber3 = mynuber1 * mynuber2;

if (mynuber3 > 0) {
  console.log('num positif');
} else {
  console.log('num negatif');
}
console.log('the end');
console.log(mynuber3);

let my : number;
my = parseInt(prompt("writ num more than 100"));
while(my<100){
  my = parseInt(prompt("writ num more than 100"));
} 
console.log ("the num my should be more than 100 to be acceptable");
console.log(my);

let anim : number;
for (anim =2;anim<=100;anim+++){
  console.log("allah akbar",anim);
}

let mynu : number;
mynu= parseInt(prompt("ecrit mynu between 1 and 3"));
while(mynu<1 && mynu>3){
  mynu= parseInt(prompt("ecrit mynu between 1 and 3"));
}
console.log(mynu);


