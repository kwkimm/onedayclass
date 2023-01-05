// // 0.5초 마다 스크롤해서 페이지 끝까지 자동 스크롤 하는 Javascript
// let currentHeight = 0; // 이것 함수 안에 있으면 제대로 작동 안함!!
// const centerwrap = document.querySelector('.centerwrap');

// var scrollInterval = setInterval(function() {
//   let pageBottom = centerwrap.scrollHeight;
//   if(currentHeight < pageBottom) {
//     centerwrap.scrollTop = centerwrap.scrollHeight;
//     currentHeight = pageBottom;
//   } else {
//     clearInterval(scrollInterval);
//   }
// }, 1000);

// $('.centerwrap').ready(function(){
// 	const offset = $(".revwrap").eq(4).offset();
// 	$('.centerwrap').animate({scrollTop: offset.top}, 500);
// });


// $('.centerwrap').animate({scrollTop:[스크롤되는 위치]}, [스크롤 속도]);

$('.centerwrap').ready(function(){
  $('.centerwrap').animate({scrollTop:($('.centerwrap').height())}, 15000);
})


// $('.upbtn').on('click', scrollTop(0));

$('.centerwrap').on('click', function () {
  $('.centerwrap').animate({ scrollTop: 312 }, 300);
});