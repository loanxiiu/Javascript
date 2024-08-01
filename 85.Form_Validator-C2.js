function Validator(formSelector, options) {
    // Gán giá trị mặc định cho tham số (ES5)
    if(!options) {
        options = {}
    }

    function getParent (element, selector) {
        while (element.parentElement) {
            if(element.parentElement.matches(selector)) {
                return element.parentElement
            }
            element = element.parentElement
        }
    }

    var formRules = {}

    // Quy ước tao rule:
    // - Nếu có lỗi thì return `error-message`
    // - Nếu không có lỗi tì return `undefined

    var validatorRules = {
        required: function (value) {
            return value ? undefined : ' Vui lòng nhập trường này'
        },
        email: function (value) {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
            return regex.test(value) ? undefined : 'Trường này không phải email'
        },
        min: function (min) {
            return function (value) {
                return value.length >= min ? undefined : `Vui lòng nhập tối thiểu ${min} ký tự`
            }
        }
    }

    // Lấy ra form element trong DOM theo 'formSelecor
    var formElement = document.querySelector(formSelector)

    // Chỉ xử lý khi có element trong DOM
    if(formElement) {
        var inputs = formElement.querySelectorAll('[name][rules]')
        for(var input of inputs){

            var rules = input.getAttribute('rules').split('|')
            for(var rule of rules){

                var ruleInfo //= rule.split(':')
                var isRuleHasValue = rule.includes(':')

                if(isRuleHasValue) {
                    ruleInfo = rule.split(':')
                    rule = ruleInfo[0]
                    // console.log(validatorRules[rule](ruleInfo[1]))
                }

                var ruleFunc = validatorRules[rule]

                if (isRuleHasValue) {
                    ruleFunc = ruleFunc(ruleInfo[1])
                }

                // console.log(rule)
                if (Array. isArray(formRules[input.name])) {
                    formRules[input.name].push(ruleFunc)
                }
                else {
                    formRules[input.name] = [ruleFunc]
                }
            }
            // formRules[input.name] = input.getAttribute('rules')

            // Lắng nghe sự kiện để validate (blur, change, ...)
            input.onblur = handleValidate
            input.oninput = handleClearError
        }

        // Hàm thực hiện validate
        function handleValidate (event) {
            // console.log(formRules[event.target.name])
            var rules = formRules[event.target.name]

            var errorMessage 
            rules.find(function (rule) {
                errorMessage = rule(event.target.value)
                return errorMessage
            })

            // Nếu có lỗi thì hiển thị UI ra website
            if(errorMessage) {
                // console.log(event.target)
                var formGroup = getParent(event.target, '.form-group')
                // console.log(formGroup)

                if(!formGroup) return

                var formMessage = formGroup.querySelector('.form-message')
                if(formMessage) {
                    formMessage.innerText = errorMessage
                    formGroup.classList.add('invalid')
                }
            }
            // console.log(errorMessage)
            return !errorMessage
        }

        // Hàm clear message có lỗi
        function handleClearError (event) {
            var formGroup = getParent(event.target, '.form-group')
            if (formGroup.classList.contains('invalid')) {
                formGroup.classList.remove('invalid')
                var formMessage = formGroup.querySelector('.form-message')

                if (formMessage) {
                    formMessage.innerText = ''
                }
            }
        }

        // console.log(formRules)

        // Xử lý hành vi submit form
        formElement.onsubmit = function (event) {
            event.preventDefault()

            var inputs = formElement.querySelectorAll('[name][rules]')
            var isValid = true // Hợp lệ
            for (var input of inputs) {
                // console.log(input.value)
                if(!handleValidate({target: input})) {
                    isValid = false
                }
            }
            // console.log(isValid)

            // Khi không có lỗi thì submit form
            if(isValid) {                
                if (typeof options.onSubmit === 'function') {
                    var enableInputs = formElement.querySelectorAll('[name]')
                    var formValues = Array.from(enableInputs).reduce(function(values, input){
                        switch(input.type){
                            case 'radio':
                                values[input.name] = formElement.querySelector('input[name="' + input.name + '"]:checked').value
                                break;
                            case 'checkbox':
                                if(!input.matches(':checked')) return values;
                                if (!Array.isArray(values[input.name])){
                                    values[input.name] = []
                                }
                                values[input.name].push(input.value)
                                break;
                            case 'file':
                                values[input.name] = input.files
                                break;
                            default:
                                values[input.name]= input.value
                        }
                    
                        return values
                    }, {})

                    // Gọi lại hàm onSubmit và trả về kèm giá trị input của form
                    options.onSubmit(formValues)
                }
                // Trường hợp submit với hành vi mặc định
                else{
                    formElement.submit()
                }
            }
        }
    }
}