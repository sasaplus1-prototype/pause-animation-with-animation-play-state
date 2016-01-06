(function(){

  'use strict';

  var state = $('.state'),
      text = $('.text');

  $('.checkbox').on('change', function() {
    if ($(this).is(':checked')) {
      text.css('animation-play-state', 'paused');
    } else {
      text.css('animation-play-state', 'running');
    }

    state.text(text.css('animation-play-state'));
  });

  state.text(text.css('animation-play-state'));

}());
