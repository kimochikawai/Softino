const menuMobile = {
    init: function() {
        this.clickShowmenu('.humberger', '.menu__list', 'showmenu');
        this.clickShowmenu('#item2 .list--item-black', '#item2 .drop__menu', 'showMenu');
        this.clickShowmenu('#item3 .list--item-black', '#item3 .drop__menu', 'showMenu');
        this.clickShowmenu('#item4 .list--item-black', '#item4 .drop__menu', 'showMenu');
        this.clickShowmenu('#item5 .list--item-black', '#item5 .drop__menu', 'showMenu');
        this.clickShowmenu('#item6 .list--item-black', '#item6 .drop__menu', 'showMenu');
        this.clickShowmenu('#item7 h5', '#item7 .drop__menu2', 'showmenu2');
        this.clickShowmenu('#item8 h5', '#item8 .drop__menu2', 'showmenu2');
        this.scrollMenu('.header', 'fixmenu');
    },
    clickShowmenu: function(button, menu, togeMenu) {
        let btn = document.querySelector(button);
        let navMenu = document.querySelector(menu);
        btn.addEventListener('click', () => {
            navMenu.classList.toggle(togeMenu);
        });
    },
    scrollMenu: function(menu, classfix) {
        let Nav = document.querySelector(menu);
        let heightMenu = document.querySelector(menu).offsetHeight;

        window.addEventListener('scroll', () => {
            let heightScroll = window.pageYOffset;
            if (heightScroll >= heightMenu / 2) {
                Nav.classList.add(classfix);
            } else {
                Nav.classList.remove(classfix);
            }



        });
    }
}

menuMobile.init();