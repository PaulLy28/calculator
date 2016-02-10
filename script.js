/*basic calculator*/
/*comprehensive*/
//declare global variables. set storage to an empty array with an empty string and declare index position as 0.
//set on load and click handlers
    //jQuery selector to select the class numbers and all child's with the id of numbers with a click handler function.  the function will get the stored number when one of the buttons is clicked and get the text of the button clicked
    //jQuery selector to select the class numbers and all child's with the id of operator with a click handler function.  the function will get the stored operator when one of the buttons is clicked and get the text of the button clicked
    //jQuery selector to select the class numbers and all child's with the id of equalSign with a click handler function.  the function will call a do_calc function to complete the math done between the stored number and store operator.
    //jQuery selector to select the class of row and id of clearAll with a click handler function. the function will call a clear all function to reset the screen the calculation
    //jQuery selector to select the class of row and id of clearOne with a click handler function. the function will call a clear one function to clear the last operand or operator clicked

var input_storage = [''];
var storage_index = 0;
var operatorOn = false;
var numbersOn = true;
var decimalsOn = true;
var lastNum;
var lastOp;
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
        do_calc();
    });

    $(".row #clearAll").click(function(){
        console.log("clear all button clicked");
        clear_all();
    });

    $(".row #clearOne").click(function(){
        console.log("clear one button clicked");
        clear_one();
    });

});


//the function to complete most of the comprehensive operations
    //declared a short variable to replace typing in input_storage.length
    //conditional if statement: if input_storage.length is greater than two and input_storage at input_storage.length minus one is not equal to an empty string are true for both conditions the do_math function will be called.
    //conditional else if statement: (if the if statement above is false) else if input_storage is equal to 1, then input_storage at storage_index position 1 (first operator) will equal the variable name lastOp. this will store the last operator clicked. input_storage at storage_index position 2 (last number clicked to complete the calculation) will equal the variable name lastNum. this will store the last number clicked. call the function to do math
    //conditional else if statement: (if the else if statement above is false) else if input_storage.length is greater than two and input_storage at input_storage.length minus one is equal to an empty string are true for both conditions then proceed to a nested conditional.
        //if input_storage.length is equal to 3 then  input_storage at storage_index position 2 is equal to input_storage at storage_index position 0.the do_math function will be called.
        //else if the condition above is false. then a method will be called to delete the last input storage position.  then make a variable (lastStoredOp) and assign it to the method that will delete the last input storage position. then call the function to do math. then set the input_storage at storage_index position 1 is equal to the variable that was just created (lastStoredOp). then input_storage at storage_index position 2 is equal to input_storage at position 0. then do math.
        //end conditionals and function
function do_calc(){
    var a = input_storage.length;
    console.log("a last value: ",a,  input_storage[a]);
    if (a > 2 && input_storage[a -1] != "") {
        do_math();
    }
    else if (a == 1) {
        input_storage[1] = lastOp;
        input_storage[2]= lastNum;
        do_math();
    }
    else if (a > 2 && input_storage[a -1] == ""){
        if (a == 3){
            input_storage[2] = input_storage[0];
            do_math();
        }
        else {
            input_storage.pop();
            var lastStoredOp = input_storage.pop();
            do_math();
            input_storage[1] = lastStoredOp;
            input_storage[2] = input_storage[0];
            do_math();
        }
    }
}


//a function to store the value of the number clicked with a parameter of the value of the button that was clicked
    //conditional statement: if button_value is equal to a decimal character in string form then proceed to nested if statement.
        //if the above condition is true this conditional will execute. if it is possible to click on a number and a decimal then input_storage at storage_index position will be the button value. then the display will be updated. then the decimal will no longer be clickable
        //when the if conditional is false, else if will execute.  else if it is possible to click a number then input_storage at storage_index position will be the button value. then update the display. then make the operators clickable.
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
        console.log("operatorOn: ", operatorOn);
        input_storage[storage_index-1]= button_value;
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
            if (op2 == 0){
                solution = "Error"
            }
            else {
                solution = (op1 / op2);
            }
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
            lastOp = newOperator;
            lastNum = numAfter;
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