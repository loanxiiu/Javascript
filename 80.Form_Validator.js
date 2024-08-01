// function Validator(options){
//     var formElement = document.querySelector(options.form)
//     if (formElement){
//         options.rules.forEach(function (rule){
//             var inputElement = formElement.querySelector(rule.selector)
//             var errorElement = inputElement.parentElement.querySelector(options.errorSelector)
//             if(inputElement){
//                 inputElement.onblur = function(){
//                     var errorMessage = rule.test(inputElement.value)
//                     console.log(errorMessage)
//                     if(errorMessage){
//                         errorElement.innerText = errorMessage
//                         inputElement.parentElement.classList.add('invalid')
//                     }
//                     else{
//                         errorElement.innerText = ""
//                         inputElement.parentElement.classList.remove('invalid')
//                     }
//                 }
//             }
//         })
//     }
//     // console.log(formElement)
// }










// function Validator(options){

//     // hàm validate hiện ra lỗi và bỏ lỗi đi
//     function validate(inputElement, rule){
//         var errorMessage = rule.test(inputElement.value)
//         var errorElement = inputElement.parentElement.querySelector(options.errorSelector)
//         if(errorMessage){
//             errorElement.innerText = errorMessage
//             inputElement.parentElement.classList.add('invalid')
//         }
//         else{
//             errorElement.innerText = ""
//             inputElement.parentElement.classList.remove('invalid')
//         }
//     }

//     // Lấy element của form cần validate
//     var formElement = document.querySelector(options.form)
//     if (formElement){
//         options.rules.forEach(function (rule){
//             var inputElement = formElement.querySelector(rule.selector)
//             var errorElement = inputElement.parentElement.querySelector(options.errorSelector)
//             if(inputElement){

//                 // Xử lý trường hợp blur khỏi input
//                 inputElement.onblur = function(){
//                     validate(inputElement, rule)
//                 }

//                 // Xử lý mỗi khi người dùng nhập vào input
//                 inputElement.oninput = function(){
//                     // console.log(inputElement.value)
//                     errorElement.innerText = ''
//                     inputElement.parentElement.classList.remove('invalid')
//                 }
//             }
//         })
//     }
//     // console.log(formElement)
// }








Validator.isRequired = function(selector){
    return {
        selector: selector,
        test: function(value){
            return value ? undefined : 'Vui lòng nhập'
        }
    }
}

Validator.isEmail = function(selector){
    return {
        selector: selector,
        test: function(value){
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
            return regex.test(value) ? undefined : 'Trường này không phải email' 
        }
    }
}

Validator.minLength = function(selector, min){
    return{
        selector: selector,
        test: function(value){
            return value.length >= min ? undefined : `Vui lòng nhập tối thiểu ${min} ký tự` 
        }
    }
}

Validator.isConfirmed = function(selector, getCormfirmValue, message){
    return {
        selector: selector,
        test: function(value){
            return value === getCormfirmValue() ? undefined: message || 'Giá trị không trùng khớp'
        }
    }
}