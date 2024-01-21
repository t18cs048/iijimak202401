//スクロールした際の動きを関数でまとめる
function PageTopAnime() {

	var scroll = $(window).scrollTop(); //スクロール値を取得
	if (scroll >= 200){//200pxスクロールしたら
		$('#page-top').removeClass('DownMove');		// DownMoveというクラス名を除去して
		$('#page-top').addClass('UpMove');			// UpMoveというクラス名を追加して出現
	}else{//それ以外は
		if($('#page-top').hasClass('UpMove')){//UpMoveというクラス名が既に付与されていたら
			$('#page-top').removeClass('UpMove');	//  UpMoveというクラス名を除去し
			$('#page-top').addClass('DownMove');	// DownMoveというクラス名を追加して非表示
		}
	}
	
	var wH = window.innerHeight; //画面の高さを取得
	var footerPos =  $('#footer').offset().top; //footerの位置を取得
	if(scroll+wH >= (footerPos+10)) {
		var pos = (scroll+wH) - footerPos+10 //スクロールの値＋画面の高さからfooterの位置＋10pxを引いた場所を取得し
		$('#page-top').css('bottom',pos);	//#page-topに上記の値をCSSのbottomに直接指定してフッター手前で止まるようにする
	}else{//それ以外は
		if($('#page-top').hasClass('UpMove')){//UpMoveというクラス名がついていたら
			$('#page-top').css('bottom','10px');// 下から10pxの位置にページリンクを指定
		}
	}
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
PageTopAnime();/* スクロールした際の動きの関数を呼ぶ*/
});

// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
PageTopAnime();/* スクロールした際の動きの関数を呼ぶ*/
});

// #page-topをクリックした際の設定
$('#page-top').click(function () {
$('body,html').animate({
	scrollTop: 0//ページトップまでスクロール
}, 500);//ページトップスクロールの速さ。数字が大きいほど遅くなる
return false;//リンク自体の無効化
});

/*==画像スライダー==*/
$('.slider').slick({
	arrows: false,//左右の矢印はなし
	autoplay: true,//自動的に動き出すか。初期値はfalse。
	autoplaySpeed: 0,//自動的に動き出す待ち時間。初期値は3000ですが今回の見せ方では0
	speed: 6900,//スライドのスピード。初期値は300。
	infinite: true,//スライドをループさせるかどうか。初期値はtrue。
	pauseOnHover: false,//オンマウスでスライドを一時停止させるかどうか。初期値はtrue。
	pauseOnFocus: false,//フォーカスした際にスライドを一時停止させるかどうか。初期値はtrue。
	cssEase: 'linear',//動き方。初期値はeaseですが、スムースな動きで見せたいのでlinear
	slidesToShow: 4,//スライドを画面に4枚見せる
	slidesToScroll: 1,//1回のスライドで動かす要素数
	responsive: [
		{
		breakpoint: 769,//モニターの横幅が769px以下の見せ方
		settings: {
			slidesToShow: 2,//スライドを画面に2枚見せる
		}
	},
	{
		breakpoint: 426,//モニターの横幅が426px以下の見せ方
		settings: {
			slidesToShow: 1.5,//スライドを画面に1.5枚見せる
		}
	}
]
});