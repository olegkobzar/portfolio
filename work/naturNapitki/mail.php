<?php 

    if (!empty($_POST['name']) AND !empty($_POST['phone']) AND !empty($_POST['message'])) {
        
        $to = "olegkobzar2209@gmail.com";
        $subject = 'Заказ с сайта Натурнапитки';
        $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>Имя: '.$_POST['name'].'</p>
                        <p>Телефон: '.$_POST['phone'].'</p>
                        <p>Сообщение: '.$_POST['message'].'</p>
                    </body>
                </html>';

        $headers  = "Content-type: text/html; charset=utf-8 \r\n";
        $headers .= "From: Натурнапитки <from@example.com>\r\n";

        mail($to, $subject, $message, $headers); 
    }
    
?>