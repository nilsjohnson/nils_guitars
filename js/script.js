var ukulele_images = [
	"ukulele/lightbox/africanmahogfront.jpg",
	"ukulele/lightbox/africanmahogback.jpg",
	"ukulele/lightbox/blackwalnutsprucefront.jpg",
	"ukulele/lightbox/blackwalnutspruceback.jpg"
	
	
]
var mandolin_images = [
	"mandolins/lightbox/european_front.jpg",
	"mandolins/lightbox/european_back.jpg",
	"mandolins/lightbox/rosewoodmandofront.jpg",
	"mandolins/lightbox/rosewoodmandoback.jpg"
	
]
var auditorium_images = [
	"guitars/auditorium/lightbox/rosewoodfront.jpg",
	"guitars/auditorium/lightbox/rosewoodback.jpg",
	"guitars/auditorium/lightbox/mahogfront.jpg",
	"guitars/auditorium/lightbox/mahogback.jpg"

]
var grandconcert_images = [
	"guitars/grand_concert/lightbox/grand_concert_front2.jpg",
	"guitars/grand_concert/lightbox/grand_concert_back2.jpg",
	"guitars/grand_concert/lightbox/grand_concert_front.jpg",
	"guitars/grand_concert/lightbox/grand_concert_back.jpg"
]
var concert_images = [
	"guitars/concert/lightbox/mahog_front.jpg",
	"guitars/concert/lightbox/mahog_back.jpg",
	"guitars/concert/lightbox/maple_burst_front.jpg",
	"guitars/concert/lightbox/maple_burst_back.jpg"
]
var parlor_images = [
	"guitars/parlor/lightbox/red_maple_front.jpg",
	"guitars/parlor/lightbox/red_maple_back.jpg",
	"guitars/parlor/lightbox/2front.jpg",
	"guitars/parlor/lightbox/2back.jpg"
]






var switchTo = function(objectId)
{
	var obj = $('#'+objectId);
	obj.siblings().hide();
	obj.show();
	$('.nav-pills .active').removeClass('active');
	$('#'+objectId+'-link').addClass('active');
}

var openLightbox = function(obj)
{
	$('#modal-image').attr('src', obj.src);
	$('#lightbox').modal('show');
}

var closeLightbox = function()
{
	$('#lightbox').modal('hide');
}

var switchLightbox = function(imageId)
{
	var source = $('#'+imageId)[0].src;
	if(source.indexOf("back") > 1)
	{
		source = source.replace('back', 'front');
	}
	else
	{
		source = source.replace('front', 'back');
	}	
	$('#' + imageId).attr('src', source);
}

var lightboxChange = function(instrument, step)
{
	var srcStart = "../img/instruments/";
	var images;
	switch(instrument)
	{
		case "ukulele":
			images = ukulele_images;
			break;
		case "mandolin":
			images = mandolin_images;
			break;
		case "auditorium":
			images = auditorium_images;
			break;
		case "concert":
			images = concert_images;
			break;
		case "grandconcert":
			images = grandconcert_images;
			break;
		case "parlor":
			images = parlor_images;
			break;
						
	}
	var curIndex = 0;
	var sourceStr = $('#modal-image')[0].src;
	var currentImage = sourceStr.split('/').pop();
	for(var i = 0; i < images.length; i++)
	{
		if(currentImage == images[i].split('/').pop())
		{
			curIndex = i;
			break;
		}
	}
	var newIndex = curIndex + step;
	if(newIndex < 0)
	{
		newIndex = images.length - 1;
	}
	else if(newIndex > images.length - 1)
	{
		newIndex = 0;
	}
	
	var srcString = srcStart + images[newIndex];
	$('#modal-image').attr('src', srcString);
}