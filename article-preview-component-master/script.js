$(function(){

  $('.share').click(function(){
    $('svg').removeClass();
    $('.icons').show();
    $('path').css('fill','white');
    $('.svg').css('background-color','hsl(217, 19%, 35%)');
    $('.svg').css('border-radius','50%');
  })
//  $('html').not($('.share')).click(function(){
//    $('.icons').hide();
//  });

});
