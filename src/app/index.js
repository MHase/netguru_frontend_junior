import '../css/master.scss';


let stations = [
  {name: 'Putin FM', freq: '66,6'},
  {name: 'Dribbble FM', freq: '101,2'},
  {name: 'Doge FM', freq: '99,4'},
  {name: 'Ballads FM', freq: '87,1'},
  {name: 'Maximum FM', freq: '142,2'}
]

stations.map((station, i) => {
  $('.player-list').append(
    "<div class='player-station'><div class='station-details'><svg class='btn'width='31' height='31' viewBox='0 0 64 64'><path d='M32.000,63.995 C14.327,63.995 -0.000,49.669 -0.000,31.995 C-0.000,14.322 14.327,-0.004 32.000,-0.004 C49.673,-0.004 64.000,14.322 64.000,31.995 C64.000,49.669 49.673,63.995 32.000,63.995 ZM32.000,3.996 C16.536,3.996 4.000,16.532 4.000,31.995 C4.000,47.460 16.536,59.996 32.000,59.996 C47.464,59.996 60.000,47.460 60.000,31.995 C60.000,16.532 47.464,3.996 32.000,3.996 ZM45.038,33.949 L18.961,33.949 C17.882,33.949 17.008,33.073 17.008,31.995 C17.008,30.916 17.882,30.042 18.961,30.042 L45.038,30.042 C46.117,30.042 46.991,30.916 46.991,31.995 C46.991,33.073 46.117,33.949 45.038,33.949 Z'/></svg><div class='station-cover'></div><svg class='btn'width='31' height='31' viewBox='0 0 64 64'><path d='M32.000,63.995 C14.327,63.995 -0.000,49.669 -0.000,31.995 C-0.000,14.322 14.327,-0.004 32.000,-0.004 C49.673,-0.004 64.000,14.322 64.000,31.995 C64.000,49.669 49.673,63.995 32.000,63.995 ZM32.000,3.996 C16.536,3.996 4.000,16.532 4.000,31.995 C4.000,47.460 16.536,59.996 32.000,59.996 C47.464,59.996 60.000,47.460 60.000,31.995 C60.000,16.532 47.464,3.996 32.000,3.996 ZM45.038,33.949 L33.953,33.949 L33.953,45.034 C33.953,46.113 33.078,46.988 32.000,46.988 C30.921,46.988 30.047,46.113 30.047,45.034 L30.047,33.949 L18.961,33.949 C17.882,33.949 17.008,33.073 17.008,31.995 C17.008,30.916 17.882,30.042 18.961,30.042 L30.047,30.042 L30.047,18.957 C30.047,17.878 30.921,17.004 32.000,17.004 C33.078,17.004 33.953,17.878 33.953,18.957 L33.953,30.042 L45.038,30.042 C46.117,30.042 46.991,30.916 46.991,31.995 C46.991,33.073 46.117,33.949 45.038,33.949 Z'/></svg></div><div class='station-freq'><span>" + station.name + "</span><span>" + station.freq + "</span></div></div>"
        );
})

$('.station-details').hide();
$('.active-station > .active-current').hide();


$(document).ready(() => {

  var active_station_name = '';

  $('.station-freq').on('click', function() {
    $('.station-details').not($(this).parent().find('.station-details')).each(function(){
        $(this).slideUp();
      });
    $(this).parent().find('.station-details').slideToggle();

    let clicked_station_name = $(this).find('span:first-child').html();
    clicked_station_name == active_station_name ?
      active_station_name = '' : active_station_name = clicked_station_name;

    if(active_station_name == '')
      $('.active-station > .active-current').hide();
    else
      $('.active-station > .active-current').show();

    $('.active-station > span:nth-child(2)').html(active_station_name);

  })

});
