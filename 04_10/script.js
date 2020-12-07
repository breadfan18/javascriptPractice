function Course(title, instructor, level, published, views) {
    this.title = title;
    this.instructor = instructor;
    this.level = level;
    this.published = published;
    this.views = views;
    this.updateViews = function () {
        return ++this.views;
    };
}

var courses = [
    new Course("JavaScript Essentiallll",
    "Morten Rank Hendriksen",
    1,
    true,
    0
    ),

    new Course("EcmaScript Basics",
    "Swaroop Uprety",
    3,
    false,
    20
    )

];




console.log(course01);
console.log(course02);