//  Carousel 1
$('.member__slide .owl-carousel').owlCarousel({
    loop: true,
    margin: 25,
    nav: false,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: true
        },
        569: {
            items: 2,
        },

        990: {
            items: 2
        },
        991: {
            items: 2,
            nav: false
        },
        1000: {
            items: 3,
            loop: true
        }
    }
});
//  Carousel 
$('.creative__slide .owl-carousel').owlCarousel({
    loop: true,
    margin: 25,
    nav: false,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: true
        },
        569: {
            items: 2,
        },

        990: {
            items: 2
        },
        991: {
            items: 2,
            nav: false
        },
        1000: {
            items: 3,
            loop: true
        }
    }
});
//Clients
const client = document.querySelector(".clients__items");
const clientItem = document.querySelectorAll(".clients__item");
const clientBtn = document.querySelectorAll('.clients__button');

let c = 0;
let clientSize = clientItem[0].offsetWidth + 25;

client.style.transform = `translateX(${-clientSize * c}px)`;

autoPlay = function() {
    clientBtn.forEach(btn => btn.classList.remove('active'));
    c++;
    client.style.transition = '.5s ease-out';
    c = c % clientItem.length;
    client.style.transform = `translateX(${-clientSize * c}px)`;
    clientBtn[c].classList.add('active');

}
setInterval(autoPlay, 5000);

clientBtn.forEach(btn => btn.addEventListener('click', (e) => {
    clientBtn.forEach(btn => btn.classList.remove('active'));
    let count = e.target.dataset.count;
    client.style.transition = '.5s ease-out';
    client.style.transform = `translateX(${-clientSize * count}px)`;
    clientBtn[count].classList.add('active');
}))