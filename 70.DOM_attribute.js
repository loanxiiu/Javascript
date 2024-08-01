{/* <h1>Heading</h1>
<a href="">Heading</a> */}

// DOM attributes
var headingElement = document.querySelector('h1')
headingElement.title = 'Heading'
headingElement.className = 'Heading'

var headingElement = document.querySelector('a')
headingElement.href = 'Heading'

var headingElement = document.querySelector('h1')
headingElement.setAttribute('href','Link')

var headingElement = document.querySelector('h1')
headingElement.title = ' Title test '
console.log(headingElement.getAttribute('title'))

var headingElement = document.querySelector('h1')
headingElement.setAttribute('data', 'data test')
console.log(headingElement.getAttribute('data'))
alert(headingElement.data)
alert(headingElement.title)