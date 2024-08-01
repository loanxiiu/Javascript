{/* <style>
.red{
    color: red;
}
</style>
<div class="box box-2">
<h1>CLASS LIST</h1>
</div> */}



// ClassList property
    // add
    // contains
    // remove
    // toggle

    var boxElement = document.querySelector('.box')
    console.log(boxElement.classList)
    console.log(boxElement.classList.length)
    boxElement.classList.add('red', 'blue')
    console.log(boxElement.classList.contains('red'))
    boxElement.classList.remove('red')
    
    setTimeout(() => {
        boxElement.classList.add('red')
    },5000)
    
    setInterval(() => {
        boxElement.classList.toggle('red')
    }, 2000)