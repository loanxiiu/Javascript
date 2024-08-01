// innerText, textContent
// geter
// seter

{/* <h1 class="heading">Heading text</h1> */}
// var headingElement = document.querySelector('.heading')
// console.log(headingElement.innerText)
// console.log(headingElement.textContent) //geter

// headingElement.innerText= 'New heading'
// headingElement.textContent = 'New' //seter



{/* <h1 class="heading">

<span style="display: none;">Heading</span> 
<span>text</span>

</h1> */}
// var headingElement = document.querySelector('.heading')
// console.log(headingElement.innerText)
// console.log(headingElement.textContent)// giống textnode




{/* <h1 class="heading">

<span style="display: none;">Heading</span> 
<span>text</span>

<style>
  .box{
      width:100px;
      height:100px;
  }
</style>

<script>
alert('test')
</script>
</h1> */}
// var headingElement = document.querySelector('.heading')
// console.log(headingElement.innerText)
// console.log(headingElement.textContent)



var headingElement = document.querySelector('.heading')
headingElement.textContent = '<i>New heading</i>'


headingElement.textContent = `New heading`

// headingElement.innerText = `

// New heading

// `