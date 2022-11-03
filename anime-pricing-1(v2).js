let trigger = document.querySelectorAll('.sub-service-wrap');
let triggerOut = document.querySelectorAll('.select-none-1');
let s1ss1Active = !1;
let s1ss2Active = !1;
let s1ss3Active = !1;
let s1ss1ActiveLoop = !1;
let s1ss2ActiveLoop = !1;
let s1ss3ActiveLoop = !1;
let s1ss1LoopOut = !1;
let s1ss2LoopOut = !1;
let s1ss3LoopOut = !1;
let ssSA1 = trigger[0].querySelector('.sub-service-shadow-active-1-1');
let ssBA1 = trigger[0].querySelector('.sub-service-bg-active-1-1');
let ssBGA1 = trigger[0].querySelector('.sub-service-bg-gradient-active-1-1');
let ssBAI1 = trigger[0].querySelector('.sub-service-bg-active-inner-1-1');
let ssSI1 = trigger[0].querySelector('.sub-service-selector-inner-1-1');
let ssSA2 = trigger[1].querySelector('.sub-service-shadow-active-1-1');
let ssBA2 = trigger[1].querySelector('.sub-service-bg-active-1-1');
let ssBGA2 = trigger[1].querySelector('.sub-service-bg-gradient-active-1-1');
let ssBAI2 = trigger[1].querySelector('.sub-service-bg-active-inner-1-1');
let ssSI2 = trigger[1].querySelector('.sub-service-selector-inner-1-1');
let ssSA3 = trigger[2].querySelector('.sub-service-shadow-active-1-1');
let ssBA3 = trigger[2].querySelector('.sub-service-bg-active-1-1');
let ssBGA3 = trigger[2].querySelector('.sub-service-bg-gradient-active-1-1');
let ssBAI3 = trigger[2].querySelector('.sub-service-bg-active-inner-1-1');
let ssSI3 = trigger[2].querySelector('.sub-service-selector-inner-1-1');
let ssYTB1 = document.querySelectorAll('.ynw-tab-bg-1');
var animeRemove1 = function () {
  anime.remove([ssSA1, ssBA1, ssBGA1, ssBAI1, ssSI1, '.s1-sub-s1-page']);
};
var animeRemove2 = function () {
  anime.remove([ssSA2, ssBA2, ssBGA2, ssBAI2, ssSI2, '.s1-sub-s2-page']);
};
var animeRemove3 = function () {
  anime.remove([ssSA3, ssBA3, ssBGA3, ssBAI3, ssSI3, '.s1-sub-s3-page']);
};
let initState = anime.timeline({ autoplay: !1 });
initState
  .add({
    targets: '.s1-sub-s1-page',
    translateX: function () {
      return [anime.stagger(100, { start: 400 }), 0];
    },
    rotate: [33, 0],
  })
  .add({
    targets: '.s1-sub-s2-page',
    translateX: function () {
      return [anime.stagger(100, { start: 500 }), 0];
    },
    rotate: [33, 0],
  })
  .add({ targets: '.s1-sub-s3-page', translateX: [700, 0], rotate: [33, 0] })
  .add({ targets: '.sub-service-selector-inner-1-1', scale: [0, 1] })
  .add({ targets: '.select-none-1', scale: [0, 1] });
var s1ss1AnimOut = function () {
  animeRemove1();
  s1ss1Active = !1;
  s1ss1TimeoutFunc();
  s1ss1LoopOut = !0;
  setTimeout(function () {
    s1ss1LoopOut = !1;
  }, 1010);
  let s1ss1off = anime.timeline({ easing: 'easeOutQuint', duration: 1000 });
  s1ss1off
    .add({ targets: ssSA1, opacity: 0 })
    .add({ targets: ssBA1, opacity: 0 }, 0)
    .add({ targets: ssBGA1, translateX: '0%' }, 0)
    .add({ targets: ssBAI1, opacity: 0 }, 0)
    .add(
      { targets: ssSI1, scale: 0, duration: 300, easing: 'easeOutQuint' },
      0
    );
  anime({
    targets: '.s1-sub-s1-page',
    translateX: anime.stagger([500, 700]),
    rotate: 33,
    duration: 1000,
    easing: 'easeOutQuint',
  });
};
var s1ss2AnimOut = function () {
  animeRemove2();
  s1ss2Active = !1;
  s1ss2TimeoutFunc();
  s1ss2LoopOut = !0;
  setTimeout(function () {
    s1ss2LoopOut = !1;
  }, 1010);
  let s1ss2off = anime.timeline({ easing: 'easeOutQuint', duration: 1000 });
  s1ss2off
    .add({ targets: ssSA2, opacity: 0 })
    .add({ targets: ssBA2, opacity: 0 }, 0)
    .add({ targets: ssBGA2, translateX: '0%' }, 0)
    .add({ targets: ssBAI2, opacity: 0 }, 0)
    .add(
      { targets: ssSI2, scale: 0, duration: 300, easing: 'easeOutQuint' },
      0
    );
  anime({
    targets: '.s1-sub-s2-page',
    translateX: anime.stagger([500, 1000]),
    rotate: 33,
    duration: 1000,
    easing: 'easeOutQuint',
  });
};
var s1ss3AnimOut = function () {
  animeRemove3();
  s1ss3Active = !1;
  s1ss3TimeoutFunc();
  s1ss3LoopOut = !0;
  setTimeout(function () {
    s1ss3LoopOut = !1;
  }, 1010);
  let s1ss3off = anime.timeline({ easing: 'easeOutQuint', duration: 1000 });
  s1ss3off
    .add({ targets: ssSA3, opacity: 0 })
    .add({ targets: ssBA3, opacity: 0 }, 0)
    .add({ targets: ssBGA3, translateX: '0%' }, 0)
    .add({ targets: ssBAI3, opacity: 0 }, 0)
    .add(
      { targets: ssSI3, scale: 0, duration: 300, easing: 'easeOutQuint' },
      0
    );
  anime({
    targets: '.s1-sub-s3-page',
    translateX: 700,
    rotate: 33,
    duration: 1000,
    easing: 'easeOutQuint',
  });
};
var ynw1 = function () {
  var ynw1T = anime.timeline({ duration: 150, easing: 'easeOutQuart' });
  ynw1T
    .add({ targets: ['.ynw-choice-1', '#total-price'], scale: [0.98, 1] })
    .add({ targets: ['.ynw-choice-1', '#total-price'], scale: 0.98 });
};
let s1ss1Loop = anime.timeline({
  loop: !0,
  autoplay: !1,
  easing: 'easeInOutQuad',
});
s1ss1Loop
  .add({
    targets: '.sub-s-page-scroll-1',
    translateY: function (el) {
      return -el.clientHeight + 71;
    },
    duration: anime.stagger(1000, { start: 2000 }),
  })
  .add({
    targets: '.sub-s-page-scroll-1',
    translateY: 0,
    duration: anime.stagger(1000, { start: 2000 }),
  });
let s1ss2Loop = anime.timeline({
  loop: !0,
  autoplay: !1,
  easing: 'easeInOutQuad',
});
s1ss2Loop
  .add({
    targets: '.sub-s-page-scroll-2',
    translateY: function (el) {
      return -el.clientHeight + 71;
    },
    duration: anime.stagger(500, { start: 2500 }),
  })
  .add({
    targets: '.sub-s-page-scroll-2',
    translateY: 0,
    duration: anime.stagger(500, { start: 2500 }),
  });
let s1ss3Loop = anime.timeline({
  loop: !0,
  autoplay: !1,
  easing: 'easeInOutQuad',
});
s1ss3Loop
  .add({
    targets: '.sub-s-page-scroll-3',
    translateY: function (el) {
      return -el.clientHeight + 71;
    },
    duration: anime.stagger(150, { start: 2000 }),
  })
  .add({
    targets: '.sub-s-page-scroll-3',
    translateY: 0,
    duration: anime.stagger(150, { start: 2000 }),
  });
let s1ss3Loop2 = anime.timeline({ loop: !0, autoplay: !1, easing: 'linear' });
s1ss3Loop2
  .add({ targets: '.ssawi-1', translateX: ['50%', '-50%'], duration: 10000 })
  .add({ targets: '.ssawi-1', translateX: '150%', duration: 1 })
  .add({ targets: '.ssawi-1', translateX: '50%', duration: 10000 })
  .add(
    { targets: '.ssawi-2', translateX: ['50%', '-150%'], duration: 20000 },
    0
  )
  .add({ targets: '.ssawi-2', translateX: '50%', duration: 1 }, 20000)
  .add(
    {
      targets: '.s1ss3page1',
      opacity: 0,
      delay: anime.stagger(2000, { start: 0 }),
      duration: 2000,
      easing: 'easeOutQuad',
    },
    0
  )
  .add(
    {
      targets: '.s1ss3page1',
      opacity: 1,
      delay: anime.stagger(2000, { start: 0 }),
      duration: 2000,
      easing: 'easeInQuad',
    },
    10000
  )
  .add(
    {
      targets: '.s1ss3page2',
      opacity: [0, 1],
      delay: anime.stagger(2000, { start: 0 }),
      duration: 2000,
      easing: 'easeInQuad',
    },
    0
  )
  .add(
    {
      targets: '.s1ss3page2',
      opacity: 0,
      delay: anime.stagger(2000, { start: 0 }),
      duration: 2000,
      easing: 'easeOutQuad',
    },
    10000
  );
var s1ss1TimeoutFunc = function () {
  var s1ss1TimeoutSet = !0;
  var s1ss1Timeout = setTimeout(function () {
    if (s1ss1LoopOut == !0) {
      s1ss1ActiveLoop = !1;
      s1ss1Loop.pause();
    }
  }, 1000);
};
var s1ss2TimeoutFunc = function () {
  var s1ss2Timeout = setTimeout(function () {
    if (s1ss2LoopOut == !0) {
      s1ss2ActiveLoop = !1;
      s1ss2Loop.pause();
    }
  }, 1000);
};
var s1ss3TimeoutFunc = function () {
  var s1ss3Timeout = setTimeout(function () {
    if (s1ss3LoopOut == !0) {
      s1ss3ActiveLoop = !1;
      s1ss3Loop.pause();
      s1ss3Loop2.pause();
    }
  }, 1000);
};
trigger[0].addEventListener('click', (event) => {
  animeRemove1();
  ynw1();
  s1ss1Active = !0;
  s1ss1LoopOut = !1;
  let s1ss1on = anime.timeline({ easing: 'easeOutQuart', duration: 1000 });
  s1ss1on
    .add({ targets: ssSA1, opacity: 1 })
    .add({ targets: ssBA1, opacity: 1 }, 0)
    .add({ targets: ssBGA1, translateX: '-75%' }, 0)
    .add({ targets: ssBAI1, opacity: 1 }, 0)
    .add({ targets: ssSI1, scale: 1, duration: 300 }, 0)
    .add({ targets: '.select-none-1', scale: 1, duration: 300 }, 0)
    .add({ targets: ssYTB1, opacity: 1, duration: 500 }, 0);
  if (generalMobile == !1) {
    anime({
      targets: '.s1-sub-s1-page',
      translateX: 0,
      rotate: 0,
      duration: 1000,
      easing: 'easeOutCubic',
    });
  }
  if (s1ss2Active == !0) {
    s1ss2AnimOut();
  }
  if (s1ss3Active == !0) {
    s1ss3AnimOut();
  }
  if (s1ss1ActiveLoop == !1) {
    if (generalMobile == !1) {
      s1ss1ActiveLoop = !0;
      s1ss1Loop.restart();
    }
  }
});
trigger[1].addEventListener('click', (event) => {
  animeRemove2();
  ynw1();
  s1ss2Active = !0;
  s1ss2LoopOut = !1;
  let s1ss2on = anime.timeline({ easing: 'easeOutQuart', duration: 1000 });
  s1ss2on
    .add({ targets: ssSA2, opacity: 1 })
    .add({ targets: ssBA2, opacity: 1 }, 0)
    .add({ targets: ssBGA2, translateX: '-75%' }, 0)
    .add({ targets: ssBAI2, opacity: 1 }, 0)
    .add({ targets: ssSI2, scale: 1, duration: 300 }, 0)
    .add({ targets: '.select-none-1', scale: 1, duration: 300 }, 0)
    .add({ targets: ssYTB1, opacity: 1, duration: 500 }, 0);
  if (generalMobile == !1) {
    anime({
      targets: '.s1-sub-s2-page',
      translateX: 0,
      rotate: 0,
      duration: 1000,
      easing: 'easeOutCubic',
    });
  }
  if (s1ss1Active == !0) {
    s1ss1AnimOut();
  }
  if (s1ss3Active == !0) {
    s1ss3AnimOut();
  }
  if (s1ss2ActiveLoop == !1) {
    if (generalMobile == !1) {
      s1ss2ActiveLoop = !0;
      s1ss2Loop.restart();
    }
  }
});
trigger[2].addEventListener('click', (event) => {
  animeRemove3();
  ynw1();
  s1ss3Active = !0;
  s1ss3LoopOut = !1;
  let s1ss3on = anime.timeline({ easing: 'easeOutQuart', duration: 1000 });
  s1ss3on
    .add({ targets: ssSA3, opacity: 1 })
    .add({ targets: ssBA3, opacity: 1 }, 0)
    .add({ targets: ssBGA3, translateX: '-75%' }, 0)
    .add({ targets: ssBAI3, opacity: 1 }, 0)
    .add({ targets: ssSI3, scale: 1, duration: 300 }, 0)
    .add({ targets: '.select-none-1', scale: 1, duration: 300 }, 0)
    .add({ targets: ssYTB1, opacity: 1, duration: 500 }, 0);
  if (generalMobile == !1) {
    anime({
      targets: '.s1-sub-s3-page',
      translateX: 0,
      rotate: 0,
      duration: 1000,
      easing: 'easeOutCubic',
    });
  }
  if (s1ss1Active == !0) {
    s1ss1AnimOut();
  }
  if (s1ss2Active == !0) {
    s1ss2AnimOut();
  }
  if (s1ss3ActiveLoop == !1) {
    if (generalMobile == !1) {
      s1ss3ActiveLoop = !0;
      s1ss3Loop.restart();
      s1ss3Loop2.restart();
    }
  }
});
triggerOut[0].addEventListener('click', (event) => {
  ynw1();
  anime({
    targets: '.select-none-1',
    scale: 0,
    duration: 300,
    easing: 'easeOutQuint',
  });
  anime({ targets: ssYTB1, opacity: 0, duration: 500, easing: 'easeOutQuint' });
  if (s1ss1Active == !0) {
    s1ss1AnimOut();
  }
  if (s1ss2Active == !0) {
    s1ss2AnimOut();
  }
  if (s1ss3Active == !0) {
    s1ss3AnimOut();
  }
});
