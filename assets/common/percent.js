const percent = {
    init: function() {
        this.scrollCount('.expert', '.exp1 .expert--overlay', 'countPer1');
        this.scrollCount('.expert', '.exp2 .expert--overlay', 'countPer2');
        this.scrollCount('.expert', '.exp3 .expert--overlay', 'countPer3');
        this.scrollCount('.expert', '.exp4 .expert--overlay', 'countPer4');
    },
    scrollCount: function(classDivHeight, classNeedAdd, classAdd) {
        let heightToWrapper = document.querySelector(classDivHeight).offsetTop;
        let countPercent = document.querySelector(classNeedAdd);
        window.addEventListener('scroll', () => {
            let scrollWindowHeight = window.pageYOffset;
            if (scrollWindowHeight >= (heightToWrapper) - 30) {
                countPercent.classList.add(classAdd);
            }
        })
    }
}
percent.init();