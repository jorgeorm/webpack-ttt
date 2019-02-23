import header from './components/header';
import dashboard from './components/dashboard';

export default () => {
    const app = document.createElement('div');

    let headerEl = header({ className: 'app__header' });
    let dashboardEl = dashboard({ className: 'app__dashboard' });

    app.className = 'app';
    app.appendChild(headerEl);
    app.appendChild(dashboardEl);

    if (module.hot) {
        module.hot.accept('./components/header', () => {
            const newHeader = header({ className: 'app__header' });
    
            app.replaceChild(newHeader, headerEl);
            headerEl = newHeader;
        });

        module.hot.accept('./components/dashboard', () => {
            const newDashboard = dashboard({ className: 'app__dashboard' });

            app.replaceChild(newDashboard, dashboardEl);
            dashboardEl = newDashboard;
        });
    }

    return app;
}