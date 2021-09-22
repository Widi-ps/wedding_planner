$(window).resize(function(){
  console.log('resize called');
  var width = $(window).width();
  if(width >= 300 && width <= 700){
      $('#packages-wrap').removeClass('row').addClass('col');
  }
  else{
      $('#packages-wrap').removeClass('col').addClass('row');
  }
})
.resize()