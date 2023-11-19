$(document).ready(function () {
    const $carousel = $('.carousel');
    const $cards = $('.card');
    let currentIndex = 0;

    function showCard(index) {
        $cards.removeClass('active');
        $cards.eq(index).addClass('active');
        currentIndex = index;
    }

    $('.prev-button').on('click', function () {
        currentIndex = (currentIndex - 1 + $cards.length) % $cards.length;
        showCard(currentIndex);
    });

    $('.next-button').on('click', function () {
        currentIndex = (currentIndex + 1) % $cards.length;
        showCard(currentIndex);
    });

    // Mostra o primeiro slide ao carregar a página
    showCard(currentIndex);
});