<?php
define('DB_HOST', 'localhost');
define('DB_USER', 'root');  //namauser database elearning anda
define('DB_PASS','');  //password database elearning anda
define('DB_NAME','db_elearning');  //nama  database elearning anda

$koneksi= new mysqli(DB_HOST,DB_USER, DB_PASS, DB_NAME);
if($koneksi==false){
	die("Gagal melakukan koneksi ke database.".$koneksi->connect_error());
}else{
	$koneksi->query("SET GLOBAL sql_mode=''");
}
?>