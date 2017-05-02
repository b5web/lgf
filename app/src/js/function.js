
/* Configuration
 -------------------------------------------------------------------*/
if(configuration.main.subscription.display != true) {
    $('.btn_subscription').hide();
    $('#subscribe').hide();
}
$('.subscription-description').html(configuration.main.subscription.description);

$(".main-title").html(configuration.main.title);
$(".main-resume").html(configuration.main.resume);

if(configuration.main.countDown != true) {
    $("#time_countdown").hide();
}

$(configuration.editions).each(function( index , edition ) {
    var class_active = '';
    if(index == 0) {
        class_active = ' active';
    }
    content =
        '<div class="item' + class_active + '">' +
            '<div class="col-sm-9"><img class="img-responsive" src="dist/images/edition/' + edition.image + '">' +
            '</div>' +
            '<div class="col-sm-3">' +
                '<h3>' + edition.name + '</h3>' +
                '<p>' + edition.description + '</p>' +
            '</div>' +
        '</div>';
    $('.carousel-inner').append(content);
});
/* Background Images
-------------------------------------------------------------------*/
var  pageTopImage = $('#page-top').data('background-image');
var  teamImage = $('#team').data('background-image');
var  subscribeImage = $('#subscribe').data('background-image');
var  contactImage = $('#contact').data('background-image');
var  editionImage = $('#edition').data('background-image');
var  lgfImage = $('#lgf').data('background-image');

if (pageTopImage) {  $('#page-top').css({ 'background-image':'url(' + pageTopImage + ')' }); };
if (teamImage) {  $('#team').css({ 'background-image':'url(' + teamImage + ')' }); };
if (subscribeImage) {  $('#subscribe').css({ 'background-image':'url(' + subscribeImage + ')' }); };
if (contactImage) {  $('#contact').css({ 'background-image':'url(' + contactImage + ')' }); };
if (editionImage) {  $('#edition').css({ 'background-image':'url(' + editionImage + ')' }); };
if (lgfImage) {  $('#lgf').css({ 'background-image':'url(' + lgfImage + ')' }); };

/* Background Images End
-------------------------------------------------------------------*/



/* Document Ready function
-------------------------------------------------------------------*/
$(document).ready(function($) {

	"use strict";


    /* Window Height Resize
    -------------------------------------------------------------------*/
    var windowheight = $(window).height();
    if(windowheight > 650)
    {
         $('.pattern').removeClass('height-resize');
    }
    /* Window Height Resize End
    -------------------------------------------------------------------*/



	/* Main Menu   
	-------------------------------------------------------------------*/
	$('#main-menu #headernavigation').onePageNav({
		currentClass: 'active',
		changeHash: false,
		scrollSpeed: 750,
		scrollThreshold: 0.5,
		scrollOffset: 0,
		filter: '',
		easing: 'swing'
	});  

	$('a[href*=#]:not([href=#]):not([href="#myCarousel"])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
		|| location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html,body').animate({
				scrollTop: target.offset().top
				}, 1000);
				return false;
			}
		}
	});		
	
	/* Main Menu End  
	-------------------------------------------------------------------*/
	/* Time Countdown 
	-------------------------------------------------------------------*/
    var $dateEdititon=new Date(configuration.main.date);
	$('#time_countdown').countDown({
         targetDate: {
             'day': $dateEdititon.getDate() ,
             'month': ($dateEdititon.getMonth()+1),
             'year': $dateEdititon.getFullYear(),
             'hour': $dateEdititon.getHours(),
             'min': 0,
             'sec': 0
         },
         omitWeeks: true

    });

    /* Time Countdown End
	-------------------------------------------------------------------*/




	/* Next Section   
	-------------------------------------------------------------------*/
	$('.next-section .go-to-lgf').click(function() {
    	$('html,body').animate({scrollTop:$('#lgf').offset().top}, 1000);
  	});
        $('.next-section .go-to-team').click(function() {
    	$('html,body').animate({scrollTop:$('#team').offset().top}, 1000);
  	});
	$('.next-section .go-to-edition').click(function() {
    	$('html,body').animate({scrollTop:$('#edition').offset().top}, 1000);
  	});        
  	$('.next-section .go-to-subscribe').click(function() {
    	$('html,body').animate({scrollTop:$('#subscribe').offset().top}, 1000);
  	});
  	$('.next-section .go-to-contact').click(function() {
    	$('html,body').animate({scrollTop:$('#contact').offset().top}, 1000);
  	});
  	$('.next-section .go-to-page-top').click(function() {
    	$('html,body').animate({scrollTop:$('#page-top').offset().top}, 1000);
  	});

  	/* Next Section End
	-------------------------------------------------------------------*/




	      /* Subscribe
    -------------------------------------------------------------------*/
    $('#subscribe-submit').click(function () {
        $('.first-name-error, .last-name-error, .subscribe-email-error, .subscribe-team-name-error, .subscribe-team-list-error').hide();
        var first_nameVal = $('input[name=first_name]').val();
        var last_nameVal = $('input[name=last_name]').val();
        var emailReg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/igm;
        var emailVal = $('#subscribe_email').val();
        var teamNameVal = $('input[name=team_name]').val();
        var teamListVal = $('textarea[name=tema_list]').val();

        //validate

        if (first_nameVal == '' || first_nameVal == 'Prénom *') {
            $('.first-name-error').html('<i class="fa fa-exclamation"></i> Vous devez saisir votre prénom.').fadeIn();
            return false;
        }
        if (last_nameVal == '' || last_nameVal == 'Nom *') {
            $('.last-name-error').html('<i class="fa fa-exclamation"></i> Vous devez saisir votre nom').fadeIn();
            return false;
        }
        if (emailVal == "" || emailVal == "Adresse Mail *") {

            $('.subscribe-email-error').html('<i class="fa fa-exclamation"></i> Vous devez saisir votre adresse mail').fadeIn();
            return false;

        } else if (!emailReg.test(emailVal)) {

            $('.subscribe-email-error').html('<i class="fa fa-exclamation"></i> Votre adresse mail est invalide.').fadeIn();
            return false;
        }
         if (teamNameVal == '' || teamNameVal == 'Nom de votre équipe *') {
            $('.subscribe-team-name-error').html('<i class="fa fa-exclamation"></i> Vous devez saisir le nom de votre équipe.').fadeIn();
            return false;
        }
        if (teamListVal == '' || teamListVal == 'Liste des joueurs de votre équipe *') {
            $('.subscribe-team-list-error').html('<i class="fa fa-exclamation"></i> Vous devez saisir la liste des joueurs de votre équipe.').fadeIn();
            return false;
        }

        var data_string = $('#subscribe-form').serialize();

        $('#subscribe-submit').hide();
        $('#subscribe-loading').fadeIn();
        $('.subscribe-error-field').fadeOut();

        $.ajax({
            type: "POST",
            url: "subscribe.php",
            data: data_string,

            //success
            success: function (data) {

                $('.subscribe-box-hide').slideUp();
                $('.subscribe-message').html('<i class="fa fa-check subscribe-success"></i><div>Votre demande d\'inscription a été envoyé avec succès.<br/> Nous allons traiter votre demande et vous répondrons dans les plus brefs délais</div>').fadeIn();
            },
            error: function (data) {

                $('.btn-subscribe-container').hide();
                $('.subscribe-message').html('<i class="fa fa-exclamation subscribe-error"></i><div>Une erreur est survenue, veuillez réessayer plus tard.</div>').fadeIn();
            }

        }) //end ajax call
        return false;
    });

	/* subscribe End
	-------------------------------------------------------------------*/



});

/* Document Ready function End
-------------------------------------------------------------------*/


/* Preloder 
-------------------------------------------------------------------*/
//$(window).load(function () {    
//    "use strict";
//    $("#loader").fadeOut();
//    $("#preloader").delay(350).fadeOut("slow");
//});
 /* Preloder End
-------------------------------------------------------------------*/
$(window).load(function () {   
    $("#page-top").parallax("50%", 0.2);
    $("#subscribe").parallax("50%", 0.2);
    $("#team").parallax("50%", 0.2);
});