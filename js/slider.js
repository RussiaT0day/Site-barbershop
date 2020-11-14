window.onload = (function () {
    function slider() {
// Слайдер
        let position = 0;
        const slidesToShow = 1;
        const slidesToScroll = 1;
        const container = document.querySelector('.about-photo-slider');
        const track = document.querySelector('.about-photo-slider-track');
        const btnPrev = document.querySelector('.about-photo-buttons__btn-prev');
        const btnNext = document.querySelector('.about-photo-buttons__btn-next');
        const items = document.querySelectorAll('.about-photo-slider__img');
        const itemsCount = items.length;

        if (container) {
            const itemWidth = container.clientWidth / slidesToShow;
            const movePosition = slidesToScroll * itemWidth;
            items.forEach((item) => {
                item.style.minWidth = `${itemWidth}px`;
            });
            btnNext.addEventListener('click', () => {
                const itemLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
                position -= itemLeft >= slidesToShow ? movePosition : itemLeft * itemWidth;
                setPosition();
                checkBtns();
            });

            btnPrev.addEventListener('click', () => {
                const itemLeft = Math.abs(position) / itemWidth;
                position += itemLeft >= slidesToShow ? movePosition : itemLeft * itemWidth;
                setPosition();
                checkBtns();
            });
            const setPosition = () => {
                track.style.transform = `translateX(${position}px)`;

            };
            const checkBtns = () => {
                btnPrev.disabled = position === 0;
                btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;
            };
            checkBtns();
        }
    }

    slider();
})();