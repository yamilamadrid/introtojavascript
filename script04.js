/*4function that takes in one argument that is passed through a conditional
statement with if, else ifs, and else. Return the result as an alert or console.log. Test 
all of your conditions to amek sure you can receive all of your results back.*/

function ConditionalStatement (input) {
	if (input > 25) {
		alert("input is greater than 25.");
	} else if (input <= 25) {
		console.log("input is less than 25.");
	} else {
		alert("The number is 25.");
	}
}

ConditionalStatement(30);
ConditionalStatement(25);
ConditionalStatement(5);
