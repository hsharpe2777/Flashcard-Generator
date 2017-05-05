module.exports = BasicCard;

// dependency for inquirer npm package
var inquirer = require("inquirer");


//Basic Card Constructor
function BasicCard (front, back){
	this.front = front; 
	this.back = back;
	this.printFront = function(){
		return this.front;
	}

}

//array for basic cards
var basicCardArry = [];

//What is the Capital of North Carolina
var raleigh = new BasicCard(
    "What is the capital of North Carolina?", "Raleigh");
basicCardArry.push(raleigh);

//What is the nickname of North Carolina
var nickNameNC = new BasicCard(
    "What is the nickname of North Carolina?", "The Tar Heel State");
basicCardArry.push(nickNameNC);

//What is the nickname of RI
var nickNameRI = new BasicCard(
    "What is the nickname of Rhode Island?", "The Ocean State");
basicCardArry.push(nickNameRI);

//What is the Capital of Rhode Island
var providence = new BasicCard(
    "What is the capital of Rhode Island?", "Providence");
basicCardArry.push(providence);

//What is the nickname of Arizona
var nickNameAZ = new BasicCard(
    "What is the nickname of Arizona?", "The Grand Canyon State");
basicCardArry.push(nickNameAZ);

//What is the Capital of Arizona
var pheonix = new BasicCard(
    "What is the capital of Arizona?", "Pheonix");
basicCardArry.push(pheonix);


//What is the Capital of Alabama
var montgomery = new BasicCard(
    "What is the capital of Alabama?", "Montgomery");
basicCardArry.push(montgomery);


//What is the nickname of Alabama
var nickNameAL = new BasicCard(
    "What is the nickname of Alabama?", "Yellowhammer State");
basicCardArry.push(nickNameAL);





var count = 0;

var quiz = function() {

    if (count < basicCardArry.length) {
        // //prompts
        inquirer.prompt([{
            name: "back",
            message: basicCardArry[count].printFront()
        }]).then(function(answers) {

        	var back = basicCardArry[count].back;
        	var answerbck = answers.back;
        	if(answerbck.toUpperCase() === back.toUpperCase()){
        		console.log("That is Correct! Great Job!");
        	}
        	else{
        		console.log("Incorrect." + basicCardArry[count].back);

        	}
            
            count++;
            quiz();
        });
        
        
    }
}

quiz();
