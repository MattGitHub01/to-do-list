export function header() {
    const header = document.createElement('header');
    header.classList.add('header');

    const logo = document.createElement('div');
    logo.classList.add('logo');

    const logoImg = document.createElement('div');
    logoImg.classList.add('logo-img');
    logo.appendChild(logoImg);

    const logoTxt = document.createElement('span');
    logoTxt.classList.add('logo-txt');
    logoTxt.textContent = `To-Do:`;
    logo.appendChild(logoTxt);

    header.appendChild(logo);

    return header
}