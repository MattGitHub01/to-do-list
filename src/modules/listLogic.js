const Project = function (title, description, date, priority) {
    this.title = title;
    this.description = description;
    this.date = date;
    this.priority = priority;
}
let projectValues = {};
const newProject = new Project(projectValues.title, projectValues.date, projectValues.priority, projectValues.description);


export function newProject () {
    let obj = {};
    obj.title = prompt(`title`);
    obj.description = prompt(`description`);
    obj.date = prompt(`date`);
    obj.priority = prompt(`priority`);
    const usrProject = new Project(obj.title, obj.description, obj.date, obj.priority);
    return usrProject
}

//Create object then create a UI element that sends these data points to this function