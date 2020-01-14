<?
if((isset($_POST['name'])&&$_POST['name']!="")&&(isset($_POST['email'])&&$_POST['email']!="")&&(isset($_POST['phone'])&&$_POST['phone']!="")&&(isset($_POST['position'])&&$_POST['position']!="")&&(isset($_POST['company'])&&$_POST['company']!="")){ 
  
        $to = 'test@gmail.com'; 

        $subject = 'Форма с сайта EventPR'; 
        $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>Имя: '.$_POST['name'].'</p>
                        <p>Эл. почта: '.$_POST['email'].'</p>  
                        <p>Телефон: '.$_POST['phone'].'</p> 
                        <p>Должность: '.$_POST['position'].'</p>  
                        <p>Компания: '.$_POST['company'].'</p>                      

                    </body>
                </html>'; 

        $headers  = "Content-type: text/html; charset=utf-8 \r\n"; 

        $headers .= "From: EventPR <from@example.com>\r\n";

        mail($to, $subject, $message, $headers); 
}
?>
