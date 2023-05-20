//Chapter5

// Q1
// var num1 = 3;
// var num2 = 5;
// var newNumber = num1 + num2;
// document.write("The Sum of " + num1 + " and " + num2 + " is " + newNumber );

// Q2
// var num1 = 3;
// var num2 = 5;
// var newNumber = num1 - num2;
//  document.write("The Subtraction of " + num1 + " and " + num2 + " is " + newNumber );

// var newNumber = num1 * num2;
// document.write(" The Multiplication of " + num1 + " and " + num2 + "  is " + newNumber);

// var newNumber = num1 / num2;
// document.write(" The Division of " + num1 + " and " 
// + num2 + " is " + newNumber);

// var newNumber = num1 % num2;
// document.write(" The Modulus of " + num1 + " and " + num2 + " is " + newNumber);

// Q3
//a)
// var value;
//b)
// document.write(" Value after variable declaration is " + value + 
// "<br>");
//c)
// var number = 5;
//d)
// document.write(" Initial value: " + number + "<br>");
//e)
// var increment = ++number ;
//f)
// document.write(" Value after increment is: " + increment + "<br>");
//g)
// var addition = increment + 7;
//h)
// document.write(" Value after addition is: " + addition + "<br>");
//i)
// var decrement = --addition ;
//j)
// document.write(" Value after decrement is: " + decrement + "<br>");  
//h)
// var modulus = decrement % 3;
//k)
// document.write(" The reminder is: " + 0 );

// Q4
// var movieEachTicketPrice = 600;
// var calculate5TicketsCost = movieEachTicketPrice *5;
// document.write(" Total cost to buy " +  buyingTickets + " tickets to a movie is " + calculate5TicketsCost + "PKR");

// Q5
// for (let i=1;i<=10;i++){ document.write(4 + " x " + i +"="+ 4*i  )};

// Q6
// var celsius = +prompt("Enter temperature in celcius");
// var fahrenheit = +prompt ("Enter temperature in fahrenheit");
// document.write(" temperature " + celsius +  "<sup>0</sup>C" + " in Fahrenheit is " +((celsius*9/5)+32) + "<sup>0</sup>F" + "<br>") ;
// document.write("temperature" + fahrenheit + "<sup>0</sup>F" + "in celsius is " + ((fahrenheit-32)*5/9) + "<sup>0</sup>C" + "<br>" );

// Q7
// var priceOfItem1 = +prompt("write the price of item 1");
// var quantityOfItem1 = +prompt("write the quantity of item 1");
// var priceOfItem2 = +prompt("write the price of item 2");
// var quantityOfItem2 = +prompt("write the quantity of item 2");
// var shippingCharges = 100;
// document.write("<b>Shopping Cart" + "<br> <br> <br> <br>");
// document.write ("price of item 1 is " + priceOfItem1 + "<br>");
// document.write ("quantity of item 1 is " + quantityOfItem1 + "<br>");
// document.write ("price of item 2 is " + priceOfItem2 + "<br>");
// document.write ("quantity of item 2 is " + quantityOfItem2 + "<br>");
// document.write ("shipping charges" + shippingCharges + "<br> <br>");
// document.write ("Total cost of your order is " + (priceOfItem1*quantityOfItem1 + priceOfItem2*quantityOfItem2 + shippingCharges));

// Q8
// var totalMarks = +prompt("enter the total marks of student");
// var marksObtained = +prompt("enter the marks obtained of students");
// document.write("<b> Marks Sheet" + "<br> <br> <br>");
// document.write(" Total marks: " + totalMarks + "<br>");
// document.write(" Marks obtained: " + marksObtained + "<br>");
// document.write(" Percentage: " + marksObtained/totalMarks*100 + "%");

// Q9
// var usDollars = 10;
// var saudiRiyals = 25;
// var convertIntoPakistaniRupees = usDollars*104.80 + saudiRiyals*28;
// document.write("<b> Currency in PKR" + "<br> <br> <br>");
// document.write("Total Currency in PKR:" + convertIntoPakistaniRupees);

// Q10
// var numbr = +prompt("enter a number");
// var calculate = (numbr + 5 * 10 / 2); 

// Q11
// var currentYear = +prompt("enter your current year");
// var birthYear = +prompt("enter your birth year");
// var age = currentYear - birthYear;
// document.write("<b> Age Calculator " + "<br> <br>");
// document.write(" current year: " + currentYear + "<br>");
// document.write(" birth year: " + birthYear + "<br>");
// document.write(" your age is: " + age);

//Q12
// var radius = +prompt("enter a value");
// var circum = 2 * 3.142 * radius;
// var area = 3.142*(radius**2);
//  document.write ( "<b> The Geometrizer <b>" + "<br> <br>" );
//  document.write ( "Radius of a circle: " + radius + "<br>" );
//  document.write ( "The circumference is " + circum + "<br>" );
//  document.write ( "The area is: " + area );

//Q13
// var favSnack = prompt("enter your favourite snack");
// var currentAge = +prompt("enter your current age");
// var maxAge = +prompt("enter your maximum age");
// var amountPerDay = +prompt("enter the amount of snack per day");
// var totalAmountOfSnack = (maxAge - currentAge)*365;
// document.write ( "<b> The Lifetime Supply Calculator <b>" + "<br> <br> <br>" );
//  document.write ( " Favorite snack: " + favSnack + "<br>" );
//  document.write ( "  Current age " + currentAge + "<br>" )
//  document.write ( " Estimated maximum age: " + maxAge + "<br>" );
//  document.write ( " Amount of snack per day: " + amountPerDay + "<br>" );
// document.write ( "  You will need  "  +  totalAmountOfSnack  +  favSnack  +  "  to last you until the ripe old age of  "  +  maxAge );