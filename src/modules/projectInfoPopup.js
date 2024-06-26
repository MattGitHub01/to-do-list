export function projectInfoPopup(projectId) {
    let storageString = localStorage.getItem(projectId);
    let storageObject = JSON.parse(storageString);

    const projectInfo = document.createElement('div');
    projectInfo.classList.add('m-project-info');

    const projectTitle = document.createElement('h2');
    projectTitle.classList.add('m-project-title');
    projectTitle.textContent = storageObject.title;
    projectInfo.appendChild(projectTitle);

    const projectDate = document.createElement('div');
    projectDate.classList.add('m-project-date');
    projectDate.textContent = `Date: ${storageObject.date}`;
    projectInfo.appendChild(projectDate);

    const projectPriority = document.createElement('div');
    projectPriority.classList.add('m-project-priority');
    projectPriority.textContent = `Priority: ${storageObject.priority}`;
    projectInfo.appendChild(projectPriority);

    const projectDescription = document.createElement('div');
    projectDescription.classList.add('m-project-description');
    projectDescription.textContent = storageObject.description;
    projectInfo.appendChild(projectDescription);

    return projectInfo
}
