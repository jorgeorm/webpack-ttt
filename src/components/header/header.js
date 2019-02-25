import './header.css';

export default ({ className }) => {
    const header = document.createElement('header');
    const headerTitle = document.createElement('h1');

    headerTitle.innerHTML = "Hello world!!!";
    headerTitle.className = 'header__title';
    
    header.appendChild(headerTitle);
    header.className = className ? `header ${ className }` : 'header';

    return header;
}