function Validator(formSelector, options) {


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
        }
        console.log(formRules)
    }
  }