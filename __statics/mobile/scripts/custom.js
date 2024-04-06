// JavaScript Document

(function ($) {

$(window).load(function() { 
	$("#status").fadeOut(); // will first fade out the loading animation
	$("#preloader").delay(400).fadeOut("medium"); // will fade out the white DIV that covers the website.
});
    
$(document).ready(function() {
    
    //Scroll For Menu Elements on landing page
    function scrollToElement(selector, time, verticalOffset) {
        time = typeof(time) != 'undefined' ? time : 1000;
        verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset : 0;
        element = $(selector);
        offset = element.offset();
        offsetTop = offset.top + verticalOffset;
        $('html, body').animate({
            scrollTop: offsetTop
        }, time);           
    }

    //Landing Menu Settings Settings//
    
    $('.icon-housing').hover(function(){
        $(this).find('.icon').addClass('icon-active');
    }, function(){
        $(this).find('.icon').removeClass('icon-active');
    });
    
    $('.landing-menu a').hover(function(){
        $(this).find('i').addClass('icon-active');
    }, function(){
        $(this).find('i').removeClass('icon-active');
    });
    
    $('.close-landing-menu').click(function(){
        $('.icon-housing, .landing-footer, .landing-title').removeClass('fade-landing');
        $('.landing-menu').slideUp(250); 
        $('body').removeClass('landing-submenu-active');
		$('body, html').animate({
			scrollTop:0
		}, 250, 'easeInOutQuad');
        return false;
    });
    
    $('.icon-click').click(function(){
        $('.icon-housing').removeClass('fade-landing');
    });
    
    //Function to close landing menu balls on body click.
    
    $('html').not(".landing-menu").bind('click', function() {
       if($('body').hasClass('landing-submenu-active')){
            $('.icon-housing, .landing-footer, .landing-title').removeClass('fade-landing');
            $('.landing-menu').slideUp(250); 
            $('body').removeClass('landing-submenu-active');
            $('body, html').animate({
                scrollTop:0
            }, 250, 'easeInOutQuad');
       }else{
           // Do nothign here // 
       };
    });
    
    function active_landing(){
        $('body').delay(50).queue(function(){
            $('body').toggleClass('landing-submenu-active');
            $('body').dequeue();
        }); 
        $('.icon-housing, .landing-footer, .landing-title').addClass('fade-landing');
        $('.landing-menu').slideUp(250);
        $('.share-bottom').removeClass('active-share-bottom');
    }

    $('.icon-1').click(function(){
        //scrollToElement('.icon-1', 250 , 50);
        active_landing();
        $('.navigation-1').slideToggle(250); 
    });    
    
    $('.icon-2').click(function(){
        //scrollToElement('.icon-2', 250 , 50);   
        active_landing();
        $('.navigation-2').slideToggle(250); 
    });    
    
    $('.icon-3').click(function(){
        //scrollToElement('.icon-3', 250 , 50);
        active_landing()
        $('.navigation-3').slideToggle(250); 
    });    
    
    $('.icon-4').click(function(){
        scrollToElement('.icon-4', 250 , 50);
        active_landing()
        $('.navigation-4').slideToggle(250); 
    });    
    
    $('.icon-5').click(function(){
        scrollToElement('.icon-5', 250 , 50);
        active_landing()
        $('.navigation-5').slideToggle(250); 
    });    
    
    $('.icon-6').click(function(){
        scrollToElement('.icon-6', 250 , 50);
        active_landing()
        $('.navigation-6').slideToggle(250); 
    });    
    
    $('.icon-7').click(function(){
        scrollToElement('.icon-7', 250 , 50);
        active_landing()
        $('.navigation-7').slideToggle(250); 
    });    
    
    $('.icon-8').click(function(){
        scrollToElement('.icon-8', 250 , 50);
        active_landing()
        $('.navigation-8').slideToggle(250); 
    });    
    
    $('.icon-9').click(function(){
        scrollToElement('.icon-9', 250 , 50);
        active_landing()
        $('.navigation-9').slideToggle(250); 
    });

    //Alternative Pages Menu//
        
    $('.show-top-menu').click(function(){
        $('.top-menu').addClass('top-menu-active');
        $('.menu-background').fadeIn(250);
        return false;
    });
    
    $('.deploy-submenu').click(function(){
        $(this).toggleClass('active-submenu');
        $(this).parent().find('.submenu').slideToggle(200);
        return false;
    });
    
   $('.close-menu, .menu-background').click(function(){
        $('.top-menu').removeClass('top-menu-active');
        $('.menu-background').fadeOut(250);
        return false;
    });
    
    
    
    //Sharebox Settings//
        
    $('.show-share-bottom, .show-share-box').click(function(){
        $('.share-bottom').toggleClass('active-share-bottom'); 
        return false;
    });    
    
    $('.close-share-bottom').click(function(){
       $('.share-bottom').removeClass('active-share-bottom'); 
        return false;
    });
    
    //Countdown timer


	
    
	//Animate.css scroll to begin animation //	
	

		
	//Go up
	
	$('.footer-up, .header-up').click(function() {
		$('body, html').animate({
			scrollTop:0
		}, 500, 'easeInOutQuad');
		return false;
	});
	
    //Back to top show//
    
    $(window).on('scroll', function () {
        if (($(window).scrollTop() + $(window).height()) >= $(document).height() - 100) {
            $('.header-up').removeClass('header-up-visible');
        } else {
            if ($(this).scrollTop() >= 150) {
                $('.header-up').addClass('header-up-visible');
            } else {
                $('.header-up').removeClass('header-up-visible');
            }
        }
    });
    
	//Portfolio//
	
	$('.adaptive-one-activate').click(function() {
		$('.portfolio-adaptive').removeClass('adaptive-three');
		$('.portfolio-adaptive').removeClass('adaptive-two');
		$('.portfolio-adaptive').addClass('adaptive-one');
		$(this).addClass('active-adaptive-style');
		$('.adaptive-two-activate, .adaptive-three-activate').removeClass('active-adaptive-style');
		return false;
	});
	
	$('.adaptive-two-activate').click(function() {
		$('.portfolio-adaptive').removeClass('adaptive-three');
		$('.portfolio-adaptive').addClass('adaptive-two');
		$('.portfolio-adaptive').removeClass('adaptive-one');	
		$(this).addClass('active-adaptive-style');	
		$('.adaptive-three-activate, .adaptive-one-activate').removeClass('active-adaptive-style');
		return false;
	});
	
	$('.adaptive-three-activate').click(function() {
		$('.portfolio-adaptive').addClass('adaptive-three');
		$('.portfolio-adaptive').removeClass('adaptive-two');
		$('.portfolio-adaptive').removeClass('adaptive-one');
		$(this).addClass('active-adaptive-style');	
		$('.adaptive-two-activate, .adaptive-one-activate').removeClass('active-adaptive-style');
		return false;
	});
	
	
	//Close Sharebox//
	
	$('.open-sharebox').click(function() {
		$('.sharebox-wrapper').fadeIn(200);
	});
	
	$('.close-sharebox').click(function() {
		$('.sharebox-wrapper').fadeOut(200);
	});
	
	$('.open-loginbox').click(function() {
		$('.loginbox-wrapper').fadeIn(200);
	});
	
	$('.close-loginbox').click(function() {
		$('.loginbox-wrapper').fadeOut(200);
	});
			
	//Checkboxes
	
	$('.checkbox-one').click(function() {
		$(this).toggleClass('checkbox-one-checked');
		return false;
	});
	$('.checkbox-two').click(function() {
		$(this).toggleClass('checkbox-two-checked');
		return false;
	});
	$('.checkbox-three').click(function() {
		$(this).toggleClass('checkbox-three-checked');
		return false;
	});	
	$('.radio-one').click(function() {
		$(this).toggleClass('radio-one-checked');
		return false;
	});	
	$('.radio-two').click(function() {
		$(this).toggleClass('radio-two-checked');
		return false;
	});
    
    //Reminders & Checklists
    
    $('.reminder-check-square').click(function(){
       $(this).toggleClass('reminder-check-square-selected'); 
        return false;
    });    
    
    $('.reminder-check-round').click(function(){
       $(this).toggleClass('reminder-check-round-selected'); 
        return false;
    });
    
    $('.checklist-square').click(function(){
       $(this).toggleClass('checklist-square-selected');
        return false;
    });    
    
    $('.checklist-round').click(function(){
       $(this).toggleClass('checklist-round-selected');
        return false;
    });
	
    //Switches
    
    $('.switch-1').click(function(){
       $(this).toggleClass('switch-1-on'); 
        return false;
    });
    
    $('.switch-2').click(function(){
       $(this).toggleClass('switch-2-on'); 
        return false;
    });
    
    $('.switch-3').click(function(){
       $(this).toggleClass('switch-3-on'); 
        return false;
    });
    
    $('.switch, .switch-icon').click(function(){
        $(this).parent().find('.switch-box-content').slideToggle(200); 
        $(this).parent().find('.switch-box-subtitle').slideToggle(200);
        return false;
    });
    
    
	//Notifications
		
	$('.tap-dismiss-notification').click(function() {
		$(this).slideUp(200);
		return false;
	});
	
	$('.close-big-notification').click(function() {
		$(this).parent().slideUp(200);
		return false;
	});
	
	$('.notification-top').addClass('show-notification-top');
	
	$('.hide-top-notification').click(function(){
		$('.notification-top').removeClass('show-notification-top');
	});
	
	//Tabs 
	$('.tab-but-1').click(function() {
		$('.tab-but').removeClass('tab-active');
		$('.tab-but-1').addClass('tab-active');
		$('.tab-content').slideUp(200);
		$('.tab-content-1').slideDown(200);	
		return false;	
	});
	
	$('.tab-but-2').click(function() {
		$('.tab-but').removeClass('tab-active');
		$('.tab-but-2').addClass('tab-active');
		$('.tab-content').slideUp(200);
		$('.tab-content-2').slideDown(200);
		return false;		
	});	
	
	$('.tab-but-3').click(function() {
		$('.tab-but').removeClass('tab-active');
		$('.tab-but-3').addClass('tab-active');
		$('.tab-content').slideUp(200);
		$('.tab-content-3').slideDown(200);	
		return false;	
	});	
	
	$('.tab-but-4').click(function() {
		$('.tab-but').removeClass('tab-active');
		$('.tab-but-4').addClass('tab-active');
		$('.tab-content').slideUp(200);
		$('.tab-content-4').slideDown(200);
		return false;		
	});	

	$('.tab-but-5').click(function() {
		$('.tab-but').removeClass('tab-active');
		$('.tab-but-5').addClass('tab-active');
		$('.tab-content').slideUp(200);
		$('.tab-content-5').slideDown(200);	
		return false;	
	});	
	
	//Toggles
	
	$('.deploy-toggle-1').click(function() {
		$(this).parent().find('.toggle-content').slideToggle(200);
		$(this).toggleClass('toggle-1-active');
		return false;
	});
	
	$('.deploy-toggle-2').click(function() {
		$(this).parent().find('.toggle-content').slideToggle(200);
		$(this).toggleClass('toggle-2-active');
		return false;
	});
	
	$('.deploy-toggle-3').click(function() {
		$(this).parent().find('.toggle-content').slideToggle(200);
		$(this).find('em strong').toggleClass('toggle-3-active-ball');
		$(this).find('em').toggleClass('toggle-3-active-background');
		return false;
	});
	
	//Submenu Nav
	
	$('.submenu-nav-deploy').click(function() {
		$(this).toggleClass('submenu-nav-deploy-active');
		$(this).parent().find('.submenu-nav-items').slideToggle(200);
		return false;
	});
	
	//Sliding Door
	
	$('.sliding-door-top').click(function() {
		$(this).animate({
			left:'101%'
		}, 500, 'easeInOutExpo');
		return false;
	});
	
	$('.sliding-door-bottom a em').click(function() {
		$(this).parent().parent().parent().find('.sliding-door-top').animate({
			left:'0px'
		}, 500, 'easeOutBounce');
		return false
		
	});
		
	/////////////////////////////////////////////////////////////////////////////////////////////
	//Detect user agent for known mobile devices and show hide elements for each specific element
	/////////////////////////////////////////////////////////////////////////////////////////////
	
	var isiPhone = 		navigator.userAgent.toLowerCase().indexOf("iphone");
	var isiPad = 		navigator.userAgent.toLowerCase().indexOf("ipad");
	var isiPod = 		navigator.userAgent.toLowerCase().indexOf("ipod");
	var isiAndroid = 	navigator.userAgent.toLowerCase().indexOf("android");
	
	if(isiPhone > -1) 	 {		 $('.ipod-detected').hide();		 $('.ipad-detected').hide();		 $('.iphone-detected').show();		 $('.android-detected').hide();	 }
	if(isiPad > -1)	 {		 	 $('.ipod-detected').hide();		 $('.ipad-detected').show();		 $('.iphone-detected').hide();		 $('.android-detected').hide();	 }
	if(isiPod > -1)	 {		 	 $('.ipod-detected').show();		 $('.ipad-detected').hide();		 $('.iphone-detected').hide();		 $('.android-detected').hide();	 }   
	if(isiAndroid > -1) {		 $('.ipod-detected').hide();		 $('.ipad-detected').hide();		 $('.iphone-detected').hide();		 $('.android-detected').show();	 }  

	
	//Detect if iOS WebApp Engaged and permit navigation without deploying Safari
	(function(a,b,c){if(c in b&&b[c]){var d,e=a.location,f=/^(a|html)$/i;a.addEventListener("click",function(a){d=a.target;while(!f.test(d.nodeName))d=d.parentNode;"href"in d&&(d.href.indexOf("http")||~d.href.indexOf(e.host))&&(a.preventDefault(),e.href=d.href)},!1)}})(document,window.navigator,"standalone")
	
	$(".next-experience").click(function(){
	  owlExperienceSlider.trigger('owl.next');
	  return false;
	});
	$(".prev-experience").click(function(){
	  owlExperienceSlider.trigger('owl.prev');
	  return false;
	});
    
    
    //Circle Slider
    
    
	/////////////////
	//Image Gallery//
	/////////////////
    
	
	
	var time = 7; // time in seconds
	
	var $progressBar,
		$bar, 
		$elem, 
		isPause, 
		tick,
		percentTime;
	  
	
	//Init the carousel
	
	
	//Init progressBar where elem is $("#owl-demo")
	function progressBar(elem){
		$elem = elem;
		//build progress bar elements
		buildProgressBar();
		//start counting
		start();
	}
	
	//create div#progressBar and div#bar then prepend to $("#owl-demo")
	function buildProgressBar(){
		$progressBar = $("<div>",{
			id:"progressBar"
		});
		$bar = $("<div>",{
			id:"bar"
		});
		$progressBar.append($bar).prependTo($elem);
	}
	
	function start() {
		//reset timer
		percentTime = 0;
		isPause = false;
		//run interval every 0.01 second
		tick = setInterval(interval, 10);
	};
	
	function interval() {
		if(isPause === false){
			percentTime += 1 / time;
			$bar.css({
			   width: percentTime+"%"
			 });
			//if percentTime is equal or greater than 100
			if(percentTime >= 100){
			  //slide to next item 
			  $elem.trigger('owl.next')
			}
		}
	}
	
	//pause while dragging 
	function pauseOnDragging(){
		isPause = true;
	}
	
	//moved callback
	function moved(){
		//clear interval
		clearTimeout(tick);
		//start again
		start();
	}
	
	
	// Custom Navigation Events
	$(".next-home").click(function() {
		$(".homepage-slider").trigger('owl.next');
		return false;
	});
	$(".prev-home").click(function() {
		$(".homepage-slider").trigger('owl.prev');
		return false;
	});	
	
	
    //Coverpage Height 100%//
	
	var coverpage_height = 0;
	
	function initiate_coverpages(){
		coverpage_height =  $(window).height();
		$('.coverpage').css({ height: coverpage_height+1 });	
	};
	
	initiate_coverpages();
	
	$(window).resize(function() {
		initiate_coverpages();
	});
	
	
    //Generate Fullscreen Elemeents
    
    var screen_width = 0;
    var screen_height = 0;
    function resize_coverpage(){
        screen_width = $(window).width();
        screen_height = $(window).height();

         $('.coverpage-image').css({
            height: screen_height,
            width: screen_width
        });          
        
        $('.landing-page').css({
            height: screen_height-1,
            width: screen_width
        });  
        
         $('.slider-image').css({
            height: screen_height -60,
            width: screen_width
        });          
    };
    resize_coverpage();
    $(window).resize(resize_coverpage);
    
	
   
    //Gallery Fixes
    
	
    
    //Remove 300ms lag set by -webkit-browsers     
  	
        
    
});

}(jQuery));


