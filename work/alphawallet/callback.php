<?
  if((isset($_POST['mail'])&&$_POST['mail']!="")) {
          $to = "olegkobzar2209@gmail.com";
          $subject = 'Заявка с сайта ALPHA WALLET';
          $message = '
                  <html>
                      <head>
                          <title>'.$subject.'</title>
                      </head>
                      <body>
                          <p>E-mail: '.$_POST['mail'].'</p>
                      </body>
                  </html>';
          $headers  = "Content-type: text/html; charset=utf-8 \r\n";
          $headers .= "From: ALPHA WALLET <from@example.com>\r\n";
          mail($to, $subject, $message, $headers); 
  }
?>