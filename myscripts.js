$(document).ready(function(){
  createBoard(200, 30);
  createDots(6, 6, 2);
  addColor();
  removeColor();
  buttonClick();
  cleanBoard();
});

function createBoard(rows = 20 , cols = 30) {
  var i,
      dotsAmount;

  dotsAmount = rows*cols;
  for (i = 0; i < dotsAmount; i++) {
    $('.container').append('<div class="dot" data-id=' + i + '></div>');
  }
};
function createDots (width = 15 , height = 15, margin = 10) {
    $('.dot').css({
       'width': width+'px',
       'height': height+'px',
       'margin': margin+'px'
      });
};
function addColor(){
  $('.dot').hover(function(){
    $(this).toggleClass('is-active');
  });
}
function removeColor(){
  $('.dot').on('click', function(){
     $(this).toggleClass('is-active');
  });
};

function buttonClick(){
  var $this;

  $('.js-btn').on('click', function(){
    $this= $(this);    $this.toggleClass('revert-'+$this.data('revert'));
  });
};

function cleanBoard(){
  $('.js-clean').on('click', function(){
    $('.dot').removeClass('is-active');
  });
};
