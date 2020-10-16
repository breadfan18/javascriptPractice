//First you create a new variable and declare it as an object as below
var course = new Object();

//then you can assign any values to any different type of properties you want..properties for eg title, instructor etc..or anything else..no restrictions

course.title = "Swaroop's course";
course.instructor = "Swaroop Uprety";
course.dog = "Dexter Boy";
course.level = 1;
course.published = true;
course.views = 0;

console.log(course);


//or you can just assign the properties as below:

var course = {
    title: "Swarop course",
    instructor: "Sonjoy Ghosh",
    dog: "Dexiii",
    level: 1,
    published: true,
    views: 0
}

//you can access the entire objects like below
console.log(course);

//or you can log out a single property of the course as below:
console.log(course.dog);

//we can also create a function or method inside the object like the updateViews method here

var course = {
    title: "Swarop course",
    instructor: "Sonjoy Ghosh",
    dog: "Dexiii",
    level: 1,
    published: true,
    views: 0,
    updateViews: function (){
        return ++course.views;
    }
}

console.log(course.views);
course.updateViews();
console.log(course.views);


