// Đối tượng validator
function Validator(){
    function getParent(element, selector){
        while(element.parentElement){
            if(element.parentElement.matches(selector)){
                return element.parentElement
            }
            element = element.parentElement
        }
    }
    var selectorRules = {}

    // hàm thực hiện validate
    function validate(inputElement, rule){
        var errorElement = getParent(inputElement, options.formGroupSelector).querySelector(options.errorSelector)
        var errorMessage

        // lấy ra các rules của selector
        var rules = selectorRules[rule.selector]

        // lặp qua từng rule & kiểm tra
        // Nếu có lỗi thì dừng việc kiểm tra
        for(var i=0; i< rules.length; i++){
            switch(inputElement.type){
                case 'radio':
                case 'checkbox':
                    errorMessage = rules[i](
                        formElement.querySelector(rule.selector + ':checked')
                    )
                    break;
                default:
                    errorMessage = rules[i](inputElement.value)
            }
            if(errorMessage)
                break;
        }
        if (errorMessage){
            errorElement.innerText = errorMessage
            getParent(inputElement, option.formGroupSelector).classList.add('invalid')
        }
        else{
            errorElement.innerText = ''
            getParent(inputElement, options.formGroupSelector).classList.remove('invalid')
        }
        return !errorMessage
    }

    // lấy element của form cần validate
    var formElement = document.querySelector(options.form)
    if(formElement){
        // khi submit form
        formElement.onsubmit = function(e){
            e.preventDefault()

            var isFormValid = true

            // lặp qua từng rules và validate
            options.rules.forEach(function (rule){
                var inputElement = formElement.querySelector(rule.selector)
                var isValid = validate(inputElement, rule)
                if(!isValid){
                    isFormValid = false
                }
            })

            if (isFormValid){
                // trường hợp submit với javascript
                if(typeof options.onsubmit === 'function'){
                    var enableInputs = formElement.querySelectorAll('[name]')
                    var formValues = Array.from(enableInputs).reduce(function(values, input){
                        switch(input.type){
                            case 'radio':
                                values[input.name] = formElement.querySelector('input[name="' +input.name + '"]:checked').value
                                break;
                            case 'checkbox':
                                if(!input.matches(':checked')){
                                    values[input.name] = '';
                                    return values
                                }
                                if(!Array.isArray(values[input.name])){
                                    values[input.name] = []
                                }
                                value[input.name].push(input.value)
                                break;
                                case 'file':
                                    values[input.name] = input.files
                                    break;
                                default:
                                    values[input.name] = input.value
                        }
                        return values
                    }, {})
                    options.onsubmit(formValues)
                }
                // trường hợp submit với hành vi mặc định
                else{
                    formElement.submit()
                }
            }
        }
        
        // Lặp qua mỗi rule và xử lý( lắng nghe sự kiện blur, input, ...)
        options.rules.forEach(function(rule){

            // lưu lại các rules cho mỗi input
            if(Array.isArray(selectorRules[rule.selector])){
                selectorRules[rule.selector].push(rule.test)
            }
            else{
                selectorRules[rule.selector] = [rule.test]
            }
            var inputElement = formElement.querySelectorAll(rule.selector)
            Array.from(inputElement).forEach(function(inputElement){
                // xử lý trường hợp blur khỏi input
                inputElement.onblur = function(){
                    validate(inputElement, rule)
                }

                // xử lý mỗi khi người dùng nhập vào input
                inputElement.oninput = function(){
                    var errorElement = getParent(inputElement, options.formGroupSelector).querySelector(options.errorSelector)
                    errorElement.innerText = '';
                    getParent(inputElement, options.formGroupSelector).classList.remove('invalid')
                }
            })
        })
    }
}





// Mong muốn của chúng ta
// Định nghĩa rules
// Nguyên tắc của các rules:
// 1. khi có lỗi => trả ra message lỗi
// 2. khi hợp lệ => không trả ra cái gì (undefined)
Validator.isRequired = function(select, message){
    return{
        selector: selector,
        test: function (value){
            return value ? undefined : message || 'Vui lòng nhập trường này'
        }
    }
}

Validator.isEmail = function(selector, message){
    return{
        selector: selector,
        test: function(value){
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : message || 'Trường này không phải Email'
        }
    }
}

Validator.minLength = function(selector, min, message){
    return{
        selector: selector,
        test: function(value){
            return value.length >= min ? undefined : message || `Vui lòng nhập tối thiểu ${min} kí tự`
        }
    }
}

Validator.isConfirmed = function(selector, getConfirmValue, message){
    return{
        selector: selector,
        test: function(value){
            return value === getConfirmValue() ? undefined : message || 'Giá trị nhập vào không chính xác'
        }
    }
}

