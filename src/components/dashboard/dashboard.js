import './dashboard.css';

const JS_IMG_URL = 'https://www.tutorialrepublic.com/lib/images/javascript-illustration.png';

export default ({ className }) => {
    const dashEl = document.createElement('div');
    const jsImgEl = document.createElement('img');
    const paragraphEl = document.createElement('p');
    const cardEl = document.createElement('div');

    jsImgEl.src = JS_IMG_URL;
    jsImgEl.className = 'pure-img card__img';

    paragraphEl.className = 'card__desc';
    paragraphEl.innerHTML = 'Fusce sed leo tempus, interdum ex eget, condimentum orci. Proin porttitor ligula eget ante tristique, quis feugiat nulla tempor. Nulla volutpat nulla ut tempor pretium. Nullam scelerisque, massa nec lacinia tincidunt, enim mauris sodales quam, ac vehicula nisl sem eget velit. Donec id facilisis nunc. Donec vel nibh in diam fermentum sollicitudin at et leo. Praesent quis odio eget justo rhoncus consequat vitae vel urna. Duis a varius quam. Aenean sollicitudin dolor eu laoreet pharetra. Aenean vel arcu semper, sagittis quam ut, condimentum diam. Duis augue tortor, placerat eu velit vitae, interdum lobortis leo.';

    cardEl.className = 'card dashboard__card';
    cardEl.appendChild(jsImgEl);
    cardEl.appendChild(paragraphEl);

    dashEl.className = className ? `dashboard ${ className }` : 'dashboard';
    dashEl.appendChild(cardEl);

    return dashEl;
}