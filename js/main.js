$(function(){
  navStuff();
  testimonialStuff();
  portfolioStuff();
});

function portfolioStuff() {
  $('.main-unit').first().addClass('show-thumb');
  $('.sub-unit').first().addClass('show-thumb');
  $('.sub-unit').on('click', function(){
       var $this = $(this),
             $siblings = $this.parent().children(),
             position = $siblings.index($this);
              $('.main-unit').removeClass('show-thumb').eq(position).addClass('show-thumb');
         $siblings.removeClass('show-thumb');
      $this.addClass('show-thumb'); 
  });
}




function testimonialStuff() {
  $('.face-unit').first().addClass('active');
  $('.face-unit').on('click', function(){
    var $this = $(this),
          $siblings = $this.parent().children(),
          position = $siblings.index($this);
           $('.fb-unit').removeClass('active').eq(position).addClass('active');
      $siblings.removeClass('active');
   $this.addClass('active');  
  });
}




function navStuff() {
  $('.menu').on('click', function(){
    $('.mobile-nav').toggleClass('show');
  });

  $('.mobile-nav nav a').on('click', function(){
    $('.mobile-nav').removeClass('show');
  });

}




