{/* <h1 id="heading" class="heading">Heading 1</h1>
<script>document.write('Hello')</script>
<h1 id="heading-2" class="heading">Heading 2</h1>

<form action="" id="form-1"></form>
<form action="" id="form-2"></form>
<script src="1main.js"> */}



// 1. getElementByID
// 2. getElementByClassName
// 3. getElementByTagName
// 4. querySelector
// 5. querySelectorAll
// 6. HTML collection
// 7. document.write


var headings = document.querySelectorAll('.heading')
// console.log(headings)
for (var i = 0; i< headings.length; i++){
    console.log(headings[i])
}

console.log(document.forms)

document.write('Hello')