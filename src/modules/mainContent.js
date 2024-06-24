export function mainContent() {
    const modalProjectForm = document.createElement('dialog');
    modalProjectForm.classList.add('f-new-project-form');

    const formTag = document.createElement('form');
    formTag.setAttribute('action', '');
    formTag.setAttribute('method', 'dialog');
    formTag.setAttribute('id', 'project-form');
    modalProjectForm.appendChild(formTag);

    const exitDiv = document.createElement('div');
    exitDiv.classList.add('f-exit-btn-div');
    modalProjectForm.appendChild(exitDiv);

    const formExit = document.createElement('button');
    formExit.classList.add('f-form-exit-btn');
    formExit.setAttribute('formnovalidate', '');
    formExit.textContent = 'X';
    exitDiv.appendChild(formExit);

    const formUl = document.createElement('ul');
    formUl.classList.add('f-form-ul');
    modalProjectForm.appendChild(formUl);
    
    // Title Form Input
    const titleLi = document.createElement('li');
    titleLi.classList.add('f-title-li');
    formUl.appendChild(titleLi);

    const titleLabel = document.createElement('label');
    titleLabel.textContent = `Title: `;
    titleLabel.classList.add('f-label');
    titleLabel.setAttribute('for', 'title');
    titleLi.appendChild('titleLabel');

    const titleInput = document.createElement('input');
    titleInput.classList.add('f-input');
    titleInput.setAttribute('type', 'text');
    titleInput.setAttribute('name', 'title');
    titleInput.setAttribute('id', 'title');
    titleInput.setAttribute('required');
    titleLi.appendChild('titleInput');

    // Date Form Input
    const dateLi = document.createElement('li');
    dateLi.classList.add('f-date-li');
    formUl.appendChild(dateLi);
    
    const dateLabel = document.createElement('label');
    dateLabel.textContent = `Date: `;
    dateLabel.classList.add('f-label');
    dateLabel.setAttribute('for', 'date');
    dateLi.appendChild('dateLabel');

    const dateInput = document.createElement('input');
    dateInput.classList.add('f-input');
    dateInput.setAttribute('type', 'date');
    dateInput.setAttribute('name', 'date');
    dateInput.setAttribute('id', 'date');
    dateInput.setAttribute('required');
    dateLi.appendChild('dateInput');

    // Priority Form Input
    const priorityLi = document.createElement('li');
    priorityLi.classList.add('f-priority-li');
    formUl.appendChild(priorityLi);

    const priorityLabel = document.createElement('label');
    priorityLabel.textContent = `Priority: `;
    priorityLabel.classList.add('f-label');
    priorityLabel.setAttribute('for', 'priority');
    priorityLi.appendChild('priorityLabel');

    const priorityInput = document.createElement('select');
    priorityInput.classList.add('f-input');
    priorityInput.setAttribute('name', 'priority');
    priorityInput.setAttribute('id', 'priority');
    priorityInput.setAttribute('required');
    priorityLi.appendChild('priorityInput');

    const highPriority = document.createElement('option');
    highPriority.textContent = `High`;
    highPriority.setAttribute('value', 'high');
    priorityInput.appendChild(highPriority);

    const mediumPriority = document.createElement('option');
    mediumPriority.textContent = `Medium`;
    mediumPriority.setAttribute('value', 'medium');
    priorityInput.appendChild(mediumPriority);

    const lowPriority = document.createElement('option');
    lowPriority.textContent = `Low`;
    lowPriority.setAttribute('value', 'high');
    priorityInput.appendChild(lowPriority);

    // Description Form Input
    const descriptionLi = document.createElement('li');
    descriptionLi.classList.add('f-description-li');
    formUl.appendChild(descriptionLi);

    const descriptionLabel = document.createElement('label');
    descriptionLabel.textContent = `Description: `;
    descriptionLabel.classList.add('f-description-label');
    descriptionLabel.setAttribute('for', 'description');
    descriptionLi.appendChild('descriptionLabel');

    const descriptionInput = document.createElement('textarea');
    descriptionInput.classList.add('f-description-input');
    priorityInput.setAttribute('name', 'description');
    priorityInput.setAttribute('id', 'description');
    priorityInput.setAttribute('rows', '4');
    priorityInput.setAttribute('cols', '50');
    priorityInput.setAttribute('required');
    descriptionLi.appendChild(descriptionInput);

    // Creates modal form for project info submission

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
    // User projects list, updates via user input
    sidebar.appendChild(projectUl);
    
    const newProjectBtn = document.createElement('button');
    newProjectBtn.classList.add('m-new-project-btn');
    newProjectBtn.textContent = `New Project`;
    newProjectBtn.addEventListener('click', () => {
        modalProjectForm.showModal();
       /* const projectLi = document.createElement('li');
        const projectLink = document.createElement('button');
        projectLink.classList.add('m-project-link');
        projectLink.textContent = projectName;
        projectLi.appendChild(projectLink);
        projectUl.appendChild(projectLi);*/
    });
    sidebar.appendChild(newProjectBtn);
    
    main.appendChild(sidebar);

    const mainContent = document.createElement('div');
    mainContent.classList.add('m-main-content');

    main.appendChild(mainContent);

    return main
}