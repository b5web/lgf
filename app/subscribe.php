<?php
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');
header('Cache-Control: no-store, no-cache, must-revalidate');
header('Cache-Control: post-check=0, pre-check=0', false);

if($_REQUEST['first_name'] == '' || $_REQUEST['subscribe_email'] == '' ||  $_REQUEST['team_list'] == ''):
  return "error";
endif;

  $subject = 'Inscription au tournoi de la Grande Flaque - Edition ' . date('Y'); // Subject of your email

  // Receiver email address
  $to = 'lagrandeflaque@gmail.com,cedric.casimir@yahoo.fr';  //Change the email address by yours

  // prepare header
  $header="From : LGF <lagrandeflaque@free.fr>\r\n";

  $message =    'Message: ' . 
                'Date : ' . date("d/m/Y H:i") . "\n" . 
                'Nom : ' . $_REQUEST['last_name'] . "\n" . 
                'Prénom : ' . $_REQUEST['first_name'] . "\n" . 
                'Email: ' . $_REQUEST['subscribe_email'] . "\n" .
                'Nom de l\'équipe : ' . $_REQUEST['team_name'] . "\n" . 
                'Liste des joueurs : ' . "\n" . 
                $_REQUEST['team_list'];

$fp = fopen('subscription/request-mail-' . date("Y-m-d_H:i:s") . '.txt', 'a+');
fwrite($fp, $message);
fclose($fp);

  // Send contact information
if($mail = mail($to, $subject, $message, $header)) {
    echo "sent to lagrandeflaque@gmail.com";
}
else echo "error";

?>