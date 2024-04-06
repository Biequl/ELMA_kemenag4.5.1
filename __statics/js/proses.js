 $(document).off("click",".addmodal").on("click",".addmodal",function(){
		 
		 var target = $(this).attr("target");
		
		 var url    = $(this).attr("url");
		 $(target).html('<center><br> Mohon Tunggu ...</center>');
		  $.post(url,function(data){
			 
			  $(target).html(data);
			  
			  
		  })
})

 $(document).off("click",".ubahmodal").on("click",".ubahmodal",function(){
		 
		 var target = $(this).attr("target");
		 var url    = $(this).attr("urlnya");
		 var id    = $(this).attr("datanya");
		$(target).html('<center><br> Mohon Tunggu ...</center>'); 
		$.post(url,{id:id},function(data){
			  
			  $(target).html(data);
			  
			  
		  })
})
   
$(document).on('submit', 'form#simpangambarmodal', function (event, messages) {
	 event.preventDefault()
       var form   = $(this);
       var urlnya = $(this).attr("url");
	
	   var formData = new FormData(this);
   
	  $("#aksimodal").hide();
	  $("#loadingmodal").show();
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
							  "showDuration": "1000",
							  "hideDuration": "1000",
							  "timeOut": "2000",
							  "extendedTimeOut": "1000",
							  "showEasing": "swing",
							  "hideEasing": "linear",
							  "showMethod": "fadeIn",
							  "hideMethod": "fadeOut"
						});
						
						
						 
                } else {
					
                  toastr.success("Data Berhasil disimpan", "Sukses !", {
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
				   $('#defaultModal').modal('toggle');
				   dataTable.ajax.reload(null,false);
					
				        
				    
				   
                }
				 $("#aksimodal").show();
	                     $("#loadingmodal").hide();
				
            }
        });

        return false;
    });		
	  
	  
$(document).on('submit', 'form#simpangambar', function (event, messages) {
	 event.preventDefault()
       var form   = $(this);
       var urlnya = $(this).attr("url");
	
	   var formData = new FormData(this);
   
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
							  "showDuration": "2000",
							  "hideDuration": "2000",
							  "timeOut": "2000",
							  "extendedTimeOut": "2000",
							  "showEasing": "swing",
							  "hideEasing": "linear",
							  "showMethod": "fadeIn",
							  "hideMethod": "fadeOut"
						});
                } else {
					
                  toastr.success("Data Berhasil disimpan", "Sukses !", {
							"timeOut": "0",
							"extendedTImeout": "0",
							"closeButton": true,
							  "debug": false,
							  "positionClass": "toast-top-right",
							  "onclick": null,
							  "showDuration": "2000",
							  "hideDuration": "2000",
							  "timeOut": "2000",
							  "extendedTimeOut": "2000",
							  "showEasing": "swing",
							  "hideEasing": "linear",
							  "showMethod": "fadeIn",
							  "hideMethod": "fadeOut"
						});
				   $("#showform").html("");
				   dataTable.ajax.reload(null,false);
					
				   
				    
				   
                }
				
				jQuery.unblockUI({ });
            }
        });

        return false;
    });		
		
		  
$(document).on('submit', 'form#simpangambarnorespon', function (event, messages) {
	 event.preventDefault()
       var form   = $(this);
       var urlnya = $(this).attr("url");
	
	   var formData = new FormData(this);
   
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
							  "showDuration": "2000",
							  "hideDuration": "2000",
							  "timeOut": "2000",
							  "extendedTimeOut": "2000",
							  "showEasing": "swing",
							  "hideEasing": "linear",
							  "showMethod": "fadeIn",
							  "hideMethod": "fadeOut"
						});
                } else {
					
                  toastr.success("Data Berhasil disimpan", "Sukses !", {
							"timeOut": "0",
							"extendedTImeout": "0",
							"closeButton": true,
							  "debug": false,
							  "positionClass": "toast-top-right",
							  "onclick": null,
							  "showDuration": "2000",
							  "hideDuration": "2000",
							  "timeOut": "2000",
							  "extendedTimeOut": "2000",
							  "showEasing": "swing",
							  "hideEasing": "linear",
							  "showMethod": "fadeIn",
							  "hideMethod": "fadeOut"
						});
				  
				   
				    
				   
                }
				document.getElementById("simpangambarnorespon").reset();
				jQuery.unblockUI({ });
            }
        });

        return false;
    });	
	
 $(document).on("click","#tambahdata",function(event){
	 event.preventDefault()
	    loading();
	 var urlnya = $(this).attr("urlnya");
	 $.post(urlnya,function(data){
		 
		 $("#showform").html(data).show();
	
		 	jQuery.unblockUI({ });
	 })
	 
 })
 
 $(document).on("click",".ubah",function(event){
	 event.preventDefault()
	 var urlnya = $(this).attr("urlnya");
	 var id = $(this).attr("datanya");
	 

	 loading();
	 $.post(urlnya,{id:id},function(data){
		 
		 $("#showform").html(data).show();
		
			jQuery.unblockUI({ });
	 })
	 
 })
 
 
 
 $(document).on("change",".onchange",function(event){
	 event.preventDefault()
	 var url    = $(this).attr("urlnya");
	 var target = $(this).attr("target");
	 
  if(url !="" && $(this).val() !=""){
	 loading();
	
	 $.post(url,{id:$(this).val()},function(data){
		 
		 $("."+target).html(data).show();
	
		 
		   
			jQuery.unblockUI({ });
			
			
	 })
  }
  
  
 })
  
 $(document).on("click","#cancel",function(){
	 
	
		 
		 $("#showform").html("");
		 
	
	 
 })
 
  $(document).on("click","#cancell",function(){
	 
	
		 var url = $(this).attr("urlnya");
		 
		 location.href=url;
		 $("#showform").hide();
		 
	
	 
 })
 
 
	
	 $(document).on('submit', 'form#simpan', function (event, messages) {
	 event.preventDefault()
       var form   = $(this);
       var urlnya = $(this).attr("url");
	  loading();
        $.ajax({
            type: "POST",
            url: urlnya,
            data: form.serialize(),
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
					
                } else {
                    
					toastr.success("Data Berhasil disimpan", "Sukses !", {
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
				    $("#showform").html("");
					
				    dataTable.ajax.reload(null,false);
                 
				  
				   
                }
				
				jQuery.unblockUI({ });
            }
        });

        return false;
    });
	
	
	$(document).on('submit', 'form#simpantanparespon', function (event, messages) {
	 event.preventDefault()
       var form   = $(this);
       var urlnya = $(this).attr("url");
	  loading();
        $.ajax({
            type: "POST",
            url: urlnya,
            data: form.serialize(),
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
					
                } else {
                    
					toastr.success("Data Berhasil disimpan", "Sukses !", {
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
				    
                 
				  
				   
                }
				
				jQuery.unblockUI({ });
            }
        });

        return false;
    });
	
	
	
	 $(document).off('submit', 'form#simpannorespon').on('submit', 'form#simpannorespon', function (event, messages) {
	
       var form   = $(this);
       var urlnya = $(this).attr("url");
	  loading();
        $.ajax({
            type: "POST",
            url: urlnya,
            data: form.serialize(),
			success: function (response, status, xhr) {
                var ct = xhr.getResponseHeader("content-type") || "";
                if (ct == "application/json") {
                    
                    
                
										toastr.error(response.message, "Gagal  , perhatikan !  ", {
										"timeOut": "0",
										"extendedTImeout": "0",
										"closeButton": true,
										  "debug": false,
										  "positionClass": "toast-bottom-right",
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
		
                } else {
                    		toastr.success("Data berhasil disimpan ", "Status  ", {
										"timeOut": "0",
										"extendedTImeout": "0",
										"closeButton": true,
										  "debug": false,
										  "positionClass": "toast-bottom-right",
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
				  
				   
                }
				
				jQuery.unblockUI({ });
            }
        });

        return false;
    });
	
	

	
	
 $(document).on("click",".hapus",function(){
	 var id     = $(this).attr("datanya");
	 var urlnya = $(this).attr("urlnya");
	
	alertify.confirm("Apakah anda yakin akan menghapus data ini ?",function(){
		 loading();
	 $.post(urlnya,{id:id},function(data){
		  	toastr.success("Data Berhasil dihapus", "Sukses !", {
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
		 dataTable.ajax.reload(null,false);
		 
			jQuery.unblockUI({ });
	 })
	 })
	
	 
 })

 
  $(document).on("click",".hapusgambar",function(){
	 var id     = $(this).attr("datanya");
	 var urlnya = $(this).attr("urlnya");
	 var gambar = $(this).attr("gambar");
	
	alertify.confirm("Apakah anda yakin akan menghapus data ini ?",function(){
		loading();
	 $.post(urlnya,{id:id,gambar:gambar},function(data){
		 
		  dataTable.ajax.reload(null,false);
		  jQuery.unblockUI({ });
	  })
	 })
	
	 
 })
 
 $(document).on("click","#checkAll",function () {    
     var urlnya = $(this).attr("urlnya");
     $('input:checkbox').prop('checked', this.checked);
   	 var jenjang = $("#jenjang").val();
     if(jenjang==""){ alertify.alert("Anda Belum Memilih Jenjang yang akan di verifikasi"); return false; }
	 if($(this).is(':checked')){
      alertify.confirm("Apakah anda yakin akan verifikasi semua  data siswa?",function(){
		  
		   loading();
      $.post(urlnya,{jenjang:jenjang},function(){
		  
		alertify.success("Seluruh Siswa Berhasil Di Verifikasi");
		  jQuery.unblockUI({ });
	  })
	  })
     
      }
	 

	 
 });
 
 
  
 $(document).on("click","#checkAllpenggajian",function () {    
      
	   var valnya =  $(this).text();
	     if(valnya=="uncheck all"){
			 
			 $('input:checkbox').attr('checked',false);
             $(this).text('Pilih Semua');
			 
		 }else{
			$('input:checkbox').attr('checked',true);
            $(this).text('uncheck all'); 
			 
		 }
	 
        
          
   

	 
 });
 
 

	 $(document).on("click","#appenddata",function(){
		var jumlah 			= parseInt($("#jumlah").val()) +1;
		var tagihanchange   = $("#tagihanchange").val();
		var nama       		= $("#tagihanchange option:selected").text();
		var jumlahchangeasli= $("#jumlahchange").val();
		var jumlahchange    = $("#jumlahchange").val();
		var potongan_change = $("#potongan_change").val();
		var s_potongan 		= "";
		  if(potongan_change==1){
			  
			 var potongan  = $("#potongan").val();
			  
			  potonganbagi = (potongan * jumlahchange ) / 100;
			  jumlahchange =jumlahchange - potonganbagi;
			  
			  s_potongan   = "%"; 
			  
		  }else if(potongan_change==2){
			    var potongan 		= $("#potongan").val();
				
					
			   s_potongan   = "Rupiah"; 
				
			   jumlahchange =jumlahchange - potongan;
			  
		  }
		
		
		
		if(tagihanchange==""){
			
			alertify.alert("Anda Harus Memilih Tagihan");
			return false;
		}
		var html = "<tr id='row"+jumlah+"'>";
			html +="<td>"+jumlah+"</td>";
			html +="<td><input type='hidden' name='tmkeuangan_id"+jumlah+"' value='"+tagihanchange+"'>"+nama+"</td>";
			html +="<td><input type='hidden' readonly name='tagihanasli"+jumlah+"' id='tagihanasli"+jumlah+"' class='form-control' value='"+jumlahchange+"'>"+jumlahchangeasli+"</td>";
			html +="<td><input type='hidden' readonly name='potongan"+jumlah+"' id='potongan"+jumlah+"' class='form-control' value='"+potongan+"'><input type='hidden'  name='tipe_potongan"+jumlah+"' id='tipe_potongan"+jumlah+"' class='form-control' value='"+s_potongan+"'>"+potongan+" "+s_potongan+"</td>";
			html +="<td><input type='number' min='1' name='dikalikan"+jumlah+"' jumlah='"+jumlah+"' class='kalikan form-control' value='1'></td>";
			html +="<td><input type='text' readonly  name='tagihan"+jumlah+"' id='subtotal"+jumlah+"' class='form-control' value='"+jumlahchange+"'></td>";
		
			html +="<td><button type='button' class='btn btn-warning batalappend' id='batalappend' row='"+jumlah+"' >Batal </button> </td>";
			html +="</tr>";
		$("#jumlah").val(jumlah);
		$("#loadappend").append(html);
	})
	
$(document).on("click",".batalappend",function(){
	
	var id = $(this).attr("row");
	var data_url = $(this).attr("data-url");
	var idnya = $(this).attr("data-id");
	  $.post(data_url,{id:idnya},function(){
		  
		  $("#row"+id).remove();
	  })
	  
	
	
})

 
		
	
 function loading() {

    return jQuery.blockUI({ css: { 
            border: '1px solid  #483D8B', 
            padding: '10px', 
			top: '60px',
			backgroundColor: '#000', 
            '-webkit-border-radius': '10px', 
            '-moz-border-radius': '10px', 
            opacity: .7, 
            color: '#fff' 
        } });              
}
function unloading(){
	
	
	jQuery.unblockUI({ });
}
function FormatCurrency(objNum)
{
   var num = objNum.value
   var ent, dec;
   
   if (num != '' && num != objNum.oldvalue)
   {
     num = HapusTitik(num);
     if (isNaN(num))
     {
       objNum.value = (objNum.oldvalue)?objNum.oldvalue:'';
     } else {
       var ev = (navigator.appName.indexOf('Netscape') != -1)?Event:event;
       if (ev.keyCode == 190 || !isNaN(num.split('.')[1]))
       {
         alert(num.split('.')[1]);
         objNum.value = TambahTitik(num.split('.')[0])+'.'+num.split('.')[1];
       }
       else
       {
         objNum.value = TambahTitik(num.split('.')[0]);
       }
       objNum.oldvalue = objNum.value;
     }
   }
}
function HapusTitik(num)
{
   return (num.replace(/\./g, ''));
}

function TambahTitik(num)
{
   numArr=new String(num).split('').reverse();
   for (i=3;i<numArr.length;i+=3)
   {
     numArr[i]+='.';
   }
   return numArr.reverse().join('');
} 
        
function formatCurrency(num) {
   num = num.toString().replace(/\$|\./g,'');
   if(isNaN(num))
   num = "0";
   sign = (num == (num = Math.abs(num)));
   num = Math.floor(num*100+0.50000000001);
   cents = num0;
   num = Math.floor(num/100).toString();
   for (var i = 0; i < Math.floor((num.length-(1+i))/3); i++)
   num = num.substring(0,num.length-(4*i+3))+'.'+
   num.substring(num.length-(4*i+3));
   return (((sign)?'':'-') + num);
}				
 function isNumber(evt) {
        var iKeyCode = (evt.which) ? evt.which : evt.keyCode
        if (iKeyCode != 46 && iKeyCode > 31 && (iKeyCode < 48 || iKeyCode > 57))
            return false;

        return true;
    }    
	
 function formatnilai(txt)
        {
            if(event.keyCode > 47 && event.keyCode < 58 || event.keyCode == 46)
            {
               var txtbx= (txt);
               var amount = (txt).value;
               var present=0;
               var count=0;

               if(amount.indexOf(".",present)||amount.indexOf(".",present+1));
               {
              // alert('0');
               }

              /*if(amount.length==2)
              {
                if(event.keyCode != 46)
                return false;
              }*/
               do
               {
               present=amount.indexOf(".",present);
               if(present!=-1)
                {
                 count++;
                 present++;
                 }
               }
               while(present!=-1);
               if(present==-1 && amount.length==0 && event.keyCode == 46)
               {
                    event.keyCode=0;
                    //alert("Wrong position of decimal point not  allowed !!");
                    return false;
               }

               if(count>=1 && event.keyCode == 46)
               {

                    event.keyCode=0;
                    //alert("Only one decimal point is allowed !!");
                    return false;
               }
               if(count==1)
               {
                var lastdigits=amount.substring(amount.indexOf(".")+1,amount.length);
                if(lastdigits.length>=2)
                            {
                              //alert("Two decimal places only allowed");
                              event.keyCode=0;
                              return false;
                              }
               }
                    return true;
            }
            else
            {
                    event.keyCode=0;
                    //alert("Only Numbers with dot allowed !!");
                    return false;
            }

        }