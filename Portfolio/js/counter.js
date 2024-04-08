
(function(){
    var end,start,targets;
    targets = document.querySelectorAll('.counter__num');
  
    targets.forEach(el => {
      end = el.dataset.end;
      start = el.dataset.start;
      anime({
        targets: el,
        innerHTML: [start, end],
        easing: 'easeInOutQuad',
        duration: 2000,
        round: 1 // Will round the animated value to 1 decimal
      });
    });
  })();