<meta http-equiv='refresh' content='3; url=https://jarkyn-ui.kz/'>
<meta charset="UTF-8" />
<?php

	if (isset($_POST['name']) && $_POST['name'] != "")//если существует атрибут NAME и он не пустой то создаем переменную для отправки сообщения
		$name = $_POST['name'];
	else die ("Не заполнено поле \"Имя\"");//если же атрибут пустой или не существует то завершаем выполнение скрипта и выдаем ошибку пользователю.

	if (isset($_POST['email']) && $_POST['email'] != "") //тут все точно так же как и в предыдушем случае
		$email = $_POST['email'];
	else die ("Не заполнено поле \"Email\"");


	
	if (isset($_POST['typeOfArea']) && $_POST['typeOfArea'] != "") 
	$areatype = $_POST['typeOfArea'];
else die ("Не заполнено поле \"Тип помещения\"");

	if (isset($_POST['range']) && $_POST['range'] != "") 
	$range = $_POST['range'];
else die ("Не заполнено поле \"Квадратура\"");


if (isset($_POST['tel']) && $_POST['tel'] != "") 
$tel = $_POST['tel'];
else die ("Не заполнено поле \"tel\"");




	if (isset($_POST['roomCount']) && $_POST['roomCount'] != "") 
	$roomCount = $_POST['roomCount'];
else die ("Не заполнено поле \"Кол-во Комнат\"");

	if (isset($_POST['selfdesign']) && $_POST['selfdesign'] != "") 
	$selfdesign = $_POST['selfdesign'];
else die ("Не заполнено поле \"Кол-во Комнат\"");

	if (isset($_POST['pricetophp']) && $_POST['pricetophp'] != "") 
	$pricetophp = $_POST['pricetophp'];
else die ("Не заполнено поле \"pricetophp\"");








	$address = "Jarkynui.astana@jarkyn-ui.kz";//адрес куда будет отсылаться сообщение для администратора
	$mes  = "Имя: $name \n";	//в этих строчках мы заполняем текст сообщения. С помощью опрератора .= мы просто дополняем текст в переменную
	$mes .= "E-mail: $email \n";
	$mes .= "tel: $tel \n";
	$mes .= "КВ\М: $range \n";
	$mes .= "Тип помещения: $areatype \n";
	$mes .= "Кол-во Комнат: $roomCount \n";
	$mes .= "Наличие дизайна: $selfdesign \n";
	$mes .= "Примерная стоимость: $pricetophp \n";

 	$mes .= "Текст: $body"; 
		
	$send = mail ($address,$sub,$mes,"Content-type:text/plain; charset = UTF-8\r\nFrom:$email");//собственно сам вызов функции отправки сообшения на сервере

	if ($send) //проверяем, отправилось ли сообщение
		echo "Сообщение отправлено успешно! Перейти на, если вас не перенаправило вручную.";
	else 
		echo "Ошибка, сообщение не отправлено! Возможно, проблемы на сервере";
		 
?>