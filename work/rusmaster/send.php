<?
  if((isset($_POST['total'])&&$_POST['apartment-area']&&$_POST['type-repair'])) {
          $to = "a.loshkarev89@gmail.com";
          $subject = 'Заявка с сайта rusmaster';
          $message = '
                  <html>
                      <head>
                          <title>'.$subject.'</title>
                      </head>
                      <body>
                          <p>Площадь квартиры, м: '.$_POST['apartment-area'].'</p>
                          <p>Площадь квартиры, м: '.$_POST['type-repair'].'</p>
                          <p>Total: '.$_POST['total'].'</p>
                      </body>
                  </html>';
          $headers  = "Content-type: text/html; charset=utf-8 \r\n";
          $headers .= "From: ALPHA WALLET <from@example.com>\r\n";
          mail($to, $subject, $message, $headers);
  }
?>
