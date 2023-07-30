
setTimeout(function () {
    // Set all carousel items to the same height

    $(function () {
        var width = $(window).width();
        if (width < 991) {
            function equalHeight() {
                var heightArray = $(".owl-carousel .owl-text").map(function () {
                    return $(this).height();
                }).get();
                var maxHeight = Math.max.apply(Math, heightArray);
                $(".owl-carousel .owl-text").height(maxHeight);
            }
            equalHeight();
        }
    });

}, 1000);

(function ($) {
    $(document).ready(function () {

        /* Owl Carousel */
        $(".slider-icons").each(function () {
            var owlCarousel = $(this);

            // after the carousel's been activated, add new item attributes
            owlCarousel.on("initialized.owl.carousel", function (e) {
                var owlCarouselItem = $(".owl-item");
                // add listbox id's to all items
                for (i = 0; i < owlCarouselItem.length; i++) {
                    $(".owl-item").eq(i).attr("id", "owl-carousel-" + (i + 1));
                }
                // add accesibility properties to all items
                owlItemMakeInactive();
                owlItemMakeActive();
            });

            // after the carousel's been changed, adjust items' attributes
            owlCarousel.on("translated.owl.carousel", function (e) {
                owlItemMakeInactive();
                owlItemMakeActive();
            });

            // initialize the owl carousel
            owlCarousel.owlCarousel({
                loop: true,
                margin: 10,
                nav: true,
                navText: ["<img class='banL' src='https://i.imgur.com/YXA0LPt.png' alt='banL' style='width:48px;height:48px;'>", "<img class='banR' src='https://i.imgur.com/f8Q8OBM.png' alt='banR' style='width:48px;height:48px;'>"],
                items: 1,
            });
        });

        // add keyboard navigation to the owl carousel
        $(document.documentElement).keyup(function (event) {
            // handle cursor keys

            var owlCarousel = $(event.target);
            if (event.keyCode == 37) {
                // go left
                owlCarousel.trigger('prev.owl.carousel');
            } else if (event.keyCode == 39) {
                // go right
                owlCarousel.trigger('next.owl.carousel');
            }
        });

    });

    /* Changing owl item attributes
     * set the item itself and its children to be non-tabable when inactive
     * reverse when activated
     */
    function owlItemMakeInactive() {
        $(".owl-item:not(.active)").attr("role", "option").attr("tabindex", "-1").attr("aria-selected", "false").find('a:not(.fic_media)').attr("tabindex", "-1");
    }
    function owlItemMakeActive() {
        $(".owl-item.active").attr("role", "option").attr("aria-selected", "true").find('a:not(.fic_media)').attr("tabindex", "0");
    }

    $(".owl-next").each(function () {
        $(this).attr("tabindex", "-1");
    });

    $(".owl-prev").each(function () {
        $(this).attr("tabindex", "-1");
    });

    $(".owl-dot").each(function () {
        $(this).attr("tabindex", "-1");
        $(this).attr("title", "button");
    });

})(jQuery);
