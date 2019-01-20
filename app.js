/*
Build all of your functions for displaying and gathering information below (GUI).
*/

// app is the function called to start the entire application
function app(people)
{
  var searchType = promptFor("Do you know the name of the person you are looking for? Enter 'yes' or 'no'", yesNo).toLowerCase();
  switch(searchType)
  {
    case 'yes':
  	//REMOVE

	//
    let dirName=searchByName(people);
    	if(dirName==undefined)
    	{
    		alert("Could not find that individual. Please try again.");
    		return app(people);
    	}
    	else
    	{	
    	displayPerson(dirName);
    	console.log(dirName)
    	mainMenu(dirName,people);
     	 // TODO: search by name
   		 break;
    	}
    case 'no':
    dirTraits=searchByTraits(people);
    displayPeople(dirTraits);
     console.log(dirTraits);
     mainMenu(dirTraits,people);
    //need to get function arraysEqual to access data from people variable
      // TODO: search by traits 
      break;
    default:
      alert("Invalid input. Please try again!");
      app(people); // restart app
    break;
  }

}
// Menu function to call once you find who you are looking for
function mainMenu(person, people){
  /* Here we pass in the entire person object that we found in our search, as well as the entire original dataset of people. We need people in order to find descendants and other information that the user may want. */
  if(!person){
    alert("Could not find that individual.");
    return app(people); // restart
  }

  var displayOption = prompt("Found " + person.firstName + " " + person.lastName + " . Do you want to know their 'info', 'family', or 'descendants'? Type the option you want or 'restart' or 'quit'");

  switch(displayOption){
    case "info":
    displayPerson(person);
      // TODO: get person's info
      break;
    case "family":
      // TODO: get person's family
      break;
    case "descendants":
      // TODO: get person's descendants
      break;
    case "restart":
      app(people); // restart
      break;
    case "quit":
      return; // stop execution
    default:
      return mainMenu(person, people); // ask again
  }
}

function searchByName(people){
  var firstName = promptFor("What is the person's first name?", chars);
  var lastName = promptFor("What is the person's last name?", chars);

  let filteredPeople = people.filter(function(el) {
    if(el.firstName === firstName && el.lastName === lastName) {
      return true;
    }
  });
  console.log(filteredPeople);
  return filteredPeople[0];// TODO: What to do with filteredPeople?

}
// alerts a list of people
function displayPeople(people){
  alert(people.map(function(person){
    return person.firstName + " " + person.lastName;
  }).join("\n"));
}

function displayPerson(person){
  // print all of the information about a person:
  // height, weight, age, name, occupation, eye color.
  var personInfo = "First Name: " + person.firstName + "\n";
  personInfo += "Last Name: " + person.lastName + "\n";
  // TODO: finish getting the rest of the information to display
  alert(personInfo);
}
// function that prompts and validates user input
function promptFor(question, callback){
  do{
    var response = prompt(question).trim();
  } while(!response || !callback(response));
  return response;
}
// helper function to pass into promptFor to validate yes/no answers
function yesNo(input){
  return input.toLowerCase() == "yes" || input.toLowerCase() == "no";
}

// helper function to pass in as default promptFor validation
function chars(input){
  return true; // default validation only
}

function birthDate() 
{
	var today = new Date();
	console.log(today);
}
function searchByTraits(people) 
{
	let filteredTraits;
	var gender = promptFor("What is the person's gender?", chars);
	let continuePrompt = promptFor("Would you like to continue? Y/N", chars);
		switch(continuePrompt)
		{case "no" || "No" || "N" || "n":
		
			filteredTraits = people.filter(function(el)
			{
    			if(el.gender === gender) 
    			{
      			return true;
				}
			}
				);
		
			console.log(filteredTraits);
				return filteredTraits;
				break;
		
		case "yes" || "Yes" || "Y" || "y" || " ":

		}

	var eyeColor = promptFor("What is the person's eye color?", chars);
	continuePrompt = promptFor("Would you like to continue? Y/N", chars);
		switch(continuePrompt)
		{case "no" || "No" || "N" || "n":
		
			filteredTraits = people.filter(function(el)
			{
    			if(el.eyeColor === eyeColor && el.gender === gender) 
    			{
      			return true;
				}
			}
				);
		
			console.log(filteredTraits);
				return filteredTraits;
				break;
		
		case "yes" || "Yes" || "Y" || "y" || " ":

		}
  	var getHeight = promptFor("What is the person's height?", chars);
  	continuePrompt = promptFor("Would you like to continue? Y/N", chars);
		switch(continuePrompt)
		{case "no" || "No" || "N" || "n":
		
			filteredTraits = people.filter(function(el)
			{
    			if(el.getHeight === getHeight) 
    			{
      			return true;
				}
			}
				);
		
			console.log(filteredTraits);
				return filteredTraits;
				break;
		
		case "yes" || "Yes" || "Y" || "y":

		}

  	var weight = promptFor("What is the person's weight?", chars);
  	continuePrompt = promptFor("Would you like to continue? Y/N", chars);
		switch(continuePrompt)
		{case "no" || "No" || "N" || "n":
		
			filteredTraits = people.filter(function(el)
			{
    			if(el.weight === weight) 
    			{
      			return true;
				}
			}
				);
		
			console.log(filteredTraits);
				return filteredTraits;
				break;
		
		case "yes" || "Yes" || "Y" || "y":

		}

  	var occupation = promptFor("What is the person's occupation?", chars);
  	continuePrompt = promptFor("Would you like to continue? Y/N", chars);
		switch(continuePrompt)
		{case "no" || "No" || "N" || "n":
		
			filteredTraits = people.filter(function(el)
			{
    			if(el.occupation === occupation) 
    			{
      			return true;
				}
			}
				);
		
			console.log(filteredTraits);
				return filteredTraits;
				break;
		
		case "yes" || "Yes" || "Y" || "y":

		}

  	var dob = promptFor("What is the person's date of birth?", chars);
  	continuePrompt = promptFor("Would you like to continue? Y/N", chars);
		switch(continuePrompt)
		{case "no" || "No" || "N" || "n":
		
			filteredTraits = people.filter(function(el)
			{
    			if(el.dob === dob) 
    			{
      			return true;
				}
			}
				);
		
			console.log(filteredTraits);
				return filteredTraits;
				break;
		
		case "yes" || "Yes" || "Y" || "y":

		}

  	filteredTraits = people.filter(function(el) 
  	{
    if(el.gender === gender && el.eyeColor === eyeColor && el.getHeight === getHeight && el.weight === weight && el.occupation === occupation && el.dob === dob)
    {
    return true;
    }
  	}
 	);

  return filteredTraits;
}
