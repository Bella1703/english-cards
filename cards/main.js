const cards = document.querySelectorAll('.card');


cards.forEach(card => {
    card.addEventListener('click', function () {
        const cardFirstSide = card.querySelector('.card__first-side');
        const cardSecondSide = card.querySelector('.card__second-side');

        if (cardFirstSide.classList.contains('active')) {
            cardFirstSide.classList.remove('active');
            cardSecondSide.classList.add('active');
        } else {
            cardFirstSide.classList.add('active');
            cardSecondSide.classList.remove('active');
        }
    })
})



const swiper = new Swiper('.swiper', {
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    spaceBetween: 300,
});