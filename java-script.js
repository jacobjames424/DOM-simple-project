// now we are going to learn about DOM which is document object modle 

// it have four imp points 
// how to select an element 
// how to change an element HTML
// how to change an element CSS
// Event listener 

// example for DOM manuplation( on off button for a buld)
var bulb = document.querySelector("#bulb");
var btn = document.querySelector("button");

var flag = 0;

btn.addEventListener("click", function(){
    if(flag == 0){
        bulb.style.backgroundColor = "yellow"
        flag = 1
    }else{
        bulb.style.backgroundColor = "white"
        flag = 0

    }
});


