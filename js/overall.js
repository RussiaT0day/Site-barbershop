(function () {
    // проходимся по всем пунктам меню
    for(let element of document.querySelectorAll('.header-menu-navigation a')){
        // получаем хост
        let location = window.location.href;
        // получаем путь ссылки  элемента
        let link = element.href;
        if(location === link) {
            element.classList.add('active');
        }
    }
})();