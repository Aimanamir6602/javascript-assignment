//Chapter 6-9

//Q1
// var a = 10;
// var preIncrement = ++a;
// var postIncrement = a++;
// var postIncrementValue = a;
// var preDecrement = --a;
// var postDecrement = a--;
// var postdecrementValue = a;
// document.write(" Result: " + "<br>");
// document.write(" the value of a is: " + a + "<br>");
// document.write("........................................." + "<br> <br> ");
// document.write(" the value of ++a is: " + preIncrement + "<br>");
// document.write(" now the value of a is: " + preIncrement + "<br> <br>");
// document.write(" the value of a++ is: " + postIncrement + "<br>");
// document.write(" now the value of a is: " + postIncrementValue + "<br> <br>");
// document.write(" the value of --a is: " + preDecrement + "<br>");
// document.write(" now the value of a is: " + preDecrement + "<br> <br>");
// document.write(" the value of a-- is: " + postDecrement + "<br>");
// document.write("now the value of a is: " + postdecrementValue);

// Q2
// var a = 2;
// var b = 1;
// var result = --a - --b + ++b + b--;
//  document.write ( "a is " + a + "<br>" );
//  document.write ( "b is " + b + "<br>" );
//  document.write ( " Result is " + result + "<br>" );
//  --a - --b + ++b + b--;
//    1 -  0  +  1  + 1;
//    1  +  1  + 1;
//    2  + 1;
//    3;

// Q3
// var userName = prompt(" what is your name? ");
// alert(" Welcome " + userName);

//Q5
// var table = +prompt("enter a number");
// if (table > 0) {
//          var num1 = 1;
//          var num2 = 2;
//          var num3 = 3;
//          var num4 = 4;
//          var num5 = 5;
//          var num6 = 6;
//          var num7 = 7;
//          var num8 = 8;
//          var num9 = 9;
//          var num10 = 10;
//          document.write (" <b> Table of <b> " + " <b> " + table + " <b> " + " <br> " + " <br> " + " <br> ");
//          document.write(  table + " x " + " 1 " + " = " + table*num1 + " <br> "); 
//          document.write(  table + " x " + " 2 " + " = " + table*num2 + " <br> "); 
//          document.write(  table + " x " + " 3 " + " = " + table*num3 + " <br> "); 
//          document.write(  table + " x " + " 4 " + " = " + table*num4 + " <br> "); 
//          document.write(  table + " x " + " 5 " + " = " + table*num5 + " <br> "); 
//          document.write(  table + " x " + " 6 " + " = " + table*num6 + " <br> "); 
//          document.write(  table + " x " + " 7 " + " = " + table*num7 + " <br> "); 
//          document.write(  table + " x " + " 8 " + " = " + table*num8 + " <br> "); 
//          document.write(  table + " x " + " 9 " + " = " + table*num9 + " <br> "); 
//          document.write(  table + " x " + " 10 " + " = " + table*num10 + " <br> "); }
// else {
//     var num1 = 1;
//     var num2 = 2;
//     var num3 = 3;
//     var num4 = 4;
//     var num5 = 5;
//     var num6 = 6;
//     var num7 = 7;
//     var num8 = 8;
//     var num9 = 9;
//     var num10 = 10;
//     document.write("<b> Table of <b> " + " <b> 5 <b> " +  " <br> " + " <br> " + " <br> ") 
//     document.write(  5 + " x " + " 1 " + " = " + 5*num1 + " <br> "); 
//     document.write(  5 + " x " + " 2 " + " = " + 5*num2 + " <br> "); 
//     document.write(  5 + " x " + " 3 " + " = " + 5*num3 + " <br> "); 
//     document.write(  5 + " x " + " 4 " + " = " + 5*num4 + " <br> "); 
//     document.write(  5 + " x " + " 5 " + " = " + 5*num5 + " <br> "); 
//     document.write(  5 + " x " + " 6 " + " = " + 5*num6 + " <br> "); 
//     document.write(  5 + " x " + " 7 " + " = " + 5*num7 + " <br> "); 
//     document.write(  5 + " x " + " 8 " + " = " + 5*num8 + " <br> "); 
//     document.write(  5 + " x " + " 9 " + " = " + 5*num9 + " <br> "); 
//     document.write(  5 + " x " + " 10 " + " = " + 5*num10 + " <br> ");
// }

// Q6
// var subject1 = prompt("Write the first subject name");
// var subject2 = prompt("Write the second subject name");
// var subject3 = prompt("Write the third subject name");

// var totalMarks = 100;

// var obtainedMark1 = +prompt("ENTER OBTAINED MARKS FOR " + subject1 ); 
// var obtainedMark2 = +prompt("ENTER OBTAINED MARKS FOR " + subject2 );
// var obtainedMark3 = +prompt("ENTER OBTAINED MARKS FOR " + subject3 );
//calculate the total marks and percentage//
// var totalObtainedMarks = obtainedMark1 + obtainedMark2 + obtainedMark3;
// var percentage = (totalObtainedMarks / (totalMarks * 3 )) * 100;

// document.write( "<table>");
// document.write("<tr><th> Subject </th><th> Total Marks </th><th> Obtained Marks </th></tr>");
// document.write("<tr><td>" + subject1 + "</td><td>" + totalMarks + "</td><td>" + obtainedMark1 + "</td></tr>");
// document.write("<tr><td>" + subject2 + "</td><td>" + totalMarks + "</td><td>" + obtainedMark2 + "</td></tr>");
// document.write("<tr><td>" + subject3 + "</td><td>" + totalMarks + "</td><td>" + obtainedMark3 + "</td></tr>");
// document.write("<tr><th>Total</th><th>" + (totalMarks * 3) + "</th><th>" + totalObtainedMarks + "</th></tr>" )
// document.write("</table>");
// document.write(" Percentage: " + percentage + "%");