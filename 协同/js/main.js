;
(function () {
  var p = 0;
  var t = 0;
  $('section').scroll(function (e) {
    p = $(this).scrollTop();
    if (t <= p) {
      $('body').removeClass('hide-nav').addClass('show-nav')
    } else {
      $('body').addClass('hide-nav').removeClass('show-nav')
    }
    setTimeout(function () {
      t = p;
    }, 0);
  })
})();
;(function(){
  if ($('.swiper-container').length) {
    var index = 0;
    var swiper = new Swiper('.swiper-container', {
      onSlideChangeEnd: function (swiper) {
        index = swiper.activeIndex;
        $('.tab-bar span').eq(index).addClass('active').siblings().removeClass('active')
      }
    });
    $('.tab-bar span').click(function(){
      $(this).addClass('active').siblings().removeClass('active');
      swiper.slideTo($(this).index())
    })
  }
})()
;(function(){
  $('.icon-menu').click(function(){
    $('body').toggleClass('show-drawer show-mask');
  })
})()
;(function(){
  $('.menu').click(function(){
    $('body').addClass('show-page');
  })
  $('.back').click(function(){
    if ($(this).parents('.scroll').length) {
      $('body').removeClass('show-page')
    } else {
      window.history.go(-1);
    }
    return false;
  })
})()
;(function(){
  $('.link').click(function(){
    window.location.href= $(this).attr('href');
  })
})()
// (function () {
//   if (document.getElementById('swiper')) {
//     var index = 0;
//     var wid = [];
//     var total = 0;
//     var mi = 0;
//     $('.tab-bar span').each(function () {
//       wid.push($(this).width());
//     })
//     console.log(wid);
//     renderTab(index);
//     var swiper = new Swiper('#swiper', {
//       onSlideChangeEnd: function (swiper) {
//         index = swiper.activeIndex;
//         renderTab(index)
//       }
//     });
//     $('.tab-bar span').click(function () {
//       index = $(this).index();
//       renderTab(index)
//     })

//     function renderTab(index) {
//       var ol = $('.tab-bar span').eq(index).offset().left;
//       var iw = $('.tab-bar span').eq(index).width();
//       var w = $('body').width();
//       $('.tab-bar span').eq(index).addClass('active').siblings().removeClass('active');
//       $('.tab-bar .bar').width(wid[index])
//       console.log(ol)
//       if (ol + iw > w) {
//         total += iw + ol - w;
//         $('.tab-bar .inner').css({
//           'left': -total
//         });
//         $('.tab-bar .bar').css({
//           'left': w - wid[index]
//         });
//         if (index === $('.tab-bar span').length) {
//           mi = 0;
//         }
//       } else if (ol < 0) {
//         mi += ol;
//         console.log(mi)
//         $('.tab-bar .bar').css({
//           'left': 0
//         });
//         $('.tab-bar .inner').css({
//           'left': -(total + mi)
//         });
//         if (index === 0) {
//           total = 0;
//         }
//       } else {
//         $('.tab-bar .bar').css({
//           'left': $('.tab-bar .active').offset().left
//         });
//         if (ol > 0 && ol + iw > w) {
//           mi=total=0;
//         }
//       }
//     }
//   }
// })()