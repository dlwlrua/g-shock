$(document).ready(function(){



    //헤더더영역 숨기거나 나타나게 하기
    //화면 스크롤이 진행되면 true, 아니면 false
    var didScroll;
    //화면 위쪽 위치값
    var lastScrollTop = 0;
    //화면 스크롤 방향을 나타내는 변수
    var delta = 5;
    //header 영역의높이값
    var navbarHeight = $('.header').outerHeight();
    //본문 영역의 안쪽 위여백을 header의 높이만큼 설정
    $('.section').css('padding-top',navbarHeight);
    //window화면에 스크롤 이벤트 설정
    $(window).scroll(function(event){
        didScroll = true;
    });
    //0.25초동안 실행함.(만약 스크롤이 진행되면 hasScrolled함수 호출)
    setInterval(function() {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);
    //hasScrolled함수 선언
    function hasScrolled() {
        //st변수에 body문서의 맨 위쪽 위치값을 저장
        var st = $(this).scrollTop();
        
        //화면 스크롤 방향이 같은 방향이면 header는 움직임 없음
        if(Math.abs(lastScrollTop - st) <= delta)
            return;
        
        //화면 스크롤 방향이 달라지는지 감지하는 조건문
        if (st > lastScrollTop && st > navbarHeight){
            // Scroll Down
            $('.header').removeClass('header-down').addClass('header-up');
        } else {
            // Scroll Up
            if(st + $(window).height() < $(document).height()) {
                $('.header').removeClass('header-up').addClass('header-down');
            }
        }
        
        lastScrollTop = st;
    }













    //햄버거 메뉴 버튼
    $('.menu_btn').click(function(){
        $('.nav').animate({'right':0});
    });
    //닫기 버튼
    $('.close').click(function(){
        $('.nav').animate({'right':'-100vw'});
    });







    $('.nav nav > ul > li > a').click(function(e){
        e.preventDefault();
        //만약 클릭한 주메뉴에 active가 설정되어 있지 않으면
        //attr() : 객체의 속성을 인식하는 메서드
        if($(this).attr('class') !='active') {
            $('.nav nav > ul > li > a').removeClass('active');
            $(this).addClass('active');
            $('.sub').stop().slideUp();
            $(this).next().stop().slideToggle();
        }else{
            $(this).removeClass('active');
            $(this).next().stop().slideUp();
        }
    });


    //메인 슬라이더
    var swiper = new Swiper(".mySwiper", {
        cssMode: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
        el: ".swiper-pagination",
        clickable: true,
        },
        mousewheel: {
            invert: false,
        },
        loop: true
        
    });

    //스페셜 슬라이더
    var swiper2 = new Swiper(".mySwiper2", {
        cssMode: true,
        navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        },
        loop: true,
        mousewheel: {
            invert: false,
        },
        // slidesPerGroup: 2,
        
    });

    //탭메뉴
    $('.tab_content > div').hide();
    $('.con1').show();
    $('.t1').click(function(){
        $('.con1').fadeIn();
        $('.con2').hide();
        $('.t1').addClass('active');
        $('.t2').removeClass('active');
    });
    $('.t2').click(function(){
        $('.con2').fadeIn();
        $('.con1').hide();
        $('.t1').removeClass('active');
        $('.t2').addClass('active');
    });
    

    //이미지 갤러리

    var
         // ACTIVITY INDICATOR

         activityIndicatorOn = function()
         {
            $( '<div id="imagelightbox-loading"><div></div></div>' ).appendTo( 'body' );
         },
         activityIndicatorOff = function()
         {
            $( '#imagelightbox-loading' ).remove();
         },


         // OVERLAY

         overlayOn = function()
         {
            $( '<div id="imagelightbox-overlay"></div>' ).appendTo( 'body' );
         },
         overlayOff = function()
         {
            $( '#imagelightbox-overlay' ).remove();
         },


         // CLOSE BUTTON

         closeButtonOn = function( instance )
         {
            $( '<button type="button" id="imagelightbox-close" title="Close"></button>' ).appendTo( 'body' ).on( 'click touchend', function(){ $( this ).remove(); instance.quitImageLightbox(); return false; });
         },
         closeButtonOff = function()
         {
            $( '#imagelightbox-close' ).remove();
         }

      arrowsOn = function( instance, selector )
         {
            var $arrows = $( '<button type="button" class="imagelightbox-arrow imagelightbox-arrow-left"></button><button type="button" class="imagelightbox-arrow imagelightbox-arrow-right"></button>' );

            $arrows.appendTo( 'body' );

            $arrows.on( 'click touchend', function( e )
            {
               e.preventDefault();

               var $this   = $( this ),
                  $target   = $( selector + '[href="' + $( '#imagelightbox' ).attr( 'src' ) + '"]' ),
                  index   = $target.index( selector );

               if( $this.hasClass( 'imagelightbox-arrow-left' ) )
               {
                  index = index - 1;
                  if( !$( selector ).eq( index ).length )
                     index = $( selector ).length;
               }
               else
               {
                  index = index + 1;
                  if( !$( selector ).eq( index ).length )
                     index = 0;
               }

               instance.switchImageLightbox( index );
               return false;
            });
         },
         arrowsOff = function()
         {
            $( '.imagelightbox-arrow' ).remove();
         };
      
      var selectorF = 'a[data-imagelightbox="f"]';
        var instanceF = $( selectorF ).imageLightbox(
         {
            onStart:      function() { overlayOn(); closeButtonOn( instanceF ); arrowsOn( instanceF, selectorF ); },
            onEnd:         function() { overlayOff();  closeButtonOff(); arrowsOff(); activityIndicatorOff(); },
            onLoadEnd:       function() { activityIndicatorOff(); $( '.imagelightbox-arrow' ).css( 'display', 'block' ); }
         });










});//ready end