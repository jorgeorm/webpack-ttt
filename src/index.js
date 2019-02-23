import app from './app';

let oldApp = app({ className: 'app' });

document.body.appendChild(oldApp);

if (module.hot) {
    module.hot.accept('./app', () => {
        const newApp = app({ className: 'app' });

        document.body.replaceChild(newApp, oldApp);

        oldApp = newApp;
    });
}
