$(document).ready(function() {
    $("[data-aos]").parent().addClass("dataAosOverflow");
    $(".hamburger-menu").click(function() {
        $(".one").toggleClass("one-after");
        $(".two").toggleClass("two-after");
        $(".three").toggleClass("three-after");
    })
});