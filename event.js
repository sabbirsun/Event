/*Very Very Important*/

// Event Click
// let btn = document.querySelector("#btn");
// btn.addEventListener("click", function(e){
//     alert("Button was Clicked");
// })
// short part
/*function clicked(){
    alert("The Button Was Clicked");
}*/

// Event Handling 0

/*let btn = document.querySelector("#clicked");
btn.onclick = function(){
    alert("This Message From DOM 0 Label Handler ");
}

// Event Handling 2

let DOMTwo = document.querySelector("#DOMTwo");
DOMTwo.addEventListener("click", function(){
    alert("Dom Two Label Handeler");
})*/

// JS Mouse Event

let track = document.querySelector("#track");

function mouseEvent(e){
    console.log(e.type);
}
track.addEventListener("mousedown", mouseEvent);
track.addEventListener("mouseup", mouseEvent);
track.addEventListener("click", mouseEvent);
track.addEventListener("dblclick", mouseEvent);
// track.addEventListener("mouseover", mouseEvent);
// track.addEventListener("mouseout", mouseEvent);
track.addEventListener("mouseenter", mouseEvent);
track.addEventListener("mouseleave", mouseEvent);
track.addEventListener("mousemove", mouseEvent);



