var x=0;
var y=0;
var text1="<h1>Read My Name</h1>王康霖";
var text2="<img class='editing e1' src='img/photoshop.png'><img class='editing e2' src='img/lightroom.png'><img class='editing e3' src='img/premierepro.png'><img class='editing e4' src='img/aftereffect.png'>"
var text3='<div class="h1 contact_me bor">Contact Me</div>			<a href="https://www.facebook.com/klin0816" target="_blank">				<img class="icon facebook" src="img/facebook.png">			</a>			<a href="https://www.linkedin.com/in/klin0816/" target="_blank">				<img class="icon linkedin" src="img/linkedin.png">			</a>			<a href="https://github.com/klin0816" target="_blank">				<img class="icon github" src="img/github.png">			</a>			<a href="https://www.flickr.com/photos/128522045@N02/" target="_blank">				<img class="icon flickr" src="img/flickr.png">			</a>			<a href="https://www.youtube.com/channel/UC1VGnPTziDMKNPvR2lC8DIw" target="_blank">				<img class="icon youtube" src="img/youtube.png">			</a>			<img class="self" src="img/self.jpg">'
var orig=" ";

$(document).ready(function(){
	
    
});
function show_x(){
    setTimeout(function(){ $(".column4").animate({opacity:'1'},1000); }, 1000);
}
function set_z_index(){
	setTimeout(function(){
		$(".column1").css('z-index', 0);
		$(".column2").css('z-index', 0);
		$(".column3").css('z-index', 0);
	}, 1000);
}
$(".column1").click(function(){
    $(".column1").animate({top: '0%'});
    $(".column1").animate({left: '0px', width: '100%'},{queue:false, duration:1000});
    $(".column1").animate({height: '100%'});
    $(".column1").animate({height: '100%'});
    $(".column1").css('z-index', 1);
    show_x();
    x = 1;
    //$(".column1").html(text1);
    $(".column1").html(function(i, origText){
    	orig = origText;
    	return text1;
    });
});
$(".column2").click(function(){
    $(".column2").animate({top: '0%'});
    $(".column2").animate({left: '0px', width: '100%'},{queue:false, duration:1000});
    $(".column2").animate({height: '100%'});
    $(".column2").css('z-index', 1);
    show_x();
    x = 2;
    $(".column2").html(function(i, origText){
    	orig = origText;
    	return text2;
    });
});
$(".column3").click(function(){
    $(".column3").animate({top: '0%'});
    $(".column3").animate({left: '0px', width: '100%'},{queue:false, duration:1000});
    $(".column3").animate({height: '100%'});
    $(".column3").css('z-index', 1);
    show_x();
    x = 3;
    $(".column3").html(function(i, origText){
    	orig = origText;
    	return text3;
    });
});
$(".column4").click(function(){
	if(x == 1){
		$(".column4").animate({opacity:'0'},500);
        $(".column1").animate({left: '20%', width: '200px'},{queue:false, duration:1000});
        $(".column1").animate({height: '200px'});
        $(".column1").animate({top: '30%'});
        $(".column1").html(orig);
        $(".column1").css('z-index', 0);
	}
	if(x == 2){
		$(".column4").animate({opacity:'0'},500);
        $(".column2").animate({left: '40%', width: '200px'},{queue:false, duration:1000});
        $(".column2").animate({height: '200px'});
        $(".column2").animate({top: '30%'});
        $(".column2").html(orig);
        $(".column2").css('z-index', 0);
	}
	if(x == 3){
		$(".column4").animate({opacity:'0'},500);
        $(".column3").animate({left: '60%', width: '200px'},{queue:false, duration:1000});
        $(".column3").animate({height: '200px'});
        $(".column3").animate({top: '30%'});
        $(".column3").html(orig);
        $(".column3").css('z-index', 0);
	}
});