let trigger3 = document.querySelectorAll('.sub-service-wrap-3');
let triggerOut3 = document.querySelectorAll('.select-none-3');
let s3ss1Active = !1;
let s3ss2Active = !1;
let s3ss3Active = !1;
let s3ss1ActiveLoop = !1;
let s3ss2ActiveLoop = !1;
let s3ss3ActiveLoop = !1;
let s3ss1LoopOut = !1;
let s3ss2LoopOut = !1;
let s3ss3LoopOut = !1;
let ss3SA1 = trigger3[0].querySelector('.sub-service-shadow-active-3');
let ss3BA1 = trigger3[0].querySelector('.sub-service-bg-active-3');
let ss3BGA1 = trigger3[0].querySelector('.sub-service-bg-gradient-active-3');
let ss3BAI1 = trigger3[0].querySelector('.sub-service-bg-active-inner-3');
let ss3SI1 = trigger3[0].querySelector('.sub-service-selector-inner-3');
let ss3AE1 = trigger3[0].querySelectorAll('.sub-s-anim-elem');
let ss3SA2 = trigger3[1].querySelector('.sub-service-shadow-active-3');
let ss3BA2 = trigger3[1].querySelector('.sub-service-bg-active-3');
let ss3BGA2 = trigger3[1].querySelector('.sub-service-bg-gradient-active-3');
let ss3BAI2 = trigger3[1].querySelector('.sub-service-bg-active-inner-3');
let ss3SI2 = trigger3[1].querySelector('.sub-service-selector-inner-3');
let ss3AE2 = trigger3[1].querySelectorAll('.sub-s-anim-elem-wrap');
let ss3AEC2 = trigger3[1].querySelector('.sub-s-anim-elem-cube-3d');
let ss3SA3 = trigger3[2].querySelector('.sub-service-shadow-active-3');
let ss3BA3 = trigger3[2].querySelector('.sub-service-bg-active-3');
let ss3BGA3 = trigger3[2].querySelector('.sub-service-bg-gradient-active-3');
let ss3BAI3 = trigger3[2].querySelector('.sub-service-bg-active-inner-3');
let ss3SI3 = trigger3[2].querySelector('.sub-service-selector-inner-3');
let ss3AE3 = trigger3[2].querySelectorAll('.sub-s-anim-elem');
let ss3IWW3 = trigger3[2].querySelectorAll('.sub-s-img-wave-wrap');
let ss3IWWI3 = trigger3[2].querySelectorAll('.sub-s-img-wave-wrap-in');
let ssYTB3 = document.querySelectorAll('.ynw-tab-bg-3');
anime.set('.sub-service-selector-inner-3', { scale: 0 });
anime.set('.select-none-3', { scale: 0 });
anime.set(ss3AE1, { translateX: anime.stagger([400, 800]), scale: 0 });
anime.set(ss3AE2, { translateX: 600, scale: 0 });
anime.set(ss3AEC2, { translateZ: 35, rotateX: -45, rotateZ: -90 });
anime.set('.sub-s-anim-elem-cursor-wrap', { translateX: 150, translateY: 80 });
anime.set('.sub-s-anim-elem-cursor-highlighter', { scale: 0, opacity: 0 });
anime.set('.ssaeci2', { rotate: 90 });
anime.set(ss3IWW3, {
  translateY: anime.stagger([150, 300], { direction: 'reverse' }),
});
anime.set(ss3IWW3[2], { translateY: 180, translateX: 300 });
anime.set('.sub-s-img-surfer', {
  translateX: 0,
  translateY: 0,
  rotate: 35,
  skewX: 25,
});
anime.set(ss3IWWI3[2], { scaleX: 1.3 });
var animeRemove3_1 = function () {
  anime.remove([ss3SA1, ss3BA1, ss3BGA1, ss3BAI1, ss3SI1, ss3AE1]);
};
var animeRemove3_2 = function () {
  anime.remove([ss3SA2, ss3BA2, ss3BGA2, ss3BAI2, ss3SI2, ss3AE2, ss3AEC2]);
};
var animeRemove3_3 = function () {
  anime.remove([ss3SA3, ss3BA3, ss3BGA3, ss3BAI3, ss3SI3, ss3IWW3]);
};
var s3ss1AnimOut = function () {
  animeRemove3_1();
  s3ss1Active = !1;
  s3ss1TimeoutFunc();
  s3ss1LoopOut = !0;
  setTimeout(function () {
    s3ss1LoopOut = !1;
  }, 1010);
  let s3ss1off = anime.timeline({ easing: 'easeOutQuint', duration: 1000 });
  s3ss1off
    .add({ targets: ss3SA1, opacity: 0 })
    .add({ targets: ss3BA1, opacity: 0 }, 0)
    .add({ targets: ss3BGA1, translateX: '0%' }, 0)
    .add({ targets: ss3BAI1, opacity: 0 }, 0)
    .add({ targets: ss3SI1, scale: 0, duration: 300 }, 0)
    .add(
      { targets: ss3AE1, scale: 0, translateX: anime.stagger([400, 800]) },
      0
    );
};
var s3ss2AnimOut = function () {
  animeRemove3_2();
  s3ss2Active = !1;
  s3ss2TimeoutFunc();
  s3ss2LoopOut = !0;
  setTimeout(function () {
    s3ss2LoopOut = !1;
  }, 1010);
  let s3ss2off = anime.timeline({ easing: 'easeOutQuint', duration: 1000 });
  s3ss2off
    .add({ targets: ss3SA2, opacity: 0 })
    .add({ targets: ss3BA2, opacity: 0 }, 0)
    .add({ targets: ss3BGA2, translateX: '0%' }, 0)
    .add({ targets: ss3BAI2, opacity: 0 }, 0)
    .add({ targets: ss3SI2, scale: 0, duration: 300 }, 0)
    .add({ targets: ss3AE2, scale: 0, translateX: 600 }, 0)
    .add({ targets: ss3AEC2, rotateX: -45, rotateZ: -90 }, 0);
};
var s3ss3AnimOut = function () {
  animeRemove3_3();
  s3ss3Active = !1;
  s3ss3TimeoutFunc();
  s3ss3LoopOut = !0;
  setTimeout(function () {
    s3ss3LoopOut = !1;
  }, 1010);
  let s3ss3off = anime.timeline({ easing: 'easeOutQuint', duration: 1000 });
  s3ss3off
    .add({ targets: ss3SA3, opacity: 0 })
    .add({ targets: ss3BA3, opacity: 0 }, 0)
    .add({ targets: ss3BGA3, translateX: '0%' }, 0)
    .add({ targets: ss3BAI3, opacity: 0 }, 0)
    .add({ targets: ss3SI3, scale: 0, duration: 300 }, 0)
    .add(
      {
        targets: ss3IWW3,
        translateY: anime.stagger([150, 300], { direction: 'reverse' }),
      },
      0
    )
    .add({ targets: ss3IWW3[2], translateY: 180, translateX: 300 }, 0);
};
var ynw3 = function () {
  var ynw3T = anime.timeline({ duration: 150, easing: 'easeOutQuart' });
  ynw3T
    .add({ targets: ['.ynw-choice-3', '#total-price'], scale: [0.98, 1] })
    .add({ targets: ['.ynw-choice-3', '#total-price'], scale: 0.98 });
};
let s3ss1Loop = anime.timeline({ loop: !0, autoplay: !1 });
s3ss1Loop
  .add(
    {
      targets: trigger3[0].querySelectorAll('.sub-s-anim-elem-in'),
      scale: 0.6,
      rotate: 180,
      duration: 1500,
      delay: anime.stagger(200),
    },
    500
  )
  .add(
    {
      targets: trigger3[0].querySelectorAll('.sub-s-anim-elem-square-circle'),
      borderRadius: '0%',
      duracion: 1500,
      delay: anime.stagger(200),
    },
    500
  )
  .add({
    targets: trigger3[0].querySelectorAll('.sub-s-anim-elem-in'),
    scale: 1,
    rotate: 0,
    duration: 1500,
    delay: anime.stagger(200),
  })
  .add(
    {
      targets: trigger3[0].querySelectorAll('.sub-s-anim-elem-square-circle'),
      borderRadius: '50%',
      duracion: 1500,
      delay: anime.stagger(200),
    },
    '-=2000'
  );
let s3ss2Loop = anime.timeline({ loop: !0, autoplay: !1 });
s3ss2Loop
  .add({
    targets: '.sub-s-anim-elem-cursor-wrap',
    translateX: [{ value: 18, duration: 1000, easing: 'easeOutCubic' }],
    translateY: [{ value: 0, duration: 1000, easing: 'easeInOutCubic' }],
  })
  .add(
    {
      targets: '.sub-s-anim-elem-cursor-out',
      translateX: [
        { value: 8, duration: 500, easing: 'easeInOutQuad' },
        { value: 0, duration: 600, easing: 'easeInOutQuad' },
      ],
      translateY: [
        { value: 8, duration: 500, easing: 'easeInOutQuad' },
        { value: 0, duration: 600, easing: 'easeInOutQuad' },
      ],
    },
    0
  )
  .add(
    {
      targets: '.sub-s-anim-elem-cursor-highlighter',
      scale: [
        { value: 1, duration: 499, easing: 'easeOutCubic' },
        { value: 0, duration: 1, easing: 'linear' },
      ],
      opacity: [
        { value: 0.3, duration: 250, easing: 'easeOutCubic' },
        { value: 0, duration: 250, easing: 'easeOutCubic' },
      ],
    },
    1000
  )
  .add(
    {
      targets: '.sub-s-anim-elem-cursor',
      scale: [
        { value: 0.5, duration: 250, easing: 'easeOutCubic' },
        { value: 1, duration: 250, easing: 'easeOutCubic' },
      ],
    },
    1000
  )
  .add(
    {
      targets: '.sub-s-anim-elem-arr-right',
      scale: [
        { value: 0.5, duration: 250, easing: 'easeOutCubic' },
        { value: 1, duration: 250, easing: 'easeOutCubic' },
      ],
    },
    1000
  )
  .add(
    {
      targets: '.sub-s-anim-elem-cube-rotater',
      rotate: '-=90',
      scaleX: [
        { value: 0.9, duration: 250, easing: 'easeOutCubic' },
        { value: 1, duration: 250, easing: 'easeOutCubic' },
      ],
      scaleY: [
        { value: 0.9, duration: 250, easing: 'easeOutCubic' },
        { value: 1, duration: 250, easing: 'easeOutCubic' },
      ],
      scaleZ: [
        { value: 0.9, duration: 250, easing: 'easeOutCubic' },
        { value: 1, duration: 250, easing: 'easeOutCubic' },
      ],
      duration: 1000,
    },
    1000
  )
  .add(
    {
      targets: '.sub-s-anim-elem-cursor-highlighter',
      scale: [
        { value: 1, duration: 499, easing: 'easeOutCubic' },
        { value: 0, duration: 1, easing: 'linear' },
      ],
      opacity: [
        { value: 0.3, duration: 250, easing: 'easeOutCubic' },
        { value: 0, duration: 250, easing: 'easeOutCubic' },
      ],
    },
    1500
  )
  .add(
    {
      targets: '.sub-s-anim-elem-cursor',
      scale: [
        { value: 0.5, duration: 250, easing: 'easeOutCubic' },
        { value: 1, duration: 250, easing: 'easeOutCubic' },
      ],
    },
    1500
  )
  .add(
    {
      targets: '.sub-s-anim-elem-arr-right',
      scale: [
        { value: 0.5, duration: 250, easing: 'easeOutCubic' },
        { value: 1, duration: 250, easing: 'easeOutCubic' },
      ],
    },
    1500
  )
  .add(
    {
      targets: '.sub-s-anim-elem-cube-rotater',
      rotate: '-=90',
      scaleX: [
        { value: 0.9, duration: 250, easing: 'easeOutCubic' },
        { value: 1, duration: 250, easing: 'easeOutCubic' },
      ],
      scaleY: [
        { value: 0.9, duration: 250, easing: 'easeOutCubic' },
        { value: 1, duration: 250, easing: 'easeOutCubic' },
      ],
      scaleZ: [
        { value: 0.9, duration: 250, easing: 'easeOutCubic' },
        { value: 1, duration: 250, easing: 'easeOutCubic' },
      ],
      duration: 1000,
    },
    1500
  )
  .add(
    {
      targets: '.sub-s-anim-elem-cursor-wrap',
      translateX: [{ value: -152, duration: 850, easing: 'easeInOutQuad' }],
      translateY: [
        { value: 10, duration: 300, easing: 'easeOutQuad' },
        { value: 0, duration: 525, easing: 'easeInQuad' },
      ],
    },
    '-=700'
  )
  .add(
    {
      targets: '.sub-s-anim-elem-cursor-out',
      translateX: [
        { value: 10, duration: 300, easing: 'easeInOutQuad' },
        { value: 0, delay: 250, duration: 550, easing: 'easeInOutQuad' },
      ],
      translateY: [
        { value: -3, duration: 250, easing: 'easeInOutQuad' },
        { value: 3, duration: 250, easing: 'easeInOutQuad' },
        { value: 0, duration: 500, easing: 'easeInOutQuad' },
      ],
    },
    '-=850'
  )
  .add(
    {
      targets: '.sub-s-anim-elem-cursor-highlighter',
      scale: [
        { value: 1, duration: 499, easing: 'easeOutCubic' },
        { value: 0, duration: 1, easing: 'linear' },
      ],
      opacity: [
        { value: 0.3, duration: 250, easing: 'easeOutCubic' },
        { value: 0, duration: 250, easing: 'easeOutCubic' },
      ],
    },
    2650
  )
  .add(
    {
      targets: '.sub-s-anim-elem-cursor',
      scale: [
        { value: 0.5, duration: 250, easing: 'easeOutCubic' },
        { value: 1, duration: 250, easing: 'easeOutCubic' },
      ],
    },
    2650
  )
  .add(
    {
      targets: '.sub-s-anim-elem-arr-left',
      scale: [
        { value: 0.5, duration: 250, easing: 'easeOutCubic' },
        { value: 1, duration: 250, easing: 'easeOutCubic' },
      ],
    },
    2650
  )
  .add(
    {
      targets: '.sub-s-anim-elem-cube-rotater',
      rotate: '+=87',
      scaleX: [
        { value: 0.9, duration: 250, easing: 'easeOutCubic' },
        { value: 1, duration: 250, easing: 'easeOutCubic' },
      ],
      scaleY: [
        { value: 0.9, duration: 250, easing: 'easeOutCubic' },
        { value: 1, duration: 250, easing: 'easeOutCubic' },
      ],
      scaleZ: [
        { value: 0.9, duration: 250, easing: 'easeOutCubic' },
        { value: 1, duration: 250, easing: 'easeOutCubic' },
      ],
    },
    2650
  )
  .add(
    {
      targets: '.sub-s-anim-elem-cursor-highlighter',
      scale: [
        { value: 1, duration: 499, easing: 'easeOutCubic' },
        { value: 0, duration: 1, easing: 'linear' },
      ],
      opacity: [
        { value: 0.3, duration: 250, easing: 'easeOutCubic' },
        { value: 0, duration: 250, easing: 'easeOutCubic' },
      ],
    },
    3150
  )
  .add(
    {
      targets: '.sub-s-anim-elem-cursor',
      scale: [
        { value: 0.5, duration: 250, easing: 'easeOutCubic' },
        { value: 1, duration: 250, easing: 'easeOutCubic' },
      ],
    },
    3150
  )
  .add(
    {
      targets: '.sub-s-anim-elem-arr-left',
      scale: [
        { value: 0.5, duration: 250, easing: 'easeOutCubic' },
        { value: 1, duration: 250, easing: 'easeOutCubic' },
      ],
    },
    3150
  )
  .add(
    {
      targets: '.sub-s-anim-elem-cube-rotater',
      rotate: '+=93',
      scaleX: [
        { value: 0.9, duration: 250, easing: 'easeOutCubic' },
        { value: 1, duration: 250, easing: 'easeOutCubic' },
      ],
      scaleY: [
        { value: 0.9, duration: 250, easing: 'easeOutCubic' },
        { value: 1, duration: 250, easing: 'easeOutCubic' },
      ],
      scaleZ: [
        { value: 0.9, duration: 250, easing: 'easeOutCubic' },
        { value: 1, duration: 250, easing: 'easeOutCubic' },
      ],
    },
    3150
  )
  .add(
    {
      targets: '.sub-s-anim-elem-cursor-wrap',
      translateX: [{ value: -50, duration: 825, easing: 'easeInOutQuad' }],
      translateY: [{ value: 100, duration: 825, easing: 'easeOutQuad' }],
    },
    '-=700'
  )
  .add(
    {
      targets: '.sub-s-anim-elem-cursor-out',
      translateX: [{ value: -5, duration: 300, easing: 'easeInOutQuad' }],
      translateY: [{ value: -10, duration: 300, easing: 'easeInOutQuad' }],
    },
    '-=825'
  );
let s3ss3Loop = anime.timeline({ loop: !0, autoplay: !1 });
s3ss3Loop.add({
  targets: ['.ssiw1-1', '.ssiw1-2'],
  translateX: '100%',
  duration: 4000,
  easing: 'linear',
});
let s3ss3Loop2 = anime.timeline({ loop: !0, autoplay: !1 });
s3ss3Loop2.add({
  targets: ['.ssiw2-1', '.ssiw2-2'],
  translateX: '100%',
  duration: 5000,
  easing: 'linear',
});
let s3ss3Loop3 = anime.timeline({ loop: !0, autoplay: !1 });
s3ss3Loop3.add({
  targets: ['.ssiw3-1', '.ssiw3-2'],
  translateX: '100%',
  duration: 20000,
  easing: 'linear',
});
let s3ss3Loop4 = anime.timeline({
  loop: !0,
  autoplay: !1,
  easing: 'easeInOutQuad',
});
s3ss3Loop4
  .add(
    {
      targets: '.sub-s-img-surfer',
      translateX: 10,
      translateY: -15,
      rotate: 35,
      skewX: 20,
      duration: 1100,
    },
    '+=150'
  )
  .add({
    targets: '.sub-s-img-surfer',
    translateX: 0,
    translateY: 0,
    rotate: 35,
    skewX: 25,
    duration: 1250,
  });
let s3ss3Loop5 = anime.timeline({
  loop: !0,
  autoplay: !1,
  easing: 'easeInOutQuad',
});
s3ss3Loop5
  .add({ targets: ss3IWWI3[0], translateY: -15, rotate: 1, duration: 2000 })
  .add({ targets: ss3IWWI3[0], translateY: 0, rotate: 0, duration: 2000 });
let s3ss3Loop6 = anime.timeline({
  loop: !0,
  autoplay: !1,
  easing: 'easeInOutQuad',
});
s3ss3Loop6
  .add({ targets: ss3IWWI3[1], translateY: 0, rotate: 0, duration: 1500 })
  .add({ targets: ss3IWWI3[1], translateY: 0, rotate: 0, duration: 1500 });
let s3ss3Loop7 = anime.timeline({
  loop: !0,
  autoplay: !1,
  easing: 'easeInOutQuad',
});
s3ss3Loop7
  .add({
    targets: ss3IWWI3[2],
    scaleX: 1,
    translateY: -20,
    rotate: 1,
    duration: 1000,
  })
  .add({
    targets: ss3IWWI3[2],
    scaleX: 1.3,
    translateY: 0,
    rotate: 0,
    duration: 1000,
  });
var s3ss1TimeoutFunc = function () {
  var s3ss1TimeoutSet = !0;
  var s3ss1Timeout = setTimeout(function () {
    if (s3ss1LoopOut == !0) {
      s3ss1ActiveLoop = !1;
      s3ss1Loop.pause();
    }
  }, 1000);
};
var s3ss2TimeoutFunc = function () {
  var s3ss2Timeout = setTimeout(function () {
    if (s3ss2LoopOut == !0) {
      s3ss2ActiveLoop = !1;
      s3ss2Loop.pause();
    }
  }, 1000);
};
var s3ss3TimeoutFunc = function () {
  var s3ss3Timeout = setTimeout(function () {
    if (s3ss3LoopOut == !0) {
      s3ss3ActiveLoop = !1;
      s3ss3Loop.pause();
      s3ss3Loop2.pause();
      s3ss3Loop3.pause();
      s3ss3Loop4.pause();
      s3ss3Loop5.pause();
      s3ss3Loop6.pause();
      s3ss3Loop7.pause();
    }
  }, 1000);
};
trigger3[0].addEventListener('click', (event) => {
  animeRemove3_1();
  ynw3();
  s3ss1Active = !0;
  s3ss1LoopOut = !1;
  let s3ss1on = anime.timeline({ easing: 'easeOutQuart', duration: 1000 });
  s3ss1on
    .add({ targets: ss3SA1, opacity: 1 })
    .add({ targets: ss3BA1, opacity: 1 }, 0)
    .add({ targets: ss3BGA1, translateX: '-75%' }, 0)
    .add({ targets: ss3BAI1, opacity: 1 }, 0)
    .add({ targets: ss3SI1, scale: 1, duration: 300 }, 0)
    .add({ targets: '.select-none-3', scale: 1, duration: 300 }, 0)
    .add({ targets: ss3AE1, translateX: 0, scale: 1 }, 0)
    .add({ targets: ssYTB3, opacity: 1, duration: 500 }, 0);
  if (s3ss2Active == !0) {
    s3ss2AnimOut();
  }
  if (s3ss3Active == !0) {
    s3ss3AnimOut();
  }
  if (s3ss1ActiveLoop == !1) {
    if (generalMobile == !1) {
      s3ss1ActiveLoop = !0;
      s3ss1Loop.restart();
    }
  }
});
trigger3[1].addEventListener('click', (event) => {
  animeRemove3_2();
  ynw3();
  s3ss2Active = !0;
  s3ss2LoopOut = !1;
  let s3ss2on = anime.timeline({ easing: 'easeOutQuart', duration: 1000 });
  s3ss2on
    .add({ targets: ss3SA2, opacity: 1 })
    .add({ targets: ss3BA2, opacity: 1 }, 0)
    .add({ targets: ss3BGA2, translateX: '-75%' }, 0)
    .add({ targets: ss3BAI2, opacity: 1 }, 0)
    .add({ targets: ss3SI2, scale: 1, duration: 300 }, 0)
    .add({ targets: '.select-none-3', scale: 1, duration: 300 }, 0)
    .add({ targets: ss3AE2, translateX: 0, scale: 1 }, 0)
    .add({ targets: ss3AEC2, rotateX: 100, rotateZ: 10 }, 0)
    .add({ targets: ssYTB3, opacity: 1, duration: 500 }, 0);
  if (s3ss1Active == !0) {
    s3ss1AnimOut();
  }
  if (s3ss3Active == !0) {
    s3ss3AnimOut();
  }
  if (s3ss2ActiveLoop == !1) {
    if (generalMobile == !1) {
      s3ss2ActiveLoop = !0;
      s3ss2Loop.restart();
    }
  }
});
trigger3[2].addEventListener('click', (event) => {
  animeRemove3_3();
  ynw3();
  s3ss3Active = !0;
  s3ss3LoopOut = !1;
  let s3ss3on = anime.timeline({ easing: 'easeOutQuart', duration: 1000 });
  s3ss3on
    .add({ targets: ss3SA3, opacity: 1 })
    .add({ targets: ss3BA3, opacity: 1 }, 0)
    .add({ targets: ss3BGA3, translateX: '-75%' }, 0)
    .add({ targets: ss3BAI3, opacity: 1 }, 0)
    .add({ targets: ss3SI3, scale: 1, duration: 300 }, 0)
    .add({ targets: '.select-none-3', scale: 1, duration: 300 }, 0)
    .add({ targets: ss3IWW3, translateX: 0, translateY: 0 }, 0)
    .add({ targets: ssYTB3, opacity: 1, duration: 500 }, 0);
  if (s3ss1Active == !0) {
    s3ss1AnimOut();
  }
  if (s3ss2Active == !0) {
    s3ss2AnimOut();
  }
  if (s3ss3ActiveLoop == !1) {
    if (generalMobile == !1) {
      s3ss3ActiveLoop = !0;
      s3ss3Loop.restart();
      s3ss3Loop2.restart();
      s3ss3Loop3.restart();
      s3ss3Loop4.restart();
      s3ss3Loop5.restart();
      s3ss3Loop6.restart();
      s3ss3Loop7.restart();
    }
  }
});
triggerOut3[0].addEventListener('click', (event) => {
  ynw3();
  anime({
    targets: '.select-none-3',
    scale: 0,
    duration: 300,
    easing: 'easeOutQuint',
  });
  anime({ targets: ssYTB3, opacity: 0, duration: 500, easing: 'easeOutQuint' });
  if (s3ss1Active == !0) {
    s3ss1AnimOut();
  }
  if (s3ss2Active == !0) {
    s3ss2AnimOut();
  }
  if (s3ss3Active == !0) {
    s3ss3AnimOut();
  }
});
