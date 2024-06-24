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
    // User projects list, updates via user input
    sidebar.appendChild(projectUl);
    
    const newProjectBtn = document.createElement('button');
    newProjectBtn.classList.add('m-new-project-btn');
    newProjectBtn.textContent = `New Project`;
    newProjectBtn.addEventListener('click', () => {
        let projectName = prompt('Project Name?');
        const projectLi = document.createElement('li');
        projectLi.textContent = projectName;
        projectUl.appendChild(projectLi);
    });
    sidebar.appendChild(newProjectBtn);
    
    main.appendChild(sidebar);

    const mainContent = document.createElement('div');
    mainContent.classList.add('m-main-content');

    main.appendChild(mainContent);

    return main
}