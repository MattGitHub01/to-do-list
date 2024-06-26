import { saveProject } from './saveProject.js';

export function modalForm(projectName) {
    const modalProjectForm = document.createElement('dialog');
    modalProjectForm.classList.add('modal-new-project-form');
    document.body.appendChild(modalProjectForm);

    const formTag = document.createElement('form');
    formTag.setAttribute('action', '');
    formTag.setAttribute('method', '');
    formTag.setAttribute('id', 'project-form');
    modalProjectForm.appendChild(formTag);

    const topbarDiv = document.createElement('div');
    topbarDiv.classList.add('modal-topbar-div');
    modalProjectForm.appendChild(topbarDiv);

    const formTitle = document.createElement('h2');
    formTitle.classList.add('modal-form-title')
    formTitle.textContent = `Project Details`;
    topbarDiv.appendChild(formTitle);

    const formExit = document.createElement('button');
    formExit.classList.add('modal-form-exit-btn');
    formExit.setAttribute('formnovalidate', '');
    formExit.setAttribute('data-bs-dismiss', 'modal');
    formExit.textContent = 'X';
    formExit.addEventListener('click', () => {
        document.body.removeChild(modalProjectForm);
    });
    topbarDiv.appendChild(formExit);

    const formUl = document.createElement('ul');
    formUl.classList.add('modal-form-ul');
    modalProjectForm.appendChild(formUl);

    const firstLiDiv = document.createElement('div');
    firstLiDiv.classList.add('modal-li-div');
    formUl.appendChild(firstLiDiv);

    // Date Form Input
    const dateLi = document.createElement('li');
    dateLi.classList.add('modal-date-li');
    firstLiDiv.appendChild(dateLi);

    const dateLabel = document.createElement('label');
    dateLabel.textContent = `Date: `;
    dateLabel.classList.add('modal-label');
    dateLabel.setAttribute('for', 'date');
    dateLi.appendChild(dateLabel);

    const dateInput = document.createElement('input');
    dateInput.classList.add('modal-input');
    dateInput.setAttribute('type', 'date');
    dateInput.setAttribute('name', 'date');
    dateInput.setAttribute('id', 'date');
    dateInput.setAttribute('required', '');
    dateLi.appendChild(dateInput);

    // Priority Form Input
    const priorityLi = document.createElement('li');
    priorityLi.classList.add('modal-priority-li');
    firstLiDiv.appendChild(priorityLi);

    const priorityLabel = document.createElement('label');
    priorityLabel.textContent = `Priority: `;
    priorityLabel.classList.add('modal-label');
    priorityLabel.setAttribute('for', 'priority');
    priorityLi.appendChild(priorityLabel);

    const priorityInput = document.createElement('select');
    priorityInput.classList.add('modal-input');
    priorityInput.setAttribute('name', 'priority');
    priorityInput.setAttribute('id', 'priority'); 
    priorityLi.appendChild(priorityInput);

    const highPriority = document.createElement('option');
    highPriority.setAttribute('id', 'priority'); 
    highPriority.textContent = `High`;
    highPriority.setAttribute('value', 'high');
    priorityInput.appendChild(highPriority);

    const mediumPriority = document.createElement('option');
    mediumPriority.setAttribute('id', 'priority'); 
    mediumPriority.textContent = `Medium`;
    mediumPriority.setAttribute('value', 'medium');
    priorityInput.appendChild(mediumPriority);

    const lowPriority = document.createElement('option');
    lowPriority.setAttribute('id', 'priority'); 
    lowPriority.textContent = `Low`;
    lowPriority.setAttribute('value', 'high');
    priorityInput.appendChild(lowPriority);

    // Description Form Input
    const descriptionLi = document.createElement('li');
    descriptionLi.classList.add('modal-description-li');
    formUl.appendChild(descriptionLi);

    const descriptionLabel = document.createElement('label');
    descriptionLabel.textContent = `Description: `;
    descriptionLabel.classList.add('modal-description-label');
    descriptionLabel.setAttribute('for', 'description');
    descriptionLi.appendChild(descriptionLabel);

    const descriptionInput = document.createElement('textarea');
    descriptionInput.classList.add('modal-description-input');
    descriptionInput.setAttribute('name', 'description');
    descriptionInput.setAttribute('id', 'description');
    descriptionInput.setAttribute('rows', '4');
    descriptionInput.setAttribute('cols', '50');
    descriptionInput.setAttribute('required', '');
    descriptionLi.appendChild(descriptionInput);

    const submitBtn = document.createElement('button');
    submitBtn.textContent = 'Enter';
    submitBtn.classList.add('modal-submit-btn');
    submitBtn.addEventListener('click', () => {
        saveProject(projectName, dateInput.value, priorityInput.value, descriptionInput.value);
        // Save project to local memory
        dateInput.value = ``;
        priorityInput.value = ``;
        descriptionInput.value = ``;
        document.body.removeChild(modalProjectForm);
        // Clears and deletes modal form and form data
    });
    modalProjectForm.appendChild(submitBtn);

    modalProjectForm.showModal();
}