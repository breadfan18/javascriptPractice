//This is how to declare an object constructor. object will begin with a capital letter.
function Course(title, instructor, level, published, views) {
    this.title=title;
    this.instructor=instructor;
    this.level=level;
    this.published=published;
    this.views=views;
    this.updateViews = function () {
        return ++views;
    }
}

//now we use the object as such:
var course01 = new Course("JavaScript101", "Swaroop Uprety", 1, true, 0);
console.log(course01);

var course02 = new Course("Java101", "Swaroop Uprety", 5, true, 5);
console.log(course02);


//now using the object, we can do more things like use them in an array

var courses = [
    new Course("JavaScript101", "Swaroop Uprety", 1, true, 0),
    new Course("Java101", "Anshu Thapa", 5, true, 5)
];

console.log(courses);

//to call a specific property of the courses array, then you just call them like: Use the index of the array to retrive the course and then print the property.
console.log(courses[0].title);
console.log(courses[1].updateViews());
console.log(courses[0].instructor);