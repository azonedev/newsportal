var jwFullScreen = {
    storage: {
        created: !1,
        activeIndex: null,
        data: []
    },
    originalParams: {
        hook: ".popper",
        pop: ".pop-each>.photo>a",
        classes: {
            main: "pop-main",
            shareTool: "pop-share-tool",
            close: "pop-close",
            slide: "pop-slide",
            thumb: "pop-thumb",
            icons: "pop-icons",
            info: "pop-info",
            each: "swiper-slide",
            wrap: "swiper-wrapper",
            active: "pop-active",
            fullscreen: "pop-fullscreen",
            page: "swiper-pagination"
        },
        cache: "0x592x0"
    },
    main: null,
    swiper: {
        main: null,
        thumb: null
    },
    activeIndex: 0,
    scroll: 0,
    mResize: function(a, i) {
        return a.replace(/contents\/uploads/g, "contents/cache/images/" + i + "/uploads")
    },
    init: function(a) {
        this.originalParams = $.extend(this.originalParams, a || {});
        var i = this;
        $("." + this.originalParams.classes.active).live("click", function() {
            i.scroll = $(document).scrollTop(), i.activeIndex = $(this).data("index"), i.show()
        }), i.create()
    },
    hide: function() {
        this.main.cancelFullScreen();
        $("body").removeClass("no-scrollbar"), $(document).scrollTop(this.scroll), this.main.hide()
    },
    update: function() {
        var a = {
                width: $(window).width(),
                height: $(window).height()
            },
            i = {
                width: a.width,
                height: .87 * a.height
            },
            s = {
                width: a.width,
                height: .12 * a.height
            };
        this.main.fullScreenStatus() ? this.main.addClass("hideFullScreenBtn") : this.main.removeClass("hideFullScreenBtn"), $.support.fullscreen || this.main.addClass("hideFullScreenBtn"), this.main.css(a), $("." + this.originalParams.classes.slide).css(i), $("." + this.originalParams.classes.thumb).css(s), this.swiper.main.update(), this.swiper.thumb.update(), this.swiper.main.slideTo(this.activeIndex), this.main.css("visibility", "visible")
    },
    tryFullScreen: function() {
        var a = this;
        $.support.fullscreen ? this.main.fullScreen({
            callback: function(i, s) {
                !i && s ? a.hide() : a.update()
            },
            fullscreenClass: a.originalParams.classes.fullscreen
        }) : this.update()
    },
    show: function() {
        $("body").addClass("no-scrollbar"), this.main.show(), this.main.css("visibility", "hidden"), this.tryFullScreen()
    },
    create: function() {
        var a = this;
        this.main = $("<div>").addClass(this.originalParams.classes.main), this.main.append('<div class="' + this.originalParams.classes.slide + '"><div class="' + this.originalParams.classes.wrap + '"></div><div class="swiper-button-next"></div><div class="swiper-button-prev"></div></div><div class="' + this.originalParams.classes.thumb + '"><div class="' + this.originalParams.classes.wrap + '"></div><div class="swiper-button-next"></div><div class="swiper-button-prev"></div></div><div class="' + this.originalParams.classes.icons + '"><a class="cancel" href="javascript:"></a><a class="fullscreen" href="javascript:"></a><i class="' + this.originalParams.classes.page + '"></i></div>'), $(this.originalParams.pop, $(this.originalParams.hook)).each(function(i) {
            $(this).data("index", i);
            var s = a.mResize($(this).data("image"), a.originalParams.cache),
                e = $(this).data("image"),
                t = $(this).data("url");
            console.log(t);
            var n = $(this).data("caption"),
                r = $(this).data("author") ? $(this).data("author") : "",
                l = '<div class="' + a.originalParams.classes.each + '" style="background-image:url(\'' + s + '\')" ><div class="info"><i class="caption">' + n + '</i><i class="author">' + r + '</i><a class="caption_hide" href="javascript:">&nbsp;</a><b class="social_shares roundicons zoom0_75" data-show=""data-hide="pinterest,facebook,twitter,googlePlus,instagram,viber,whatsapp,email"data-url="' + t + '" data-description="' + n + ' "data-image="' + e + '"></b></div></div>',
                o = new Image;
            o.src = e, o.onload = function() {
                $("." + a.originalParams.classes.each + ":nth-child(" + (i + 1).toString() + ")", $("." + a.originalParams.classes.slide)).css({
                    backgroundImage: "url('" + this.src + "')"
                })
            };
            var c = '<div class="' + a.originalParams.classes.each + '"  style="background-image:url(\'' + s + "')\"></div>";
            a.main.find("." + a.originalParams.classes.slide + ">." + a.originalParams.classes.wrap).append(l), a.main.find("." + a.originalParams.classes.thumb + ">." + a.originalParams.classes.wrap).append(c), a.storage.data.push($(this).data())
        }), this.storage.created = !0, a.main.find(".caption_hide").click(function() {
            a.main.hasClass("caption-hidden") ? a.main.removeClass("caption-hidden") : a.main.addClass("caption-hidden")
        }), a.main.find(".cancel").click(function() {
            return a.hide(), !1
        }), a.main.find(".fullscreen").click(function() {
            return a.tryFullScreen(), !1
        }), $("body").append(this.main), $(".social_shares", this.main).trigger("jadewitsShare"), $(this.originalParams.pop, $(this.originalParams.hook)).addClass(this.originalParams.classes.active), this.swiper.main = new Swiper("." + this.originalParams.classes.slide, {
            nextButton: "." + this.originalParams.classes.slide + ">.swiper-button-next",
            prevButton: "." + this.originalParams.classes.slide + ">.swiper-button-prev",
            spaceBetween: 0,
            effect: "fade",
            grabCursor: !1,
            pagination: "." + this.originalParams.classes.page,
            paginationType: "custom",
            paginationCustomRender: function(a, i, s) {
                return i || i++, banglaNumber(i) + " / " + banglaNumber(s)
            },
            onSlideChangeEnd: function(i) {
                a.activeIndex = i.activeIndex
            }
        }), this.swiper.thumb = new Swiper("." + this.originalParams.classes.thumb, {
            spaceBetween: 5,
            centeredSlides: !0,
            slidesPerView: 10,
            slideToClickedSlide: !0,
            nextButton: "." + this.originalParams.classes.thumb + ">.swiper-button-next",
            prevButton: "." + this.originalParams.classes.thumb + ">.swiper-button-prev",
            grabCursor: !0
        }), this.swiper.main.params.control = this.swiper.thumb, this.swiper.thumb.params.control = this.swiper.main, this.update(), $(window).bind("resize", function() {
            a.update()
        })
    }
};