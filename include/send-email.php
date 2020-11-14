<?php
echo "<link rel='stylesheet' href='../css/style-out.css'>";
echo "<meta charset=\"UTF-8\">";

$name = $_POST['username'];
$phone = $_POST['usernumber'];
$text = $_POST['question'];
$usersdate = $_POST['userdate'];
$userstime = $_POST['usertime'];




$adminemail="novvadim1@yandex.ru";  // e-mail админа
$date=date("d.m.y"); // число.месяц.год
$time=date("H:i"); // часы:минуты:секунды
//$backurl="https://touchtex.000webhostapp.com/";  // На какую страничку переходит после отправки письма
$backurl="http://barbershop-site/";  // На какую страничку переходит после отправки письма




if (!preg_match("/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/", strtolower($phone))) {
    print "<script language='Javascript'><!-- 
                function reload() {location = \"$backurl\"}; setTimeout('reload()', 3000); 
                //--></script> 
                <div class='reaction'>
                            <img src='../img/no.png' alt='Провал!'>
                            <p>Повторите отправку! Неверный формат телефона !</p>
                            </div>";
}
else
{

    $msg = " 
            Имя:$name
            Телефон:$phone
            
                Запись:
                    Дата:$usersdate
                    Вермя:$userstime
---------------------------------------------------------------            
                Обратная форма 
                    Сообщение:$text
            ";

    mail($adminemail,

        "Новое сообщение с сайта (от : $phone)", "Свяжитесь со мной по СМС: $msg");
    print "<script language='Javascript'><!-- 
                function reload() {location = \"$backurl\"}; setTimeout('reload()', 2000); 
                //--></script> 
            
                <div class='reaction'>
                    <img src='../img/ok.png' alt='Отправлено!'>
                    <p>Сообщение отправлено ! </p>
                
                </div>
                ";
    exit;

}

