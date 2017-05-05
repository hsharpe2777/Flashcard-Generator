// dependency for inquirer npm package
var inquirer = require("inquirer");

module.exports = ClozeCard;

//Cloze Card Constructor
function ClozeCard(text, cloze) {

    this.text = text;
    this.cloze = cloze;
    // this.partial = partial;
    // this.fullText = fullText;
    this.convert = function() {

        // convert text to an array
        var textArray = text.split(" ");

        //convert "cloze" to an array to compare with text
        var answer = cloze.split(" ");

        //for each word in "cloze" in the text...
        for (var i = 0; i < answer.length; i++) {
            var answerIndex = textArray.indexOf(answer[i]);

            //replace with place holder
            text = text.replace(answer[i], "_______");

        }
        //print text with placeholders
        return text;
    }

};

//Array for ClozeCards
var clozeCardArry = [];




//What is the Capital of North Carolina
var raleigh = new ClozeCard(
    "Raleigh is the capital of North Carolina.", "Raleigh");
clozeCardArry.push(raleigh);

//What is the nickname of North Carolina
var nickNameNC = new ClozeCard(
    "The Tar Heel State is the nickname of North Carolina.", "The Tar Heel State");
clozeCardArry.push(nickNameNC);

//What is the nickname of RI
var nickNameRI = new ClozeCard(
    "The Ocean State is the nickname of Rhode Island", "The Ocean State");
clozeCardArry.push(nickNameRI);

//What is the Capital of Rhode Island
var providence = new ClozeCard(
    "Providence is the capital of Rhode Island.", "Providence");
clozeCardArry.push(providence);

//What is the nickname of Arizona
var nickNameAZ = new ClozeCard(
    "The Grand Canyon State is the nickname of Arizona.", "The Grand Canyon State");
clozeCardArry.push(nickNameAZ);

//What is the Capital of Arizona
var pheonix = new ClozeCard(
    "Pheonix is the capital of Arizona.", "Pheonix");
clozeCardArry.push(pheonix);


//What is the Capital of Alabama
var montgomery = new ClozeCard(
    "Montgomery is the capital of Alabama.", "Montgomery");
clozeCardArry.push(montgomery);


//What is the nickname of Alabama
var nickNameAL = new ClozeCard(
    "Yellowhammer State is the nickname of Alabama.", "Yellowhammer State");
clozeCardArry.push(nickNameAL);





var count = 0;

var quiz = function() {

    if (count < clozeCardArry.length) {
        // //prompts
        inquirer.prompt([{
            name: "text",
            message: clozeCardArry[count].convert()
        }]).then(function(answers) {

        	var cloze = clozeCardArry[count].cloze;
        	var text = answers.text;
        	if(cloze.toUpperCase() === text.toUpperCase()){
        		console.log("That is Correct! Great Job!");
        	}
        	else{
        		console.log("Incorrect." + clozeCardArry[count].text);

        	}
            
            count++;
            quiz();
        });
        
        
    }
}

quiz();

