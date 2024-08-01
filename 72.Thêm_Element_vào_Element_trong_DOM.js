// innerHTML, outerHTML

{/* <div class="box"></div> */}


var boxElement = document.querySelector('.box')
boxElement.innerText = '<h1>Heading</h1>'
boxElement.innerHTML = '<h1 title="heading">New heading</h1>'
// console.log(document.querySelector('h1').innerText)
// console.log(boxElement.innerHTML)

// var boxElement = document.querySelector('.box')
// console.log(boxElement.outerHTML)

var boxElement = document.querySelector('.box')
// boxElement.innerHTML = '<span>Test</span>'
boxElement.outerHTML = '<span>Test</span>'

console.log(boxElement)