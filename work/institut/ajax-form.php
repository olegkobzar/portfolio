<?
  if((isset($_POST['firstname'])&&$_POST['firstname']!="")&&(isset($_POST['phone'])&&$_POST['phone']!="")&&(isset($_POST['message'])&&$_POST['message']!="")&&(isset($_POST['email'])&&$_POST['email']!="")) {
          $to = "olegkobzar2209@gmail.com";
          $subject = 'Заявка с сайта Институт градостроительного проектирования';
          $message = '
                  <html>
                      <head>
                          <title>'.$subject.'</title>
                      </head>
                      <body>
                          <p>Имя: '.$_POST['firstname'].'</p>
                          <p>Телефон: '.$_POST['phone'].'</p>
                          <p>E-mail: '.$_POST['email'].'</p>
                          <p>Сообщение: '.$_POST['message'].'</p>
                      </body>
                  </html>';
          $headers  = "Content-type: text/html; charset=utf-8 \r\n";
          $headers .= "From: ИГП <from@example.com>\r\n";
          mail($to, $subject, $message, $headers); 
  }
?>