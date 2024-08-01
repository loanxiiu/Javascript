var array = ['a','b','c','a','b','c']
console.log(new Set(array))




// 1. Xác định điểm dừng
// 2. Logic handle => Tạo ra điểm dừng

function countDown(num){
    if(num > 0){
        //loop
        console.log(num)
        return countDown(num-1)
    }
    return num
}
countDown(10)





function loop(start, end, cb){
    if(start < end){
        cb(start)
        return loop(start + 1, end, cb)
    }
}
var array = ['Javascript', 'PHP','Ruby']
loop(0, array.length , function(index){
    console.log(array[index])
})








// function giaiThua(num){
//     var output =1
//     for(var i =num; i>0; i--){
//         output = output * i
//     }
//     return output
// }
// giaiThua(6)





function giaiThua(number){
    if(number > 0){
        return number * giaiThua(number - 1)
    }
    return 1
}
console.log(giaiThua(6))