$(function(){
	// スマホではユーザー入力じゃないと動かないらしいのでここは使わない
});

var bgm = document.getElementById("overSound");
var bttonClicked = false;

// 再生ボタン
$("#button_start").click(function(e) {
	$("#main_image").css("display", "inline");
	$(this).css("display", "none");
	
	bgm.currentTime = 0; //再生秒数を 0 にセット
	bgm.volume = 0.1;
	bgm.play();
	
	bttonClicked = true;
	
	var imgIdx = 0;
	setInterval(function(){
		imgIdx = (imgIdx + 1) % 6;
		$('img').attr('src', 'resources/img/0' + (imgIdx + 1) + '.jpg');
	},1000);
});

// タブ切り替え時に音を止める
document.addEventListener('visibilitychange', function() {
	if(document.visibilityState === 'hidden') {
		if(bttonClicked === true) {
			bgm.pause();
		}
	}else if(document.visibilityState === 'visible') {
		if(bttonClicked === true) {
			bgm.play();
		}
	}
}, false);

// ウインドウロード時にローディングアイコンを消して画面を出す
window.onload = function(){
	$(function() {
		$("#loading").fadeOut();
		$("#container").fadeIn();
	});
}
