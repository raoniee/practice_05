$(function () {
    $('.subMenu .submenu_map button').on('click', function () {
        $(this).toggleClass('on');
        $(this).parent().siblings().find('button').removeClass('on');


        $(this).next().toggleClass('on');
        $(this).parent().siblings().find('ul').removeClass('on');
    })
})