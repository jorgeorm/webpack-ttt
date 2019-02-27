import './settings-menu.css';

export default ({ className }) => {
    const el = document.createElement('div');
    const menuBtn = document.createElement('div');
    const menuModal = document.createElement('div');

    let isToggled = false;

    menuModal.className = 'settings-menu__modal modal-blackout';
    menuModal.innerHTML = `<div class="modal-blackout__inner modal pure-menu">
        <ul class="pure-menu-list">
            <li class="pure-menu-item"><a href="#" class="pure-menu-link">Menu Content 1</a></li>
            <li class="pure-menu-item"><a href="#" class="pure-menu-link">Menu Content 2</a></li>
            <li class="pure-menu-item"><a href="#" class="pure-menu-link">Menu Content 3</a></li>
        </ul>
    </div>`;
    menuModal.addEventListener('click', () => {
        el.removeChild(menuModal);
        isToggled = false;
    });

    menuBtn.innerHTML = 'Menu';
    menuBtn.className = 'settings-menu__btn pure-button';
    menuBtn.addEventListener('click', (event) => {
        isToggled = !isToggled;
        const left =  event.target.offsetLeft;
        const right =  window.innerWidth - (left + event.target.offsetWidth);
        const top = event.target.offsetTop;
        const height = event.target.offsetHeight;

        if (isToggled) {
            const menuContentEl = menuModal.getElementsByClassName('modal-blackout__inner modal')[0];

            console.log(menuContentEl.offsetWidth);
                        
            menuContentEl.style = `top: ${top + height}px; right: ${right}px;`;
            
            el.appendChild(menuModal);
        }
        else el.removeChild(menuModal);
    });

    el.className = (className && `settings-menu ${className}`) || 'settings-menu';
    el.appendChild(menuBtn);
    // el.appendChild(menuModal);

    return el;
}