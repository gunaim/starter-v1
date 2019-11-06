$(document).ready(function () {

    var getMax = function () {
        return $(document).height() - $(window).height();
    }

    var getValue = function () {
        return $(window).scrollTop();
    }

    if ('max' in document.createElement('progress')) {
        var progressBar = $('progress');
        progressBar.attr({max: getMax()});
        $(document).scroll(function () {
            progressBar.attr({value: getValue()});
        });

        $(window).resize(function () {
            progressBar.attr({max: getMax(), value: getValue()});
        });
    } else {
        var progressBar = $('.progress-bar'),
            max = getMax(),
            value, width;
        var getWidth = function () {
            value = getValue();
            width = (value / max) * 100;
            width = width + '%';
            return width;
        }
        var setWidth = function () {
            progressBar.css({width: getWidth()});
        }

        $(document).on('scroll', setWidth);
        $(window).on('resize', function () {
            max = getMax();
            setWidth();
        });
    }

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
        $('.selectpicker').selectpicker('mobile');
    }


    $(document).on('click', '.header__menu-open', function () {
        $('body').addClass('noscroll-y');
        $('.header__dropdown').fadeIn();
    })

    $(document).on('click', '.header__menu-close', function () {
        $('body').removeClass('noscroll-y');
        $('.header__dropdown').fadeOut();
    })


    var footerFunc;
    (footerFunc = function footerFunc() {
        $('footer').css('position', 'static');
        $('body').css('min-height', '100px');

        var bodyHeight = $('body').outerHeight();
        if (window.innerHeight > bodyHeight) {
            $('body').css('min-height', '100vh');
            $('footer').css({'position': 'absolute', 'bottom': '0'});
        }
    })();


    $(document).on('click', '.user__settings-open', function (e) {
        e.preventDefault();
        var _user = $(this).closest('.user'),
            _userSettings = _user.find('.user__settings'),
            _userName = _user.find('.user__name');

        $('.user__name').show();
        $('.user__settings').removeClass('user__settings--active');
        _userName.hide();
        _userSettings.addClass('user__settings--active');
    })

    $(document).on('click', '.user__settings-close', function (e) {
        e.preventDefault();
        var _user = $(this).closest('.user'),
            _userSettings = _user.find('.user__settings'),
            _userName = _user.find('.user__name');

        _userName.show();
        _userSettings.removeClass('user__settings--active');
    })

    $("#accordion").on('hidden.bs.collapse', function () {
        $('.user__name').show();
        $('.user__settings').removeClass('user__settings--active');
    });


    function cl(a) {
        console.log(a)
    }


    var f1;
    (f1 = function () {

    })();


    $(document).on('click touchstart', function (event) {

    })

    $(document).on('click touch', function (event) {

    })


    $(' ').on({
        mouseenter: function () {

        },
        mouseleave: function () {

        }
    })


    if (window.innerWidth < 768) {

    }


    window.onresize = function () {

    };


    $('').each(function () {
        var _select = $(this).find('select');
        _select.on('changed.bs.select', function () {

            var _selectedOption = $(this).find('option:selected');
        })
    })


    $("#accordion").on('show.bs.collapse', function () {

    });
    $("#accordion").on('hide.bs.collapse', function () {

    });


    /** hover img */

    $(".hover-img__wrapper:not(.hover-img__wrapper--active)").each(function () {
        var defaultImg = $(this).find('img');
        var hiddenImg = defaultImg.clone();
        var hoverSrc = hiddenImg.attr('data-src');
        hiddenImg.attr('src', hoverSrc).hide().insertBefore(defaultImg);

        $(this).on({
            mouseenter: function mouseenter() {
                defaultImg.hide();
                hiddenImg.show();
            },
            mouseleave: function mouseleave() {
                defaultImg.show();
                hiddenImg.hide();
            }
        });
    });

    var defaultImg = $(".hover-img__wrapper--active").find('img').hide();
    var hiddenImg = defaultImg.clone();
    var hoverSrc = hiddenImg.attr('data-src');
    hiddenImg.attr('src', hoverSrc).insertBefore(defaultImg).show();


    // $('.time').datetimepicker({
    //     format: 'HH:mm',
    //     defaultDate: moment(),
    //     icons: {
    //         up: "material-icons",
    //         down: "material-icons"
    //     }
    // });

    // $('.date').datetimepicker({
    //     format: 'DD.MM.YY',
    //     defaultDate: moment(),
    //     icons: {
    //         previous: 'material-icons',
    //         next: 'material-icons'
    //     }
    // });


    $('input.only-number').bind('keypress', function (e) {
        if (e.which != 13) {
            return (/[\d.+]/.test(e.key));  // IE > 9
        }
    });


    var w = window,
        d = document,
        e = d.documentElement,
        g = d.getElementsByTagName('body')[0],
        x = w.innerWidth || e.clientWidth || g.clientWidth;

    window.onresize = function () {
        footerFunc();

        var t = w.innerWidth || e.clientWidth || g.clientWidth;
        if (t !== x) {

        }
    };

});
