/*

My Custom JS
============

*/
$(function () {
  var $thumbs =$('.animate1');
  var winheight =$(window).height();
  var fullheight =$(document).height();

  $(window).scroll(function(){
    animate_elems();
  });
  function animate_elems(){
    wintop=$(window).scrollTop();

  $thumbs.each(function(index){
      $thumb=$(this);
      if ($thumb.hasClass('slideInUp')) {return true;}
        topcoords = $thumb.offset().top;
        if (wintop> (topcoords - winheight)*.75) {
          $thumb.addClass('slideDown');

          switch (index) {
            case 0:
            $thumb.addClass('animate1_delay0');
            break;
            case 1:
            $thumb.addClass('animate1_delay1');
            break;
            case 2:
            $thumb.addClass('animate1_delay2');
            break;
          }
        }



    });
  }

});
