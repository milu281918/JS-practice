//problem1
let age= prompt("What is your age?");
age=Number.parseInt(age);
if(age>=10&&age<=20){
  alert("Valid");
}
else{
  alert("not valid");
}
//problem2
let num= prompt("What is your num?");
num=Number.parseInt(num);
if(num%3==0 && num%2==0){
  alert("Valid");
}
else{
  alert("not valid");
}
//problem3
let num1= prompt("What is your num?");
num1=Number.parseInt(num1);
if(num1%3==0 || num1%2==0){
  alert("Valid");
}
else{
  alert("not valid");
}
//problem5
let age1=prompt("what is your age?")
age1=Number.parseInt(age1);
let a=(age1<18?"not drive":"drive");
alert("you can "+a);