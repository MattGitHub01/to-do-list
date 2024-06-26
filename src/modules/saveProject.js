const Project = function (title, date, priority, description) {
    this.title = title,
    this.date = date,
    this.priority = priority,
    this.description = description
}

let projectId = 0;
export function saveProject(title, date, priority, description) {
    projectId++;
    let idString = JSON.stringify(projectId);
    let projectObj = new Project(title, date, priority, description);
    let projectString = JSON.stringify(projectObj);
    localStorage.setItem(`${idString}`, projectString);
}