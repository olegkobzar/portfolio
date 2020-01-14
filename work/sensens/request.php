<?
if((isset($_POST['name'])&&$_POST['name']!="")&&(isset($_POST['email'])&&$_POST['email']!="")&&(isset($_POST['phone'])&&$_POST['phone']!="")){ 
  
        $to = 'zhmayb@gmail.com'; 

        $subject = 'Форма с сайта SenSense'; 
        $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>Имя: '.$_POST['name'].'</p>
                        <p>E-mail: '.$_POST['email'].'</p>
                        <p>Телефон: '.$_POST['phone'].'</p>
                    </body>
                </html>'; 

        $headers  = "Content-type: text/html; charset=utf-8 \r\n"; 

        $headers .= "From: SenSense <from@example.com>\r\n";

        mail($to, $subject, $message, $headers); 
}
?>
