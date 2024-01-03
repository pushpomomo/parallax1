// Parallax Scrolling
$('window').on("scroll", function (){
    var parallax1 = $(".parallax1");
    var scrollPosition = ('this').scrollTop();
    parallax1.css("transform", "translateY(" + scrollPosition * 0.5 + "px" + ")");

});


// init Jarallax
$('.jarallax').jarallax({
  speed: 0.5,
  imgWidth: 1366,
  imgHeight: 768
})











 