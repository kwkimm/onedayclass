
let no = 1;
const wrap = $('.wrap');


$('.prev').on('click', function() {
  
  if(no > 1){
    wrap.css('transform', `translateX(-${no-2}00vw)`);
    no--;
  }
  
});


$('.next').on('click', function() {

  if(no < 4) {
    wrap.css('transform', `translateX(-${no}00vw)`);
    no++;
  }

});

