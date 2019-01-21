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
    let dirName=searchByName(people);	
    console.log(dirName);
    mainMenu(dirName, people);
    // TODO: search by name
   	break;

    case 'no':
    let dirTraits=searchByTraits(people);
    let peopleSelection=displayPeople(dirTraits);
     console.log(peopleSelection);
     mainMenu(peopleSelection,people);
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
function mainMenu(person, people)
{
	console.log(person);
  /* Here we pass in the entire person object that we found in our search, as well as the entire original dataset of people. We need people in order to find descendants and other information that the user may want. */
  if(!person)
  {
    alert("Could not find that individual.");
    return app(people); // restart
	}
  var displayOption = prompt("Found " + person.firstName + " " + person.lastName + " . Do you want to know their 'info', 'family', or 'descendants'? Type the option you want or 'restart' or 'quit'");

  switch(displayOption)
  {
    case "info":
    displayPerson(person);
      // TODO: get person's info
      break;
    case "family":
    displayFamily(person,people);
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
  console.log(filteredPeople[0]);
  return filteredPeople[0];// TODO: What to do with filteredPeople?

}
// alerts a list of people
function displayPeople(people){
  alert(people.map(function(person){
    return person.firstName + " " + person.lastName;
  }).join("\n"));
}

function displayPerson(person)
{
  // print all of the information about a person:
  // height, weight, age, name, occupation, eye color.
 let personInfo;
 chooseTraits=promptFor("What would you like to display? Options to choose: Gender, Height, Weight, Age, Occupation, Eye Color, or All",chars);
  personInfo = "First Name: " + person.firstName + "\n";
  personInfo += "Last Name: " + person.lastName + "\n";
 	if (chooseTraits== "Gender" || chooseTraits=="gender" || chooseTraits=="All")
 	{	
 personInfo += "Gender: " + person.gender + "\n";
	}
 	if (chooseTraits=="Height" || chooseTraits=="height" || chooseTraits=="All")
 	{
  personInfo += "Height: " + person.height + "\n";
  	}
 	if (chooseTraits=="Weight" || chooseTraits=="weight" || chooseTraits=="All")
  	{
  personInfo += "Weight: " + person.weight + "\n";
	}
 	if (chooseTraits=="Age" || chooseTraits=="age" || chooseTraits=="All")
 	{
  personInfo += "Age: " + birthDate(person.dob) + "\n";
  	}
  	if (chooseTraits=="Occupation" || chooseTraits=="occupation" || chooseTraits=="All")
  	{	
  personInfo += "Occupation: " + person.occupation + "\n";
  	}
 	if (chooseTraits=="Eye Color" || chooseTraits=="eye color" || chooseTraits=="All")
 	{	
  personInfo += "Eye Color: " + person.eyeColor + "\n";
  	}
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

function birthDate(birth) 
{
	var today = new Date();
	var dob = new Date(birth);
	let getAge=(Date.now() - dob.getTime());
	ageDate = new Date(getAge);
	return Math.abs(ageDate.getUTCFullYear() - 1970);
	// function _calculateAge(birthday) { // birthday is a date
 //    var ageDifMs = Date.now() - birthday.getTime();
 //    var ageDate = new Date(ageDifMs); // miliseconds from epoch
 //    return Math.abs(ageDate.getUTCFullYear() - 1970);
	
}

function displayFamily(person,people)
{
	let family = people.filter(function(el) {
    if(el.lastName === person.lastName) {
      return true;
    }
  });
  displayPeople(family);
  moreInfo=promptFor("Would you like to learn more about a family member?",chars);
  	switch(moreInfo)
  	{
  	case "No" || "no" || "n":
  	app(people);
  	break; 			
  	 case "Yes" || "yes" || "y":
  	 break;
  	}
  displayPeople(family);
  let familyMember=promptFor("Which family member would you like to learn more about? Enter the number associated with the family member.",chars);
 	switch(familyMember)
 	{case "1":
 	person=family[0]
 	getInfo(person,people)
 	break;
 	case "2":	
  	person=family[1]
  	getInfo(person,people)
  	break;
  	case "3":
  	person=family[2]
  	getInfo(person,people)
  	break;
  	case "4":
  	person=family[3]
  	getInfo(person,people)
  	break;
  	case "5":
  	person=family[4]
  	getInfo(person,people)
  	break;
  }
}
function getInfo(person,people)
{
let personInfo;
chooseTraits=promptFor("What would you like to display? Options to choose: Gender, Height, Weight, Age, Occupation, Eye Color, or All",chars);
  personInfo = "First Name: " + person.firstName + "\n";
  personInfo += "Last Name: " + person.lastName + "\n";
 	if (chooseTraits== "Gender" || chooseTraits=="gender" || chooseTraits=="All")
 	{	
 personInfo += "Gender: " + person.gender + "\n";
	}
 	if (chooseTraits=="Height" || chooseTraits=="height" || chooseTraits=="All")
 	{
  personInfo += "Height: " + person.height + "\n";
  	}
 	if (chooseTraits=="Weight" || chooseTraits=="weight" || chooseTraits=="All")
  	{
  personInfo += "Weight: " + person.weight + "\n";
	}
 	if (chooseTraits=="Age" || chooseTraits=="age" || chooseTraits=="All")
 	{
  personInfo += "Age: " + birthDate(person.dob) + "\n";
  	}
  	if (chooseTraits=="Occupation" || chooseTraits=="occupation" || chooseTraits=="All")
  	{	
  personInfo += "Occupation: " + person.occupation + "\n";
  	}
 	if (chooseTraits=="Eye Color" || chooseTraits=="eye color" || chooseTraits=="All")
 	{	
  personInfo += "Eye Color: " + person.eyeColor + "\n";
  	}
  // TODO: finish getting the rest of the information to display
  alert(personInfo);
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
        case "yes" || "Yes" || "Y" || "y" || " ":        }    var eyeColor = promptFor("What is the person's eye color?", chars);

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
    case "yes" || "Yes" || "Y" || "y" || " ":        }

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

    case "yes" || "Yes" || "Y" || "y":        }      var weight = promptFor("What is the person's weight?", chars);
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

        case "yes" || "Yes" || "Y" || "y":        }      var occupation = promptFor("What is the person's occupation?", chars);

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

        case "yes" || "Yes" || "Y" || "y":        }      var dob = promptFor("What is the person's date of birth?", chars);

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

        case "yes" || "Yes" || "Y" || "y":        }      filteredTraits = people.filter(function(el)

     {

   if(el.gender === gender && el.eyeColor === eyeColor && el.getHeight === getHeight && el.weight === weight && el.occupation === occupation && el.dob === dob)

   {

   return true;

   }

     }

    );  return filteredTraits;

}


// function searchByGender(people) 
// {
// 	let filteredTraits;
// 	var gender = promptFor("What is the person's gender?", chars);
// 	let continuePrompt = promptFor("Would you like to continue? Type Yes or No", chars);
// 		switch(continuePrompt)
// 		{case "no" || "No" || "N" || "n":
// 			filteredTraits = people.filter(function(el)
// 			{
//     			if(el.gender === gender) 
//     			{
//       			return true;
// 				}
// 			}
// 				);
		
// 			console.log(filteredTraits);
// 				return filteredTraits;
// 				break;
		
// 		case "yes" || "Yes" || "Y" || "y":
// 		// default:
// 		// alert("Invalid input. Please try again!");
// 		// searchByTraits(people);
// 		}
// 			// if(gender != "male" || "female")
// 			// {
// 			// 	alert("Invalid input. Please try again!");
// 			// 	searchByTraits(people);//want to redo prompt for gender after gibberish typed
// 			// }
// 			// else
// 			// {

// 			// }
// function searchByEyeColor(people)
// {
// 	var eyeColor = promptFor("What is the person's eye color?", chars);
// 	continuePrompt = promptFor("Would you like to continue? Y/N", chars);
// 		switch(continuePrompt)
// 		{case "no" || "No" || "N" || "n":
		
// 			filteredTraits = people.filter(function(el)
// 			{
//     			if(el.eyeColor === eyeColor && el.gender === gender) 
//     			{
//       			return true;
// 				}
// 			}
// 				);
		
// 			console.log(filteredTraits);
// 				return filteredTraits;
// 				break;
		
// 		case "yes" || "Yes" || "Y" || "y" || " ":

// 		default:
// 		alert("Invalid input. Please try again!");
// 		searchByTraits(people);

// 		}
// }

// function searchByGetHeight(people)
// {
//   	var getHeight = promptFor("What is the person's height?", chars);
//   	continuePrompt = promptFor("Would you like to continue? Y/N", chars);
// 		switch(continuePrompt)
// 		{case "no" || "No" || "N" || "n":
		
// 			filteredTraits = people.filter(function(el)
// 			{
//     			if(el.getHeight === getHeight) 
//     			{
//       			return true;
// 				}
// 			}
// 				);
		
// 			console.log(filteredTraits);
// 				return filteredTraits;
// 				break;
		
// 		case "yes" || "Yes" || "Y" || "y" || "":

// 		default:
// 		alert("Invalid input. Please try again!");
// 		searchByTraits(people);

// 		}
// }

// function searchByWeight(people)
// {
//   	var weight = promptFor("What is the person's weight?", chars);
//   	continuePrompt = promptFor("Would you like to continue? Y/N", chars);
// 		switch(continuePrompt)
// 		{case "no" || "No" || "N" || "n":
		
// 			filteredTraits = people.filter(function(el)
// 			{
//     			if(el.weight === weight) 
//     			{
//       			return true;
// 				}
// 			}
// 				);
		
// 			console.log(filteredTraits);
// 				return filteredTraits;
// 				break;
		
// 		case "yes" || "Yes" || "Y" || "y" || "":


// 		default:
// 		alert("Invalid input. Please try again!");
// 		searchByTraits(people);

// 		}
// }

// function searchByOccupation(people)
// {
//   	var occupation = promptFor("What is the person's occupation?", chars);
//   	continuePrompt = promptFor("Would you like to continue? Y/N", chars);
// 		switch(continuePrompt)
// 		{case "no" || "No" || "N" || "n":
		
// 			filteredTraits = people.filter(function(el)
// 			{
//     			if(el.occupation === occupation) 
//     			{
//       			return true;
// 				}
// 			}
// 				);
		
// 			console.log(filteredTraits);
// 				return filteredTraits;
// 				break;
		
// 		case "yes" || "Yes" || "Y" || "y" || "":

// 		default:
// 		alert("Invalid input. Please try again!");
// 		searchByTraits(people);

// 		}
// }

// function searchByDob(people)
// {
//   	var dob = promptFor("What is the person's date of birth?", chars);
//   	continuePrompt = promptFor("Would you like to continue? Y/N", chars);
// 		switch(continuePrompt)
// 		{case "no" || "No" || "N" || "n":
		
// 			filteredTraits = people.filter(function(el)
// 			{
//     			if(el.dob === dob) 
//     			{
//       			return true;
// 				}
// 			}
// 				);
		
// 			console.log(filteredTraits);
// 				return filteredTraits;
// 				break;
		
// 		case "yes" || "Yes" || "Y" || "y" || "":

// 		default:
// 		alert("Invalid input. Please try again!");
// 		searchByTraits(people);

// 		}
// }
//   	filteredTraits = people.filter(function(el) 
//   	{
//     if(el.gender === gender && el.eyeColor === eyeColor && el.getHeight === getHeight && el.weight === weight && el.occupation === occupation && el.dob === dob)
//     {
//     return true;
//     }
//   	}
//  	);

//   return filteredTraits;
// }

// function searchByTraits(people)
// {
// 	let defineTrait=promptFor("What traits would you like to define? Enter 'gender', 'eye color', 'height', 'weight', 'occupation', or 'dob'? Type the option you want or 'restart' or 'quit'",chars)
// 	switch(defineTrait)
// {	case "Gender" || "gender":
// 	let genderTrait=searchByGender(people);
// 	return genderTrait;
// 	case "EyeColor" || "eyecolor":
// 	let eyeColorTrait=searchByEyeColor(people);
// 	return genderTrait;
// 	case "GetHeight" || "getheight":
// 	let getHeightTrait=searchByGetHeight(people);
// 	return getHeightTrait;
// 	case "Weight" || "weight":
// 	let weightTrait=searchByWeight(people);
// 	return weightTrait;
// 	case "Occupation" || "occupation":
// 	let occupationTrait=searchByOccupation(people);
// 	return occupationTrait;
// 	case "Dob" || "dob":
// 	let dobTrait=searchByDob(people);
// 	return dobTrait;
// }
// }

//would you like to define x Y/N
// N you like to define x