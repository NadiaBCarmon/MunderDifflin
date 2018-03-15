
//Make submit the onClick event, get the email and store it onto a blank doc//
//If email does not end in .com or .edu, prompt user for a valid email

		//Improvements - Make an array of common email endings from all countries. Loop through them. 
		//If email does not end in any of those, then prompt user for a valid email


const subscribers = document.getElementById('submitInput');
// const usersTxt = url('subUsers.txt');

subscribers.addEventListener('click', function() {
	let usersList = document.getElementById('emailInput').value;

	if(usersList.slice(-4) != ".com" && usersList.slice(-4) != ".edu"){
		alert("Please enter a valid email")
	}

	else{
	console.log(usersList);
	}
});



//Displays message to website viewer on mouseover (similar to hover)//

let divsOnHover = document.getElementsByClassName('hoverable');

// [document.getElementById('recycled'), 
// document.getElementById('vellum'), 
// document.getElementById('handmade'),
// document.getElementById('cardboard'),
// document.getElementById('cardstock')];


for(var i=0; i<divsOnHover.length; i++){
	//console.log(divsOnHover[i]);
	//console.log("***********");
	divsOnHover[i].addEventListener("mouseover", function() {
		//console.log("Love you!")

		
		document.getElementById('productInfo').innerHTML = "<h3>Family owned since 1883</h3>";

	}); //end of addEventListener//

}//end of for loop//

