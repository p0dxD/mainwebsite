<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST'){
 include "./recaptchalib.php";
 // your secret key
$secret = "6Lcaqj4UAAAAAGNpHPXyLfKfXW2nO6LV7Kg_SYV8";
 
// empty response
$response = null;
 
// check secret key
$reCaptcha = new ReCaptcha($secret);

// if submitted check response
if ($_POST["g-recaptcha-response"]) {
    $response = $reCaptcha->verifyResponse(
        $_SERVER["REMOTE_ADDR"],
        $_POST["g-recaptcha-response"]
    );
}

//captcha was filled
  if ($response != null && $response->success) {

    // EDIT THE 2 LINES BELOW AS REQUIRED
    $email_to = "contact@joserod.me";
    $email_subject = "Contact Website";
 
 
 
    // validation expected data exists
    if(!isset($_POST['name']) ||
        !isset($_POST['email']) ||
        !isset($_POST['comments'])) {
		header('Location: ../error.php');      
    }
 
     
 
    $name = $_POST['name']; // required
    $email_from = $_POST['email']; // required
    $comments = $_POST['comments']; // required
 
    $error_message = "";
    $email_exp = '/^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/';
    $string_exp = "/^[A-Za-z .'-]+$/";
 
  if(!preg_match($string_exp,$name) || !preg_match($email_exp,$email_from) || strlen($comments) == 0) {
	header('Location: ../error.php');
  }
 
 
    $email_message = "Form details below.\n\n";
 
     
    function clean_string($string) {
      $bad = array("content-type","bcc:","to:","cc:","href");
      return str_replace($bad,"",$string);
    }
     
 
    $email_message .= "Name: ".clean_string($name)."\n";
    $email_message .= "Email: ".clean_string($email_from)."\n";
    $email_message .= "Comments: ".clean_string($comments)."\n";
 
// create email headers
$headers = 'From: '.$email_from."\r\n".
'Reply-To: '.$email_from."\r\n" .
'X-Mailer: PHP/' . phpversion();
@mail($email_to, $email_subject, $email_message, $headers);

//display good html of form submitted success
header('Location: ../success.php');
  } else {
  	//display error form
header('Location: ../error.php');
	// echo 'something went wrong, repeat form'; } 
  }
}
?>
 