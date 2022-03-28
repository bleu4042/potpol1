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
    }

$('.left-slider > .slider-wrap > .slider-control > .left-btn').click(function(e){
    var $clicked = $(this);
    var $slider = $(this).closest('.slider-wrap');
    
    var index = $(this).index();
    var isLeft = index == 0;
    // console.log(index);
    
    var $current = $slider.find(' > .slider-content > .left-slide.sliding');
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
            $post = $slider.find(' > .slider-content > .left-slide:last-child');
        }
        else {
            $post = $slider.find(' > .slider-content > .left-slide:first-child');
        }
    }
    
    $current.removeClass('sliding');
    $post.addClass('sliding');
    
    updateCurrentPageNumber77();
});

setInterval(function(){
    $('.left-slider > .slider-wrap > .slider-control > .left-next').click();
}, 10000);
function pageNumber__Init77(){
    var totalSlideNo77 = $('.left-slider > .slider-wrap > .slider-content > .left-slide').length;
    
    $('.left-slider > .slider-wrap').attr('data-slide-total77', totalSlideNo77);
    $('.left-slider > .slider-wrap > .slider-content > .left-slide').each(function(index, node){
        $(node).attr('data-slide-no77', index + 1);
    });
};

pageNumber__Init77();

function updateCurrentPageNumber77(){
    var totalSlideNo77 = $('.left-slider > .slider-wrap').attr('data-slide-total77');
    var currentSlideNo77 = $('.left-slider > .slider-wrap > .slider-content > .left-slide.sliding').attr('data-slide-no77');
    
    $('.left-slider > .slider-wrap > .slider-control > .slide-num > .left-total').html(totalSlideNo77);
    $('.left-slider > .slider-wrap > .slider-control > .slide-num > .left-count').html(currentSlideNo77);
};


    var $indicate = $('.click-indicator')

updateCurrentPageNumber77()

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

$(function() {
    $(".vid-container").each(function(){
        // 변수의 준비
        let $container = $(this),
            $slideGroup = $container.find(".vid-sliders"),
            $slides = $slideGroup.find(".vid-slide"),
            $nav = $container.find(".vid-nav"),
            $indicator = $container.find(".vid-indicator"),
            //0. 슬라이드 쇼의 각 요소의 제이쿼리 객체
            //1. 슬라이드 쇼 전체 컨테이너
            //2. 모든 슬라이드의 정리( 슬라이드 그룹 )
            //3. 각 슬라이드
            //4. 네비게이션 ( prev / next )
            //5. 인디게이터 (점)

            slideCount = $slides.length,
            indicatorHTML = "",
            currentIndex = 0,
            duration= 500,
            easing= "linear",
            interval = 7000,
            timer;

            // 슬라이드 점수
            // 인디게이터 콘텐츠
            //  현재 슬라이드의 인덱스
            // 다음 슬라이드에 애니메이션의 작동 소요시간
            // 다음 슬라이드의 애니메이션의 이징의 종류
            // 자동으로 다음 슬라이드로 옮길 때까지의 시간
            // 타이머

            // HTML 요소의 배치 생성 삽입
            //-----------------------------------------------------

            // 각 슬라이더의 위치를 결정하고,
            // 해당 인디게이터의 앵커를 생성

            $slides.each(function(i) {
                $(this).css({left:100 * i + "%"});
                indicatorHTML += "<a href='#'>" + (i+1) + "</a>";
            });

            //인디게이터에 콘텐츠를 삽입
            $indicator.html(indicatorHTML);

            //함수의 정의
            //--------------------------------------------------------------

            // 모든 슬라이드를 표시하는 함수

            function goToSlide (index) {
                // 슬라이드 그룹을 대상 위치에 맞게 이동
                $slideGroup.animate({left: -100 * index + "%"}, duration, easing);
                // 현재 슬라이드의 인덱스를 덮어쓰기
                currentIndex = index;
                // 탐색 및 표시 상태를 업데이트

                updateNav();
            }
            
            // 슬라이드의 상태에 따라 탐색 및 표시를 업데이트하는 함수

            function updateNav(){
                    // 현재 슬라이드의 표시를 해제
                    $indicator.find("a").removeClass("active").eq(currentIndex).addClass("active");

                    // 타이머를 시작하는 함수
            }
                    function startTimer(){
                        // 변수 interval에서 설정 한 시간이 경과 할 때마다 작업을 수행
                        timer = setInterval(function(){
                            // 현재 슬라이드의 인덱스에 따라 다음 표시할 슬라이드의 결정
                            // 만약에 마지막 슬라이드라면 첫 번째 슬라이드에

                            var nextIndex = (currentIndex + 1) % slideCount;
                            

                            goToSlide(nextIndex);

                        }, interval);
                    }

                    // 타이머를 중지하는 함수 
                    function stopTimer(){
                        clearInterval(timer);
                    }

                    // 네비게이션 링크를 클릭하면 해당 슬라이드를 표시하는 부분
                    
                    
                    $nav.on("click", "button", function(e){
                        newIndex = 0;
                        e.preventDefault();
                        if($(this).hasClass("prev-btn")){
                            goToSlide(currentIndex - 1);
                        }                                                        
                        else {
                            goToSlide(currentIndex + 1);
                        }
                    });
                    newIndex = 0

                    

                    //인디게이터의 링크를 클릭하면 해당 슬라이드를 표시
                    $indicator.on("click","a", function(e){
                        e.preventDefault();
                        if(!$(this).hasClass("active")){
                            goToSlide($(this).index());
                        }
                    });

                // 마우스오버를 하면 타이머를 정지 그렇지 않으면 시작

                $container.on({
                    mouseenter: stopTimer,
                    mouseleave: startTimer
                });                                                
                

                // 슬라이스 쇼 시작
                //-----------------------------------------------

                goToSlide(currentIndex);

                startTimer();
                                                                

    });
});

$(function() {
    $(".class-content").each(function(){
        // 변수의 준비
        let $container = $(this),
            $slideGroup = $container.find(".class-sliders"),
            $slides = $slideGroup.find(".class-slide"),
            $nav = $container.find(".class-nav"),
            $indicator = $container.find(".class-indicator"),
            //0. 슬라이드 쇼의 각 요소의 제이쿼리 객체
            //1. 슬라이드 쇼 전체 컨테이너
            //2. 모든 슬라이드의 정리( 슬라이드 그룹 )
            //3. 각 슬라이드
            //4. 네비게이션 ( prev / next )
            //5. 인디게이터 (점)

            slideCount = $slides.length,
            indicatorHTML = "",
            currentIndex = 0,
            duration= 300,
            easing= "linear",
            interval = 7000,
            timer;

            // 슬라이드 점수
            // 인디게이터 콘텐츠
            //  현재 슬라이드의 인덱스
            // 다음 슬라이드에 애니메이션의 작동 소요시간
            // 다음 슬라이드의 애니메이션의 이징의 종류
            // 자동으로 다음 슬라이드로 옮길 때까지의 시간
            // 타이머

            // HTML 요소의 배치 생성 삽입
            //-----------------------------------------------------

            // 각 슬라이더의 위치를 결정하고,
            // 해당 인디게이터의 앵커를 생성

            $slides.each(function(i) {
                $(this).css({left:100 * i + "%"});
                indicatorHTML += "<a href='#'>" + (i+1) + "</a>";
            });

            //인디게이터에 콘텐츠를 삽입
            $indicator.html(indicatorHTML);

            //함수의 정의
            //--------------------------------------------------------------

            // 모든 슬라이드를 표시하는 함수

            function goToSlide (index) {
                // 슬라이드 그룹을 대상 위치에 맞게 이동
                $slideGroup.animate({left: -200 * index + "%"}, duration, easing);
                // 현재 슬라이드의 인덱스를 덮어쓰기
                currentIndex = index;
                // 탐색 및 표시 상태를 업데이트

                updateNav();
            }
            
            // 슬라이드의 상태에 따라 탐색 및 표시를 업데이트하는 함수

            function updateNav(){
                    // 현재 슬라이드의 표시를 해제
                    $indicator.find("a").removeClass("slidee").eq(currentIndex).addClass("slidee");

                    // 타이머를 시작하는 함수
            }
                    function startTimer(){
                        // 변수 interval에서 설정 한 시간이 경과 할 때마다 작업을 수행
                        timer = setInterval(function(){
                            // 현재 슬라이드의 인덱스에 따라 다음 표시할 슬라이드의 결정
                            // 만약에 마지막 슬라이드라면 첫 번째 슬라이드에

                            var nextIndex = (currentIndex + 1) % slideCount;
                            

                            goToSlide(nextIndex);

                        }, interval);
                    }

                    // 타이머를 중지하는 함수 
                    function stopTimer(){
                        clearInterval(timer);
                    }

                    // 네비게이션 링크를 클릭하면 해당 슬라이드를 표시하는 부분
                    
                    
                    $nav.on("click", "button", function(e){
                        newIndex = 0;
                        e.preventDefault();
                        if($(this).hasClass("prev-butn")){
                            goToSlide(currentIndex - 1);
                        }                                                        
                        else {
                            goToSlide(currentIndex + 1);
                        }
                    });
                    newIndex = 0

                    

                    //인디게이터의 링크를 클릭하면 해당 슬라이드를 표시
                    $indicator.on("click","a", function(e){
                        e.preventDefault();
                        if(!$(this).hasClass("slidee")){
                            goToSlide($(this).index());
                        }
                    });

                // 마우스오버를 하면 타이머를 정지 그렇지 않으면 시작

                $container.on({
                    mouseenter: stopTimer,
                    mouseleave: startTimer
                });                                                
                

                // 슬라이스 쇼 시작
                //-----------------------------------------------

                goToSlide(currentIndex);

                startTimer();
                                                                

    });
});