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

/*let track = document.querySelector("#track");

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
track.addEventListener("mousemove", mouseEvent);*/

// JS DOM Keyboard Event

/*let message = document.querySelector("#message");
function EventName(e){
    console.log(e.type);
    console.log(e.key);
}
message.addEventListener("keyup", EventName);
message.addEventListener("keydown", EventName);
message.addEventListener("keypress", EventName);*/ // H.W. ....> body part show in any character

// Scroll Event

/*// window.onscroll = ()=>{
//     //console.log("Scrolled");
//     alert("Your window is scrolled");
// }
// window.addEventListener("scroll", ()=>{
//     console.log("scrolled down");
// })
// => logical function

let scroller = 0;
window.addEventListener("scroll", ()=>{
    let newScroller = window.scrollYOffset || document.documentElement.scrollTop;
    if(newScroller > scroller){
        console.log("scroll is down");
    }else{
        console.log("scroll is up");
    }
    scroller = newScroller;
})*/

// Focus and Blur Event

const MyInput = document.querySelector("#MyInput");
MyInput.addEventListener("focus", (e)=>{
    e.target.style.backgroundColor = "yellow";
    e.target.style.Color = "black";
})
MyInput.addEventListener("blur", (e)=>{
    e.target.style.backgroundColor = "red";
    e.target.style.Color = "yellow";
})