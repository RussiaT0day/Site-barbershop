window.onload = (function (){
//Изменение вывода на странице продукта главной фотографии на второстепенные
    const pageSubImgs = document.querySelectorAll('.product-page-block-images-sub__img img');
    const pageMainImg = document.querySelector('.product-page-block-images-main__img img');
    const pageSubBlockImgs = document.querySelectorAll('.product-page-block-images-sub__img');
// Изменяем видимость блока если фотографии нет
    for (let q = 0; q < pageSubImgs.length; q++) {
        if (pageSubImgs[q].src.length === 44) {
            pageSubBlockImgs[q].style.display = "none";
        }
    }
//Отслеживаем нажатие на мини фотографии
    for (let pageSubImg of pageSubImgs) {
        pageSubImg.addEventListener("click", function () {
            pageMainImg.src = pageSubImg.src;
        });
    }
})();



