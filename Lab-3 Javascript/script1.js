//DOM
/*
1. Selection of an Element
2. Changing HTML
3. Changing CSS
4. Event Listener
*/

//selects only first h1
var a = document.querySelector("h1") // .class, #id
a.innerHTML="Changed HTML"
a.style.color="red"
a.addEventListener("click", function(){
    console.log("hey! you clicked on the heading!")
    a.innerHTML = "Breakfast Recipes!"
    a.style.color="white"
})

let num=0;
var b = document.querySelector("#pancakesimgg") 
// .class, #id OR separate methods for ID & Class: getElementById("123"), getElementByClassName("abc")
b.addEventListener("click", function(){
    if(num%2==0){
        b.src = "pancakes2.png"
    }
    else{
        b.src = "pancakes.png"
    }
    num++;
})

var c = document.querySelector(".head")
c.addEventListener("click", function(){
    if(a.innerHTML == "Changed HTML"){
        c.style.backgroundColor="pink"
    }
    else{
        c.style.backgroundColor="#f56"
    }
})

//for selecting all 'li'
var d = document.querySelectorAll("li")
d.forEach(function(e){
    console.log(e)
    e.style.fontStyle="italic"
})

let num3=0
var f = document.getElementById("omlette1")
f.addEventListener("click", function(){
    f.style.backgroundColor="#5f1"
    f.innerHTML = "<a href="+'"index.html"'+">Home?</a>"
})