import './header.css';

import settingsMenu from '../settings-menu';

export default ({ className }) => {
    const header = document.createElement('header');
    const headerTitle = document.createElement('h1');
    const settingsMenuEl = settingsMenu({ className: 'header__settings' });

    headerTitle.innerHTML = "Hello world!!!";
    headerTitle.className = 'header__title';
    
    header.appendChild(headerTitle);
    header.appendChild(settingsMenuEl);
    header.className = className ? `header ${ className }` : 'header';

    return header;
}