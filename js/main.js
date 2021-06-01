

document.getElementById('menu').onclick = function () {
    if (document.getElementById('menu').classList.contains('menu-btn_active') === true) {
        document.getElementById('menu').classList.remove('menu-btn_active');
        function sayTime() {
            document.getElementsByClassName('head-nav-mob')[0].style.display = 'none';

        }
        setTimeout(sayTime, 700);
        document.getElementsByClassName('head-nav-mob')[0].style.right = '-1040px';


    } else {
        document.getElementById('menu').classList.add('menu-btn_active');

        function sayTime() {
            document.getElementsByClassName('head-nav-mob')[0].style.right = '0';

        }
        setTimeout(sayTime, 5);
        document.getElementsByClassName('head-nav-mob')[0].style.display = 'flex';
    }

}


