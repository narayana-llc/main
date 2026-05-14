jQuery(function() {
    
    /* Fixed Header */
    let header = $("#header");
    let intro = $("#intro");
    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();
    
    checkScroll(scrollPos, introH);
    
    $(window).on("scroll resize", function() {
        let introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();
        
        checkScroll(scrollPos, introH)
    });
    
    function checkScroll(scrollPos, introH) {
        if( scrollPos > introH ) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }
    
    /* Smooth Scroll */
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();
        
        let elementID = $(this).data('scroll');
        let elementOffset = $(elementID).offset().top;
        
        nav.removeClass("show");
        
        $("#nav a").removeClass("active");
        $(this).addClass("active");
        
        $("html, body").animate({
            scrollTop: elementOffset - 50
        }, 500);
    });
    
    /* Nav Toggle */
    let nav = $("#nav");
    let navToggle = $("#navToggle");
    
    navToggle.on("click", function(event) {
        event.preventDefault();
        
        nav.toggleClass("show");
        
    });
    
    /* Collapse */
    $("[data-collapse]").on("click", function(event) {
        event.preventDefault();
        
        var $this = $(this),
            blockId = $this.data('collapse');
        
        $this.toggleClass("active");
    });
    
});

