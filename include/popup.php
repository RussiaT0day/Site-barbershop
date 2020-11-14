<div id="popup-fixed-window"></div>
<div class="popup" id="popup">
    <a href="#popup-fixed-window" class="popup__area"></a>
    <div class="popup__body">
        <div class="popup__content">
            <a href="#popup-fixed-window" class="popup__close">X</a>
            <script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Ab1496f9078def3b071648f937cb9ece482ce0ff2094ea1df698e85a301e22e03&amp;width=800&amp;height=500&amp;lang=ru_RU&amp;scroll=true"></script>
        </div>
    </div>
</div>
<div class="popup" id="popup-f">
    <a href="#popup-fixed-window" class="popup__area"></a>
    <div class="popup__body">
        <div class="popup__content">
            <a href="#popup-fixed-window" class="popup__close">X</a>
            <form class="popup-form" action="/include/send-email.php" method="POST">
                <div class="popup-form-block">
                    <label>Имя <span>*</span></label>
                    <input type='text' name='username' placeholder="Игорь" required>
                    <label>Номер телефона (с кодом) <span>*</span></label>
                    <input type='tel' name='usernumber'  placeholder="+7 (968)100-20-20" required>
                    <label>Сообщение</label>
                    <textarea  name="question" id="" cols="30" rows="10" required></textarea>
                    <input class="popup-form-block__btn btn" type='submit' value='Послать заявку'>
                </div>

            </form>

        </div>
    </div>
</div>

