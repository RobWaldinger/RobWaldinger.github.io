

var output;  // store first name, last name, email and cell temp to display


function checkFields()
{
	if(document.getElementById("fName").value === "")
	{
		window.alert("Enter first name");
	}
	else if(document.getElementById("lName").value === "")
	{
		window.alert("Enter last name");
	}
	else if(document.getElementById("addr").value === "")
	{
		window.alert("Enter address");
	}
	else if(document.getElementById("city").value === "")
	{
		window.alert("Enter city");
	}
	else if(document.getElementById("zip").value === "")
	{
		window.alert("Enter zipcode");
	}
	else if(document.getElementById("email").value === "")
	{
		window.alert("Enter email");
	}
	else if(document.getElementById("phone").value === "")
	{
		window.alert("Enter phone");
	}
	else
	{
		if(document.getElementById("email") !== "")
		{
			verifyEmail();
		}
		else
		{
			showInfo();
		}
	}
	
}

function verifyEmail()
{
	var emailInput = document.getElementById("email");
	var emailCheck = /^[_\w\-]+(\.[_\w\-]+)*@[\w\-]+(\.[\w\-]+)*(\.[\D]{2,6})$/;
	
	if(emailCheck.test(emailInput.value) === false)
	{
		document.getElementsByClassName("infod")[5].value = "";
		alert("Please enter a valid email");
	}
	else
	{
		showInfo();
	}
}
function showInfo() // Shows cutomer information to user and allows option to reset or order.
{
	
// display information to review after submit button pressed
	output = "First Name: " + document.getElementById("fName").value + "<br>"
	output += "Last Name: " + document.getElementById("lName").value + "<br>"
	output += "Address: " + document.getElementById("addr").value + "<br>"
	output += "City: " + document.getElementById("city").value + "<br>"
	output += "Zipcode: " + document.getElementById("zip").value + "<br>"
	output += "Email: " + document.getElementById("email").value + "<br>"
	output += "Phone: " + document.getElementById("phone").value 
	document.getElementById("verifyInfo").innerHTML = output;

// shows the reset and order buttons after submit button pressed
	document.getElementById("reset").style.display = "block";
	document.getElementById("order").style.display = "block";
}

function resetContact()
{
	for(var i=0; i<7; i++) // erases user input
	{
		document.getElementsByClassName("infod")[i].value = "";
	}
	document.getElementById("verifyInfo").innerHTML = "";
	
	// hides buttons
	document.getElementById("reset").style.display = "none";
	document.getElementById("order").style.display = "none";
	
}
function startOrder()
{
	checkFields();
    window.open("orders.html","_self"); 

}



