// 1. Nhập lại password === password_confirmed
// 2. Xử lí 2 rule trùng selector
// 3. Không submit form mặc định
// 4. Hiển Thị values trên tab console khi đc nhập hết value
// 5. submit mặc định 


// // Xử lý ghi đè rule
// submit hiển thị errorMassage và hiện value trên tab console
function Validator(options){

    var selectorRules = {}

    // (2) hàm validate hiện ra lỗi và bỏ lỗi đi
    function validate(inputElement, rule){
        var errorElement = inputElement.parentElement.querySelector(options.errorSelector)
        var errorMessage //= rule.test(inputElement.value)

        // Lấy ra các rule của selector
        var rules = selectorRules[rule.selector]
        // console.log(rules)

        // Lặp qua từng rule & kiểm tra
        // Nếu như có lỗi dừng kiểm tra
        for (var i = 0; i< rules.length; ++i) {
            errorMessage = rules[i](inputElement.value)
            if(errorMessage){
                break;
            }
        }
        if(errorMessage){
            errorElement.innerText = errorMessage
            inputElement.parentElement.classList.add('invalid')
        }
        else{
            errorElement.innerText = ""
            inputElement.parentElement.classList.remove('invalid')
        }
        // console.log(!errorMessage)
        return !errorMessage // ~ không có errorMessage
    }

    // Lấy element của form cần validate
    var formElement = document.querySelector(options.form)
    if (formElement){
        // Khi submit form
        formElement.onsubmit = function(e){
            e.preventDefault()

            // Trường hợp ko có lỗi
            var isFormValid = true

            // Lặp qua từng rule và validate
            options.rules.forEach(function (rule){
                var inputElement = formElement.querySelector(rule.selector)
                var isValid = validate(inputElement, rule)
                // console.log(rule.selector)
                // console.log(isValid)
                if (!isValid){
                    // console.log(!isValid)
                    isFormValid = false
                }
            })

            // console.log(isFormValid)
            // var enableInputs = formElement.querySelectorAll('[name]')
            //         // console.log(enableInputs)
        
            //         var formValues = Array.from(enableInputs).reduce(function (values, input){
            //             // return (values[input.name] = input.value) && values
            //             console.log(values[input.name])
        
            //         },{})

            if (isFormValid) {
                // Trường hợp submit với js
                if (typeof options.onSubmit === 'function' ){
                    var enableInputs = formElement.querySelectorAll('[name]')
                    // console.log(enableInputs)
        
                    var formValues = Array.from(enableInputs).reduce(function (values, input){
                        return (values[input.name] = input.value) && values
                        // console.log(input.name)
        
                    },{})
                    // console.log(formValues)
                    options.onSubmit(formValues)
                }

                // Trường hợp submit với hành vi mặc định
                else {
                    formElement.submit()
                }
            }
        }


        // Lặp qua mỗi rule và xử lý (lắng nghư sự kiện blur, ...)
        options.rules.forEach(function (rule){ //(1) 2 rule cùng selector bị ghi đè

            // Lưu lại các rules cho mỗi input
        // selectorRules[rule.selector] = rule.test
        // object    [key]           = value

        // Khi selectorRules[rule.selector] = undefined gán cho nó bằng array
        // Nếu selectorRules[rule.selector] là array
        if (Array.isArray(selectorRules[rule.selector])){
            selectorRules[rule.selector].push(rule.test)
        }
        // Nếu selectorRules[rule.selector] ko là array
        else {
            selectorRules[rule.selector] = [rule.test]
        }

            var inputElement = formElement.querySelector(rule.selector)
            var errorElement = inputElement.parentElement.querySelector(options.errorSelector)
            if(inputElement){

                // Xử lý trường hợp blur khỏi input
                inputElement.onblur = function(){
                    validate(inputElement, rule)
                }

                // Xử lý mỗi khi người dùng nhập vào input
                inputElement.oninput = function(){
                    // console.log(inputElement.value)
                    errorElement.innerText = ''
                    inputElement.parentElement.classList.remove('invalid')
                }
            }
        })
        // console.log(selectorRules)
    }
}

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