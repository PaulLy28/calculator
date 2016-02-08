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

    $(".numbers > #equalSign").click(function(){
        console.log("equal button clicked");
        console.log("this is", this);
        do_math();
       // update_display();
    });

});

function store_number(button_value){
    console.log('store number button_value',button_value);
    input_storage[storage_index]+=button_value;
    console.log('input storage: ',input_storage);
    update_display();
}

function store_operator(button_value){
    console.log('store operator button_value',button_value);
    storage_index++;
    input_storage[storage_index]=button_value;
    storage_index++;
    input_storage[storage_index]='';
    console.log("input storage = ",input_storage);
    update_display();
}

function update_display(){
    var output = '';
    for(var i=0; i<input_storage.length; i++){
        output+=input_storage[i];
    }
    $("#display").text(output);
}

function perform_calculation(op1, op2, operator){
    var solution;
    switch (operator) {
        case "+":
            solution = (op1 + op2);
            break;
        case "-":
            solution = (op1 - op2);
            break;
        case "*":
            solution = (op1 * op2);
            break;
        case "/":
            solution = (op1 / op2);
            break;
    }
    calc_display(solution);
        if (solution == 0){
            input_storage = [""];
        }
        else {
            input_storage = [solution, ""];
        }
}

function do_math(){
    for(var i=0; i < input_storage.length; i++){
        if (i == 0){
            var op1 = parseFloat(input_storage[i]);
        }
        else if (i == 1) {
            var operator = input_storage[i];
        }
        else if (i == 2) {
            var op2 = parseFloat(input_storage[i]);
        }
        else {
            $("#display").text("error");
        }
    }
    perform_calculation(op1, op2, operator);
}

function calc_display(solve_equation) {
    $("#display").text(solve_equation);
}