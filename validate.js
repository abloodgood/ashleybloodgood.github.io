function validateForm() {
		/*Get the first and last name from the document*/
		var firstName = document.getElementById("firstName");
		var lastName = document.getElementById("lastName");
		/*Check to make sure first and last name are both over 2 characters*/
		if (firstName.value.length <= 2) {
					alert("First Name must contain two or more characters!");
					firstName.style.borderColor = "red";
					return false;
		} else if (lastName.value.length <= 2) {
				  alert("Last Name must contain two or more characters!");
					lastName.style.borderColor = "red";
					return false;
		}
		
		/*use reg ex to test if first or last name have anything other than letters*/
		var letters = /^[a-zA-Z]+$/;
		if ((!letters.test(firstName.value)) 
		|| (!letters.test(lastName.value))) {
					alert("Names can only contain letters!");
					firstName.style.borderColor = "red";
					lastName.style.borderColor = "red";
					return false;
		}
		
		/*check that facilatator exists*/
		var facName = document.getElementById("facilitator");
		var names = ["Jen", "Behdad", "Chris", "Christian", "Josh", "jen", "behdad", "chris", "christian", "josh"];
		/*if the string exists in names, return true*/
		if (names.indexOf(facName.value) > -1) {
				return true;
		/*print alert and return false if facilitator name does not exist*/
		} else {
				alert("No facilitator by that name was found. Please enter one of the following: Jen, Behdad, Chris, Christian, Josh");
				facName.style.borderColor = "red";
				return false;
		}
}