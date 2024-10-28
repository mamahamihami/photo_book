$(function () {
  $('.hamburger-menu').on('click', function () {
    $('.hamburger-menu').toggleClass('hamburger-menu--open');
    $('.header').toggleClass('header--open');
  });
});

$(document).ready(function () {
  // 画像の切り替えに使う画像のパス
  const firstImage = 'img/logo-r.svg';
  const secondImage = 'img/logo-w.svg';

  $('#js-hamburger-menu').click(function () {
    // 画像要素を取得
    const currentSrc = $('.top-img').attr("src"); // 画像のsrcを取得

    // 現在の画像が firstImage の場合、 secondImage に切り替え、そうでなければ firstImage に戻す
    if (currentSrc === firstImage) {
      $('.top-img').attr("src", secondImage); // 画像をsecondImageに変更
    } else {
      $('.top-img').attr("src", firstImage); // 画像をfirstImageに変更
    }
  });
});

$(document).ready(function() {
  $(window).on('scroll', function() {
    var scrollPosition = $(window).scrollTop();
    var elementPosition = $('#reason').offset().top - $(window).height() / 2;

    if (scrollPosition > elementPosition) {
      $('.reason-parent').addClass('show');
    }
  });
});

$(document).ready(function () {
  $(window).on('scroll', function () {
    var scrollPosition = $(window).scrollTop();
    var voicePosition = $('#voice').offset().top - $(window).height() / 2;

    if (scrollPosition > voicePosition) {
      $('#voice .voice-left, #voice .voice-right').each(function (index) {
        var $this = $(this);
        setTimeout(function () {
          $this.addClass('show'); // 順番にshowクラスを追加
        }, index * 500); // 500msの遅延を設定
      });
    }
  });
});

