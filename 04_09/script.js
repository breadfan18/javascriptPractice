var course = new Object();

// course.title = "Javascript course";
// course.instructor = "Morten Rand Hendriksen";
// course.level = 1;
// course.published = true;
// course.views = 0;
//

course  = {
    title: "Javascript",
    instructor: "Hendrinksen",
    level: 1,
    published: true,
    views: 0,
    updateViews: function () {
        return course.views+=2;
    }
}

console.log(course.views)
course.updateViews();
console.log(course.views)