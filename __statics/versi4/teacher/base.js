$("#mulaiintro").click();
    function keterangan(param){
      let timerInterval;
      
      
      Swal.fire({
      title: "Keterangan :  ",
      html: param,
      imageUrl: base_url+"__statics/img/notif.gif",
      imageHeight: "150px",
      imageClass: "img-responsive",
      confirmButtonText:"Tutup",
    });

    }
 
 

function yuhu(param){
  let timerInterval;
  
  
  Swal.fire({
  title: "Yuhuu !! ",
  html: param,
  imageUrl: base_url+"__statics/img/emot2.gif",
  imageHeight: "150px",
  imageClass: "img-responsive",
  confirmButtonText:"Oke, Terimakasih :)",
});

 }
 
 
function gagal(param){
  let timerInterval;
  Swal.fire({
    type: 'warning',
    title: 'Mohon diperhatikan ! ',
    showConfirmButton: true,
     html: param

  });
 }
 
 function sukses2(param){
  let timerInterval;
  Swal.fire({
    type: 'success',
    title: 'Yuhuu ! ',
    showConfirmButton: true,
     html: param

  });
 }
 
 function sukses(param,dhtml){
  let timerInterval;
  Swal.fire({
    type: 'success',
    title: 'Berhasil ',
    showConfirmButton: false,
     html: dhtml,

    timer: 1000,
    onBeforeOpen: () => {
    Swal.showLoading();
  
    },
    onClose: () => {
    clearInterval(timerInterval);
    }
  }).then((result) => {
    if (
    /* Read more about handling dismissals below */
    result.dismiss === Swal.DismissReason.timer
    
    ) {
   
     location.href = base_url+param;
    }
  })
}


$(document).off("click",".menuajax").on("click",".menuajax",function (event, messages) {
      event.preventDefault();
       var url = $(this).attr("href");
       var title = $(this).attr("title");
      
         
       
        $(this).parent().addClass('active').siblings().removeClass('active');
      
          
       $("#konten").html('<div class="process-comm"><div class="spinner"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div>');
  
      $.post(url,{ajax:"yes"},function(data){
        
      
        history.replaceState(title, title, url);
        $('title').html(title);
      
        $("#konten").html(data);
       
       jQuery.unblockUI({ });
      })
    });
    
     $(document).on("click","#keluar",function(){
  
        
        
        alertify.confirm("Anda akan keluar dari aplikasi, apakah anda yakin?",function(){
          
             $.post(base_url+"teacher/kaluar",function(data){
               
               location.href= base_url;
               
             });
        });
        
        
        
      });

      $(document).off("click",".buatkelas").on("click",".buatkelas",function(){
				var title = $(this).attr("title");
				var url   = base_url+"teacherkelas/create";
				 //history.replaceState(title, title, url);
				 // $('title').html(title);
				  
				      $.post(url,function(data){
						  
						  $("#modalkelasbody").html(data);
						  
					  })
											   
	 });
	 
	
   
$(document).on('submit', 'form#save_kelas', function (event, messages) {
	 event.preventDefault();
       var form   = $(this);
       var urlnya = $(this).attr("url");
	   
	  
	   var formData = new FormData(this);
   
  
        $.ajax({
            type: "POST",
            url: urlnya,
            
			data: formData, // Data sent to server, a set of key/value pairs (i.e. form fields and values)
			contentType: false,       // The content type used when sending data to the server.
			cache: false,             // To unable request pages to be cached
			processData:false,    
			success: function (response, status, xhr) {
                var ct = xhr.getResponseHeader("content-type") || "";
                if (ct == "application/json") {
                    gagal(response.message);
                  
                } else {
					document.getElementById("save_kelas").reset();
					 $('#modalkelas').modal('toggle');
                      sukses(response,"Pembuatan Kelas Berhasil, Mohon Tunggu ..")
				
					
				   
                }
				
            }
        });

        return false;
    });	
    
    
    // Navbar 

     $(document).off("click",".komentarnotif").on("click",".komentarnotif",function(){
	  
	   
	   var datanya = $(this).attr("datanya");
	  
	   
	       var url = base_url+"teacher/viewpost/"+datanya;
			   var title = "Komentar Postingan ";
			  
			 
				   
				   
			   
			    $(this).parent().addClass('active').siblings().removeClass('active');
				
			  	  
			   $("#konten").html('<div class="process-comm"><div class="spinner"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div>');
		
			  $.post(url,{ajax:"yes"},function(data){
				  
				
				  history.replaceState(title, title, url);
				  $('title').html(title);
				
				  $("#konten").html(data);
				 
				 jQuery.unblockUI({ });
			  })
	  
	  
  });
  
    $(document).off("click",".kelasnotif").on("click",".kelasnotif",function(){
	  
	  var datanya = $(this).attr("datanya");
	  
	   
	       var url = base_url+"teacherkelas/me/"+datanya+"/showKelas/"+datanya;
			   var title = "Notifikasi Kelas ";
			  
			 
				   
				   
			   
			    $(this).parent().addClass('active').siblings().removeClass('active');
				
			  	  
			   $("#konten").html('<div class="process-comm"><div class="spinner"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div>');
		
			  $.post(url,{ajax:"yes"},function(data){
				  
				
				  history.replaceState(title, title, url);
				  $('title').html(title);
				
				  $("#konten").html(data);
				 
				 jQuery.unblockUI({ });
			  })
			  
			  
	  
	  
  });
  
  
  
  

    $(document).off("click","#hapusnotifikasi").on("click","#hapusnotifikasi",function(){
	  
	  alertify.confirm("Apakah Anda yakin akan menghapus seluruh notifikasi?",function(){
	  $.post(base_url+"teacher/hapusnotif",function(data){
		   
		   location.reload();
	  })
	  
	  })
	  
	  
  });
  
  
   $(document).off("click","#menunotification").on("click","#menunotification",function(){
	  $("#loadnotif").html("Mohon Tunggu...");
	 
	  $.post(base_url+"teacher/clearnotif",function(data){
		  $("#loadnotif").html(data);
		  $("#angkanotif").html("0");
		 // console.clear();
	  })
	  
	  
	  
	  
  });
  
  
  function cheknotif(){
	  
	  $.post(base_url+"teacher/cheknotif",function(data){
		  if(data >0){
			   
			    
			  
			   toastr.error("Ada "+data+" notifikasi baru untuk Anda, silahkan klik notifikasi", "Hallo  , "+nama+" ", {
							"timeOut": "0",
							"extendedTImeout": "0",
							"closeButton": true,
							  "debug": false,
							  "positionClass": "toast-top-right",
							  "onclick": null,
							  "showDuration": "1000",
							  "hideDuration": "1000",
							  "timeOut": "2000",
							  "extendedTimeOut": "1000",
							  "showEasing": "swing",
							  "hideEasing": "linear",
							  "showMethod": "fadeIn",
							  "hideMethod": "fadeOut"
						});
						
			  //clearInterval(refreshIntervalId);
						
			  notifyBrowser("E-learning Madrasah"," Hallo "+nama+" ,Ada "+data+" notifikasi baru untuk Anda dalam E-learning Madrasah ",base_url+"teacher/semuanotif");
			  
		  }
		  
		  
		  $("#angkanotif").html(data);
		//  console.clear(); 
		  
	  })
	  
	  
  }
 
 
   function notifyBrowser(title,desc,url)
		  {

		if (Notification.permission !== "granted")
		{
		   Notification.requestPermission();
		}
		else
		{
			var notification = new Notification(title, {
			icon: base_url+'__statics/img/logo.png',
			body: desc,
			});

		/* Remove the notification from Notification Center when clicked.*/
			notification.onclick = function () {
			window.open(url);
			};

		/* Callback function when the notification is closed. */
			notification.onclose = function () {
			console.log('Notification closed');
			};

			}
		}

    $(document).off("click",".introjs-donebutton").on("click",".introjs-donebutton",function(){
      yuhu("<h4><b> Terimakasih sudah menggunakan E-Learning kami, <br> selamat Belajar dan semoga bermanfaat </b></h4>");
      
  
    });

   
    
	
	$(document).off("click","#hapus_tingal_gambar").on("click","#hapus_tingal_gambar",function(){
				 $("#filekiriman").val("");
				 $("#div_tingal_gambar").hide();
											   
	 });
	 
	 $(document).off("click","#url_selesai").on("click","#url_selesai",function(){
				 var url = $("#url_kiriman").val();
				   if(url==""){
					   
					   alertify.alert("masukan URL terlebih dahulu"); return false;
				   }
				  
				 var konten =  $("#areakirim").val();
				 
				     $("#areakirim").val(konten+url);
				     $("#urlpost").val(url);
				     $('#modallinkforum').modal('toggle');
									   
	 });
											   
			
   
$(document).off('submit', 'form#kirimpost').on('submit', 'form#kirimpost', function (event, messages) {
	 event.preventDefault();
       var form   = $(this);
       var urlnya = $(this).attr("url");
	   var area   = $("#areakirim").val();
	   
	     if(area==""){
			 $("#areakirim").focus();
			 return false;
		 }
	   var formData = new FormData(this);
   document.getElementById("kirimpost").reset();
    $("#filekiriman").val("");
				 $("#div_tingal_gambar").hide();
				 
				 loading();
        $.ajax({
            type: "POST",
            url: urlnya,
            
			data: formData, // Data sent to server, a set of key/value pairs (i.e. form fields and values)
			contentType: false,       // The content type used when sending data to the server.
			cache: false,             // To unable request pages to be cached
			processData:false,    
			success: function (response, status, xhr) {
                var ct = xhr.getResponseHeader("content-type") || "";
                if (ct == "application/json") {
                    
                    toastr.error(response.message, "Gagal  , perhatikan !  ", {
							"timeOut": "0",
							"extendedTImeout": "0",
							"closeButton": true,
							  "debug": false,
							  "positionClass": "toast-top-right",
							  "onclick": null,
							  "showDuration": "10000",
							  "hideDuration": "10000",
							  "timeOut": "50000",
							  "extendedTimeOut": "10000",
							  "showEasing": "swing",
							  "hideEasing": "linear",
							  "showMethod": "fadeIn",
							  "hideMethod": "fadeOut"
						});
						jQuery.unblockUI({ });
                } else {
					
                  toastr.success("Kiriman berhasil dipublish", "Sukses !", {
							"timeOut": "0",
							"extendedTImeout": "0",
							"closeButton": true,
							  "debug": false,
							  "positionClass": "toast-top-right",
							  "onclick": null,
							  "showDuration": "10000",
							  "hideDuration": "10000",
							  "timeOut": "50000",
							  "extendedTimeOut": "10000",
							  "showEasing": "swing",
							  "hideEasing": "linear",
							  "showMethod": "fadeIn",
							  "hideMethod": "fadeOut"
						});
				
					
				   
				    $("#post_terbaru").html(response);
				   jQuery.unblockUI({ });
                }
				
            }
        });
		
		

        return false;
    });	
    
    
    // default_mid

    $(document).off("click",".suka").on("click",".suka",function(){
      var trpost_id = $(this).attr("trpost_id");
      var jumlahlike = parseInt(parseInt($(this).attr("jumlahlike"))+1);
      var suka   = $("#suka"+trpost_id).html().trim();
        if(suka=='<i class="fa fa-thumbs-up"></i> Suka'){
        
         var ketsuka  ='<i class="fa fa-thumbs-down"></i> Batal Suka';
      }else{
        
        var jumlahlike = parseInt(jumlahlike-2);
        var ketsuka  ='<i class="fa fa-thumbs-up"></i> Suka';
        if(jumlahlike < 0){
          jumlahlike =0;
        }
      }
      $(this).attr("jumlahlike",jumlahlike);
      $("#likepost_id"+trpost_id).text(jumlahlike);
      $("#suka"+trpost_id).html(ketsuka);
      
        $.post(base_url+"teacher/sukapost",{trpost_id:trpost_id,token:"X56JSD98D8JASHAB887722SDSD"},function(){
        
        
        
      })
      
      
    });
    
    
     $(document).off("click",".komentar").on("click",".komentar",function(){
      var trpost_id = $(this).attr("trpost_id");
      var user      = $("#textkomentar"+trpost_id).attr("user");
      var statuskomentar      = $("#textkomentar"+trpost_id).attr("statuskomentar");
      var komentar  = $("#textkomentar"+trpost_id).val();
         
     
      if(komentar !=""){
        loading();
        $.post(base_url+"teacher/komentar",{trpost_id:trpost_id,komentar:komentar,token:"X56JSD98D8JASHAB887722SDSD",user:user,statuskomentar:statuskomentar},function(data){
        jQuery.unblockUI({ });
         $("#komentpost"+trpost_id).html(data);
         $("#seckomentar"+trpost_id).html('<a href="javascript:void(0)"  trpost_id="'+trpost_id+'"  class="plus-ic semuakomentar"><i class="fa fa-plus"></i> Tampilkan Semua Komentar</a>');
        $("#textkomentar"+trpost_id).val("");
      }) 
      }
      
      
    });
  
  $(document).off("click",".hapuskomentar").on("click",".hapuskomentar",function(){
      var trpost_id = $(this).attr("trpost_id");
      var token1    = $(this).attr("token");
     alertify.confirm("Apakah Anda yakin menghapus komentar ini ? ",function(){
       loading();
        $.post(base_url+"teacher/komentarhapus",{trpost_id:trpost_id,token1:token1,token:"X56JSD98D8JASHAB887722SDSD"},function(data){
        jQuery.unblockUI({ });
         $("#komentarlist"+token1+trpost_id).html("");
         sukses2("Komentar Berhasil dihapus");
        
      }) 
     })
      
      
    });
    
      $(document).off("click",".balaskomentarkami").on("click",".balaskomentarkami",function(){
      var trpost_id = $(this).attr("trpost_id");
      var user      = $(this).attr("user");
      var statuskomentar      = $(this).attr("statuskomentar");
    
      var namakomentar    = $(this).attr("namakomentar");
      $("#textkomentar"+trpost_id).attr("user",user);
      $("#textkomentar"+trpost_id).attr("statuskomentar",statuskomentar);
    
          $("#textkomentar"+trpost_id).focus();
          $("#textkomentar"+trpost_id).val(namakomentar+" : ");
      
    });
    
    
    
    
    
    
    $(document).off("click",".semuakomentar").on("click",".semuakomentar",function(){
      var trpost_id = $(this).attr("trpost_id");
       $("#komentpost"+trpost_id).html('<div class="process-comm"><div class="spinner"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div></div> ');
        $("#seckomentar"+trpost_id).html('');	
      
        $.post(base_url+"teacher/allkomentarshow",{trpost_id:trpost_id,token:"X56JSD98D8JASHAB887722SDSD"},function(data){
        
         $("#komentpost"+trpost_id).html(data);
         
        
      }) 
    
      
      
    });
    
     $(document).off("click",".muatlebihbanyak").on("click",".muatlebihbanyak",function(){
       
      var jml   = parseInt($(this).attr("jml"));
      var jumlah = parseInt(jml+3);
       $("#loaderkiriman").html('<div class="process-comm"><div class="spinner"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div></div> ');
        
      
        $.post(base_url+"teacher/muatlebihbanyak",{jml:jml,jumlah:jumlah,token:"X56JSD98D8JASHAB887722SDSD"},function(data){
         $("#loaderkiriman").hide();
         $(".muatlebihbanyak").attr("jml",jumlah);
        
         if(data.trim()=="dendi"){
          $("#loadkirimanbanyak").html('<div class="tags-sec full-width">	 <center>Tidak ada kiriman terbaru</center></div>');
          
         }else{
         $("#defaultkiriman").append(data);
         
         
         }
         
         
        
      }) 
    
      
      
    });
    
    $(document).off("click",".edit_kiriman").on("click",".edit_kiriman",function(){
     var trpost_id = $(this).attr("trpost_id");
      loading();
        $.post(base_url+"teacher/edit_kiriman",{trpost_id:trpost_id,token:"X56JSD98D8JASHAB887722SDSD"},function(data){
        jQuery.unblockUI({ });
        $("#modalkirimanbody").html(data);
      }) 
    
      
      
    });
    
        
    $(document).on('submit', 'form#saveeditkiriman', function (event, messages) {
    event.preventDefault();
    var form   = $(this);
    var urlnya = $(this).attr("url");
    var trpost_id = $(this).attr("trpost_id");


    var formData = new FormData(this);


    $.ajax({
    type: "POST",
    url: urlnya,

    data: formData, // Data sent to server, a set of key/value pairs (i.e. form fields and values)
    contentType: false,       // The content type used when sending data to the server.
    cache: false,             // To unable request pages to be cached
    processData:false,    
    success: function (response, status, xhr) {
    var ct = xhr.getResponseHeader("content-type") || "";
    if (ct == "application/json") {
        gagal(response.message);
      
    } else {
    document.getElementById("saveeditkiriman").reset();
    $("#job_descp"+trpost_id).html(response+"<br>");
    $('#modalkiriman').modal('toggle');
          sukses2("Perubahan berhasil dilakukan");



    }

    }
    });

    return false;
    });		


     $(document).off("click",".hapus_kiriman").on("click",".hapus_kiriman",function(){
     var trpost_id = $(this).attr("trpost_id");
      alertify.confirm("Apakah Anda yakin akan menghapus kiriman ini ?",function(){
        $.post(base_url+"teacher/hapus_kiriman",{trpost_id:trpost_id,token:"X56JSD98D8JASHAB887722SDSD"},function(data){
        
        location.href= base_url+"teacher";
      }) 
    
      })
      
    })

    // Jenis Kelas 

    $(document).off("change",".jeniskelas").on("change",".jeniskelas",function(){
      
       var nilai = $(this).val();
          if(nilai ==0){

            $(".kelasmapel").show();
            $("#kelasuntuk").attr("required","required");
            $("#rombeluntuk").attr("required","required");
          }else{

            $(".kelasmapel").hide();
            $("#kelasuntuk").removeAttr("required","required");
            $("#rombeluntuk").removeAttr("required","required");
          }
       
       
     });


    // Ruang Kelas 

  
                      
   

$(document).off('submit', 'form#kirimpostkelas').on('submit', 'form#kirimpostkelas', function (event, messages) {
event.preventDefault();
    var form   = $(this);
    var urlnya = $(this).attr("url");
  var area   = $("#areakirim").val();
  
    if(area==""){
    $("#areakirim").focus();
    return false;
  }
  var formData = new FormData(this);
document.getElementById("kirimpostkelas").reset();
 $("#filekiriman").val("");
      $("#div_tingal_gambar").hide();
      
      loading();
     $.ajax({
         type: "POST",
         url: urlnya,
         
   data: formData, // Data sent to server, a set of key/value pairs (i.e. form fields and values)
   contentType: false,       // The content type used when sending data to the server.
   cache: false,             // To unable request pages to be cached
   processData:false,    
   success: function (response, status, xhr) {
             var ct = xhr.getResponseHeader("content-type") || "";
             if (ct == "application/json") {
                 
                 toastr.error(response.message, "Gagal  , perhatikan !  ", {
           "timeOut": "0",
           "extendedTImeout": "0",
           "closeButton": true,
             "debug": false,
             "positionClass": "toast-top-right",
             "onclick": null,
             "showDuration": "10000",
             "hideDuration": "10000",
             "timeOut": "50000",
             "extendedTimeOut": "10000",
             "showEasing": "swing",
             "hideEasing": "linear",
             "showMethod": "fadeIn",
             "hideMethod": "fadeOut"
         });
         jQuery.unblockUI({ });
             } else {
       
               toastr.success("Kiriman berhasil dikirim ke Kelas, seluruh Siswa yang tergabung dikelas Anda akan menerima notifikasi", "Sukses !", {
           "timeOut": "0",
           "extendedTImeout": "0",
           "closeButton": true,
             "debug": false,
             "positionClass": "toast-top-right",
             "onclick": null,
             "showDuration": "10000",
             "hideDuration": "10000",
             "timeOut": "50000",
             "extendedTimeOut": "10000",
             "showEasing": "swing",
             "hideEasing": "linear",
             "showMethod": "fadeIn",
             "hideMethod": "fadeOut"
         });
     jQuery.unblockUI({ });
       
        
         $("#post_terbarukelas").html(response);
        
             }
     
         }
     });

     return false;
 });	



          $(document).off("click",".introjs-donebutton").on("click",".introjs-donebutton",function(){
            yuhu("<h4><b> Sekian Panduan Didalam kelas  <br> Selamat Menggunakan E-Learning kami dalam kelas ini dan semoga bermanfaat </b></h4>");
            

          });

          $(document).off("click",".undangsiswa").on("click",".undangsiswa",function(){
            var trkelas_id = $(this).attr("trkelas_id");
              
              $.post(base_url+"teacherkelas/undang_siswa",{trkelas_id:trkelas_id},function(data){
                
                
                $("#load_undang_siswa").html(data);
                
              })
            

          });

          $(document).off("click",".closemodal").on("click",".closemodal",function(){
            $('#undangkelasmodal').modal('toggle');

          });


          $(document).off("click",".copy_kelas").on("click",".copy_kelas",function(){
            var trkelas_id = $(this).attr("trkelas_id");
            var title = $(this).attr("title");
            var url   = base_url+"teacherkelas/copy_kelas";
            //history.replaceState(title, title, url);
            // $('title').html(title);
              
                  $.post(url,{trkelas_id:trkelas_id},function(data){
                  
                  $("#modalcopybody").html(data);
                  
                })
                            
          });



          $(document).on('submit', 'form#save_copy_kelas', function (event, messages) {
          event.preventDefault();
          var form   = $(this);
          var urlnya = $(this).attr("url");


          var formData = new FormData(this);
          alertify.confirm("Mohon periksa kembali, jangan sampai salah melakukan copy kelas, apakah Anda yakin ?",function(){

          $("#aksicopy").html('<center><i class="fas fa-spinner fa-pulse"></i> Sedang melakukan copy kelas, mungkin memerlukan waktu beberapa menit, mohon tunggu sambil ngopi</center>');
            $.ajax({
                type: "POST",
                url: urlnya,
                
          data: formData, // Data sent to server, a set of key/value pairs (i.e. form fields and values)
          contentType: false,       // The content type used when sending data to the server.
          cache: false,             // To unable request pages to be cached
          processData:false,    
          success: function (response, status, xhr) {
                    var ct = xhr.getResponseHeader("content-type") || "";
                    if (ct == "application/json") {
                        gagal(response.message);
                      
                    } else {
              document.getElementById("save_copy_kelas").reset();
              $('#migrasikelas').modal('toggle');
                          sukses(response,"Proses Copy Kelas Berhasil, Anda akan dialihkan ke kelas yang dicopy, Mohon Tunggu ..");
            
              
              
                    }
            
                }
            });
          });

            return false;
          });		
              

          $(document).off("click","#clearaktifitas").on("click","#clearaktifitas",function(){

          alertify.confirm("Anda akan menghapus semua history dalam kelas,apakah Anda yakin ?",function(){

          var trkelas_id =  $(this).attr("trkelas_id");

          $.post(base_url+"teacherkelas/clearaktifitas",{trkelas_id:trkelas_id},function(){
            
            
            alertify.success("berhasil dibersihkan");
            location.reload(); 
            
            
          })


          })


          });


    
		