const JS_IMG_URL = 'https://www.tutorialrepublic.com/lib/images/javascript-illustration.png';


export default ({ className }) => {
    const dashEl = document.createElement('div');
    const jsImgEl = document.createElement('img');
    const pargraphEl = document.createElement('p');

    jsImgEl.src = JS_IMG_URL;
    jsImgEl.className = 'dashboard__img';
    pargraphEl.innerHTML = 'This is an img alt in HMR';

    dashEl.className = className ? `dashboard ${ className }` : 'dashboard';
    dashEl.appendChild(jsImgEl);
    dashEl.appendChild(pargraphEl);

    return dashEl;
}