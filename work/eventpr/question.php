<?
if((isset($_POST['name'])&&$_POST['name']!="")&&(isset($_POST['phone'])&&$_POST['phone']!="")&&(isset($_POST['session'])&&$_POST['session']!="")&&(isset($_POST['speaker'])&&$_POST['speaker']!="")&&(isset($_POST['question'])&&$_POST['question']!="")){ 
  
        $to = 'test@gmail.com'; 

        $subject = 'Вопрос с сайта EventPR'; 
        $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>Имя: '.$_POST['name'].'</p>
                        <p>Телефон: '.$_POST['phone'].'</p>  
                        <p>Сессия: '.$_POST['session'].'</p>  
                        <p>Спикер: '.$_POST['speaker'].'</p>                      
                        <p>Вопрос: '.$_POST['question'].'</p> 
                    </body>
                </html>'; 

        $headers  = "Content-type: text/html; charset=utf-8 \r\n"; 

        $headers .= "From: EventPR <from@example.com>\r\n";

        mail($to, $subject, $message, $headers); 
}
?>
