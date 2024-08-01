// const person = {
//     name: ["Bob","Smith"],
//     age: 32,
//     bio(){
//         console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`)
//     },
//     introduceSelf(){
//         console.log(`Hi! I'm ${this.name[0]}.`)
//     },
// }
// function logProperty(propertyName){
//     console.log(person[propertyName])
// }
// logProperty('name')

// const person= {
//     name: {
//         first:"Bob",
//         last: "Smith"
//     }
// }      
        
// person.age=45
// person['name']['last']='Cratchit'
// person.eyes ='hazel'
// person.farewell = function(){
//     console.log('Bye everybody!');
// }

// const myDataName = nameInput.value
// const myDataValue = nameValue.value
// const myDataName ='height'
// const myDataValue = '1.75m'
// person[myDataName]= myDataValue
// console.log(person)

// function createPerson(name){
//     const obj ={}
//     obj.name=name
//     obj.introduceSelf = function(){
//         console.log(`Hi! I'm ${this.name}.`)
//     }
//     return obj
// }
// const salva = createPerson('Salva')
// salva.name
// salva.introduceSelf()

// function person(name){
//     this.name= name
//     this.introduceSelf = function(){
//         console.log(`Hi I'm ${this.name}.`)
//     }
// }
// const frankie = new person('Frankie')
// frankie.name
// frankie.introduceSelf()

// const myNotification = new Notification('hello')

// const myObject={
//     city: 'Madrid',
//     greet(){
//         console.log(`Greetings from ${this.city}`)
//     }
// }
// myObject.greet()
// Object.getPrototypeOf(myObject)

// const myDate= new Date()
// let object= myDate
// do{
//     object= Object.getPrototypeOf(object)
//     console.log(object)
// }while(object)

// const myDate= new Date(1995,11,17)
// console.log(myDate.getYear())
// myDate.getYear=function(){
//     console.log('something else!')
// }
// myDate.getYear()

// const personPrototype={
//     greet(){
//         console.log('hello!')
//     }
// }
// const carl = Object.create(personPrototype)
// carl.greet()

// const personPrototype={
//     greet(){
//         console.log(`hello, my name is ${this.name}!`)
//     }
// }
// function Person(name){
//     this.name=name;
// }
// Object.assign(Person.prototype, personPrototype) /** or Person.prototype.greet = personPrototype.greet */
// const reuben= new Person('Rewben')
// reuben.greet()
// console.log(Object.hasOwn(reuben, "name")); 
// console.log(Object.hasOwn(reuben, "greet"));

// function Professor(name,teaches){
//     this.name = name
//     this.teaches = teaches
//     this.introduceSelf= function(){
//         console.log(`My name is Professor ${this.name} and I will be your ${this.teaches} professor.`)
//     }
// }
// const walsh = new Professor('Walsh','Pshychology')
// walsh.introduceSelf()


// function Student(name,year){
//     this.name= name
//     this.year= year
//     if(typeof(year)!=Number){
//         switch(year){
//             case 1:
//                 this.year= 'first'
//                 break
//             case 2:
//                 this.year= 'second'
//                 break
//             case 3:
//                 this.year= 'third'
//                 break
//             case 4:
//                 this.year= 'fourth'
//                 break
//             default:
//                 this.year= 'alumnus'
//         }
//     }
//     this.introduceSelf= function(){
//         console.log(`My name is ${this.name} and I'm in the ${this.year} years`)
//     }
// }
// 
// const summers= new Student('Summers', 1)
// summers.introduceSelf()
// const loan= new Student('Loan', 2)
// loan.introduceSelf()
// if(Student.year < 2){
//     console.log(Student())  
//   }

// class Student{
//     name
//     #year
//     constructor(name, year){
//         this.name=name
//         this.year=year
//         if(typeof(year)!=Number){
//             switch(year){
//                 case 1:
//                     this.year= 'first'
//                     break
//                 case 2:
//                     this.year= 'second'
//                     break
//                 case 3:
//                     this.year= 'third'
//                     break
//                 case 4:
//                     this.year= 'fourth'
//                     break
//                 default:
//                     this.year= 'alumnus'
//             }
//         }
//     }
//     introduceSelf(){
//         console.log(`My name is ${this.name} and I'm in the ${this.year} years`)
//     }
//     canStudyArchery(){
//         return this.year > 1 
//     }
// }
// summers= new Student('Summers', 1)
// summers.introduceSelf()



// var webDevelop= [
//     'javascript',
//     'ruby',
//     'php'
// ]
// // console.log(webDevelop.join())
// webDevelop.push('css')
// // console.log(webDevelop)
// const web= {
//     length:3,
//     0: 'javascript',
//     1: 'ruby',
//     2: 'php'
// }
// console.log(Array.prototype.join.call(web))
// console.log(typeof(web))
// Array.prototype.toString(web)
// console.log(web)
// console.log(typeof(web))

// const str='My name is Loan and Loan so lazy'
// const words= str.split(' ')
// console.log(words)

// const array= new Array(3)
// console.log(array.length)
// console.log(array)

// const arr3= new Array(arraylength)
// const arr3 = [];
// arr3.length = arrayLength;
// console.log(arr3.length)
// const arr= Array.of(9.3)
// console.log(arr)
// arr[1]= "hi"
// console.log(arr)

// let colors= ['red','green','blue']
// colors.forEach((color) => console.log(color))
// const sens=['purple']
// colors= colors.concat(sens)
// colors= colors.slice(1,3)
// colors.splice(1,2,'d')
// console.log(colors)

// const numbers= [1, 2, 5, 4,0]
// numbers.sort()
// console.log(numbers)

// const inventory = [
//     { name: "asparagus", type: "vegetables" },
//     { name: "bananas", type: "fruit" },
//     { name: "goat", type: "meat" },
//     { name: "cherries", type: "fruit" },
//     { name: "fish", type: "meat" },
//   ];
//   const result = Object.groupBy(inventory, ({ type }) => type);
// console.log(result.fruit);

// if(true){
//   var x=5
// }
// console.log(x)

// const MY_OBJECT = { key: "value" };
// MY_OBJECT.key = "otherValue";
// console.log(MY_OBJECT)


// try {
//     let hello=prompt('Type hello')
//     if (hello !=='hello'){
//         throw new Error("Oops, you didn't type hello")
//     }
// }
// catch(e){
//     alert(e.message)
// }
// finally{
//     alert('thanks for playing!')
// }

// function getMonthName(mo) {
//     mo--; // Adjust month number for array index (so that 0 = Jan, 11 = Dec)
//     const months = [
//       "Jan", "Feb", "Mar", "Apr", "May", "Jun",
//       "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
//     ];
//     if (months[mo]) {
//       return months[mo];
//     } else {
//       throw new Error("InvalidMonthNo"); // throw keyword is used here
//     }
//   }
  
//   try {
//     // statements to try
//     monthName = getMonthName(myMonth); // function could throw exception
//   } catch (e) {
//     monthName = "unknown";
//     logMyErrors(e); // pass exception object to error handler (i.e. your own function)
//   }
  
// function doSomethingErrorProne() {
//     if (ourCodeMakesAMistake()) {
//       throw new Error("The message");
//     } else {
//       doSomethingToGetAJavaScriptError();
//     }
//   }
  
//   try {
//     doSomethingErrorProne();
//   } catch (e) {
//     // Now, we actually use `console.error()`
//     console.error(e.name); // 'Error'
//     console.error(e.message); // 'The message', or a JavaScript error message
//   }
  

// function countSelected(selectObject) {
//   let numberSelected = 0;
//   for (let i = 0; i < selectObject.options.length; i++) {
//     if (selectObject.options[i].selected) {
//       numberSelected++;
//     }
//   }
//   return numberSelected;
// }

// const btn = document.getElementById("btn");

// btn.addEventListener("click", () => {
//   const musicTypes = document.selectForm.musicTypes;
//   console.log(`You have selected ${countSelected(musicTypes)} option(s).`);
// });


// let x = 0;
// let z = 0;
// labelCancelLoops: while (true) {
//   console.log("Outer loops:", x);
//   x += 1;
//   z = 1;
//   while (true) {
//     console.log("Inner loops:", z);
//     z += 1;
//     if (z === 10 && x === 10) {
//       break labelCancelLoops;
//     } else if (z === 10) {
//       break;
//     }
//   }
// }


// let i = 0;
// let n = 0;
// while (i < 5) {
//   i++;
//   if (i === 3) {
//     continue;
//   }
//   n += i;
//   console.log(n);
// }
// Logs:
// 1 3 7 12

// let i = 0;
// let j = 10;
// checkiandj: while (i < 4) {
//   console.log(i);
//   i += 1;
//   checkj: while (j > 4) {
//     console.log(j);
//     j -= 1;
//     if (j % 2 === 0) {
//       continue checkj;
//     }
//     console.log(j, "is odd.");
//   }
//   console.log("i =", i);
//   console.log("j =", j);
// }

// function dumpProps(obj, objName) {
//   let result = "";
//   for (const i in obj) {
//     result += `${objName}.${i} = ${obj[i]}<br>`;
//   }
//   result += "<hr>";
//   return result;
// }
// dumpProps(
//    hg={
//     mi:'sgssf',
//     hf:'gfd'
//   },
//   dg={
//     hi:'ahfg'
//   }
// )

// const factorial = function fac(n){
//   return n<2 ? 1 : n*fac(n-1)
// }
// console.log(factorial(4))

// function loop(x) {
//   // "x >= 10" is the exit condition (equivalent to "!(x < 10)")
//   if (x >= 10) {
//     return;
//   }
//   // do stuff
//   loop(x + 1); // the recursive call
// }
// loop(0);


// function foo(i) {
//   if (i < 0) {
//     console.log(i)
//     return;
//   }
//   console.log(`begin: ${i}`);
//   foo(i - 1);
//   console.log(i)
//   console.log(`end: ${i}`);
// }
// foo(3);


// const createPet= function(name){
//   let sex
//   const pet= {
//     setName(newName){
//       name= newName
//     },
//     getName(){
//       return name
//     },
//     getSex(){
//       return sex
//     },
//     setSex(newSex){
//       if(typeof newSex==="string" && 
//       newSex.toLocaleLowerCase()=="male" || 
//       newSex.toLocaleLowerCase()==="female"){
//         sex=newSex
//       }
//     }
//   }
//   return pet
// }
// const pet=createPet("Son")
// console.log(pet.getName())
// pet.setName("ngan")
// console.log(pet.getName())
// pet.setSex("male")
// console.log(pet.getSex())

// function myConcat(separator) {
//   let result = ""; // initialize list
//   // iterate through arguments
//   for (let i = 1; i < arguments.length; i++) {
//     result += arguments[i] + separator;
//   }
//   return result;
// }
// console.log(myConcat(", ", "red", "orange", "blue"));
// // "red, orange, blue, "

// console.log(myConcat("; ", "elephant", "giraffe", "lion", "cheetah"));
// // "elephant; giraffe; lion; cheetah; "

// console.log(myConcat(". ", "sage", "basil", "oregano", "pepper", "parsley"));
// // "sage. basil. oregano. pepper. parsley. "


// function Person() {
//   // Some choose `that` instead of `self`.
//   // Choose one and be consistent.
//   const self = this;
//   self.age = 0;

//   setInterval(function growUp() {
//     // The callback refers to the `self` variable of which
//     // the value is the expected object.
//     self.age++;
//   }, 1000);
// }


// function Person() {
//   this.age = 0;

//   setInterval(() => {
//     this.age++; // `this` properly refers to the person object
//   }, 1000);
// }

// const p = new Person();

// let a = 0
// a &&= 2
// console.log(a)

// let b = 10
// b &= 10
// console.log(b)

// function JSClock(){
//     const time = new Date()
//     time.setHours('0')
//     const hour = time.getHours()
//     const minute = time.getMinutes()
//     const second = time.getSeconds()
//     let temp = String( hour % 12)
//     if(temp === '0'){
//         temp = '12'
//     }
//     console.log(temp)
//     temp += ( minute < 10 ? ':0' : ':') + minute
//     temp += ( second < 10 ? ':0' : ':') + second
//     temp += hour >= 12 ? 'P.M' : 'AM'
//     return temp
// }
// const timePresent= JSClock()
// console.log(timePresent)

// const sentence = 'The 𠮷𠮾quick brown fox jumps over the lazy dog.'
// const index = 4
// console.log(`The character at index ${index} is ${sentence.charAt(index)}`)

// 

// function styleHyphenFormat(propertyName){
//     function upperToHyphenLower(match, offset,String){
//         return (offset> 0 ? "-" :"") + match.toLowerCase()
//     }
//     return propertyName.replace(/[A-Z]/g, upperToHyphenLower)
// }
// console.log(styleHyphenFormat("LOAN"))

// function addOffset(match, ...args){
//     const hasNameGroups = typeof args.at(-1) === "object"
//     const offset = hasNameGroups ? args.at(-3) : args.at(-2)
//     return `${match} (${offset})`
// }
// console.log("abcd".replace(/(bc)/, addOffset))
// console.log("abcd".replace(/(?<group>bc)/, addOffset))

// const chessStory = "He played the King in a8 and she moved her Queen in c2"
// const regexpCoordinates = /[^A-Z]/
// console.log(chessStory.match(regexpCoordinates))

// const randomData = "01500354 8887 687351 3512 8735";
// const regexpFourDigits = /\b\d{4}\b/g;
// console.table(randomData.match(regexpFourDigits));

// const quote = `Single quote "'" and double quote '"'`;
// const regexpQuotes = /(['"]).*?\1/g;
// for (const match of quote.matchAll(regexpQuotes)) {
//   console.log(match[0]);
// }

// function escapeRegExp1(string){
//     return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
// }
// function escapeRegExp2(string){
//     return string.replace(/[.*+?^${}()|[\]\\]/g, "$&\\")
// }
// const stringnew = ",?\gh[] *+("
// console.log(escapeRegExp1(stringnew))
// console.log(escapeRegExp2(stringnew))

// "foobar".endsWith({ toString: () => "bar"})
// const re = /bar/g
// re[Symbol.match]=false
// "/bar/g".endsWith(re)
// re.exec("bar")
// "bar & bar".replace(re,"foo")

// const names = "Harry Trump; Fred Barney; Helen Rigby; Bill Abel"
// console.log(names)
// const re = /\s*(?:;|$)\s*/
// const nameList = names.split(re)
// console.log(nameList)

// const splitByNumber = {
//     [Symbol.split](str){
//         let num = 1
//         let pos = 0
//         const result = []
//         while( pos < str.length){
//             const matchPos = str.indexOf(num, pos)
//             console.log(num,pos)
//             console.log(matchPos)
//             if( matchPos === -1){
//                 result.push (str.substring(pos))
//                 break
//             }
//             result.push(str.substring(pos, matchPos))
//             pos = matchPos + String(num).length
//             console.log(String(num))
//             num++
//         }
//         return result
//     }
// }
// const myString = "a1bc2c5d3e4f"
// console.log(myString.split(splitByNumber))

// const DELIMITER = ";"
// const splitCommands = {
//     [Symbol.split](str, lim){
//         const results = []
//         const state = {
//             on: false,
//             brightness: {
//                 current: 2,
//                 min: 1,
//                 max: 3,
//             }
//         }
//         let pos = 0
//         let matchPos = str.indexOf(DELIMITER, pos)
//         while( matchPos !== -1){
//             const subString = str.slice(pos, matchPos).trim()
//             switch( subString){
//                 case "light on":
//                     if(!state.on){
//                         state.on = true
//                         results.push(subString)
//                     }
//                     break
//                 case "light off":
//                     if(state.on){
//                         state.on = false
//                         results.push(subString)
//                     }
//                     break
//                 case "brightness up":
//                     if(state.brightness.current < state.brightness.max){
//                         state.brightness.current +=1
//                         results.push(subString)
//                     }
//                     break
//                 case "brightness down":
//                     if(state.brightness.current > state.brightness.min){
//                         state.brightness.current -=1
//                         results.push(subString)
//                     }
//                     break
//             }
//             if(results.length === lim) {
//                 break
//             }
//             pos = matchPos + DELIMITER.length
//             matchPos = str.indexOf(DELIMITER, pos)
//         }
//         if(results.length < lim){
//             results.push(str.slice(pos).trim())
//         }
//         return results
//     }
// }
// const commands ="light on; brightness up; brightness up; brightness up; light on; brightness down; brightness down; light off";
// console.log(commands.split(splitCommands, 3))

// const myRe = /d(b+)d/g;
// const myArray = myRe.exec("cdbbdbsbz");
// console.log(`The value of lastIndex is ${myRe.lastIndex}`);



// const form = document.querySelector("#form")
// const input = document.querySelector("#phone")
// const output = document.querySelector("#output")
// const re = /^(?:\d{3}|\(\d{3}\))([-/.])\d{3}\1\d{4}$/
// function testInfo(phoneInput){
//     const ok = re.exec(phoneInput.value)
//     output.textContent = ok
//     ? `Thanks, your phone number is ${ok[0]}`
//     : `${phoneInput.value} isn't a phone number with area code!`
// }
// form.addEventListener("submit",(event) =>{
//     event.preventDefault()
//     testInfo(input)
// })


// const myArray = ["1", "2", "3", "4", "5"];
// myArray.splice(2, 2, "a", "b", "c", "d");
// // myArray is now ["1", "a", "b", "c", "d", "5"]
// // This code started at index one (or where the "2" was),
// // removed 3 elements there, and then inserted all consecutive
// // elements in its place.
// console.log(myArray)




// const array = [15, 16, 17, 18, 19];

// function reducer(accumulator, currentValue, index) {
//   const returns = accumulator + currentValue;
//   console.log(
//     `accumulator: ${accumulator}, currentValue: ${currentValue}, index: ${index}, returns: ${returns}`,
//   );
//   return returns;
// }

// array.reduce(reducer);


// const objects = [{ x: 1 }, { x: 2 }, { x: 3 }];
// const sum = objects.reduce(
//   (accumulator, currentValue) => accumulator + currentValue.x
// );

// console.log(sum); // 6


// const inventory = [
//     { name: "asparagus", type: "vegetables" },
//     { name: "bananas", type: "fruit" },
//     { name: "goat", type: "vegetables" },
//     { name: "cherries", type: "fruit" },
//     { name: "fish", type: "meat" },
//   ];
//   const result = Object.groupBy(inventory, ({ type }) => type);
//   console.log(result.vegetables);
//   // [{ name: "asparagus", type: "vegetables" }]
  

// const arr = [1, 2, 3];
// arr.property = "value";
// console.log(arr.property); // "value"
// console.log(arr)

// const myMap = new Map()
// const keyString = "a string"
// const keyObj ={}
// const keyFunc = function(){}
// myMap.set(keyString, "value associated with 'a string'")
// myMap.set(keyObj, "value associated with keyObj")
// myMap.set(keyFunc, "value associated with keyFunc")
// console.log(myMap)
// console.log(myMap.get(keyString))
// console.log(myMap.get("a string"))
// console.log(myMap.get({}))
// console.log(myMap.get(function(){}))


// const myMap = new Map()
// myMap.set(NaN, "not a number")
// console.log(myMap.get(NaN))
// const otherNaN = Number ("1")
// console.log(myMap.get(otherNaN))



// const kvArray = [
//     ["key1", "value1"],
//     ["key2", "value2"],
//   ];
  
//   // Use the regular Map constructor to transform a 2D key-value Array into a map
//   const myMap = new Map(kvArray);
  
//   console.log(myMap.get("key1")); // "value1"
  
//   // Use Array.from() to transform a map into a 2D key-value Array
//   console.log(Array.from(myMap)); // Will show you exactly the same Array as kvArray
  
//   // A succinct way to do the same, using the spread syntax
//   console.log([...myMap]);
  
//   // Or use the keys() or values() iterators, and convert them to an array
//   console.log(Array.from(myMap.keys())); // ["key1", "key2"]
  
// const sayings = new Map()
// sayings.set("dog", "woof")
// sayings.set("cat", "meow")
// sayings.set("elephant", "toot")
// sayings.get("dog")
// sayings.get("fox")
// sayings.has("bird")
// sayings.delete("dog")
// sayings.has("dog")
// for(const [key, value] of sayings){
//     console.log(`${key} goes ${value}`)
// }
// sayings.clear()
// sayings.size


// const privates = new WeakMap()
// function Public(){
//     const me = {
        
//     }
//     privates.set(this, me)
// }
// Public.prototype.method = function(){
//     const me = privates.get(this)
// }
// module.exports = Public



// const mySet = new Set()
// mySet.add(1)
// mySet.add("some text")
// mySet.add("foo")
// mySet.has(1)
// mySet.delete("foo")
// mySet.size
// for (const item of mySet){
//     console.log(item)
// }

// Array.from(mySet);
// [...mySet2]
// mySet2 = new Set([1,2,3,4])

// function laSoNguyenDuong(value){
//     return (Number.isInteger(value) && value > 0)
// }

// let laSoNguyenAm = (value) =>{
//     return ( typeof value == 'number' && value < 0 && value % 1 == 0)
// }
// console.log(laSoNguyenAm(2))

// console.log(laSoNguyenDuong(1))
// console.log(laSoNguyenDuong(1.3))
// console.log(laSoNguyenDuong(-3))
// console.log(laSoNguyenDuong(0))

// let laSoNguyenDuong = (value) =>{
//     return (typeof value == 'number' && value > 0 && value %1 ==0)
// }
// console.log(laSoNguyenDuong(1))

// let a = 20
// let b = 30
// let tong = a + b
// document.write("tong hai so:" + tong)


// Cho hai biến a và b, hãy viết chương trình tính tổng hai số a và b rồi in lên trình duyệt.
// Cho hai ô input textbox và 1 input button. Hãy viết chương trình khi click vào button thì tính tổng hai số ở hai ô input.
// function sum(){
//     let a = Number(document.getElementById("num1").value)
//     let b = Number(document.getElementById("num2").value)
//     let sum =parseInt(a) + b
//     document.getElementById('result').innerHTML = sum
// }



// Tính tổng hai số trong object javascript
// let numbers = {
//     number1: 20,
//     number2: 30,
// }
// let sum = numbers.number1 + numbers.number2
// console.log(sum)


// Kiểm tra dữ liệu trước khi tính tổng bằng javascript
// function sum(){
//     let a = document.getElementById("num1").value
//     let b = document.getElementById("num2").value
//     if( a == "" || b == ""){
//         alert("vui long nhap hai so")
//         return false
//     }
//     a = Number(a)
//     b = Number(b)
//     if (isNaN(a) || isNaN(b)){
//         alert("ban phai nhap hai so:")
//         return false
//     }
//     let sum = parseInt(a) + b
//     document.getElementById("result").innerHTML = sum
// }


// try {
//     fadsfas
//     fadsfasfsda
// } catch (e){
//     console.log(e.message)
// } finally{
//     console.log('End')
// }

// var domain ='teechtuts.net'
// try{
//     if ( domain !== 'freetuts.net'){
//         throw new Error('Domain nay khong phai trang chu')
//     }
// } catch (e){
//     console.log(e.message)
// }finally{
//     console.log('End')
// }



// function UserError(){
//     this.throwLogin = function(){
//         throw new Error('Invalid username and password')
//     }
//     this.throwSession = function(){
//         throw new Error('Your request is timeout')
//     }
//     return this
// }

// class UserError{
//     throwLogin(){
//         throw new Error('Invalid username and password')
//     }
//     throwSession =function(){
//         throw new Error('Your request is timeout')
//     }
// }

// var username = 'thehalfheart'
// var password = 'admin@'
// try {
//     if(username !== 'admin' || password != 'admin@'){
//         new UserError().throwLogin()
//     }
// } catch (e){
//     console.log(e.message)
// }


// function sum(a, b){
//     try{
//         a = Number(a)
//         b = Number(b)
//         if (isNaN(a) || isNaN(b)){
//             throw new Error('Du lieu ban nhap vao khong phai la so')
//         }
//         return a + b
//     }
//     catch (e){
//         console.log(e.message)
//         return false
//     }
// }
// console.log(sum(1,))



// let a = 5
// let b = '5'
// console.log('compare a==b','a = ', a, ', b = ', b, 'result: ', a==b)
// console.log('compare a === b: ', 'a = ', a, ', b =', b, 'result: ', a===b)

// let arr = ['a', 'b', 'c', 'd']
// for (let i =1; i<= arr.length; i++ ){
//     console.log('check variable i =', arr[i])
// }








// <!-- <h1>Javascript basic</h1>
// <form name="selectForm">
//     <label for="musicTypes"
//       >Choose some music types, then click the button below:</label
//     >
//     <select id="musicTypes" name="musicTypes" multiple>
//       <option selected>R&B</option>
//       <option>Jazz</option>
//       <option>Blues</option>
//       <option>New Age</option>
//       <option>Classical</option>
//       <option>Opera</option>
//     </select>
//     <button id="btn" type="button">How many are selected?</button>
//   </form> -->

//   <!-- <p>
//     Enter your phone number (with area code) and then click "Check". 
//     <br/>The expected fomat is like ###-###-####.
//   </p>
//   <form id="form">
//     <input id="phone"/>
//     <button type="submit">Check</button>
//   </form>
//   <p id="output"></p>
//   <input type="number" id="num1">
//   <input type="number" id="num2">
//   <button onclick="sum()">tinh tong</button>
//   <p id="result"></p> -->