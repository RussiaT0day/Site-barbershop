<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <link rel="Shortcut Icon" href="ico/favicon.ico">
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <?php include 'include/header.php' ?>
    <main>
        <div class="background-gradient">
            <section class="logo">
                <div class="wrapper">
                    <div class="logo-main">
                        <img src="svg/index-logo.svg" alt="name-logo">
                    </div>
                </div>
            </section>
            <section class="advantages-blocks wrapper">
                <div class="advantages-blocks-block">
                    <div class="advantages-blocks-block__title">
                        <h1>Быстро</h1>
                    </div>
                    <div class="advantages-blocks-block-icon">
                        <div class="advantages-blocks-block-icon__romb"></div>
                    </div>
                    <div class="advantages-blocks-block__subtitle">
                        <p>МЫ ДЕЛАЕМ СВОЮ РАБОТУ БЫСТРО! ДВА ЧАСА ПРОЛЕТЯТ НЕЗАМЕТНО И ВЫ — СЧАСТЛИВЫЙ ОБЛАДАТЕЛЬ СТИЛЬНОЙ
                            СТРИЖКИ-МИНУТКИ!</p>
                    </div>
                </div>
                <div class="advantages-blocks-block">
                    <div class="advantages-blocks-block__title">
                        <h1>Круто</h1>
                    </div>
                    <div class="advantages-blocks-block-icon">
                        <div class="advantages-blocks-block-icon__romb"></div>
                    </div>

                    <div class="advantages-blocks-block__subtitle">
                        <p>ЗАБУДЬТЕ, КАК ВЫ СТРИГЛИСЬ РАНЬШЕ.
                            МЫ СДЕЛАЕМ ИЗ ВАС ЗВЕЗДУ ФУТБОЛА ИЛИ КИНО!</p>
                    </div>
                </div>
                <div class="advantages-blocks-block">
                    <div class="advantages-blocks-block__title">
                        <h1>Дорого</h1>
                    </div>
                    <div class="advantages-blocks-block-icon">
                        <div class="advantages-blocks-block-icon__romb"></div>
                    </div>

                    <div class="advantages-blocks-block__subtitle">
                        <p>НАШИ МАСТЕРА — ПРОФЕССИОНАЛЫ СВОЕГО ДЕЛА И НЕ МОГУТ СТОИТЬ ДЕШЕВО. К ТОМУ ЖЕ, РАЗВЕ ЦЕНА НЕ ДАЕТ
                            ОПРЕДЕЛЕНЫЙ СТАТУС?</p>
                    </div>
                </div>
            </section>
            <section class="about wrapper">
                <div class="about-news">
                    <div class="about-news__title title">
                        <h1>Новости</h1>
                    </div>
                    <div class="about-news-block">
                        <div class="about-news__subtitle">
                            <p>НАМ НАКОНЕЦ ЗАВЕЗЛИ ЯГЕРМАЙСТЕР! ТЕПЕРЬ ВЫ МОЖЕТЕ ПРОПУСТИТЬ СТАКАНЧИК ВО ВРЕМЯ СТРИЖКИ
                            </p>
                        </div>
                        <div class="about-news__date">
                            <p>11 январ</p>
                        </div>
                    </div>
                    <div class="about-news-block">
                        <div class="about-news__subtitle">
                            <p>В НАШЕЙ КОМАНДЕ ПОПОЛНЕНИЕ, БОРИС «БРИТВА» СТРИГУНЕЦ, ОБЛАДAТЕЛЬ МНОЖЕСТВА ТИТУЛОВ И НАГРАД
                                ПОПОЛНИЛ НАШИ СТРОЙНЫЕ РЯДЫ</p>
                        </div>
                        <div class="about-news__date">
                            <p>18 января</p>
                        </div>
                    </div>
                    <div class="about-news-a">
                        <a class="about-news-a__button btn">Все новости</a>
                    </div>


                </div>
                <div class="border">
                    <img src="img/border.png" alt="border">
                </div>
                <div class="about-photo">
                    <div class="about-photo__title title">
                        <h1>Фотогалерея</h1>
                    </div>
                    <div class="about-photo-slider">
                        <div class="about-photo-slider-track">
                            <div class="about-photo-slider__img ">
                                <img src="img/photo.png" alt="photo-atelier">
                            </div>
                            <div class="about-photo-slider__img ">
                                <img src="img/products6.jpg" alt="photo-atelier">
                            </div>
                            <div class="about-photo-slider__img ">
                                <img src="img/products5.jpg" alt="photo-atelier">
                            </div>
                        </div>
                    </div>
                    <div class="about-photo-buttons">
                        <div class="btn about-photo-buttons__btn-prev btn">назад</div>
                        <div class="btn about-photo-buttons__btn-next btn">вперед</div>
                    </div>

                </div>
            </section>
            <section class="information wrapper">
                <div class="information-contacts ">
                    <div class="information-contacts__title title">
                        <h1>КОНТАКТНАЯ ИНФОРМАЦИЯ</h1>
                    </div>
                    <div class="information-contacts__address">
                        <p>БАРБЕРШОП «БОРОДИНСКИЙ»</p>
                        <p>АДРЕС: Г. САНКТ-ПЕТЕРБУРГ, Б. КОНЮШЕННАЯ, Д. 19/8</p>
                        <p>ТЕЛЕФОН: <a href="tel:74956660266">+7 (495) 666-02-66</a></p>
                    </div>
                    <div class="information-contacts__timeworks">
                        <p>ВРЕМЯ РАБОТЫ: </p>
                        <p>ПН—ПТ: С 10:00 ДО 22:00</p>
                        <p>СБ—ВС: С 10:00 ДО 19:00</p>
                    </div>
                    <div class="information-contacts-buttons">
                        <a href="#popup" data-modal="1" class="information-contacts-buttons__a btn js-open-modal">Как
                            проехать</a>
                        <a href="#popup-f" class="information-contacts-buttons__a btn">Обратная свзязь</a>
                    </div>
                </div>
                <div class="border">
                    <img src="img/border.png" alt="border">
                </div>
                <div class="information-record">
                    <div class="information-contacts__title title">
                        <h1>ЗАПИСАТЬСЯ</h1>
                    </div>

                    <div class="information-contacts__subtitle">
                        <p>УКАЖИТЕ ЖЕЛАЕМУЮ ДАТУ И ВРЕМЯ И МЫ СВЯЖЕМСЯ С ВАМИ ДЛЯ ПОДТВЕРЖДЕНИЯ БРОНИ</p>
                    </div>
                    <form class="information-record-form" action="include/send-email.php" method="post">
                        <div class="information-record-form__date">
                            <p>Дата</p>
                            <input type="date" name="userdate" placeholder="08.10.2017" required>
                        </div>
                        <div class="information-record-form__time">
                            <p>Время</p>
                            <input type="text" name="usertime" placeholder="10:00" required>
                        </div>
                        <div class="information-record-form__name">
                            <p>Ваше имя</p>
                            <input type="text" name="username" placeholder="Борода" required>
                        </div>
                        <div class="information-record-form__phone">
                            <p>Телефон</p>
                            <input type="text" name="usernumber" placeholder="+7 123 456-78-90" required>
                        </div>
                        <button class="information-record-form__button btn">Отправить</button>
                    </form>
                </div>
            </section>

        </div>
    </main>
    <?php include 'include/footer.php' ?>
    <?php include 'include/popup.php' ?>


<!--    <script src="js/js.js"></script>-->
    <script src="js/map.js"></script>
    <script src="js/overall.js"></script>
    <script src="js/slider.js"></script>
</body>
</html>