$(".modal-button").click(function() {
    $(".modal").addClass("is-active");
    $("html").addClass("is-clipped");
});

$(".modal-close").click(function() {
    $(".modal").removeClass("is-active");
    $("html").addClass("is-clipped");
});