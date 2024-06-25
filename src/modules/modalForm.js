export function modalForm() {
    const modalProjectForm = document.createElement('dialog');
    modalProjectForm.classList.add('modal-new-project-form');
    document.body.appendChild(modalProjectForm);

    const formTag = document.createElement('form');
    formTag.setAttribute('action', '');
    formTag.setAttribute('method', 'post');
    formTag.setAttribute('id', 'project-form');
    modalProjectForm.appendChild(formTag);

    const exitDiv = document.createElement('div');
    exitDiv.classList.add('modal-exit-btn-div');
    modalProjectForm.appendChild(exitDiv);

    const formExit = document.createElement('button');
    formExit.classList.add('modal-form-exit-btn');
    formExit.setAttribute('formnovalidate', '');
    formExit.setAttribute('data-bs-dismiss', 'modal');
    formExit.textContent = 'X';
    formExit.addEventListener('click', () => {
        document.body.removeChild(modalProjectForm);
    });
    exitDiv.appendChild(formExit);

    const formUl = document.createElement('ul');
    formUl.classList.add('modal-form-ul');
    modalProjectForm.appendChild(formUl);

    // Date Form Input
    const dateLi = document.createElement('li');
    dateLi.classList.add('modal-date-li');
    formUl.appendChild(dateLi);

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
    formUl.appendChild(priorityLi);

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

    modalProjectForm.showModal();
}