// //===================question 1================
// let user_input = +prompt("enter a number");
// document.write("number: "+user_input + "<br>");
// document.write("round off value: " +Math.round(user_input) + "<br>");
// document.write("floor value: " +Math.floor(user_input) + "<br>");
// document.write("ceil value: " +Math.ceil(user_input) + "<br>");




// //===================question 2================
// let user_input = +prompt("enter negative number");
// document.write("number: "+user_input + "<br>");
// document.write("round off value: " +Math.round(user_input) + "<br>");
// document.write("floor value: " +Math.floor(user_input) + "<br>");
// document.write("ceil value: " +Math.ceil(user_input) + "<br>");




// //===================question 3================
// let user_input = +prompt("enter number");
// if(user_input < 0){
// document.write("absolute value is: "+(-1)*(user_input));
// }
// else{
//     document.write("absolute value is: "(user_input));
// }





// // //===================question 4================
// let random = Math.round(Math.random()*100);
// document.write("random value of dice: "+random)



// //===================question 5================
// let random = Math.round(Math.random(1,3));
// if(random === 0){
//     random = 1;
// }
// else if(random === 2){
//     document.write(random + "<br>" + "random coin value: heads")
// }
// else if(random === 1){
//     document.write(random + "<br>" + "random coin value: tails")
// }





// //===================question 6================
// document.write("random no between 1 and 100 is: "+ Math.round(Math.random()*100))



// //===================question 7================
// let number = Math.round(Math.random()*10);

// let a = prompt("enter a numer! lets see if you guess on first try");

// a = Number.parseInt(a);
// let s = 1;
// while (a != number){
//     if (a > number){
//         alert("your number is greater try guessing a smaller one!")
//     }
//     else if (a < number){
//         alert("your number is smaller try guessing a bigger one!")
//     }
//     a = prompt("enter no once again , hope you'll grt it right this time ")
//     s = s+1;
// }

// alert("wow , you guessed it right on " + s +" try")
// // ==============QUETION 1================

// let DATE = new Date();
// document.write(DATE)





// // ==============QUETION 2================

// let month_names = ["january" , "fenruary" , "mnarch" , "april" , "may" , "june" , "july" , "august" , "september" , "octber" , "november" , "december"]

// let date = new Date();
// let month = date.getMonth();
// document.write("current month is: "+ month_names[month+1]);






// // ==============QUETION 3================

// let days_names = ["saturday" , "sunday" , "monday" , "tuesday" , "wednesday" , "thursday" , "friday" ]

// let date = new Date();
// let day = date.getDay();
// document.write("today is: " + days_names[day+1])







// // ==============QUETION 4================

// let days_names = ["saturday" , "sunday" , "monday" , "tuesday" , "wednesday" , "thursday" , "friday" ]

// let date = new Date();
// let day = date.getDay();

// if(day == 0 ||day ==1){
//     document.write("is fun day")
// }
// else{
//     document.write("today is : " +days_names[day+1])
// }




// ==============QUESTION 5=================

// let full_date = new Date();
// date = full_date.getDate();

// if(date <= 15){
//     document.write("first fifteen days of months")
// }
// else if(dat > 15){
//     document.write("last fifteen days of months")
// }



// ==============QUESTION 7=================
// let full_date = new Date();
// let time = full_date.getHours();
// if(time>=12){
//     document.write("its PM")
// }
// else if(time<12){
//     document.write("its AM")
// }





// ==============QUESTION 12=================
// let curr_date  = new Date();
// console.log(curr_date);
// let year = curr_date.getFullYear();
// let prev_date = new Date(curr_date.setFullYear(year-100))
// console.log(prev_date);


// ==============QUESTION 13=================
// let full_date = new Date();
// let year = full_date.getFullYear();
// let age = +prompt("enter your age")
// document.write("your birth year is : " +( year-age));



// ==============QUESTION 14=================
// let parent = document.querySelector(".main")

// let Customer_Name_input = prompt("enter name of customer:")
// let Number_Of_Units_input = +prompt("enter Number Of Units")

// let date = new Date();

// let Customer_Name = document.createElement("h3");
// let Current_Month = document.createElement("h3");
// let Number_Of_Units = document.createElement("h3");
// let Charges_Per_Unit = document.createElement("h3");
// let Net_Amount_Payable = document.createElement("h3");
// let Late_Payment_Surcharge = document.createElement("h3");
// let Gross_Amount_Payable = document.createElement("h3");

// Customer_Name.innerHTML = "customer name: " + Customer_Name_input
// Current_Month.innerHTML = "Current Month: " + date.getMonth();
// Number_Of_Units.innerHTML = "Number Of Units: " + Number_Of_Units_input
// Charges_Per_Unit.innerHTML = "Charges Per Unit:" + 16
// Net_Amount_Payable.innerHTML = "Net Amount Payable: " + (Number_Of_Units_input + 16);
// Late_Payment_Surcharge.innerHTML = "Late Payment Surcharge: " + 350
// Gross_Amount_Payable.innerHTML = "Gross Amount Payable: " + (Net_Amount_Payable.innerText+350)

// parent.appendChild(Customer_Name )
// parent.appendChild(Current_Month )
// parent.appendChild(Number_Of_Units )
// parent.appendChild(Charges_Per_Unit )
// parent.appendChild(Net_Amount_Payable )
// parent.appendChild(Late_Payment_Surcharge )
// parent.appendChild(Gross_Amount_Payable )

