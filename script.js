/*basic calculator*/

//declare global variables. set storage to an empty array with an empty string and declare index position as 0.
//set on load and click handlers
    //jQuery selector to select the class numbers and all child's with the ID of numbers with a click handler function.  the function will display the stored number when one of the buttons is clicked and display the text of the button clicked
    //jQuery selector to select the class numbers and all child's with the ID of operator with a click handler function.  the function will display the stored operator when one of the buttons is clicked and display the text of the button clicked
    //jQuery selector to select the class numbers and all child's with the ID of equalSign with a click handler function.  the function will call a function to complete the math done between the stored number and store operator.
var input_storage = [''];
var storage_index = 0;
var operatorOn = false;
var numbersOn = true;
var decimalsOn = true;
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
        var a = input_storage.length;
        if (a > 2 && a % 2 !=0) {
            do_math();
        }
    });

    $(".row > #clearAll").click(function(){
        console.log("clear all button clicked");
        clear_all();
    });

    $(".row > #clearOne").click(function(){
        console.log("clear one button clicked");
        clear_one();
    });

});

//a function to store the value of the number clicked with a parameter of the value of the button that was clicked
    //the input array that is going to store the numbers will be the variable name for the array at the variable name for the position of the index plus the value of the button.
    //call the function to update the display
function store_number(button_value){
    if (button_value == "."){
        if (numbersOn && decimalsOn){
            console.log('store number button_value',button_value);
            input_storage[storage_index]+=button_value;
            console.log('input storage: ',input_storage);
            update_display();
            decimalsOn = false;
        }
    }
    else if (numbersOn) {
        console.log('store number button_value',button_value);
        input_storage[storage_index]+=button_value;
        console.log('input storage: ',input_storage);
        update_display();
        operatorOn = true;
    }
}

//a function to store the operator with a parameter of the value of the button that was clicked
    //the function will increment the index
    //the input array at the stored index position will be equal to the button value
    //increment the index position once again
    //set the input storage at the stored index to an empty string
    //update display
function store_operator(button_value){
    if (operatorOn) {
        console.log('store operator button_value', button_value);
        storage_index++;
        input_storage[storage_index] = button_value;
        storage_index++;
        input_storage[storage_index] = '';
        console.log("input storage = ", input_storage);
        update_display();
        operatorOn = false;
        numbersOn = true;
        decimalsOn = true;
    }
    else if (operatorOn == false && input_storage.length > 0){
        //input_storage.pop();
        //input_storage.pop();

        console.log("operatorOn: ", operatorOn);
        //--storage_index;
        input_storage[storage_index-1]= button_value;

        //input_storage[storage_index] = '';
        //$("#display").text(input_storage);
        update_display();
    }

}
//function to update the display
    //a variable name of output has been declared to equal an empty string
    //a for loop where i is equal to 0, while i is less than the length of the input array. (i will increment after the use) the out is concatenated to be the output plus the array at position i
    //end of for loop
    //jQuery selecting the display and adding the text method with the content being the the variable name output
function update_display(){
    var output = '';
    for(var i=0; i<input_storage.length; i++){
        output+=input_storage[i];
    }
    $("#display").text(output);
}
//this will perform the calculation of each operand and operator.  a function has been defined with 3 parameters, 2 operands and an operator
    //a variable with a name of solution set to undefined
    //switch statement with the expression of operator and 4 cases.
        //1st case is set to operator of +, if true, then the solution will be the sum of the two operand. break will be the end of the switch. it will then proceed to the function call of calc_display. calc_display has a parameter of the variable declared which is solution in this case. when the calc_display function with a parameter of solution is called it will set the array equal to an array with the solution. if false it will move to the next case.
        //2nd case is set to operator of -, if true, then the solution will be the difference of the two operand. break will be the end of the switch. if false it will move to the next case.
        //3rd case is set to operator of *, if true, then the solution will be a product of the two operand. break will be the end of the switch. if false it will move to the next case.
        //the last case is set to operator of /, if true, then the solution will divide the two operands. break will be the end of the switch. if false it will move to the next case.
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
   // calc_display(solution);
       // input_storage = [solution];
        update_display();
        return solution;
    /*if (solution == 0){
            input_storage = [""];
        }
        else {
            input_storage = [solution];
        }*/
}
//function defined to process the calculation
    //for loop where i is equal to 0, while i is less than the length of the storage array. i will increment after the i is used.
    //conditional statement for when i (the index position) is equal to zero, a variable with name op1 will be equal to the parseInt method with the parameter of the array storage at index position i. if false move to the next comment
    //conditional statement for when  i (the index position) is equal to one, a variable with name operator will be equal to the array at index i. if false move to the next comment
    //conditional statement for when i (the index position) is equal to 2, a variable with name op2 will be equal to the parseInt method with the parameter of the array storage at index position i. if false move to the next comment
    //conditional statement using jQuery selecting the display will display error if none of the conditionals above are true
    //after the for loop has iterated through the perform calculation function is called. this will perform the calculation
function do_math(){
    var total = input_storage[0];
    var newOperator = input_storage[1]; //set to null
    var numAfter = input_storage[2]; //set to null
    for(var i=0; i < input_storage.length; i++){
        if ("+-*/".indexOf(input_storage[i])>=0){
            newOperator = input_storage[i];
            numAfter = input_storage[i+1];
            console.log("total: ", total + " newop:", newOperator + " 2nd num: ", numAfter);
            total = perform_calculation(parseFloat(total),parseFloat(numAfter),newOperator);

        }
    }
    input_storage = [total.toString()];
    storage_index = 0;
    operatorOn = true;
    numbersOn = false;
    console.log("storage after math: " + input_storage);
    update_display();
   /* for(var i=0; i < input_storage.length; i++){
        if (i == 0){
            //var op1 = parseInt(input_storage[i]);
            var op1 = parseFloat(input_storage[i]);
        }
        else if (i == 1) {
            var operator = input_storage[i];
        }
        else if (i == 2) {
            //var op2 = parseInt(input_storage[i]);
            var op2 = parseFloat(input_storage[i]);
        }
        else {
            $("#display").text("error");
        }
    }*/
    //perform_calculation(op1, op2, operator);
}

//this is a function to display the calculation and is tied to the equal button.
    //jQuery selects the display and will output the final answer of the calculation
/*function calc_display(solve_equation) {
    $("#display").text(solve_equation);
}*/

function clear_all(){
    $("#display").empty();
    input_storage = [""];
    storage_index =0;
    $("#display").text(0);
    numbersOn = true;
    operatorOn = false;
    decimalsOn = true;
}

function clear_one(){
    input_storage.pop();
    //--storage_index;
    input_storage[storage_index]='';
    //$("#display").text(input_storage);
    update_display();
}