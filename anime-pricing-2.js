let trigger2 = document.querySelectorAll('.sub-service-wrap-2');
let triggerOut2 = document.querySelectorAll('.select-none-2');
let s2ss1Active = !1;
let s2ss2Active = !1;
let s2ss3Active = !1;
let s2ss1ActiveLoop = !1;
let s2ss2ActiveLoop = !1;
let s2ss3ActiveLoop = !1;
let s2ss1LoopOut = !1;
let s2ss2LoopOut = !1;
let s2ss3LoopOut = !1;
let ss2SA1 = trigger2[0].querySelector('.sub-service-shadow-active-2');
let ss2BA1 = trigger2[0].querySelector('.sub-service-bg-active-2');
let ss2BGA1 = trigger2[0].querySelector('.sub-service-bg-gradient-active-2');
let ss2BAI1 = trigger2[0].querySelector('.sub-service-bg-active-inner-2');
let ss2SI1 = trigger2[0].querySelector('.sub-service-selector-inner-2');
let mwet1 = trigger2[0].querySelectorAll('.mac-wet-none');
let mwh1 = trigger2[0].querySelectorAll('.mac-wf-h1');
let mwsic1 = trigger2[0].querySelectorAll('.mac-wf-sidebar-icon-check');
let ss2SA2 = trigger2[1].querySelector('.sub-service-shadow-active-2');
let ss2BA2 = trigger2[1].querySelector('.sub-service-bg-active-2');
let ss2BGA2 = trigger2[1].querySelector('.sub-service-bg-gradient-active-2');
let ss2BAI2 = trigger2[1].querySelector('.sub-service-bg-active-inner-2');
let ss2SI2 = trigger2[1].querySelector('.sub-service-selector-inner-2');
let mwet2 = trigger2[1].querySelectorAll('.mac-wet-none');
let mwh2 = trigger2[1].querySelectorAll('.mac-wf-h1');
let mwsic2 = trigger2[1].querySelectorAll('.mac-wf-sidebar-icon-check');
let ss2SA3 = trigger2[2].querySelector('.sub-service-shadow-active-2');
let ss2BA3 = trigger2[2].querySelector('.sub-service-bg-active-2');
let ss2BGA3 = trigger2[2].querySelector('.sub-service-bg-gradient-active-2');
let ss2BAI3 = trigger2[2].querySelector('.sub-service-bg-active-inner-2');
let ss2SI3 = trigger2[2].querySelector('.sub-service-selector-inner-2');
let mwet3 = trigger2[2].querySelectorAll('.mac-wet-none');
let mwh3 = trigger2[2].querySelectorAll('.mac-wf-h1');
let mwsic3 = trigger2[2].querySelectorAll('.mac-wf-sidebar-icon-check');
let ssYTB2 = document.querySelectorAll('.ynw-tab-bg-2');
anime.set('.sub-s-mac', { translateX: 300, rotateY: -90 });
anime.set('.sub-service-selector-inner-2', { scale: 0 });
anime.set(['.mac-wf-window', '.mac-webflow-logo'], { translateY: '-100%' });
anime.set('.select-none-2', { scale: 0 });
anime.set('.mac-wf-h1', { opacity: 0 });
anime.set('.mac-wf-sidebar-left', { scale: 0.15 });
anime.set('.mac-wf-sidebar-right', { scale: 0.3 });
anime.set('.mac-wf-sidebar-icon-check', { scale: 0 });
var animeRemove2_1 = function () {
  anime.remove([
    ss2SA1,
    ss2BA1,
    ss2BGA1,
    ss2BAI1,
    ss2SI1,
    trigger2[0].querySelectorAll('.sub-s-mac'),
  ]);
};
var animeRemove2_2 = function () {
  anime.remove([
    ss2SA2,
    ss2BA2,
    ss2BGA2,
    ss2BAI2,
    ss2SI2,
    trigger2[1].querySelectorAll('.sub-s-mac'),
  ]);
};
var animeRemove2_3 = function () {
  anime.remove([
    ss2SA3,
    ss2BA3,
    ss2BGA3,
    ss2BAI3,
    ss2SI3,
    trigger2[2].querySelectorAll('.sub-s-mac'),
  ]);
};
var s2ss1AnimOut = function () {
  animeRemove2_1();
  s2ss1Active = !1;
  s2ss1TimeoutFunc();
  s2ss1LoopOut = !0;
  setTimeout(function () {
    s2ss1LoopOut = !1;
  }, 1010);
  let s2ss1off = anime.timeline({ easing: 'easeOutQuint', duration: 1000 });
  s2ss1off
    .add({ targets: ss2SA1, opacity: 0 })
    .add({ targets: ss2BA1, opacity: 0 }, 0)
    .add({ targets: ss2BGA1, translateX: '0%' }, 0)
    .add({ targets: ss2BAI1, opacity: 0 }, 0)
    .add(
      { targets: ss2SI1, scale: 0, duration: 300, easing: 'easeOutQuint' },
      0
    )
    .add(
      {
        targets: trigger2[0].querySelector('.sub-s-mac'),
        translateX: 300,
        rotateY: -90,
      },
      0
    );
};
var s2ss2AnimOut = function () {
  animeRemove2_2();
  s2ss2Active = !1;
  s2ss2TimeoutFunc();
  s2ss2LoopOut = !0;
  setTimeout(function () {
    s2ss2LoopOut = !1;
  }, 1010);
  let s2ss2off = anime.timeline({ easing: 'easeOutQuint', duration: 1000 });
  s2ss2off
    .add({ targets: ss2SA2, opacity: 0 })
    .add({ targets: ss2BA2, opacity: 0 }, 0)
    .add({ targets: ss2BGA2, translateX: '0%' }, 0)
    .add({ targets: ss2BAI2, opacity: 0 }, 0)
    .add(
      { targets: ss2SI2, scale: 0, duration: 300, easing: 'easeOutQuint' },
      0
    )
    .add(
      {
        targets: trigger2[1].querySelector('.sub-s-mac'),
        translateX: 300,
        rotateY: -90,
      },
      0
    );
};
var s2ss3AnimOut = function () {
  animeRemove2_3();
  s2ss3Active = !1;
  s2ss3TimeoutFunc();
  s2ss3LoopOut = !0;
  setTimeout(function () {
    s2ss3LoopOut = !1;
  }, 1010);
  let s2ss3off = anime.timeline({ easing: 'easeOutQuint', duration: 1000 });
  s2ss3off
    .add({ targets: ss2SA3, opacity: 0 })
    .add({ targets: ss2BA3, opacity: 0 }, 0)
    .add({ targets: ss2BGA3, translateX: '0%' }, 0)
    .add({ targets: ss2BAI3, opacity: 0 }, 0)
    .add(
      { targets: ss2SI3, scale: 0, duration: 300, easing: 'easeOutQuint' },
      0
    )
    .add(
      {
        targets: trigger2[2].querySelector('.sub-s-mac'),
        translateX: 300,
        rotateY: -90,
      },
      0
    );
};
var ynw2 = function () {
  var ynw2T = anime.timeline({ duration: 150, easing: 'easeOutQuart' });
  ynw2T
    .add({ targets: ['.ynw-choice-2', '#total-price'], scale: [0.98, 1] })
    .add({ targets: ['.ynw-choice-2', '#total-price'], scale: 0.98 });
};
var typeItem = 0;
var m1TypeLoop = function () {
  mwet1[typeItem].style.display = 'block';
  typeItem++;
};
var macWetNone1 = document.getElementsByClassName('mac-wet-none');
let s2ss1Loop = anime.timeline({
  loop: !0,
  autoplay: !1,
  easing: 'easeInOutQuad',
});
s2ss1Loop
  .add({
    targets: trigger2[0].querySelector('.mac-webflow-logo'),
    translateY: '0%',
    duration: 1000,
    easing: 'easeOutBack',
    changeBegin: function () {
      typeItem = 0;
      for (var i = 0; i < macWetNone1.length; i++)
        macWetNone1[i].style.display = 'none';
    },
  })
  .add({
    targets: trigger2[0].querySelector('.mac-webflow-logo'),
    translateY: '100%',
    duration: 1000,
    easing: 'easeInBack',
  })
  .add(
    {
      targets: trigger2[0].querySelector('.mac-wf-window'),
      translateY: '0%',
      duration: 500,
    },
    1500
  )
  .add(
    {
      targets: trigger2[0].querySelector('.mac-wf-sidebar-right-scroll'),
      translateY: [-500, 0],
      duration: 2000,
      easing: 'easeOutExpo',
    },
    1500
  )
  .add(
    {
      targets: mwh1[0],
      opacity: 1,
      duration: 20,
      changeBegin: function () {
        m1TypeLoop();
      },
    },
    '-=500'
  )
  .add(
    {
      targets: mwh1[1],
      opacity: 1,
      duration: 20,
      changeBegin: function () {
        m1TypeLoop();
      },
    },
    '-=450'
  )
  .add(
    {
      targets: mwh1[2],
      opacity: 1,
      duration: 20,
      changeBegin: function () {
        m1TypeLoop();
      },
    },
    '-=370'
  )
  .add(
    {
      targets: mwh1[3],
      opacity: 1,
      duration: 20,
      changeBegin: function () {
        m1TypeLoop();
      },
    },
    '-=250'
  )
  .add(
    {
      targets: mwh1[4],
      opacity: 1,
      delay: 50,
      duration: 20,
      changeBegin: function () {
        m1TypeLoop();
      },
    },
    '-=200'
  )
  .add(
    {
      targets: mwh1[5],
      opacity: 1,
      duration: 20,
      changeBegin: function () {
        m1TypeLoop();
      },
    },
    '-=100'
  )
  .add({
    targets: mwh1[6],
    opacity: 1,
    delay: 40,
    duration: 20,
    changeBegin: function () {
      m1TypeLoop();
    },
  })
  .add({
    targets: mwh1[7],
    opacity: 1,
    delay: 90,
    duration: 20,
    changeBegin: function () {
      m1TypeLoop();
    },
  })
  .add({
    targets: mwh1[8],
    opacity: 1,
    delay: 90,
    duration: 20,
    changeBegin: function () {
      m1TypeLoop();
    },
  })
  .add({
    targets: mwh1[9],
    opacity: 1,
    delay: 100,
    duration: 20,
    changeBegin: function () {
      m1TypeLoop();
    },
  })
  .add({
    targets: mwh1[10],
    opacity: 1,
    delay: 120,
    duration: 20,
    changeBegin: function () {
      m1TypeLoop();
    },
  })
  .add({
    targets: mwh1[11],
    opacity: 1,
    delay: 90,
    duration: 20,
    changeBegin: function () {
      m1TypeLoop();
    },
  })
  .add({
    targets: mwh1[12],
    opacity: 1,
    delay: 130,
    duration: 20,
    changeBegin: function () {
      m1TypeLoop();
    },
  })
  .add({
    targets: mwh1[13],
    opacity: 1,
    delay: 80,
    duration: 20,
    changeBegin: function () {
      m1TypeLoop();
    },
  })
  .add({
    targets: mwh1[14],
    opacity: 1,
    delay: 100,
    duration: 20,
    changeBegin: function () {
      m1TypeLoop();
    },
  })
  .add({
    targets: mwh1[15],
    opacity: 1,
    delay: 140,
    duration: 20,
    changeBegin: function () {
      m1TypeLoop();
    },
  })
  .add({
    targets: mwh1[16],
    opacity: 1,
    delay: 140,
    duration: 20,
    changeBegin: function () {
      m1TypeLoop();
    },
  })
  .add({
    targets: mwh1[17],
    opacity: 1,
    delay: 80,
    duration: 20,
    changeBegin: function () {
      m1TypeLoop();
    },
  })
  .add({
    targets: mwh1[18],
    opacity: 1,
    delay: 80,
    duration: 20,
    changeBegin: function () {
      m1TypeLoop();
    },
  })
  .add({
    targets: mwh1[19],
    opacity: 1,
    delay: 100,
    duration: 20,
    changeBegin: function () {
      m1TypeLoop();
    },
  })
  .add({
    targets: mwh1[20],
    opacity: 1,
    delay: 110,
    duration: 20,
    changeBegin: function () {
      m1TypeLoop();
    },
  })
  .add({
    targets: mwh1[21],
    opacity: 1,
    delay: 90,
    duration: 20,
    changeBegin: function () {
      m1TypeLoop();
    },
  })
  .add({
    targets: mwh1[22],
    opacity: 1,
    delay: 120,
    duration: 20,
    changeBegin: function () {
      m1TypeLoop();
    },
  })
  .add(
    {
      targets: trigger2[0].querySelector('.mac-wf-sidebar-left'),
      scale: 1,
      duration: 1300,
    },
    '+=500'
  )
  .add(
    {
      targets: trigger2[0].querySelector('.mac-wf-embed'),
      translateX: 150,
      duration: 1300,
    },
    '-=1300'
  )
  .add(
    {
      targets: trigger2[0].querySelector('.mac-wf-body'),
      translateX: 150,
      duration: 1300,
    },
    '-=1300'
  )
  .add(
    {
      targets: trigger2[0].querySelector('.mac-wf-sidebar-right'),
      translateX: 450,
      duration: 1300,
    },
    '-=1300'
  )
  .add(
    {
      targets: trigger2[0].querySelector('.mac-wf-sidebar-left-scroll'),
      translateY: -70,
      duration: 1750,
    },
    '+=300'
  )
  .add(
    {
      targets: mwsic1,
      scale: 1,
      duration: 650,
      delay: anime.stagger(100, { easing: 'easeInOutQuad' }),
    },
    '-=1500'
  )
  .add(
    {
      targets: trigger2[0].querySelector('.mac-wf-window'),
      opacity: 0,
      duration: 500,
      easing: 'easeOutCubic',
    },
    '+=300'
  );
let s2ss1PointerLoop = anime.timeline({
  loop: !0,
  autoplay: !1,
  easing: 'linear',
});
s2ss1PointerLoop
  .add(
    {
      targets: trigger2[0].querySelector('.mac-wf-embed-text-pointer'),
      opacity: 0,
      duration: 1,
    },
    500
  )
  .add(
    {
      targets: trigger2[0].querySelector('.mac-wf-embed-text-pointer'),
      opacity: 1,
      duration: 1,
    },
    '+=500'
  );
var typeItem2 = 0;
var m2TypeLoop = function () {
  mwet2[typeItem2].style.display = 'block';
  typeItem2++;
};
let s2ss2Loop = anime.timeline({
  loop: !0,
  autoplay: !1,
  easing: 'easeInOutQuad',
});
s2ss2Loop
  .add({
    targets: trigger2[1].querySelector('.mac-webflow-logo'),
    translateY: '0%',
    duration: 1000,
    easing: 'easeOutBack',
    changeBegin: function () {
      typeItem2 = 0;
      for (var i = 0; i < macWetNone1.length; i++)
        macWetNone1[i].style.display = 'none';
    },
  })
  .add({
    targets: trigger2[1].querySelector('.mac-webflow-logo'),
    translateY: '100%',
    duration: 1000,
    easing: 'easeInBack',
  })
  .add(
    {
      targets: trigger2[1].querySelector('.mac-wf-window'),
      translateY: '0%',
      duration: 500,
    },
    1500
  )
  .add(
    {
      targets: trigger2[1].querySelector('.mac-wf-sidebar-right-scroll'),
      translateY: [-500, 0],
      duration: 2000,
      easing: 'easeOutExpo',
    },
    1500
  )
  .add(
    {
      targets: mwh2[0],
      opacity: 1,
      duration: 20,
      changeBegin: function () {
        m2TypeLoop();
      },
    },
    '-=500'
  )
  .add(
    {
      targets: mwh2[1],
      opacity: 1,
      duration: 20,
      changeBegin: function () {
        m2TypeLoop();
      },
    },
    '-=450'
  )
  .add(
    {
      targets: mwh2[2],
      opacity: 1,
      duration: 20,
      changeBegin: function () {
        m2TypeLoop();
      },
    },
    '-=370'
  )
  .add(
    {
      targets: mwh2[3],
      opacity: 1,
      duration: 20,
      changeBegin: function () {
        m2TypeLoop();
      },
    },
    '-=250'
  )
  .add(
    {
      targets: mwh2[4],
      opacity: 1,
      delay: 50,
      duration: 20,
      changeBegin: function () {
        m2TypeLoop();
      },
    },
    '-=200'
  )
  .add(
    {
      targets: mwh2[5],
      opacity: 1,
      duration: 20,
      changeBegin: function () {
        m2TypeLoop();
      },
    },
    '-=100'
  )
  .add({
    targets: mwh2[6],
    opacity: 1,
    delay: 40,
    duration: 20,
    changeBegin: function () {
      m2TypeLoop();
    },
  })
  .add({
    targets: mwh2[7],
    opacity: 1,
    delay: 90,
    duration: 20,
    changeBegin: function () {
      m2TypeLoop();
    },
  })
  .add({
    targets: mwh2[8],
    opacity: 1,
    delay: 90,
    duration: 20,
    changeBegin: function () {
      m2TypeLoop();
    },
  })
  .add({
    targets: mwh2[9],
    opacity: 1,
    delay: 100,
    duration: 20,
    changeBegin: function () {
      m2TypeLoop();
    },
  })
  .add({
    targets: mwh2[10],
    opacity: 1,
    delay: 120,
    duration: 20,
    changeBegin: function () {
      m2TypeLoop();
    },
  })
  .add({
    targets: mwh2[11],
    opacity: 1,
    delay: 90,
    duration: 20,
    changeBegin: function () {
      m2TypeLoop();
    },
  })
  .add({
    targets: mwh2[12],
    opacity: 1,
    delay: 130,
    duration: 20,
    changeBegin: function () {
      m2TypeLoop();
    },
  })
  .add({
    targets: mwh2[13],
    opacity: 1,
    delay: 80,
    duration: 20,
    changeBegin: function () {
      m2TypeLoop();
    },
  })
  .add({
    targets: mwh2[14],
    opacity: 1,
    delay: 100,
    duration: 20,
    changeBegin: function () {
      m2TypeLoop();
    },
  })
  .add({
    targets: mwh2[15],
    opacity: 1,
    delay: 140,
    duration: 20,
    changeBegin: function () {
      m2TypeLoop();
    },
  })
  .add({
    targets: mwh2[16],
    opacity: 1,
    delay: 140,
    duration: 20,
    changeBegin: function () {
      m2TypeLoop();
    },
  })
  .add({
    targets: mwh2[17],
    opacity: 1,
    delay: 80,
    duration: 20,
    changeBegin: function () {
      m2TypeLoop();
    },
  })
  .add({
    targets: mwh2[18],
    opacity: 1,
    delay: 80,
    duration: 20,
    changeBegin: function () {
      m2TypeLoop();
    },
  })
  .add({
    targets: mwh2[19],
    opacity: 1,
    delay: 100,
    duration: 20,
    changeBegin: function () {
      m2TypeLoop();
    },
  })
  .add({
    targets: mwh2[20],
    opacity: 1,
    delay: 110,
    duration: 20,
    changeBegin: function () {
      m2TypeLoop();
    },
  })
  .add({
    targets: mwh2[21],
    opacity: 1,
    delay: 90,
    duration: 20,
    changeBegin: function () {
      m2TypeLoop();
    },
  })
  .add({
    targets: mwh2[22],
    opacity: 1,
    delay: 120,
    duration: 20,
    changeBegin: function () {
      m2TypeLoop();
    },
  })
  .add(
    {
      targets: trigger2[1].querySelector('.mac-wf-sidebar-left'),
      scale: 1,
      duration: 1300,
    },
    '+=500'
  )
  .add(
    {
      targets: trigger2[1].querySelector('.mac-wf-embed'),
      translateX: 150,
      duration: 1300,
    },
    '-=1300'
  )
  .add(
    {
      targets: trigger2[1].querySelector('.mac-wf-body'),
      translateX: 150,
      duration: 1300,
    },
    '-=1300'
  )
  .add(
    {
      targets: trigger2[1].querySelector('.mac-wf-sidebar-right'),
      translateX: 450,
      duration: 1300,
    },
    '-=1300'
  )
  .add(
    {
      targets: trigger2[1].querySelector('.mac-wf-sidebar-left-scroll'),
      translateY: -210,
      duration: 3000,
    },
    '+=300'
  )
  .add(
    {
      targets: mwsic2,
      scale: 1,
      duration: 1000,
      delay: anime.stagger(175, { easing: 'easeInOutQuad' }),
    },
    '-=3000'
  )
  .add(
    {
      targets: trigger2[1].querySelector('.mac-wf-window'),
      opacity: 0,
      duration: 500,
      easing: 'easeOutCubic',
    },
    '+=300'
  );
let s2ss2PointerLoop = anime.timeline({
  loop: !0,
  autoplay: !1,
  easing: 'linear',
});
s2ss2PointerLoop
  .add(
    {
      targets: trigger2[1].querySelector('.mac-wf-embed-text-pointer'),
      opacity: 0,
      duration: 1,
    },
    500
  )
  .add(
    {
      targets: trigger2[1].querySelector('.mac-wf-embed-text-pointer'),
      opacity: 1,
      duration: 1,
    },
    '+=500'
  );
var typeItem3 = 0;
var m3TypeLoop = function () {
  mwet3[typeItem3].style.display = 'block';
  typeItem3++;
};
let s2ss3Loop = anime.timeline({
  loop: !0,
  autoplay: !1,
  easing: 'easeInOutQuad',
});
s2ss3Loop
  .add({
    targets: trigger2[2].querySelector('.mac-webflow-logo'),
    translateY: '0%',
    duration: 1000,
    easing: 'easeOutBack',
    changeBegin: function () {
      typeItem3 = 0;
      for (var i = 0; i < macWetNone1.length; i++)
        macWetNone1[i].style.display = 'none';
    },
  })
  .add({
    targets: trigger2[2].querySelector('.mac-webflow-logo'),
    translateY: '100%',
    duration: 1000,
    easing: 'easeInBack',
  })
  .add(
    {
      targets: trigger2[2].querySelector('.mac-wf-window'),
      translateY: '0%',
      duration: 500,
    },
    1500
  )
  .add(
    {
      targets: trigger2[2].querySelector('.mac-wf-sidebar-right-scroll'),
      translateY: [-500, 0],
      duration: 2000,
      easing: 'easeOutExpo',
    },
    1500
  )
  .add(
    {
      targets: mwh3[0],
      opacity: 1,
      duration: 20,
      changeBegin: function () {
        m3TypeLoop();
      },
    },
    '-=500'
  )
  .add(
    {
      targets: mwh3[1],
      opacity: 1,
      duration: 20,
      changeBegin: function () {
        m3TypeLoop();
      },
    },
    '-=450'
  )
  .add(
    {
      targets: mwh3[2],
      opacity: 1,
      duration: 20,
      changeBegin: function () {
        m3TypeLoop();
      },
    },
    '-=370'
  )
  .add(
    {
      targets: mwh3[3],
      opacity: 1,
      duration: 20,
      changeBegin: function () {
        m3TypeLoop();
      },
    },
    '-=250'
  )
  .add(
    {
      targets: mwh3[4],
      opacity: 1,
      delay: 50,
      duration: 20,
      changeBegin: function () {
        m3TypeLoop();
      },
    },
    '-=200'
  )
  .add(
    {
      targets: mwh3[5],
      opacity: 1,
      duration: 20,
      changeBegin: function () {
        m3TypeLoop();
      },
    },
    '-=100'
  )
  .add({
    targets: mwh3[6],
    opacity: 1,
    delay: 40,
    duration: 20,
    changeBegin: function () {
      m3TypeLoop();
    },
  })
  .add({
    targets: mwh3[7],
    opacity: 1,
    delay: 90,
    duration: 20,
    changeBegin: function () {
      m3TypeLoop();
    },
  })
  .add({
    targets: mwh3[8],
    opacity: 1,
    delay: 90,
    duration: 20,
    changeBegin: function () {
      m3TypeLoop();
    },
  })
  .add({
    targets: mwh3[9],
    opacity: 1,
    delay: 100,
    duration: 20,
    changeBegin: function () {
      m3TypeLoop();
    },
  })
  .add({
    targets: mwh3[10],
    opacity: 1,
    delay: 120,
    duration: 20,
    changeBegin: function () {
      m3TypeLoop();
    },
  })
  .add({
    targets: mwh3[11],
    opacity: 1,
    delay: 90,
    duration: 20,
    changeBegin: function () {
      m3TypeLoop();
    },
  })
  .add({
    targets: mwh3[12],
    opacity: 1,
    delay: 130,
    duration: 20,
    changeBegin: function () {
      m3TypeLoop();
    },
  })
  .add({
    targets: mwh3[13],
    opacity: 1,
    delay: 80,
    duration: 20,
    changeBegin: function () {
      m3TypeLoop();
    },
  })
  .add({
    targets: mwh3[14],
    opacity: 1,
    delay: 100,
    duration: 20,
    changeBegin: function () {
      m3TypeLoop();
    },
  })
  .add({
    targets: mwh3[15],
    opacity: 1,
    delay: 140,
    duration: 20,
    changeBegin: function () {
      m3TypeLoop();
    },
  })
  .add({
    targets: mwh3[16],
    opacity: 1,
    delay: 140,
    duration: 20,
    changeBegin: function () {
      m3TypeLoop();
    },
  })
  .add({
    targets: mwh3[17],
    opacity: 1,
    delay: 80,
    duration: 20,
    changeBegin: function () {
      m3TypeLoop();
    },
  })
  .add({
    targets: mwh3[18],
    opacity: 1,
    delay: 80,
    duration: 20,
    changeBegin: function () {
      m3TypeLoop();
    },
  })
  .add({
    targets: mwh3[19],
    opacity: 1,
    delay: 100,
    duration: 20,
    changeBegin: function () {
      m3TypeLoop();
    },
  })
  .add({
    targets: mwh3[20],
    opacity: 1,
    delay: 110,
    duration: 20,
    changeBegin: function () {
      m3TypeLoop();
    },
  })
  .add({
    targets: mwh3[21],
    opacity: 1,
    delay: 90,
    duration: 20,
    changeBegin: function () {
      m3TypeLoop();
    },
  })
  .add({
    targets: mwh3[22],
    opacity: 1,
    delay: 120,
    duration: 20,
    changeBegin: function () {
      m3TypeLoop();
    },
  })
  .add(
    {
      targets: trigger2[2].querySelector('.mac-wf-sidebar-left'),
      scale: 1,
      duration: 1300,
    },
    '+=500'
  )
  .add(
    {
      targets: trigger2[2].querySelector('.mac-wf-embed'),
      translateX: 150,
      duration: 1300,
    },
    '-=1300'
  )
  .add(
    {
      targets: trigger2[2].querySelector('.mac-wf-body'),
      translateX: 150,
      duration: 1300,
    },
    '-=1300'
  )
  .add(
    {
      targets: trigger2[2].querySelector('.mac-wf-sidebar-right'),
      translateX: 450,
      duration: 1300,
    },
    '-=1300'
  )
  .add(
    {
      targets: trigger2[2].querySelector('.mac-wf-sidebar-left-scroll'),
      translateY: -320,
      duration: 4000,
    },
    '+=300'
  )
  .add(
    {
      targets: mwsic3,
      scale: 1,
      duration: 1000,
      delay: anime.stagger(200, { easing: 'easeInOutQuad' }),
    },
    '-=4000'
  )
  .add(
    {
      targets: trigger2[2].querySelector('.mac-wf-window'),
      opacity: 0,
      duration: 500,
      easing: 'easeOutCubic',
    },
    '+=300'
  );
var s2ss1TimeoutFunc = function () {
  var s2ss1TimeoutSet = !0;
  var s2ss1Timeout = setTimeout(function () {
    if (s2ss1LoopOut == !0) {
      s2ss1ActiveLoop = !1;
      s2ss1Loop.pause();
      s2ss1PointerLoop.pause();
    }
  }, 1000);
};
var s2ss2TimeoutFunc = function () {
  var s2ss2Timeout = setTimeout(function () {
    if (s2ss2LoopOut == !0) {
      s2ss2ActiveLoop = !1;
      s2ss2Loop.pause();
    }
  }, 1000);
};
var s2ss3TimeoutFunc = function () {
  var s2ss3Timeout = setTimeout(function () {
    if (s2ss3LoopOut == !0) {
      s2ss3ActiveLoop = !1;
      s2ss3Loop.pause();
    }
  }, 1000);
};
trigger2[0].addEventListener('click', (event) => {
  animeRemove2_1();
  ynw2();
  s2ss1Active = !0;
  s2ss1LoopOut = !1;
  let s2ss1on = anime.timeline({ easing: 'easeOutQuart', duration: 1000 });
  s2ss1on
    .add({ targets: ss2SA1, opacity: 1 })
    .add({ targets: ss2BA1, opacity: 1 }, 0)
    .add({ targets: ss2BGA1, translateX: '-75%' }, 0)
    .add({ targets: ss2BAI1, opacity: 1 }, 0)
    .add({ targets: ss2SI1, scale: 1, duration: 300 }, 0)
    .add({ targets: '.select-none-2', scale: 1, duration: 300 }, 0)
    .add(
      {
        targets: trigger2[0].querySelector('.sub-s-mac'),
        translateX: 0,
        rotateY: 0,
      },
      0
    )
    .add({ targets: ssYTB2, opacity: 1, duration: 500 }, 0);
  if (s2ss2Active == !0) {
    s2ss2AnimOut();
  }
  if (s2ss3Active == !0) {
    s2ss3AnimOut();
  }
  if (s2ss1ActiveLoop == !1) {
    if (generalMobile == !1) {
      s2ss1ActiveLoop = !0;
      s2ss1Loop.restart();
      s2ss1PointerLoop.restart();
    }
  }
});
trigger2[1].addEventListener('click', (event) => {
  animeRemove2_2();
  ynw2();
  s2ss2Active = !0;
  s2ss2LoopOut = !1;
  let s2ss2on = anime.timeline({ easing: 'easeOutQuart', duration: 1000 });
  s2ss2on
    .add({ targets: ss2SA2, opacity: 1 })
    .add({ targets: ss2BA2, opacity: 1 }, 0)
    .add({ targets: ss2BGA2, translateX: '-75%' }, 0)
    .add({ targets: ss2BAI2, opacity: 1 }, 0)
    .add({ targets: ss2SI2, scale: 1, duration: 300 }, 0)
    .add({ targets: '.select-none-2', scale: 1, duration: 300 }, 0)
    .add(
      {
        targets: trigger2[1].querySelector('.sub-s-mac'),
        translateX: 0,
        rotateY: 0,
      },
      0
    )
    .add({ targets: ssYTB2, opacity: 1, duration: 500 }, 0);
  if (s2ss1Active == !0) {
    s2ss1AnimOut();
  }
  if (s2ss3Active == !0) {
    s2ss3AnimOut();
  }
  if (s2ss2ActiveLoop == !1) {
    if (generalMobile == !1) {
      s2ss2ActiveLoop = !0;
      s2ss2Loop.restart();
    }
  }
});
trigger2[2].addEventListener('click', (event) => {
  animeRemove2_3();
  ynw2();
  s2ss3Active = !0;
  s2ss3LoopOut = !1;
  let s2ss3on = anime.timeline({ easing: 'easeOutQuart', duration: 1000 });
  s2ss3on
    .add({ targets: ss2SA3, opacity: 1 })
    .add({ targets: ss2BA3, opacity: 1 }, 0)
    .add({ targets: ss2BGA3, translateX: '-75%' }, 0)
    .add({ targets: ss2BAI3, opacity: 1 }, 0)
    .add({ targets: ss2SI3, scale: 1, duration: 300 }, 0)
    .add({ targets: '.select-none-2', scale: 1, duration: 300 }, 0)
    .add(
      {
        targets: trigger2[2].querySelector('.sub-s-mac'),
        translateX: 0,
        rotateY: 0,
      },
      0
    )
    .add({ targets: ssYTB2, opacity: 1, duration: 500 }, 0);
  if (s2ss1Active == !0) {
    s2ss1AnimOut();
  }
  if (s2ss2Active == !0) {
    s2ss2AnimOut();
  }
  if (s2ss3ActiveLoop == !1) {
    if (generalMobile == !1) {
      s2ss3ActiveLoop = !0;
      s2ss3Loop.restart();
    }
  }
});
triggerOut2[0].addEventListener('click', (event) => {
  ynw2();
  anime({
    targets: '.select-none-2',
    scale: 0,
    duration: 300,
    easing: 'easeOutQuint',
  });
  anime({ targets: ssYTB2, opacity: 0, duration: 500, easing: 'easeOutQuint' });
  if (s2ss1Active == !0) {
    s2ss1AnimOut();
  }
  if (s2ss2Active == !0) {
    s2ss2AnimOut();
  }
  if (s2ss3Active == !0) {
    s2ss3AnimOut();
  }
});
