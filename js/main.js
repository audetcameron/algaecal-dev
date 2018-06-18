
//json settings
var jsonFetch = {
	"async": true,
	"crossDomain": true,
	"url": "https://www.algaecal.com/wp-json/acf/v3/options/options",
	"method": "GET"
}
function getJson(){
	return $.ajax(jsonFetch);
}
getJson().done(function(response){
    //console.log(response);
    var phoneNumber = response.acf.default_phone_number;
    var tapToTalk = $('.tap_to_talk_span--font');
    tapToTalk.html(phoneNumber);
    //hum...I cant load response from json starting with number .#
    //var sevenYear = response.acf.7yr_full_copy;
    //alert(sevenYear);
  });

function showBoneContact(){
	//create Date 
	var d = new Date();
	var dayOfweek = d.getDay();
	var dayInt = parseInt(dayOfweek) || 0;	//convert to int
	var utcHours = d.getUTCHours() -8;//get UTC time + subtract difference to PST
	var utcMinutes = d.getUTCMinutes();
	var utcDay = d.getUTCDay();
	var boneSpecialist = $(".speak__with--font");
	boneSpecialist.hide();
	var isOpen = false;

	if (dayOfweek >= 1 && dayOfweek <=5) {	//check day | it's the middle of the week
		if(utcHours >=7 && utcHours <= 16){ //it's between 7am and 4pm PST
			isOpen = true;
	}else {
		console.log("closed");
	}
}
	if (dayOfweek === 6 ) { //It's Saturday
		if(utcHours >=8 && utcHours <= 16){  // 8 - 4
			isOpen = true;
		}else {
			console.log("closed");
		}
	}
	if (dayOfweek === 0 ) {//its Sunday!
		if(utcHours >=8 && utcHours <= 14){ //8 - 2
			isOpen = true;
		}else {
			console.log("closed");
		}
		console.log("it's sunday");
	}
		//to debug uncomment below
		//isOpen = true;

		if (isOpen) {
			boneSpecialist.show();
		}
	}
	showBoneContact();



//create image thumbnail overlay for video
var overlay = $('.imageOverlay');
$(overlay).click(function() {
	//remove overlay on click
	overlay.css( "display", "none" );
	$('.videoEmbed').removeClass('videoHidden');
	//showvideo
	$('.videoEmbed').addClass('showVideo');
});

//Show Speak to our bone specialist during work hours

window._wq = window._wq || [];
_wq.push({ id: "cecdwaq3dz", onReady: function(video) {

	//to display package pricing bundle boxes at 2:13
	// at 2:13 seconds
	video.bind('secondchange', function(s) {
		if (s === 133) {
			console.log("We just reached " + s + " seconds!"); //if bundle !hasclass addclass block - else do nothing
		}
	});

	// at 2:13 seconds skipping
	video.bind("timechange", function(t) {
		if (t > 133) {
			console.log("Passed 2:13 | Display Pricing Bundle");//if bundle !hasclass block display block - else do nothing
			return video.unbind;
		}
	});

}});





//dev only - remove for prod
//Bootstrap3 mobile first screen size debugger
function showViewPortSize(display) {
	if(display) {
		var height = jQuery(window).height();
		var width = jQuery(window).width();
		var mediaQ =null;
		if ($(window).width() > 320 && $(window).width() <= 767) {
			var mediaQ ='xs';
		}else if ($(window).width() > 767 && $(window).width() <=991)  {
			var mediaQ ='sm';
		}else if ($(window).width() > 991 && $(window).width() <=1199) {
			var mediaQ = 'md';
		}else if ($(window).width() > 1199) {
			var mediaQ = 'lg';
		};
		jQuery('body').prepend('<div id="viewportsize" style="font-size:11px;z-index:9999;position:fixed;top:1px;left:5px;color:#fff;background:#000;padding:10px">Height: '+height+'<br>Width: '+width+' <br> Media:  '+mediaQ+'</div>');

		jQuery(window).resize(function() {
			height = jQuery(window).height();
			width = jQuery(window).width();
			if ($(window).width() > 320 && $(window).width() <= 767) {
				var mediaQ ='xs';
			}else if ($(window).width() > 767 && $(window).width() <=991)  {
				var mediaQ ='sm';
			}else if ($(window).width() > 991 && $(window).width() <=1199) {
				var mediaQ = 'md';
			}else if ($(window).width() > 1199) {
				var mediaQ = 'lg';
			};

			jQuery('#viewportsize').html('Height: '+height+'<br>Width: '+width+' <br> Media: '+mediaQ);
		});

	}
}

//showViewPortSize(true);

