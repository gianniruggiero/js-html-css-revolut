// $(".drop_menu").click (
//   function () {
//     $(this).children(".menu_panel").toggle();
// })


$(".drop_menu").mouseenter (
  function () {
    $(".menu_panel").hide();
    $(this).children(".menu_panel").show();
    var menu_left = parseInt($(this).position());
    $(this).children(".menu_panel").css("left", menu_left);
})

// $(".drop_menu").mouseleave (
//   function () {
//     $(this).children(".menu_panel").hide();
// })

$(".menu_panel").mouseleave (
  function () {
    $(this).hide();
})
