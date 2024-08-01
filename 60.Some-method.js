some: true/ false

var courses = [
    {
        name: 'Javascript',
        coin: 680,
        isFinish: true
    },
    {
        name: 'PHP',
        coin: 860,
        isFinish: false
    },
    {
        name: 'Ruby',
        coin: 980,
        isFinish: true
    }
];

Array.prototype.some2 = function(callback){
    for(var index in this){
        if(this.hasOwnProperty(index)){ 
            if(callback(this[index], index, this)){
                return true
            }
        }
    }
    return false;
}
var courses = new Array(100)
var result = courses.some(function(course, index, array){
    return course.isFinish;
})
console.log(result)