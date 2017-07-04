$(document).ready(() => {
  $('.station-details').hide();

  $('.player-station').on('click', function() {
    $('.station-details').not($(this).find('.station-details')).each(function(){
      $(this).slideUp();
    });
    $(this).find('.station-details').slideToggle();
  })



});
