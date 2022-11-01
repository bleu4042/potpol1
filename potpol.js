window.onscroll = function(){scrollfunction()}

function scrollfunction(){
    let winscroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winscroll / height) * 100;

    document.getElementById("scrollbar").style.width = scrolled + "%"

    if(document.documentElement.scrollTop > 20) {
        document.getElementById("fixbar").classList.add("fixed")
    }
    else {
        document.getElementById("fixbar").classList.remove("fixed");
    }

    if(document.documentElement.scrollTop > 900) {
        aside.classList.add("fixTo")
    }
    else {
        aside.classList.remove("fixTo")
        }
    };


var bullet = ["신규 대륙 플레체 UPDATE", "스트릿 모코코 패키지 출시!", "플레체 아트투어", "11월 출석 이벤트", "로스트아크 카드, 계속되는 기분좋은 혜택", "PC방 해피위크 PLUS", "2022 자유분야 공모전 발표", "고딕 아바타 패키지"];
var galleryTop = new Swiper(".fadeslide", {
  spaceBetween: 10,  
  preventClicks: true,
  preventClicksPropagation: false,

  navigation: {
    nextEl: ".left-next",
    prevEl: ".left-prev",
  },
  pagination: {
    el: ".pagination_bullet",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + bullet[index] + "</span>";
    },
  },
});

var pagingSwiper = new Swiper(".fadeslide", {
    spaceBetween: 10,
    effect: "fade", 

  pagination: {
    el: ".pagination_progress",
    type: "fraction",
  },
});

galleryTop.controller.control = pagingSwiper; //버튼 두개 연동한거임

  var $snbSwiperItem = $('.pagination_bullet span');
  var $snbSwiperItem2 = $('.left-next');
  var $snbSwiperItem3 = $('.left-prev');
  let num = 0

  $snbSwiperItem.click(function(){
      var target = $(this);
      $snbSwiperItem.removeClass('on')
      target.addClass('on');
      muCenter(target);
  })

  $snbSwiperItem2.click(function(){
    num++;
    num%8;
    if(num <= 4) {
      $(".pagination_bullet").css({
      transform:"translate3d("+ (-200*num) +"px, 0, 0)"
      })
    }
    console.log(num)
  })

  $snbSwiperItem3.click(function(){
    num--;
    num%8;
    if(num == 0 || num == -1) {
        num = 0;
      $(".pagination_bullet").css({
      transform:"translate3d("+ (0) +"px, 0, 0)"
      })
    }
    else if(num == 1 || num == 0) {
        $(".pagination_bullet").css({
            transform:"translate3d("+ (730) +"px, 0, 0)"
            })  
    }
    else if(num == 2 || num == 1) {
        $(".pagination_bullet").css({
            transform:"translate3d("+ (2) +"px, 0, 0)"
            })  
    }
    else if(num == 3 || num == 2) {
        $(".pagination_bullet").css({
            transform:"translate3d("+ (3) +"px, 0, 0)"
            })  
    }
    else if(num == 4 || num == 3) {
        $(".pagination_bullet").css({
            transform:"translate3d("+ (4) +"px, 0, 0)"
            })  
    }
    else if(num == 5 || num == 4) {
        $(".pagination_bullet").css({
            transform:"translate3d("+ (5) +"px, 0, 0)"
            })  
    }
    else if(num == 6 || num == 5) {
        $(".pagination_bullet").css({
            transform:"translate3d("+ (6) +"px, 0, 0)"
            })  
    }
    else if(num == 7 || num == 6) {
        $(".pagination_bullet").css({
            transform:"translate3d("+ (7) +"px, 0, 0)"
            })  
    }
  })

  function muCenter(target){
      var snbwrap = $('.pagination_bullet');
      var targetPos = target.position();
      var box = $('.pagination_bullet_wrapper');
      var boxHarf = box.width()/2;
      var pos;
      var listWidth=0;
      
      snbwrap.each(function(){ 
        listWidth += $(this).outerWidth(true); 
      })
      
      var selectTargetPos = targetPos.left + target.outerWidth()/4;
      if (selectTargetPos <= boxHarf) { // left
          pos = 0;
      }else if ((listWidth - selectTargetPos) <= boxHarf) { //right
          pos = listWidth-box.width();
      }else {
          pos = selectTargetPos - boxHarf-60; //이상하게 움직이면 50숫자조절
      }
      
      setTimeout(function(){snbwrap.css({
          "transform": "translate3d("+ (pos*-1) +"px, 0, 0)",
      })}, 200);
  };



$('.main-bn > .slider > .page-info > .page-btn').click(function(){
    var $clicked = $(this);
    var $slider = $(this).closest('.slider');
    
    var index = $(this).index();
    var isLeft = index == 0;
    // console.log(index);
    
    var $current = $slider.find(' > .slides > .bn.active');
    var $post;
    
    if ( isLeft ){
        $post = $current.prev();
    }
    else {
        $post = $current.next();
    }
    // console.log($post.length);
    
    if ( $post.length == 0 ){
        if ( isLeft ){
            $post = $slider.find(' > .slides > .bn:last-child');
        }
        else {
            $post = $slider.find(' > .slides > .bn:first-child');
        }
    }
    
    $current.removeClass('active');
    $post.addClass('active');
    
    updateCurrentPageNumber();
});

setInterval(function(){
    $('.main-bn > .slider > .page-info > .next-btn').click();
}, 10000);

// 슬라이더 페이지 번호 지정
function pageNumber__Init(){
    // 전채 배너 페이지 갯수 세팅해서 .slider 에 'data-slide-total' 넣기
    var totalSlideNo = $('.main-bn > .slider > .slides > .bn').length;
    //console.log(totalSlideNo);
    
    $('.main-bn > .slider').attr('data-slide-total', totalSlideNo);
    
    // 각 배너 페이지 번호 매기기
    $('.main-bn > .slider > .slides > .bn').each(function(index, node){
        $(node).attr('data-slide-no', index + 1);
    });
};

pageNumber__Init();

// 슬라이더 이동시 페이지 번호 변경
function updateCurrentPageNumber(){
    var totalSlideNo = $('.main-bn > .slider').attr('data-slide-total');
    var currentSlideNo = $('.main-bn > .slider > .slides > .bn.active').attr('data-slide-no');
    
    $('.main-bn > .slider > .page-info > .page-no > .total-slide-no').html(totalSlideNo);
    $('.main-bn > .slider > .page-info > .page-no > .current-slide-no').html(currentSlideNo);
};

updateCurrentPageNumber() 


$('.update-main-bn > .update-slider > .up-page-info > .up-page-btn').click(function(){
    var $clicked = $(this);
    var $slider = $(this).closest('.update-slider');
    
    var index = $(this).index();
    var isLeft = index == 0;
    //console.log(index);
    
    var $current = $slider.find(' > .update-slides > .up-bn.move');
    var $post;
    
    if ( isLeft ){
        $post = $current.prev();
    }
    else {
        $post = $current.next();
    }
    //console.log($post.length);
    
    if ( $post.length == 0 ){
        if ( isLeft ){
            $post = $slider.find(' > .update-slides > .up-bn:last-child');
        }
        else {
            $post = $slider.find(' > .update-slides > .up-bn:first-child');
        }
    }
    
    $current.removeClass('move');
    $post.addClass('move');
    
    updateCurrentPageNumber2();
});

setInterval(function(){
    $('.update-main-bn > .update-slider > .up-page-info > .up-next-btn').click();
}, 10000);

// 슬라이더 페이지 번호 지정
function pageNumber__Init2(){
    // 전채 배너 페이지 갯수 세팅해서 .slider 에 'data-slide-total' 넣기
    var totalSlideNo2 = $('.update-main-bn > .update-slider > .update-slides > .up-bn').length;
    //console.log(totalSlideNo);
    
    $('.update-main-bn > .update-slider').attr('data-slide-total2', totalSlideNo2);
    
    // 각 배너 페이지 번호 매기기
    $('.update-main-bn > .update-slider > .update-slides > .up-bn').each(function(index, node){
        $(node).attr('data-slide-no2', index + 1);
    });
};

pageNumber__Init2();

// 슬라이더 이동시 페이지 번호 변경
function updateCurrentPageNumber2(){
    var totalSlideNo2 = $('.update-main-bn > .update-slider').attr('data-slide-total2');
    var currentSlideNo2 = $('.update-main-bn > .update-slider > .update-slides > .up-bn.move').attr('data-slide-no2');
    
    $('.update-main-bn > .update-slider > .up-page-info > .up-page-no > .up-total-slide-no').html(totalSlideNo2);
    $('.update-main-bn > .update-slider > .up-page-info > .up-page-no > .up-current-slide-no').html(currentSlideNo2);
};

updateCurrentPageNumber2()

 $('.guide-main-bn > .guide-slider > .gd-page-info > .gd-page-btn').click(function(){
    var $clicked = $(this);
    var $slider = $(this).closest('.guide-slider');
    
    var index = $(this).index();
    var isLeft = index == 0;
    //console.log(index);
    
    var $current = $slider.find(' > .guide-slides > .gd-bn.move');
    var $post;
    
    if ( isLeft ){
        $post = $current.prev();
    }
    else {
        $post = $current.next();
    }
    //console.log($post.length);
    
    if ( $post.length == 0 ){
        if ( isLeft ){
            $post = $slider.find(' > .guide-slides > .gd-bn:last-child');
        }
        else {
            $post = $slider.find(' > .guide-slides > .gd-bn:first-child');
        }
    }
    
    $current.removeClass('move');
    $post.addClass('move');
    
    guideCurrentPageNumber3();
});

setInterval(function(){
    $('.guide-main-bn > .guide-slider > .gd-page-info > .gd-next-btn').click();
}, 10000);

// 슬라이더 페이지 번호 지정
function pageNumber__Init3(){
    // 전채 배너 페이지 갯수 세팅해서 .slider 에 'data-slide-total' 넣기
    var totalSlideNo3 = $('.guide-main-bn > .guide-slider > .guide-slides > .gd-bn').length;
    //console.log(totalSlideNo);
    
    $('.guide-main-bn > .guide-slider').attr('data-slide-total3', totalSlideNo3);
    
    // 각 배너 페이지 번호 매기기
    $('.guide-main-bn > .guide-slider > .guide-slides > .gd-bn').each(function(index, node){
        $(node).attr('data-slide-no3', index + 1);
    });
};

pageNumber__Init3();

// 슬라이더 이동시 페이지 번호 변경
function guideCurrentPageNumber3(){
    var totalSlideNo3 = $('.guide-main-bn > .guide-slider').attr('data-slide-total3');
    var currentSlideNo3 = $('.guide-main-bn > .guide-slider > .guide-slides > .gd-bn.move').attr('data-slide-no3');
    
    $('.guide-main-bn > .guide-slider > .gd-page-info > .gd-page-no > .gd-total-slide-no').html(totalSlideNo3);
    $('.guide-main-bn > .guide-slider > .gd-page-info > .gd-page-no > .gd-current-slide-no').html(currentSlideNo3);
};

guideCurrentPageNumber3()

$('.letter-main-bn > .letter-slider > .letr-page-info > .letr-page-btn').click(function(){
    var $clicked = $(this);
    var $slider = $(this).closest('.letter-slider');
    
    var index = $(this).index();
    var isLeft = index == 0;
    //console.log(index);
    
    var $current = $slider.find(' > .letter-slides > .letr-bn.move');
    var $post;
    
    if ( isLeft ){
        $post = $current.prev();
    }
    else {
        $post = $current.next();
    }
    //console.log($post.length);
    
    if ( $post.length == 0 ){
        if ( isLeft ){
            $post = $slider.find(' > .letter-slides > .letr-bn:last-child');
        }
        else {
            $post = $slider.find(' > .letter-slides > .letr-bn:first-child');
        }
    }
    
    $current.removeClass('move');
    $post.addClass('move');
    
    letterCurrentPageNumber4();
});

setInterval(function(){
    $('.letter-main-bn > .letter-slider > .letr-page-info > .letr-next-btn').click();
}, 10000);

// 슬라이더 페이지 번호 지정
function pageNumber__Init4(){
    // 전채 배너 페이지 갯수 세팅해서 .slider 에 'data-slide-total' 넣기
    var totalSlideNo4 = $('.letter-main-bn > .letter-slider > .letter-slides > .letr-bn').length;
    //console.log(totalSlideNo);
    
    $('.letter-main-bn > .letter-slider').attr('data-slide-total4', totalSlideNo4);
    
    // 각 배너 페이지 번호 매기기
    $('.letter-main-bn > .letter-slider > .letter-slides > .letr-bn').each(function(index, node){
        $(node).attr('data-slide-no4', index + 1);
    });
};

pageNumber__Init4();

// 슬라이더 이동시 페이지 번호 변경
function letterCurrentPageNumber4(){
    var totalSlideNo4 = $('.letter-main-bn > .letter-slider').attr('data-slide-total4');
    var currentSlideNo4 = $('.letter-main-bn > .letter-slider > .letter-slides > .letr-bn.move').attr('data-slide-no4');
    
    $('.letter-main-bn > .letter-slider > .letr-page-info > .letr-page-no > .letr-total-slide-no').html(totalSlideNo4);
    $('.letter-main-bn > .letter-slider > .letr-page-info > .letr-page-no > .letr-current-slide-no').html(currentSlideNo4);
};

letterCurrentPageNumber4()

  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,

    pagination: {
      el: ".vid-indicator",
      clickable: true,
    },
    navigation: {
      nextEl: ".next-btn",
      prevEl: ".prev-btn",
    },
  });

  var swiper = new Swiper(".class-container", {
    spaceBetween: 30,
    centeredSlides: true,
    
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,      
    },
    pagination: {
      el: ".class-indicator",
      clickable: true,
    },
    navigation: {
      nextEl: ".next-butn",
      prevEl: ".prev-butn",
    },
  });