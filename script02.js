/*2create a conditional statemnet that compares two numbers. you can choose if 
those numbers will be equal, less than, greater than, less than or equal to, or greater than
or equal to each other. Include an if, else if, and else statement. Create an alert
that gives your user feedback based on the number. Test you statement with different numbers
to make sure all alerts work*/

let num_one = 2;
let num_two = 3;

if (num_one < num_two) {
	alert("The first number is less than the second number");
}

else if (num_one > num_two) {
	alert("The first number is greater than the second number");
}

else {
	alert("The two numbers are equal");
}