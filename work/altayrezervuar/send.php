<?

if ( (isset($_POST['id'])) ) {

	$to = 'dev@dnext.ru'; 

	if ($_POST['id'] == "consultate") {

		if( (isset($_POST['phone']) && $_POST['phone'] != "") ) { 
		  
				$subject = 'Телефонный номер клиента с сайта Алтай Резервуар';
				
				$message = '
						<html>
							<head>
								<title>'.$subject.'</title>
							</head>
							<body>
								<p>Номер телефона: '.$_POST['phone'].'</p>
							</body>
						</html>'; 
		}


	} else if ($_POST['id'] == "question") {

		if ( (isset($_POST['name']) && $_POST['name'] != "") && 
			(isset($_POST['email']) && $_POST['email'] != "") && 
			(isset($_POST['phone']) && $_POST['phone'] != "") && 
			(isset($_POST['message']) && $_POST['message']!="") ) { 
		  
				$subject = 'Вопрос с сайта Алтай Резервуар';
				
				$message = '
						<html>
							<head>
								<title>'.$subject.'</title>
							</head>
							<body>
								<p>ФИО: '.$_POST['name'].'</p>
								<p>Эл.почта: '.$_POST['email'].'</p>
								<p>Номер телефона: '.$_POST['phone'].'</p>
								<p>Вопрос: '.$_POST['message'].'</p>
							</body>
						</html>'; 
		}


	} else if ($_POST['id'] == "price") {

		if( (isset($_POST['select'])) &&
			(isset($_POST['name']) && $_POST['name'] != "") && 
			(isset($_POST['email']) && $_POST['email'] != "") && 
			(isset($_POST['phone']) && $_POST['phone'] != "") && 
			(isset($_POST['message']) && $_POST['message']!= "") &&
			(isset($_POST['message']) && $_POST['file']!= "") ) { 
		  
				$subject = 'Запрос на стоимость резервуара с сайта Алтай Резервуар';
				
				$message = '
						<html>
							<head>
								<title>'.$subject.'</title>
							</head>
							<body>
								<p>ФИО: '.$_POST['name'].'</p>
								<p>Эл.почта: '.$_POST['email'].'</p>
								<p>Номер телефона: '.$_POST['phone'].'</p>
								<p>Вопрос: '.$_POST['message'].'</p>
								<p>Выбранный резервуар: '.$_POST['select'].'</p>
								<p>Прикрепленный файл: '.$_POST['file'].'</p>
							</body>
						</html>'; 
		}


	} else if ($_POST['id'] == "vacancy") {

		if(	(isset($_POST['name']) && $_POST['name'] != "") && 
			(isset($_POST['email']) && $_POST['email'] != "") && 
			(isset($_POST['phone']) && $_POST['phone'] != "") && 
			(isset($_POST['message']) && $_POST['message'] != "") &&
			(isset($_POST['message']) && $_POST['file']!= "") ) { 
		  
				$subject = 'Резюме кандидата с сайта Алтай Резервуар';
				
				$message = '
						<html>
							<head>
								<title>'.$subject.'</title>
							</head>
							<body>
								<p>ФИО: '.$_POST['name'].'</p>
								<p>Эл.почта: '.$_POST['email'].'</p>
								<p>Номер телефона: '.$_POST['phone'].'</p>
								<p>Вопрос: '.$_POST['message'].'</p>
								<p>Резюме: '.$_POST['file'].'</p>
								(isset($_POST['message']) && $_POST['file']!= "")
							</body>
						</html>'; 
		}


	} else if ($_POST['id'] == "contact") {

		if(	(isset($_POST['name']) && $_POST['name'] != "") && 
			(isset($_POST['email']) && $_POST['email'] != "") && 
			(isset($_POST['message']) && $_POST['message'] != "") ) {
		  
				$subject = 'Вопрос со страницы контактов с сайта Алтай Резервуар';
				
				$message = '
						<html>
							<head>
								<title>'.$subject.'</title>
							</head>
							<body>
								<p>ФИО: '.$_POST['name'].'</p>
								<p>Эл.почта: '.$_POST['email'].'</p>
								<p>Вопрос: '.$_POST['message'].'</p>
							</body>
						</html>'; 
		}
	}

		$headers  = "Content-type: text/html; charset=utf-8 \r\n";

		$headers .= "From: Алтай Резервуар <from@example.com>\r\n";

		mail($to, $subject, $message, $headers);

}

?>
