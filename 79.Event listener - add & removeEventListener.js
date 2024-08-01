{/* <button id="btn">Click me!</button> */}


// 1. Event listener

// Xử lý nhiều việc khi 1 event xảy ra
// Lắng nghe / Hủy bỏ lắng nghe

// var btn = document.getElementById('btn')
// btn.onclick = function(){
//     // Viec 1
//     console.log('Viec 1')

//     // Viec 2
//     console.log('Viec 2')

//     // Viec 3
//     console.log('Viec 3')
// }
// setTimeout(function(){
//     btn.onclick = function(){}
// },5000)



// var btn = document.getElementById('btn')
// btn.addEventListener('click', function(e){
//     console.log('event 1')
// })
// btn.addEventListener('click', function(e){
//     console.log('event 2')
// })



var btn = document.getElementById('btn')
function viec1(){
    console.log('Viec 1')
}
btn.addEventListener('click', viec1)
var btn = document.getElementById('btn')
function viec2(){
    console.log('Viec 2')
}
btn.addEventListener('click', viec2)
setTimeout(() => {
    btn.removeEventListener('click',viec1)
}, 3000);