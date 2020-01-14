<?
  if((isset($_POST['firstname'])&&$_POST['firstname']!="")&&(isset($_POST['phone'])&&$_POST['phone']!="")&&(isset($_POST['message'])&&$_POST['message']!="")) {
          $to = "olegkobzar2209@gmail.com";
          $subject = 'Заявка с сайта Деловой партнер (попап)';
          $message = '
                  <html>
                      <head>
                          <title>'.$subject.'</title>
                      </head>
                      <body>
                          <p>Имя: '.$_POST['firstname'].'</p>
                          <p>Телефон: '.$_POST['phone'].'</p>
                          <p>Сообщение: '.$_POST['message'].'</p>
                      </body>
                  </html>';
          $headers  = "Content-type: text/html; charset=utf-8 \r\n";
          $headers .= "From: Деловой партнер <from@example.com>\r\n";
          mail($to, $subject, $message, $headers); 
  }
?>