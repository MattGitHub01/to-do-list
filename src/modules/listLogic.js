const Project = function (title, description, date, priority) {
    this.title = title;
    this.description = description;
    this.date = date;
    this.priority = priority;
}

export function toDoList () {
    let obj = {};
    obj.title = prompt(`title`);
    obj.description = prompt(`description`);
    obj.date = prompt(`date`);
    obj.priority = prompt(`priority`);
    const buildBox = new Project(obj.title, obj.description, obj.date, obj.priority);
    alert(buildBox.title);
    alert(buildBox.description);
    alert(buildBox.date);
    alert(buildBox.priority);
}

//Create object then create a UI element that sends these data points to this function