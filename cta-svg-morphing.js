  var ctaMorph = anime.timeline ({
    loop: true,
    autoplay: true,
    easing: 'linear',
    duration: 7000
  })
  ctaMorph
  .add({
    targets: '.uni-cta-polygon',
    points: [
      {value: ['15,-8  150,1  170,44 25,35', '33,-2  170,1  154,43 10,36']},
      {value: ['30,-2  170,-5  154,35 15,43']},
      {value: ['13,-1  162,-2  157,40 26,38']},
      {value: ['22,-6  155,3  165,39 12,39']},
      {value: ['15,-8  150,1  170,44 25,35']}
    ]
  })
  
  var ctaMorphDots = anime.timeline ({
    loop: true,
    autoplay: true,
    easing: 'linear',
    duration: 7000
  })
  ctaMorphDots
  .add({
    targets: '.uni-cta-polygon-dots',
    points: [
      {value: ['22,-1  157,8  177,51 32,42', '45,5  182,8  166,50 22,43']},
      {value: ['42,5  182,2  166,42 27,50']},
      {value: ['25,6  174,5  169,47 38,45']},
      {value: ['34,1  167,10  167,46 24,46']},
      {value: ['22,-1  157,8  177,51 32,42']}
    ]
  })