// DOM events

{/* <a href="http://f8.edu.vn" class="">Học lập trình</a>
<a href="https://google.com.vn" class=""> Google</a> */}


// var aElements = document.querySelectorAll('a')

// var aElements = document.links
// for(var i=0; i< aElements; ++i){
//     aElements[i].onclick = function(e){
//         console.log(a.target.href)
//     }
// }

// var aElements = document.links
// for(var i=0; i< aElements.length; ++i){
//     aElements[i].onclick = function(e){
//         if(!e.target.href.startsWith('http://f8.edu.vn')){
//             e.preventDefault()
//         }
//     }
// }






{/* <style>
    ul{
        display: none;
    }
    input:focus~ul{
        display: block;
    }
</style>
<input placeholder="Tìm kiếm" type="text">
<ul>
    <li>Javascript</li>
    <li>PHP</li>
    <li>Golang</li>
</ul> */}
// 1. preventDefault
document.querySelector('ul').onclick = function(e){
    console.log(e.target)
}

var ulElement = document.querySelector('ul')
ulElement.onmousedown = function(e){
    e.preventDefault()
}
ulElement.onclick = function(e){
    console.log(e.target)
}




{/* <div>
    DIV
    <button onclick="console.log('Click me!')">Click me!</button>
</div> */}
// 2. stopPropagation
document.querySelector('div').onclick = function(){
    console.log('DIV')
}
document.querySelector('button').onclick = function(e){
    e.stopPropagation()
    console.log('Click me!')
}