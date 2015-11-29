$(document).ready(function() {

  function heightDetect() {
    $('.page-header').css('height', $(window).height());
  };
  heightDetect();
  $(window).resize(function() {
    heightDetect();
  });

  $('#container-mix').mixItUp();

  $('.s-portfolio li').click(function() {
    $('.s-portfolio li').removeClass('active');
    $(this).addClass('active');
  });

});
