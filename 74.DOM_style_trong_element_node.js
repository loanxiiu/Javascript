{/* <div class="box">Heading</div> */}

var boxElement = document.querySelector('.box')
console.log(boxElement.style)
boxElement.style.color = 'red'

Object.assign(boxElement.style, {
    with: '200px',
    backgroundColor:'black'
})

console.log(boxElement.style.with)