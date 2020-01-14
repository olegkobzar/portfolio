<?
  if((isset($_POST['name_inline'])&&$_POST['name_inline']!="")&&(isset($_POST['phone_inline'])&&$_POST['phone_inline']!="")&&(isset($_POST['message_inline'])&&$_POST['message_inline']!="")&&(isset($_POST['email_inline'])&&$_POST['email_inline']!="")) {
          $to = "olegkobzar2209@gmail.com";
          $subject = 'Заявка с сайта Деловой партнер';
          $message = '
                  <html>
                      <head>
                          <title>'.$subject.'</title>
                      </head>
                      <body>
                          <p>Имя: '.$_POST['name_inline'].'</p>
                          <p>Телефон: '.$_POST['phone_inline'].'</p>
                          <p>Телефон: '.$_POST['email_inline'].'</p>
                          <p>Сообщение: '.$_POST['message_inline'].'</p>                   
                      </body>
                  </html>';
          $headers  = "Content-type: text/html; charset=utf-8 \r\n";
          $headers .= "From: Деловой партнер <from@example.com>\r\n";
          mail($to, $subject, $message, $headers); 
  }
?>