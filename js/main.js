$(window).scroll(function (e) {
    const wScroll = $(this).scrollTop();
    $(".scroll").text(wScroll);
});

$(function () {
    let cont01 = $('.box01');
    let cont02 = $('.box02');
    let cont03 = $('.box03');
    let cont04 = $('.box04');

    let sec04 = $('.sec04');

    cont01.hover(function () {
        cont01.addClass("hover"); {
            $(".sec04-bg01").addClass("on");
        }
    }, function () {
        cont01.removeClass("hover");
        $(".sec04-bg01").removeClass("on");
    });

    cont02.hover(function () {
        cont02.addClass("hover");
        $(".sec04-bg02").addClass("on");
    }, function () {
        cont02.removeClass("hover");
        $(".sec04-bg02").removeClass("on");
    });

    cont03.hover(function () {
        cont03.addClass("hover");
        $(".sec04-bg03").addClass("on");
    }, function () {
        cont03.removeClass("hover");
        $(".sec04-bg03").removeClass("on");
    });

    cont04.hover(function () {
        cont04.addClass("hover");
        $(".sec04-bg04").addClass("on");
    }, function () {
        cont04.removeClass("hover");
        $(".sec04-bg04").removeClass("on");
    });
});

$(window).scroll(function () {

    let nav = $('.nav');
    let navTop = nav.offset().top;

    let documentHeight = $(document).offset.height;

    let wScroll = $(this).scrollTop();
    let section05 = $('#section05');
    let section05top = section05.offset().top;

    const headerBg = document.querySelector('header');

    if(wScroll >= section05top - 500) {
       $('.sec05').addClass('on');
    }else {
        $('.sec05').removeClass('on');

    }
    if (wScroll >= section05top) {
        $('#footer').addClass('fixed');
    } else {
        $('#footer').removeClass('fixed');
    }
    if (wScroll >= 100) {
        headerBg.classList.add('active');
    }else {
        headerBg.classList.remove('active');
    }
});

$(window).load(function () {
    $('body').removeClass('before-load');
    setTimeout(function () {
        $(".loading").remove();
    }, 300);
    nav();
    $(window).scroll(function () {
        nav();
    })
});

function nav() {
    var winTop = $(window).scrollTop(),
        htmlH = $("html").height() - $(window).height() - $("#footer").height(),
        winW = $(window).width();

    if (winTop > htmlH && winW > 1024) {
        $(".nav").css("margin-top", "-" + (winTop - htmlH) + "px");
    } else {
        $(".nav").css("margin-top", "0px");

    }
};
    window.addEventListener('resize', () => {
        window.location.reload();
    });
$(".nav > .top > a").click(function (e) {
    console.log('클릭');
    e.preventDefault();
    $(".nav > .top").toggleClass('on');
    $("body").toggleClass('sub');

    if ($(".nav > .top").hasClass('on')) {

    }
});

$("#html-iframe").load(function () {
    let frame = document.querySelector('iframe');
    header = frame.contentDocument.querySelector("header");
    header.remove();
});