<?
if((isset($_POST['name'])&&$_POST['name']!="")&&(isset($_POST['login'])&&$_POST['login']!="")&&(isset($_POST['question'])&&$_POST['question']!="")){
        $to = 'info@plaza.agency';
        $subject = 'Обратный звонок';
        $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>Имя: '.$_POST['name'].'</p>
                        <p>Telegram / Skype / Whats up: '.$_POST['login'].'</p>
                        <p>Ваш вопрос: '.$_POST['question'].'</p>
                    </body>
                </html>';
        $headers  = "Content-type: text/html; charset=utf-8 \r\n";
        $headers .= "From: Отправитель <from@example.com>\r\n";
        mail($to, $subject, $message, $headers);
}
?>