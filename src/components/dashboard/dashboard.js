const JS_IMG_URL = 'https://www.tutorialrepublic.com/lib/images/javascript-illustration.png';


export default ({ className }) => {
    const dashEl = document.createElement('div');
    const jsImgEl = document.createElement('img');

    jsImgEl.src = JS_IMG_URL;
    jsImgEl.className = 'dashboard__img';

    dashEl.className = className ? `dashboard ${ className }` : 'dashboard';
    dashEl.appendChild(jsImgEl);

    return dashEl;
}