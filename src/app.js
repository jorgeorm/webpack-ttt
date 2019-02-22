import header from './components/header';
import dashboard from './components/dashboard';

export default () => {
    const app = document.createElement('div');
    const headerEl = header({ className: 'app__header' });
    const dashboardEl = dashboard({ className: 'app__dashboard' });

    app.className = 'app';
    app.appendChild(headerEl);
    app.appendChild(dashboardEl);

    return app;
}