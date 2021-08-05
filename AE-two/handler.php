<?php
// if(isset($_POST['key'])){
//   $req = false;
//   $key = (int)$_POST['key'];
//   if($key > 0) $req = '<p> ready <strong>' . $key . '</strong></p>'; 
//   echo json_encode($req); 
//   exit; 
// }

if (isset($_POST["firstName"]) && isset($_POST["surname"]) ) { 

  $result = array(
    'firstName' => $_POST["firstName"],
    'surname' => $_POST["surname"]
  ); 

  echo json_encode($result); 
}