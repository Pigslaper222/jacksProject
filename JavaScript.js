//Integers and Strings
//Strings are used to communicate to the user
// "/" is divide in Java and "*" is multiply

//Boolean
//AND, OR, NOT

//AND checks to see if both are true.
//OR checks to see if at least one is true.

//true and true = true

//OR

//true or false = true

//Not
//Not true = false
//Not false = true

//(not true) and true = false
	//false and true = false

var aloha = "Hello and Goodbye";
console.log(aloha);
//This is a variable. The variable is named aloha.
//The aloha variable means Hello and Goodbye.

var year = prompt("Before you go on this page, what year were you born");
//This is asking a question where you can answer.
	if(year < 2000) {
		window.alert("You were born before 2000. You are to old for this site. Go to another tab please.");
	}
//This will pop up an alert saying "You were born before 2000. You are to old for this site. Go to another tab please."
	else if(year===2000)
	{
		window.alert("You were born in the year 2000. You're young enough, I guess.");

	}
	else{
		window.alert("You were born after 2000. Have fun on the site");

	}