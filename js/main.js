

document.getElementById('menu').onclick = function () {
    if (document.getElementById('menu').classList.contains('menu-btn_active') === true) {
        document.getElementById('menu').classList.remove('menu-btn_active');
        document.getElementsByClassName('head-nav-mob')[0].style.right = '-380px';


    } else {
        document.getElementById('menu').classList.add('menu-btn_active');
        document.getElementsByClassName('head-nav-mob')[0].style.right = '0';
    }

}


