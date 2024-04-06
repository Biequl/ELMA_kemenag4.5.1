<?php
session_start();

function CheckAuthentication()
{
	if(isset($_SESSION["tmmadrasah_id"]) && isset($_SESSION["status"]) && $_SESSION["status"] !== 'siswa'){		
		return true;
	}else{
		return false;
	}
}
CheckAuthentication();


$foldernama  =  $_SESSION['tmguru_id'];		
if (!is_dir('__statics/gudangsoal/'.$foldernama)) {
		mkdir('./__statics/gudangsoal/'.$foldernama, 0777, TRUE);

}



$config["LicenseName"] = "";
$config["LicenseKey"] = "";
$base_url = (isset($_SERVER["HTTPS"]) && $_SERVER["HTTPS"] === "on" ? "https" : "http") . "://" . $_SERVER["HTTP_HOST"] . $_SERVER["REQUEST_URI"];
$base_url = explode("/__statics", $base_url);
$base_url = $base_url[0];

$baseUrl = $base_url . "/__statics/gudangsoal/".$foldernama."/";
$baseDir = $_SERVER['DOCUMENT_ROOT'].'/__statics/gudangsoal/'.$foldernama."/";


$config["Thumbnails"] = array("url" => $baseUrl . "_thumbs", "directory" => $baseDir . "_thumbs", "enabled" => true, "directAccess" => false, "maxWidth" => 150, "maxHeight" => 150, "bmpSupported" => false, "quality" => 100);
$config["Images"] = array("maxWidth" => 400, "maxHeight" => 300, "quality" => 100);
$config["RoleSessionVar"] = "CKFinder_UserRole";
$config["AccessControl"][] = array("role" => "*", "resourceType" => "*", "folder" => "/", "folderView" => true, "folderCreate" => true, "folderRename" => true, "folderDelete" => true, "fileView" => true, "fileUpload" => true, "fileRename" => true, "fileDelete" => true);
$config["DefaultResourceTypes"] = "";
$config["ResourceType"][] = array("name" => "Files", "url" => $baseUrl . "files", "directory" => $baseDir . "files", "maxSize" => 0, "allowedExtensions" => "7z,aiff,asf,avi,bmp,csv,doc,docx,fla,flv,gif,gz,gzip,jpeg,jpg,mid,mov,mp3,mp4,mpc,mpeg,mpg,ods,odt,pdf,png,ppt,pptx,pxd,qt,ram,rar,rm,rmi,rmvb,rtf,sdc,sitd,swf,sxc,sxw,tar,tgz,tif,tiff,txt,vsd,wav,wma,wmv,xls,xlsx,zip", "deniedExtensions" => "");
$config["ResourceType"][] = array("name" => "Images", "url" => $baseUrl . "images", "directory" => $baseDir . "images", "maxSize" => 0, "allowedExtensions" => "bmp,gif,jpeg,jpg,png", "deniedExtensions" => "");
$config["ResourceType"][] = array("name" => "Flash", "url" => $baseUrl . "flash", "directory" => $baseDir . "flash", "maxSize" => 0, "allowedExtensions" => "swf,flv", "deniedExtensions" => "");
$config["CheckDoubleExtension"] = true;
$config["DisallowUnsafeCharacters"] = false;
$config["FilesystemEncoding"] = "UTF-8";
$config["SecureImageUploads"] = true;
$config["CheckSizeAfterScaling"] = true;
$config["HtmlExtensions"] = array("html", "htm", "xml", "js");
$config["HideFolders"] = array(".*", "CVS");
$config["HideFiles"] = array(".*");
$config["ChmodFiles"] = 511;
$config["ChmodFolders"] = 493;
$config["ForceAscii"] = false;
$config["XSendfile"] = false;
include_once "plugins/imageresize/plugin.php";
include_once "plugins/fileeditor/plugin.php";
include_once "plugins/zip/plugin.php";
$config["plugin_imageresize"]["smallThumb"] = "90x90";
$config["plugin_imageresize"]["mediumThumb"] = "120x120";
$config["plugin_imageresize"]["largeThumb"] = "180x180";


?>