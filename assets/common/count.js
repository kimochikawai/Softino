const count = {
    init: function() {
        this.scrollCount('.clients', '#count1', 2575);
        this.scrollCount('.clients', '#count2', 4225);
        this.scrollCount('.clients', '#count3', 3177);
        this.scrollCount('.clients', '#count4', 4028);
    },
    scrollCount: function(classDivHeight, count, number) {
        let heightToWrapper = document.querySelector(classDivHeight).offsetTop;
        let height = document.querySelector(classDivHeight).offsetHeight;
        let Count1 = document.querySelector(count);
        window.addEventListener('scroll', () => {
            let scrollWindowHeight = window.pageYOffset;
            let i = 1000;
            if (scrollWindowHeight >= heightToWrapper + (height / 2)) {
                setTimeout(() => {
                    let d = setInterval(() => {
                        i += 47;
                        Count1.innerHTML = "" + i + "";
                        if (i > number) {
                            clearInterval(d);
                        }
                    }, 100);
                    d();
                }, 500);
            }
        })
    }

}
count.init();