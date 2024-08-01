

// 55 56. CALLBACK FUNCTIONS

// Là hàm (function) được truyền qua đối số khi gọi hàm khác

// function myFunction(param){
//     console.log(param)
// }
// myFunction(123)


// function myFunction(param){
//     console.log(typeof param)
// }
// function myCallback(){

// }
// myFunction(myCallback)


// function myFunction(param){
//     param('hoc java')
// }
// function myCallback(value){
//     console.log('Value:',value)
// }
// myFunction(myCallback)


// function myFunction(param){
//     if( typeof param === 'function'){
//         param('hoc javascript')
//     }
// }
// function myCallback(value){
//     console.log('Value:',value)
// }
// myFunction(myCallback)




// var courses = [
//     'javascript',
//     'php',
//     'ruby'
// ]

// courses.map(function(course){
//     console.log(course)
// })

// function myFunction(course){
//     console.log(course)
// }
// courses.map(myFunction)

// var htmls = courses.map(function(course){
//     return `<h2>${course}</h2>`
// })
// console.log(htmls.join(''))

// Array.prototype.map2 = function(){
//     console.log(this)
// }
// courses.map2()

// Array.prototype.map2 = function(callback){
//     var arrayLength = this.length
//     for(var i=0; i< arrayLength; ++i){
//         callback(this[i],i)
//     }
// }
// courses.map2(function(course, index){
//     console.log(index,course)
// })
// var htmls = courses.map2(function(course){
//     return `<h2>${course}</h2>`
// })

// Array.prototype.map2 = function(callback){
//     var output=[], arrayLength = this.length
//     for(var i=0; i< arrayLength; ++i){
//         var result = callback(this[i],i)
//         output.push(result)
//     }
//     return output
// }
// var htmls = courses.map2(function(course){
//     return `<h2>${course}</h2>`
// })
// console.log(htmls.join(''))

