	var creditcardnumber = false;
	var creditcard = false;
	var expmonth = false;
	var expyear = false;
	var cvvnumber = false;

	var str = [];
function postInfo()
{
/*
	var testarray=new Array("a","b","c");

alert(testarray.join("%"));
alert(testarray.join(""));

testarray;
	*/
	for(var i=0; i < queryArray.length; i++)
	{
		str [i] = queryArray[i];
	}
	str.join("%");
	str.join("");
	

	for(var i=0; i < queryArray.length; i++)
	{
		document.getElementById("output").innerHTML += queryArray[i] + "<br>";
	}
	
}

function updateTotal()
{
	document.orderForm.showTotal.value ="";
	var totalCost =0;
	for(var i=0; i<document.orderForm.service.length; i++)
	{
		if(document.orderForm.service[i].checked)
		{
			totalCost = totalCost + parseInt(document.orderForm.service[i].value);
		}
	}
	document.orderForm.showTotal.value = totalCost;
}

//  create function to parse query string and store results in array
function passCustomerInfo()
{
	if(location.search)
	{
// assigns query string to queryData variable
		var queryData = location.search;

// removes opening question mark from string.		
		queryData = queryData.substring(1, queryData.length);
		
// splits querData into array
		queryArray = queryData.split("&");
	}
}

// function to see if service selected
function serviceSelected()
{
	
	var readyPay = false; // var to see if any checkbox checked
	
	
	for(var i=0; i < document.orderForm.service.length; i++)
	{
		if(document.orderForm.service[i].checked) // if true then at least one service is checked and can go onto payment
		{
			readyPay=true;
			break;
		}
		
	}
	if(readyPay)
	{
		creditFilledOut();
	}
	else 
	{
		window.alert("Please enter a service before you pay"); // if false then no services are checked and message displayed
	}
	
}

function creditFilledOut()
{
	
// Check if credit card number is empty
	if(document.getElementById("ccNum").value == "")
	{
		alert("Please enter credit card number");
	}
	else
	{
		validateCreditCard();
	}
		
// check if credit card is selected	
	if (document.getElementById("visa").checked || document.getElementById("mc").checked || document.getElementById("discover").checked || document.getElementById("amex").checked)
	{
	 creditcard = true;
	}
	else
	{
		alert("Please select a credit card");
	}
	validateMonth();
	validateYear();
	
	if(document.getElementById("cvv").value == "")
	{
		window.alert("Please enter cvv number");
	}
	else
	{
		cvvnumber = true;
	}
	
	if (creditcardnumber && creditcard && expmonth && expyear && cvvnumber)
	{
		alert("Thank you for your order!  Your order is being processed");
	}
	
}

function validateMonth()
{

 var ddl = document.getElementById("expMo");
 var selectedValue = ddl.options[ddl.selectedIndex].value;
    if (selectedValue === "selectMonth")
   {
    alert("Please select a month");
   }
   else
   {
	   expmonth = true;
   }
}

function validateYear()
{

 var ddl = document.getElementById("expYr");
 var selectedValue = ddl.options[ddl.selectedIndex].value;
    if (selectedValue === "selectYear")
   {
    alert("Please select a year");
   }
   else
   {
	   expyear = true;
   }
}

function validateCreditCard(value)
{
	var cardNumber = document.getElementById("ccNum").value;
	var visa = /^4[0-9]{12}(?:[0-9]{3})?$/;
	var mc = /^5[1-5][0-9]{14}$/;
	var discover = /^6(?:011|5[0-9]{2})[0-9]{12}$/;
	var amex = /^3[47][0-9]{13}$/;
	
	if(document.getElementById("visa").checked)
	{
		if(visa.test(cardNumber))
		{
			creditcardnumber = true;
			//creditcard = true;
		}
		else
		{
			alert("credit card number is not valid with visa");
		}		
	}
	if(document.getElementById("mc").checked)
	{
		if(mc.test(cardNumber))
		{
			creditcardnumber = true;
		//	creditcard = true;
		}
		else
		{
			alert("credit card number is not valid with master card");
		}		
	}

	if(document.getElementById("discover").checked)
	{
		if(discover.test(cardNumber))
		{
			creditcardnumber = true;
	//		creditcard = true;
		}
		else
		{
			alert("credit card number is not valid with discover");
		}		
	}
	if(document.getElementById("amex").checked)
	{
		if(amex.test(cardNumber))
		{
			creditcardnumber = true;
	//		creditcard = true;
		}
		else
		{
			alert("credit card number is not valid with american express");
		}		
	}
	
}

// passes customer information from query into array on load event.
if(window.addEventListener)
{
	window.addEventListener("load", passCustomerInfo, false);
}

if(window.addEventListener)
{
	window.addEventListener("load", postInfo, false);
}

// huntington launchpad 40.870955, -73.429133