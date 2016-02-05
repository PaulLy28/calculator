/*
 //defined callback function
 function callback(type,value,item){
 if (value == undefined) {
 $(".display").text("");
 }
 else {
 $(".display").text(value);
 }
 }

 //my_calculator - creates a new calculator object
 var my_calculator = new calculator(callback);


 //jQuery document onload function
 $(document).ready(function(){
 //jQuery buttons click function
 $("button").click(function(){
 //var name val is equal to "$(this)" which is referring to the button click function ".text()" which is the text in that button tag
 var val =$(this).text();
 //if statement with the condition: if variable val (defined above) is equal in value to string "CE" OR variable val is equal in value to string "C", (if true) the block of code to be executed will clear the display. ELSE (if false) the value will be added to the display
 if (val == "CE" || val == "C") {
 my_calculator.allClear();
 }
 else {
 my_calculator.addItem(val);
 }
 });
 });*/
/* n[i] is an array of operators and operands that have been entered
["+", "-", "*","/"].indexOf(n[i]);
*/
var input_storage = [''];
var storage_index = 0;
$(document).ready(function(){
    $('.numbers > #numbers').click(function(){
        console.log('this is ',this);
        store_number($(this).text());
    });

    $('.numbers > #operator').click(function(){
        console.log('operator button clicked');
        store_operator($(this).text());
    });

});


//@purpose: get the number from the button and store into a variable, then update display
//@params:
//button_value - the value of the button that was clicked
//@return:
//none
//@global:
//input_storage : the storage for all inputs
//storage_index : the index of the current position in input_storage
function store_number(button_value){
    console.log('store number button_value',button_value);
    input_storage[storage_index]+=button_value;
    console.log('input storage: ',input_storage);
    update_display();
}


//@purpose: get the operator from the button and store it into that array ("that array" he says.  like I'm just some sort of transcriptionist. oohhhhhh, that array... input storage, that makes sense.... I guess)
//@params:
//button_value - the value of the button that was clicked
//@return:
//none
//@global:
//input_storage : the storage for all inputs
//storage_index : the index of the current position in input_storage
function store_operator(button_value){
    console.log('store operator button_value',button_value);
    storage_index++;
    input_storage[storage_index]=button_value;
    storage_index++;
    input_storage[storage_index]='';
    console.log("input storage = ",input_storage);
    update_display();
}


//@purpose: display that have been into input_storage
//@params:
//none
//@return:
//none
//@global:
//input_storage : the storage for all inputs
function update_display(){
    var output = '';
    for(var i=0; i<input_storage.length; i++){
        output+=input_storage[i];
    }
    $("#display").text(output);
}

//function perform_calculation
//@purpose: perform math based on passed in values: op1, op2, and the operator, then decide which math to perform based on the operator
//@params:
//op1 - the first operand
//op2 - the second operand
//operator - the operator to perform
//@return:
//the result of the math
//@global:
//input_array - storage for all operands and operators
//current_index - the current position in the input_array

function perform_calculation(){
    for(var i=0; i<=input_array.length; i+=2){
        var op1 = input_array[i];
            if statement to store op1 and then op2 and operator
       }
   }
}

//function do_math
//@purpose: iterate through input_array and fetch required data to perform math, then pass them to perform_calculation
//@params:
//none
//@return:
//none
//@global:
//input_array - storage for all operands and operators
function do_math(){

}
