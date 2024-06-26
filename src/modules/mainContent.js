import { modalForm } from './modalForm.js';
import { projectInfoPopup } from './projectInfoPopup.js';

export function mainContent() {
    const main = document.createElement('main');
    main.classList.add('main');

    const sidebar = document.createElement('div');
    sidebar.classList.add('m-content-sidebar');
    main.appendChild(sidebar);

    const mainDiv = document.createElement('div');
    mainDiv.classList.add('m-main-content');
    main.appendChild(mainDiv);

    const sidebarListTitle = document.createElement('h2');
    sidebarListTitle.classList.add('m-list-title');
    sidebarListTitle.textContent = `Projects`;
    sidebar.appendChild(sidebarListTitle);

    const projectUl = document.createElement('ul');
    projectUl.classList.add('m-project-ul');

    sidebar.appendChild(projectUl);

    const projectNameLabel = document.createElement('label');
    projectNameLabel.classList.add('m-project-title-label');
    projectNameLabel.setAttribute('for', 'proj-title');
    projectNameLabel.textContent = `Project Name: `;

    sidebar.appendChild(projectNameLabel);

    const projectNameInput = document.createElement('input');
    projectNameInput.classList.add('m-project-title-input');
    projectNameInput.setAttribute('id', 'proj-title');
    projectNameInput.setAttribute('type', 'text');
    projectNameInput.setAttribute('required', '');
    sidebar.appendChild(projectNameInput);

    let projectId = 1;
    const newProjectBtn = document.createElement('button');
    newProjectBtn.classList.add('m-new-project-btn');
    newProjectBtn.textContent = `New Project`;
    newProjectBtn.addEventListener('click', () => {
        if (projectNameInput.value !== ``) {
            let titleText = projectNameInput.value;
            let currentProjectId = projectId;

            const projectLi = document.createElement('li');
            projectUl.appendChild(projectLi);

            const projectBtn = document.createElement('button');
            projectBtn.textContent = titleText;
            projectBtn.classList.add('m-project-link');
            projectBtn.setAttribute('project-id', `${projectId}`);
            // projectId used to locate correct project from local memory
            projectBtn.addEventListener('click', () => {
                mainDiv.replaceChildren(projectInfoPopup(currentProjectId));
            });
            projectLi.appendChild(projectBtn);
            projectId++;

            const liDeleteBtn = document.createElement('button');
            liDeleteBtn.classList.add('m-li-delete-button');
            liDeleteBtn.textContent = 'X';
            liDeleteBtn.addEventListener('click', () => {
                projectUl.removeChild(projectLi);
            });
            projectLi.appendChild(liDeleteBtn);

            projectNameInput.value = ``;
            modalForm(titleText);
        }
    });
    sidebar.appendChild(newProjectBtn);

    return main
}