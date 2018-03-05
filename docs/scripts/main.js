$(function(){
	// スマホではユーザー入力じゃないと動かないらしいのでここは使わない
});

$("#button_start").click(function(e) {
	$("#main_image").css("display", "inline");
	$(this).css("display", "none");
	
	document.getElementById("overSound").currentTime = 0; //再生秒数を 0 にセット
	document.getElementById("overSound").volume = 0.1;
	document.getElementById("overSound").play();
	
	var imgIdx = 0;
	setInterval(function(){
		imgIdx = (imgIdx + 1) % 6;
		$('img').attr('src', 'resources/img/0' + (imgIdx + 1) + '.jpg');
	},1000);
});
