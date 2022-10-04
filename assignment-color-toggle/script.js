const menuList = document.getElementById('menu-list');
const button = document.getElementById('menu-button');
const menu = document.getElementsByClassName('menu')[0];
const pickedColor = document.getElementById('picked-color');

function openMenu() {
    menuList.classList.add('is-open');
}

function closeMenu() {
    menuList.classList.remove('is-open');
}

button.addEventListener('click', openMenu);
button.addEventListener('mouseenter', openMenu);
menu.addEventListener('mouseleave', closeMenu);

const radioButtons = menuList.querySelectorAll('li input');
radioButtons.forEach(
    function (radioButton) {
        radioButton.addEventListener('change', function () {
            const color = radioButton.getAttribute('value');
            if (document.body.className !== color) {
                document.body.className = color;
                pickedColor.innerHTML = color;
                closeMenu();
            }
        })
    }
);

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        closeMenu();
        return;
    }

    radioButtons[event.key - 1]?.click();
    openMenu();
});

