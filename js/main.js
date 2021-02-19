$(function(){
    /**
     * ハンバーガーメニュー
     */
    var openImage = 'img/sp/open.svg';
    var closeImage = 'img/sp/close.svg';

    $('#menuButton').on('click', function(){
        $('#menuButton').toggleClass('active');
        $('#nav').toggleClass('active');
    });

    /**
     * スライドショー
     */
    $('#slideContents').slick({
        // 自動再生
        autoplay: true,
        // 再生スピード
        autoplaySpeed: 2000, // ミリ秒
        // ページ遷移のスピード
        speed: 500,
        // ページ送りの表示
        dots: true,
        // マウスホバー時にスライドを止めない
        pauseOnHover: false,
        // ドット選択時にスライドを止めない
        pauseOnFocus: false,
        // フェード
        fade: true,
    });

    /**
     * ふわっと出現
     */
    // 要素の位置
    var workPosY = $('.work-block > section').offset().top - $(window).height();
    console.log('workPosY: ' + workPosY);

    $(window).on('scroll', function(){
        
        // スクロール位置
        var dy = $(this).scrollTop();
        // console.log('スクロール位置: ' + dy);

        if(workPosY < dy)
        {
            $('.work-block > section').addClass('fade-in');
        }
    });

    /**
     * モーダル
     */
    // 1. 画像パスの配列準備
    var imageSrcArray = [
        'img/work01.png', //0番目
        'img/work02.png', //1番目
        'img/work03.png', //2番目
    ];

    // 2. .work-block sectionクリック時
    $('.work-block > section').on('click', function(){
        // 3. sectionの何番目を押したか判定
        var index = $(this).index();
        console.log(index + '番目をクリックしたよ');

        // 4. modalに入るHTML作成
        var modalContent = '<figure class="modal"><img src="' + imageSrcArray[index] + '" alt=""></figure>';

        // 5. #overlayの中のHTMLを書き換え、.fade-inを追加
        // $('#overlay').html(modalContent);
        // $('#overlay').addClass('fade-in');
        $('#overlay').html(modalContent).addClass('fade-in');

        // 6. #overlayを再度クリックした時、.fade-inを削除
        $('#overlay').on('click', function(){
            $('#overlay').removeClass('fade-in');
        });
    });
});