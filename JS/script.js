
let no = 1;
const wrap = $('.wrap');


$('.prevbtn').on('click', function() {
  
  if(no > 1){
    wrap.css('transform', `translateX(-${no-2}00vw)`);
    no--;
  }
  
});


$('.nextbtn').on('click', function() {

  if(no < 5) {
    wrap.css('transform', `translateX(-${no}00vw)`);
    no++;
  }

});

