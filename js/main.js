$(function () {
    $(window).on('wheel', function (event) {
        var wdY = event.originalEvent.deltaY;
        // console.log(event.originalEvent.deltaY)
        if (wdY > 0) {
            $('.header').addClass('on')
        }
        else {
            $('.header').removeClass('on')
        }
    })

    $(window).on('scroll', function () {
        var scrValue = $(window).scrollTop();
        // console.log(scrValue)
        if (scrValue == 0) {
            $('.header').removeClass('on')
        }
    })

    $('.totop').on('click', function () {
        $('html,body').animate({ scrollTop: 0 }, 800)
    })

    var barWidth = $('.order_bar').width();
    // console.log(barWidth);

    $('.mainVisual .main_slides .main_slide_itms').on('init afterChange', function (e, s, c) {
        // console.log(c);
        $('.mainVisual .main_slides .main_slide_desc .slogan').eq(c).addClass('on').siblings().removeClass('on');
        $('.num').text(c ? c + 1 : 1);

        var bw = barWidth / s.slideCount;
        $('.order_bar span').css({ width: bw })
        $('.order_bar span').css({ width: bw * (c + 1) })

    });



    $('.mainVisual .main_slides .main_slide_itms').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true,
        // speed: 5000,
    })



    $('.main_slide_order>ul>li:nth-child(1)>i').on('click', function () {
        $('.mainVisual .main_slides .main_slide_itms').slick('slickPrev')
    })
    $('.main_slide_order>ul>li:nth-child(3)>i').on('click', function () {
        $('.mainVisual .main_slides .main_slide_itms').slick('slickNext')
    })

    var sw = true;
    $('.mainVisual .main_slides .main_slide_order .toggle').on('click', function () {
        if (sw) {
            $('.mainVisual .main_slides .main_slide_itms').slick('slickPlay');
        }
        else {
            $('.mainVisual .main_slides .main_slide_itms').slick('slickPause');
        }
        $(this).toggleClass('on');

        sw = !sw;
    })

    $('.footer .site_group button').on('click', function () {

        $(this).next().toggleClass('on')
        $(this).parent().siblings().find('ul').removeClass('on')
    })


    $(document).on('click', function (e) {
        //console.log(e.target, $(e.target), $('button'));
        console.log($(e.target)[0] == $('.footer .site_group button')[0]);
        if ($(e.target)[0] != $('.footer .site_group button')[0]) {
            $('.footer .site_group button').removeClass('on')
        }
    })






})