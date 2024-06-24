export function mainContent() {
    const main = document.createElement('main');
    main.classList.add('main');

    const sidebar = document.createElement('div');
    sidebar.classList.add('m-content-sidebar');

    main.appendChild(sidebar);

    const mainContent = document.createElement('div');
    mainContent.classList.add('m-main-content');

    main.appendChild(mainContent);

    return main
}