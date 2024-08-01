var courses = [
    {
        name: 'Javascript',
        coin: 680
    },
    {
        name: 'PHP',
        coin: 860
    },
    {
        name: 'Ruby',
        coin: 980
    }
];

Array.prototype.filter2 = function(callback){
    var output = [];
    for(var index in this){
        if(this.hasOwnProperty(index)){
            var result = callback(this[index],this)
            if(result){
                output.push(this.index)
            }
        }
    }
}

var filterCourses = courses.filter2(function(course,index,array){
    // console.log(course, index, array)
    return course.coin > 700
});
console.log(filterCourses)