export function footer() {
    const footer = document.createElement('footer');
    footer.classList.add('footer');

    const footerTxt = document.createElement('div');
    footerTxt.classList.add('f-footer-txt');
    footer.appendChild(footerTxt);

    const footerSpan = document.createElement('span');
    footerSpan.textContent = `Copyright 2024 \u00A9 `;
    footerTxt.appendChild(footerSpan);

    const footerLink = document.createElement('a');
    footerLink.classList.add('f-link');
    footerLink.setAttribute('href', 'https://www.github.com/MattGitHub01');
    footerLink.setAttribute('target', '"_blank"');
    footerLink.textContent = `MattGitHub01`;
    footerTxt.appendChild(footerLink);

    return footer
}