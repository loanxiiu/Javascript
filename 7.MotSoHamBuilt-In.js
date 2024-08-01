// 2. Một số hàm bult-in
// - alert
// - console
// - confirm
// - prompt
// - setTimeout
// - setInterval

var fullName = 'Nguyen Thi Loan'
console.log(fullName)

confirm('Xac nhan tren 16 tuoi!')

prompt('Nhap do tuoi!')

setTimeout(function() {
    alert('Thong bao')
}, 2000)

setInterval(function() {
    console.log('Bay la log' + Math.random())
}, 2000)
