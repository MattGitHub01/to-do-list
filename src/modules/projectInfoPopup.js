export function projectInfoPopup(projectId) {
    let storageString = localStorage.getItem(projectId);
    let storageObject = JSON.parse(storageString);

    const projectInfo = document.createElement('div');
    projectInfo.classList.add('m-project-info');

    const projectTitle = document.createElement('h2');
    projectTitle.classList.add('m-project-title');
    projectTitle.textContent = storageObject.title;
    projectInfo.appendChild(projectTitle);

    const projectDate = document.createElement('p');
    projectDate.classList.add('m-project-date');
    projectDate.textContent = storageObject.date;
    projectInfo.appendChild(projectDate);

    const projectPriority = document.createElement('p');
    projectPriority.classList.add('m-project-date');
    projectPriority.textContent = storageObject.priority;
    projectInfo.appendChild(projectPriority);

    const projectDescription = document.createElement('p');
    projectDescription.classList.add('m-project-date');
    projectDescription.textContent = storageObject.description;
    projectInfo.appendChild(projectDescription);
}
