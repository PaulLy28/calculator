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
});