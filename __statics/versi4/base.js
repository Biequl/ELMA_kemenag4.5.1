
function suksesRedirect(param,title,text){
    let timerInterval;
    Swal.fire({
      type: 'success',
      title: title,
      showConfirmButton: false,
       html: text,

      timer: 1000,
      onBeforeOpen: () => {
        Swal.showLoading();
        timerInterval = setInterval(() => {
          Swal.getContent().querySelector('strong')
            .textContent = Swal.getTimerLeft()
        }, 100)
      },
      onClose: () => {
        clearInterval(timerInterval)
      }
    }).then((result) => {
      if (
        
        result.dismiss === Swal.DismissReason.timer
        
      ) {
     
      location.href = base_url+param;
      }
    })
}

function gagal(text,title){
    let timerInterval;
    Swal.fire({
      type: 'warning',
      title: title,
      showConfirmButton: true,
       html: text

    })
}


$(document).on('submit', 'form#loginmadrasah', function (event, messages) {
 event.preventDefault();
   var form   = $(this);
   var urlnya = $(this).attr("url");

       $("#loadingm").show();
           $.ajax({
                type: "POST",
                url: urlnya,
                data: form.serialize(),
                success: function (response, status, xhr) {
                    var ct = xhr.getResponseHeader("content-type") || "";
                    if (ct == "application/json") {
                    
                        gagal(response.message,"Proses Autentikasi Gagal");
            
                     
                        
                        
                    } else {
                      
                       
                       suksesRedirect(response,"Proses Autentikasi Berhasil","Dalam <strong></strong> detik<br>Anda akan dialihkan kedalam aplikasi");
                       
                        
                      
                    }
                    
                    $("#loadingm").hide();
                    
                }
            });
          
    return false;
});

$(document).ready(function(){
  

  });

function readURL(input) {
  if (input.files && input.files[0]) {
  var reader = new FileReader();
  
  reader.onload = function(e) {
    $('#blah').attr('src', e.target.result);
  }
  
  reader.readAsDataURL(input.files[0]);
  }
}

$("#imgInp").change(function() {
  readURL(this);
});

$(document).ready(function(){
    
	$("#mulaiintro").click();
    });
	
	function keterangan(param){
		let timerInterval;
		
		
		Swal.fire({
		title: "Keterangan :  ",
		html: param,
		imageUrl: "<?php echo base_url(); ?>__statics/img/notif.gif",
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
		imageUrl: "<?php echo base_url(); ?>__statics/img/emot2.gif",
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
		  