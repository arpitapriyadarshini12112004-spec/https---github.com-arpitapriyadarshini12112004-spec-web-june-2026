const handleDblClick = () => {
    console.log("heading Double clicked");
    
}


// using event properties===================
const h1 = document.getElementById("first-heading")

h1.onmouseover = handleOneMouseOver

function handleOneMouseOver() {
    console.log("Mouse  hover effect");
    
}


h1.onmouseover = handleOneMouseOver2
function handleOneMouseOver2() {
    console.log("Mouse  hover effect - 2nd fun");
    
}

// using addevent listener=================

const secondH1 = document.querySelector("#sec-heading")

secondH1.addEventListener("click", () => {
    console.log("DOM Event Listener clicked");
    
})


// secondH1.addEventListener("click",handleDomEventHeadingClick )
// function handleDomEventHeadingClick(){
// console.log("DOM Event Listener clicked - 2nd fun");
// }
    

// event object ==============

secondH1.addEventListener("click",handleDomEventHeadingClick )
function handleDomEventHeadingClick( e){
console.log("DOM Event Listener clicked - 2nd fun");
console.log("/////////" , e)
console.log("x co-ordinate" , e.clientX)
console.log("y co-ordinate" , e.clientY)
console.log("event type" , e.type )
console.log("event target" , e.target)
console.log(" event target text" , e.target.text)

//event.target.style.colour = 'green'
e.target.remove()
}
    