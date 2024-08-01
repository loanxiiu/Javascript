{/* <input type="text"> */}


// DOM events
// 1. Input/ select

{/* <input type="text">
<input type="checkbox">

<select name="" id="">
    <option value="1">Javascript</option>
    <option value="2">PHP</option>
    <option value="3">Dart</option>
</select> */}

// var inputElement = document.querySelector('input[type="text"]')
// inputElement.oninput = function(e){
//     console.log(e.target.value)
// }

// var inputValue
// var inputElement = document.querySelector('input[type="text"]')
// inputElement.oninput = function(e){
//     inputValue=e.target.value
//     console.log(inputValue)
// }


// var inputElement = document.querySelector('input[type="checkbox"]')
// inputElement.onchange = function(e){
//     console.log(e.target.checked)
// }


// var inputElement = document.querySelector('select')
// inputElement.onchange = function(e){
//     console.log(e.target.value)
// }




// 2. Key up / down

{/* <input type="text"> */}

// var inputElement = document.querySelector('input[type="text"]')
// inputElement.onkeyup = function(e){
//     console.log(e.target.value)
// }

// var inputElement = document.querySelector('input[type="text"]')
// inputElement.onkeyup = function(e){
//     console.log(e.which)
//     switch(e.which){
//         case 27:
//             console.log('Exit');
//             break;
//     }
// }




document.onkeypress = function(e){
    // console.log(e.which)
    switch(e.which){
        case 27:
            console.log('EXIT')
            break;
        case 13:
            console.log('send chat');
            break;
    }
}