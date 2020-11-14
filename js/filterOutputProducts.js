window.onload = (function () {
// конструктор для товара
    function Product(title, manufacturer, img, cost, group) {
        this.title = title;
        this.manufacturer = manufacturer;
        this.img = img;
        this.cost = cost;
        this.group = group;
    }

    var product1 = new Product('НАБОР ДЛЯ ПУТЕШЕСТВИЙ', 'Baxter of California', '../img/products1-1mini.png', 2930, 1);
    var product2 = new Product('ГЕЛЬ ДЛЯ ВОЛОС', 'Suavecito', '../img/products2.jpg', 750, 2);
    var product3 = new Product('ГЛИНА ДЛЯ УКЛАДКИ ВОЛОС', 'American Crew', '../img/products3.jpg', 290, 1);
    var product4 = new Product('ГЕЛЬ ДЛЯ ВОЛОС', ' MR NATTY', '../img/products4.jpg', 500, 3);
    var product5 = new Product('НАБОР ДЛЯ ПУТЕШЕСТВИЙ', 'MURRAY’S', '../img/products5.jpg', 300, 2);
    var product6 = new Product('УВЛАЖНЯЮЩИЙ КОНДИЦИОНЕР', 'MALIN+GOETZ', '../img/products6.jpg', 3900, 1);
    console.log(product1);
// Локальная БД Обьекты товаров
    let products = [
        product1,
        product2,
        product3,
        product4,
        product5,
        product1,
        product2,
        product3,
        product4,
        product5,
        product6,
        product1,
        product2,
        product3,
        product4,
        product5,
        product6,
        product1,
        product2,
        product3,
        product4,
        product5,
        product6,
        product6
    ]
// дубликат таблицы
    let doubleProducts = products.slice();
//Получаем блок с выводом товаров
    let boxProducts = document.querySelector('#main-price-box-products');
// Блок с навигацией
    let pagination = document.querySelector('#main-price-navigation-products');
//Количество твоваров на странице
    let productsOnPage = 6;
//Расчет количества страниц в навигации
    let countPage = Math.ceil(doubleProducts.length / productsOnPage);


// Добавление в навигацию страниц
    for (let i = 1; i <= countPage; i++) {

        let a = document.createElement('a');
        a.classList.add('main-price-navigation-products-page');
        a.innerHTML = i;
        if (i === 1) {
            a.classList.add('active');
        }
        pagination.appendChild(a);
    }
//Получаем конечное число готовых страниц
    let itemsPage = document.querySelectorAll('#main-price-navigation-products a');


// вывод начальных товаров
    function outputProductsStart(dataBase) {
        //Обрезем лишние обьекты
        boxProducts.innerHTML = '';
        let notes = dataBase.slice(0, productsOnPage);
        for (let note = 0; note <= notes.length; note++) {
            if (notes[note] !== undefined) {
                div = document.createElement('div');
                div.classList.add('main-price-box-products-block');
                let blockProducts = "  <a href='../page/product-page.php'>    " +
                    "                    <div class=\"main-price-box-products-block__img\">\n" +
                    "                        <img src=\"" + notes[note].img + "\" alt=\"conditioner\">\n" +
                    "                    </div>\n" +
                    "                    <div class=\"main-price-box-products-block__title\">\n" +
                    "                        <h3>" + notes[note].title + "</h3>\n" +
                    "                    </div>\n" +
                    "                    <div class=\"main-price-box-products-block__subtitle\">\n" +
                    "                        <p>" + notes[note].manufacturer + "</p>\n" +
                    "                    </div>\n" +
                    "                    <div class=\"main-price-box-products-block-price\">\n" +
                    "                        <div class=\"main-price-box-products-block-price__cost\">\n" +
                    "                            <p class=\"main-price-box-products-block__cost_number\">" + notes[note].cost + " ₽</p>\n" +
                    "                        </div>\n" +
                    "                        <button class=\"main-price-box-products-block-price__btn btn\">Купить</button>\n" +
                    "                    </div></a>"
                div.innerHTML = blockProducts;
                boxProducts.appendChild(div);
            }
        }
    }

    outputProductsStart(doubleProducts);

    function outputProductsChange(dataBase) {
        //Отслеживаем нажатие на страниу в навигации
        for (let item of itemsPage) {
            item.addEventListener('click', function () {
                //Получаем номер страницы
                for (let j = 0; j < itemsPage.length; j++) {
                    itemsPage[j].classList.remove('active');
                }
                this.classList.add('active');
                let pageNum = +this.innerHTML;
                // Обрезаем обьекты по нумирации страницы
                let start = (pageNum - 1) * productsOnPage;
                let end = start + productsOnPage;
                //Обрезем лишние обьекты
                let notes = dataBase.slice(start, end);
                boxProducts.innerHTML = "";
                for (let note = 0; note <= notes.length; note++) {
                    if (notes[note] !== undefined) {

                        // Добавляем div с классом main-price-box-products-block
                        let div = document.createElement('div');
                        div.classList.add('main-price-box-products-block');

                        div.innerHTML = "  <a href='../page/product-page.php'>    " +
                            "                    <div class=\"main-price-box-products-block__img\">\n" +
                            "                        <img src=\"" + notes[note].img + "\" alt=\"conditioner\">\n" +
                            "                    </div>\n" +
                            "                    <div class=\"main-price-box-products-block__title\">\n" +
                            "                        <h3>" + notes[note].title + "</h3>\n" +
                            "                    </div>\n" +
                            "                    <div class=\"main-price-box-products-block__subtitle\">\n" +
                            "                        <p>" + notes[note].manufacturer + "</p>\n" +
                            "                    </div>\n" +
                            "                    <div class=\"main-price-box-products-block-price\">\n" +
                            "                        <div class=\"main-price-box-products-block-price__cost\">\n" +
                            "                            <p class=\"main-price-box-products-block__cost_number\">" + notes[note].cost + " ₽</p>\n" +
                            "                        </div>\n" +
                            "                        <button class=\"main-price-box-products-block-price__btn btn\">Купить</button>\n" +
                            "                    </div></a>";
                        boxProducts.appendChild(div);
                    }
                }


            });
        }
    }

    outputProductsChange(doubleProducts);
//отслеживаем клик по кнопке фильтра
    document.getElementById('main-price-box-filter-category__button').addEventListener('click', function () {
        let doubleProducts = products.slice();
//собираем все данные с  радио и чекбокс
        let checkbox = document.querySelectorAll('.main-price-box-filter-manufacturers input');
        let radio = document.querySelectorAll('.main-price-box-filter-category input');
        console.log(checkbox);
//пределяем массивы для отфильтровнных значений чекбоков и радио
        let manufacturersFilter = [];
        let categoryFilter;
        for (let checkedCheckbox of checkbox) {
            //проверяем чекбоксы на активность
            if (checkedCheckbox.checked) {
                manufacturersFilter.push(checkedCheckbox.value);
            }
        }
        console.log(manufacturersFilter);
        for (let radioCheckbox of radio) {
            //проверяем радио кнопки на активность
            if (radioCheckbox.checked) {
                categoryFilter = parseInt(radioCheckbox.value);
            }
        }
        if (manufacturersFilter.length === 0) {
            for (let checkedCheckbox of checkbox) {
                manufacturersFilter.push(checkedCheckbox.value)

            }
        }
        console.log(checkbox);
        //подготавливаем массивы для сравнения
        //приводим к одному регистру и убираем все лишние символы
        let filerNums = [];
        for (let i = 0; i < manufacturersFilter.length; i++) {
            if (manufacturersFilter[i] !== undefined) {
                //подготоваливаем массив с отфильтровнных чекбоков
                manufacturersFilter[i] = manufacturersFilter[i].toLowerCase();
                manufacturersFilter[i] = manufacturersFilter[i].replace(/[^A-Za-zА-Яа-яЁё]/g, "");
                //подготавливаем массив обьектов для сравнения и фильтруем по значениям производителей
                for (let j = 0; j < products.length; j++) {
                    if (products[j]) {
                        products[j].manufacturer = products[j].manufacturer.toLowerCase();
                        products[j].manufacturer = products[j].manufacturer.replace(/[^A-Za-zА-Яа-яЁё]/g, "");
                        if (manufacturersFilter[i] !== products[j].manufacturer || categoryFilter !== products[j].group) {
                            filerNums.push(j);
                        }
                    }
                }
            }
        }
        //Сортировка массива
        function SelectionSort(A) {
            var n = A.length;
            for (var i = 0; i < n - 1; i++) {
                var min = i;
                for (var j = i + 1; j < n; j++) {
                    if (A[j] < A[min]) min = j;
                }
                var t = A[min];
                A[min] = A[i];
                A[i] = t;
            }
            return A;
        }

        SelectionSort(filerNums);
        // количество совпадений
        let counter = 1;
        //индексы слов которые требуется удалить
        let indexes = [];
        if (manufacturersFilter.length === 1) {
            for (let i = 0; i < filerNums.length; i++) {
                doubleProducts[filerNums[i]] = undefined;
            }
        } else {
            //перебираем числа в filerNums и сравниваем их со всеми другими числами в filerNums
            for (let i = 0; i < filerNums.length; i++) {
                for (let j = 1 + i; j < filerNums.length; j++) {
                    //если числа совпадают то проверяем на undefined

                    if (filerNums[i] === filerNums[j]) {
                        //увеличиваем счетчик совпадний
                        counter++;
                        //добавляем индексы совпадений из filerNums в общий массив индексов
                        indexes.push(filerNums[i]);
                        indexes.push(filerNums[j]);
                        //проверяем на счетчик сопадений с общим количеством отмеченных чекбоксов
                    }
                }
                if (counter === manufacturersFilter.length) {
                    doubleProducts[indexes[0]] = undefined;
                }
                //обнуляем для сравнения со следующим значением
                counter = 1;
                indexes = [];
            }
        }
        // удаляем все значения undefined
        doubleProducts = doubleProducts.filter(function (x) {
            return x !== undefined && x !== null;
        });
        console.log(doubleProducts);
        document.getElementById('main-price-navigation-products').innerHTML = "";
        countPage = Math.ceil(doubleProducts.length / productsOnPage);
        outputProductsStart(doubleProducts);
        outputProductsChange(doubleProducts);
    });
})();
