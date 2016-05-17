<?php
if($_REQUEST['first_name'] == '' || $_REQUEST['subscribe_email'] == '' ||  $_REQUEST['team_list'] == ''):
  return "error";
endif;
  $subject = 'Inscription au tournoi - Edition 2016'; // Subject of your email

  // Receiver email address
  $to = 'lagrandeflaque@gmail.com';  //Change the email address by yours

  // prepare header
  $header = 'From: '. $_REQUEST['first_name'] . " " .$_REQUEST['last_name'] . ' <'. $_REQUEST['contact_email'] .'>'. "\r\n";
  $header .= 'Reply-To:  '. $_REQUEST['first_name'] . " " .$_REQUEST['last_name'] . ' <'. $_REQUEST['contact_email'] .'>'. "\r\n";
  $header .= 'Bcc:  ' . 'cedric.casimir@yahoo.fr' . "\r\n";
  $header .= 'X-Mailer: PHP/' . phpversion();

  $message = 'Message: ' . 
					'Date : ' . date("d/m/Y H:i") . "\n" . 
					'Nom : ' . $_REQUEST['last_name'] . "\n" . 
					'Prénom : ' . $_REQUEST['first_name'] . "\n" . 
					'Email: ' . $_REQUEST['subscribe_email'] . "\n" .
					'Nom de l\'équipe : ' . $_REQUEST['team_name'] . "\n" . 
					'Liste des joueurs : ' . '\n' . 
					$_REQUEST['team_list'];

  // Send contact information
  $mail = mail( $to, $subject , $message, $header );

  echo 'sent';


?>