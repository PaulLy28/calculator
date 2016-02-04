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


//click handlers added to buttons
$(document).ready(function(){
    $("button").click(function(){
        if (value == "CE") {
            my_calculator.allClear();
        }
        else {
            my_calculator.addItem($(this).text());
        }
    });
})