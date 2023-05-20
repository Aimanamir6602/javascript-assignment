//chapter 9-10

//Q1
// var cityName = prompt("Write your city name");
// if (cityName === "karachi"){

//   alert("Welcome to city of lights");
// }

//Q2
// var gender = prompt("write your gender");
// if (gender === "female"){
//    alert("Good Morning! Ma'am");
// }
// else{ 
//     alert("Good Morning! Sir" );
// }

//Q3
// var signalsOfColor = prompt("Enter your color ");
// if(signalsOfColor === "red")
// {
//     alert("Must Stop");
// }
// else if (signalsOfColor === "yellow")
// {
//     alert("Ready to move");
// }
// else(signalsOfColor === "green")
// {
//     alert("Move now");
// }

//Q4
// var remainingFuel = prompt("How much litres fuel remain in your car?");
// if(remainingFuel < 0.25) {
//     alert("Please refill the fuel in your car");
// }
// else{
//     alert("Keep traveling");
// }

//Q5
//  var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
//right//

//  var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
//condition true ,if either b=83 or ++b is written//

//  var c = 12;
// if (c++ === 13)
// {
// alert("condition 1 is true");
// }
// false//

// if (c === 13){
// alert("condition 2 is true");
// }
// true//

// if (++c < 14){
// alert("condition 3 is true");
// }
//false//

// if(c === 14){
// alert("condition 4 is true");
// }
//true//

//  var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
//true//

// if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }
//condition1=true so condition2 =not display//

// if("car" < "cat"){
//     alert("car is smaller than cat");
// }
//true//

// Q6
// var marks_Obtained = +prompt("enter your marks obtained in 3 subjects");
// var  total_Marks = 300;
// var percentage = (marks_Obtained / total_Marks) * 100;
 
// if (percentage > 80) {
//      document.write(" Total marks: " + total_Marks + "<br>" );
//      document.write(" Marks obtained: " + marks_Obtained + "<br>");
//      document.write(" Percentage: " + percentage + "%" + "<br>" );
//      document.write(" Grade: " + " A one " + "<br>" );
//      document.write(" Remarks: " + " Excellent ") ;
// }
 
// else if (percentage > 70) {
//     document.write(" Total marks: " + total_Marks + "<br>" );
//     document.write(" Marks obtained: " + marks_Obtained + "<br>");
//     document.write(" Percentage: " + percentage + "%" + "<br>" );
//     document.write(" Grade: " + " A " + "<br>" );
//     document.write(" Remarks: " + " Good ") ;
// }

// else if (percentage > 60) {
//     document.write(" Total marks: " + total_Marks + "<br>" );
//     document.write(" Marks obtained: " + marks_Obtained + "<br>");
//     document.write(" Percentage: " + percentage + "%" + "<br>" );
//     document.write(" Grade: " + " B " + "<br>" );
//     document.write(" Remarks: " + " You need to improve ") ;
// }
// else {
//     document.write(" Total marks: " + total_Marks + "<br>" );
//     document.write(" Marks obtained: " + marks_Obtained + "<br>");
//     document.write(" Percentage: " + percentage + "%" + "<br>" );
//     document.write(" Grade: " + " Fail " + "<br>" );
//     document.write(" Remarks: " + " Sorry :( ") ;
// } 

//Q7
// var secret_Number = 4;
// var guess_Number = +prompt ("Guess the secret number");
//  if (guess_Number === secret_Number){
//     document.write(" Bingo! Correct answer ");
//  }
//  else if (guess_Number +1 === secret_Number )
//  {
//     document.write("Close enough to the correct answer");
//  }
// else{ document.write("Sorry! Your answer is wrong")}

//Q8
// var number = +prompt("enter a number");
// var divide = number % 3
// if (divide === 0){
//     alert("your number is divided by 3")
// }
// else{ 
//     alert("Your reminder is " + divide)
// }

//Q9
// var number = +prompt(" enter a number ");
// if (number % 2 === 0) {
//    alert(number + " is an even number ");
// }
// else {
//     alert(number + " is an odd number ")
// }

//Q10
// var temperature = +prompt("enter the today's temperature");
// if(temperature > 40){
//     alert(" It is too hot outside ");
// }
// else if(temperature > 30){
//     alert("The weather today is normal");
// }
// else if(temperature > 20){
//     alert("Today's weather is cool" );
// }
// else if(temperature > 10 ){
//     alert("OMG!Today's weather is so cool");
// }
// else{
//     alert("OMG! Today's weather is so freezy");
// }

//Q11
// var first_number = +prompt("enter your first number");
// var operator = prompt("which operatr you want to perform here?");
// var second_number = +prompt("enter your second number");

// if (operator === "+"){
//     alert(first_number  + second_number);
// }
// else if(operator === "-"){
//     alert(first_number - second_number);
// }
// else if(operator === "*"){
//     alert(first_number * second_number);
// }
// else if(operator === "/"){
//     alert(first_number / second_number); 
// }
// else if(operator === "%"){
//     alert(first_number % second_number);
// }
