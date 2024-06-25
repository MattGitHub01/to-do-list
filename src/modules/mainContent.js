import { modalForm } from './modalForm.js';

export function mainContent() {
    const main = document.createElement('main');
    main.classList.add('main');

    const sidebar = document.createElement('div');
    sidebar.classList.add('m-content-sidebar');

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

    const newProjectBtn = document.createElement('button');
    newProjectBtn.classList.add('m-new-project-btn');
    newProjectBtn.textContent = `New Project`;
    newProjectBtn.addEventListener('click', () => {
        if (projectNameInput !== ``) {
            const projectLi = document.createElement('li');
            projectLi.classList.add('m-project-link');
            projectLi.textContent = projectNameInput.value;

            const liDeleteBtn = document.createElement('button');
            liDeleteBtn.classList.add('li-delete-btn');
            liDeleteBtn.addEventListener('click', () => {
                projectUl.removeChild(projectLi);
            });
            projectUl.appendChild(projectLi);
            projectNameInput.value = ``;
            modalForm();
        }
    });

    document.body
    sidebar.appendChild(newProjectBtn);
    
    main.appendChild(sidebar);

    const mainContent = document.createElement('div');
    mainContent.classList.add('m-main-content');

    main.appendChild(mainContent);

    return main
}