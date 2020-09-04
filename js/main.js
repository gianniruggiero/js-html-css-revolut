$(document).ready(function() {

$(".drop_menu").hover(
  function () {
    //mostra sottomenu
    $(this).children(".menu_panel").show();},
  function () {
    //nasconde sottomenu
    $(this).children(".menu_panel").hide();
  }
);

// $(".drop_menu").click (
//   function () {
//     $(this).children(".menu_panel").toggle();
// })

// $(".drop_menu").hover(
//   function () {
//     //mostra sottomenu
//     $(this).children(".menu_panel").stop(true, true).delay(50).slideDown(100);},
//   function () {
//     //nasconde sottomenu
//     $(this).children(".menu_panel").stop(true, true).slideUp(200);
//   }
// );


// soluzione mouseenter + mouseleave

// $(".drop_menu").mouseenter (
//   function () {
//     $(".menu_panel").hide();
//     $(this).children(".menu_panel").show();
// })
//
// $(".drop_menu").mouseleave (
//   function () {
//     $(".menu_panel").hide();
// })
//
// $(".menu_panel").mouseleave (
//   function () {
//     $(this).hide();
// })

// $(".menu_panel").enter (
//   function () {
//     $(this).children(".menu_panel").show();
// })

});
