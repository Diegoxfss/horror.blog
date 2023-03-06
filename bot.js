 src="https://code.jquery.com/jquery-3.0.0.js" integrity="sha256-jrPLZ+8vDxt2FnE1zvZXCkCcebI/C8Dt5xyaQBjxQIo=" crossorigin="anonymous"


 var questionNum = 0;													// Questions start on 0. then, each if condition has a crescent order(1,2,3..)
 var question = '<h1>🤖 Hello. what is your name And where are you from ? </h1>';		

 var output = document.getElementById('output');				// store id="output" in output variable
 output.innerHTML = question;

const random = Math.floor(Math.random())

const Responses =   [ ("unsure for now. try agains"), ("Dont think so"), ("Don't count on it"), ("Not looking too good probably") ];

 responses = Math.random();
 responses1 = Math.random();
 
 function bot() { 
 var input = document.getElementById("input").value;
 console.log(input);

 if (questionNum == 0) {
 output.innerHTML = '<h2>hello ' + input + '!</h2>';// output response
 document.getElementById("input").value = "";   		// clear text box
 question = '<h2>How are you felling on a scale from 1-10 ?</h2>';		    	// load next question		
 setTimeout(timedQuestion, 2000);									// output next question after 2sec delay
 }
 else if (questionNum == 1) {
 output.innerHTML = '<h1> Great! ' + input + ' Thats fine. Things might get better. </h1>';
 document.getElementById("input").value = "";   
 question =  '<h1>How old are you?</h1>';				      	
 setTimeout(timedQuestion, 2000);
 }   
 else if (questionNum == 2) {
 output.innerHTML = '<h1>It is certain that you you were born in ' + (2023 - input);	'.</h1>';
 document.getElementById("input").value = "";   		// clear text box
 question = '<h1>  I am ' + input + (Math.random() * 2) + 1 +  Math.round(input + (Math.random() * 2) + 1) +' years old . I know how to multiply. Ask me any number multiplied by 10<h1>';
 setTimeout(timedQuestion, 2000);
 }
 else if (questionNum == 3) {
 output.innerHTML  = '<h1>  ' + input +  ' Multiplied by 10 is esqual to ' + (input * 10); '</h1>';  
 document.getElementById("input").value = "";   		// clear text box
 question = '<h1> Now ask me a Random question.</h1>';
 setTimeout(timedQuestion, 2000);	
 }
 else if (questionNum == 4) {
 output.innerHTML = '<h1> ' + Responses + Math.floor(Math.random()) * Responses.length; '</h1>';
 console.log(Responses[Response]) ;
 document.getElementById("input").value = "";   		// clear text box
 question =  '<h1>  Ok. Do you like this bot ? Yes(Y) or No(N) ? .</h1>';
 setTimeout(timedQuestion, 2000);	
 }
 else if (questionNum == 5) {
 output.innerHTML = '<h1> ' +input+  '? you are right. I agree.</h1>';
 document.getElementById("input").value = "";   		// clear text box
 question =  '<h1> Ask me another question.</h1>';
 setTimeout(timedQuestion, 2000);	
 }
 else if (questionNum == 6) {
 output.innerHTML = '<h1> ' + Responses + Math.floor(Math.random()) * Responses.length; '</h1>';
 console.log(Responses[Response]) ;
 document.getElementById("input").value = "";   		// clear text box
 question =  '<h1>  As you can see I dont know much. Im not Chatgpt . Are you enjoying techtalent experience ? </h1>';
 setTimeout(timedQuestion, 2000);	
 }
 else if (questionNum == 7) {
 output.innerHTML = '<h1> ' +input+  ' Great.</h1>';
 console.log(Responses[Response]) ;
 document.getElementById("input").value = "";   		// clear text box
 question =  '<h1>  Ok. that was it. Bye .</h1>';
 setTimeout(timedQuestion, 2000);	
 }
 else if (questionNum == 8) {
    output.innerHTML = '<h1> ' +input+  ' Great.</h1>';
    console.log(Responses[Response]) ;
    document.getElementById("input").value = "";   		// clear text box
    question =  '<h1>  Ok. that was it. Bye .</h1>';
    setTimeout(timedQuestion, 2000);	
    }

}

var randomNumber = Math.floor(Math.random()*20);

 function newQuote() {
var randomNumber = Math.floor(Math.random() * (quotes.length));
document.getElementById(" quoteDisplay" ).innerHTML = quotes[randomNumber];
 }




function timedQuestion() {
 output.innerHTML = question;
}

//push enter key (using jquery), to run bot function.
$(document).keypress(function(e) {
if (e.which == 13) {
 bot();																						// run bot function when enter key pressed
 questionNum++;																		// increase questionNum count by 1
}
});