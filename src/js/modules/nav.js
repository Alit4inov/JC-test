var nav = function() {

    $('.m-nav-opener').on("click", function() {
        $('body').toggleClass('nav-open');
    });
    $('.m-nav-close').on("click", function() {
        $('body').removeClass('nav-open');
    });

};
export default nav;