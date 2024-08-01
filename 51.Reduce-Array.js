







// 51 52. ARRAY REDUCE()

// var courses =[
//     {
//         id:1,
//         name:'java',
//         coin:500
//     },
//     {
//         id:2,
//         name:'php',
//         coin:200
//     },
//     {
//         id:1,
//         name:'java',
//         coin:200
//     },
//     {
//         id:3,
//         name:'ruby',
//         coin:0
//     }
// ]

// var totalCoin = 0
// for(var course of courses){
//     totalCoin += course.coin
// }
// console.log(totalCoin)

// var i=0
// function coinHandler(accumulator, currentValue, currentIndex, originArray){
//     i++
//     var total = accumulator + currentValue.coin
//     console.table({
//         'luot chay:':i,
//         'luot tich tru:':accumulator,
//         'gia khoa hoc:':currentValue.coin,
//         'tich tru duoc:':total
//     })
    // console.log(currentValue)
    // console.log(currentIndex)
    // return accumulator+currentValue.coin
//     return total
// }
// var totalCoin = courses.reduce(coinHandler, 0)
// console.log(totalCoin)


// var i=0
// var totalCoin = courses.reduce(function(total, course){
//     i++
//     console.log(i, total,course)
//     return total+ course.coin
// },0)
// console.log(totalCoin)

// var number =[100,200, 340, 400] 
// var totalCoin = number.reduce(function(total,number){
//     return total+number
// })
// console.log(totalCoin)


// Flat - 'Làm phẳng' mảng từ Depth Array - 'mảng sâu'
// var depthArray = [1,2,[3,4],5,6, [7,8,9]]
// var flatArray = depthArray.reduce(function(flatOutput, deptItem){
//     return flatOutput.concat(deptItem)
// },[])
// console.log(flatArray)


// Lấy ra các khóa học đưa vào 1 mảng mới
// var topics = [
//     {
//         topic:'Front-end',
//         courses:[
//             {
//                 id:1,
//                 title:'HTML, CSS'
//             },
//             {
//                 id: 2,
//                 title:'Javascript'
//             }
//         ]
//     },
//     {
//         topic:'Back-end',
//         courses: [
//             {
//                 id: 1,
//                 title:'PHP'
//             },
//             {
//                 id: 2,
//                 title:'NodeJs'
//             }
//         ]
//     }
// ]
// var newCourses = topics.reduce(function (courses, topic){
//     return courses.concat(topic.courses)
// }, [])
// console.log(newCourses)
// var htmls = newCourses.map(function(course){
//     return `
//         <div>
//             <h2>${course.title}</h2>
//             <p>ID: ${course.id}</p>
//         </div>
//     `
// })
// console.log(htmls.join(''))



