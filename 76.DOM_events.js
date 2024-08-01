{/* <h1>DOM events 1</h1>
<h1>DOM events 2</h1>
<h1>DOM events 3</h1> */}

// DOM events
// 1. Attribute events
{/* <h1 onclick="console.log(Math.random())">DOM events</h1>
<h1 onclick="console.log(this)">DOM events</h1>

<h1 onclick="console.log(this)">
    <span>DOM events</span>
</h1>

<h1 onclick="console.log(this)">
    <span onclick="console.log(this)">DOM events</span>
</h1> */}


// 2. Assign event using the element node
// var h1Element = document.querySelector('h1')
// h1Element.onclick = function() {
//     console.log(Math.random())
// }

// h1Element.onclick = function(e) {
//     console.log(e)
// }


var h1Element = document.querySelectorAll('h1')
for(var i=0; i< h1Element.length; ++i){
    h1Element[i].onclick =function(e){
        console.log(e.target)
    }
}


// var h1Element = document.querySelectorAll('h1')
// for(var i=0; i< h1Element.length; ++i){
//     h1Element[i].onclick =function(){
//         console.log(h1Element[i])
//     }
// }
// console.log(i)