const Project = function (title, date, priority, description) {
    this.title = title,
    this.date = date,
    this.priority = priority,
    this. description = description
}

export function saveProject(title, date, priority, description) {
    let projectId = Storage.length + 1;
    let idString = JSON.stringify(projectId);
    let projectObj = new Project(title, date, priority, description);
    let projectString = JSON.stringify(projectObj);
    localStorage.setItem(`project-${idString}`, projectString);
}