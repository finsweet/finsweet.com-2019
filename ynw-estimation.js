var desbrandActive = !1;
var webdevActive = !1;
var animActive = !1;
$('.select-none-1, .select-none-2, .select-none-3').click(function () {
  let subServicesWrap = $(this).prevAll('.service-card-sub-services');
  let buttonsOff = $(subServicesWrap)
    .children()
    .find('.sub-service-radio-button');
  $(buttonsOff).prop('checked', !1);
});
$('.select-none-1').click(function () {
  $('#DESBRAND-1-5-PAGES').prop('checked', !1);
  $('#DESBRAND-5-10-PAGES').prop('checked', !1);
  $('#DESBRAND-10-PLUS-PAGES').prop('checked', !1);
  if (desbrandActive == !0) {
    document.getElementById('DESBRAND').click();
  }
});
$('.select-none-2').click(function () {
  $('#WEBDEV-1-5-PAGES').prop('checked', !1);
  $('#WEBDEV-5-10-PAGES').prop('checked', !1);
  $('#WEBDEV-10-PLUS-PAGES').prop('checked', !1);
  if (webdevActive == !0) {
    document.getElementById('WEBDEV').click();
  }
});
$('.select-none-3').click(function () {
  $('#ANIM-STANDARD').prop('checked', !1);
  $('#ANIM-ADVANCED').prop('checked', !1);
  $('#ANIM-CRAZYCUSTOM').prop('checked', !1);
  if (animActive == !0) {
    document.getElementById('ANIM').click();
  }
});
var radioButtons = $('.sub-service-radio-button');
var radio0 = $(radioButtons)[0];
var radio1 = $(radioButtons)[1];
var radio2 = $(radioButtons)[2];
var radio3 = $(radioButtons)[3];
var radio4 = $(radioButtons)[4];
var radio5 = $(radioButtons)[5];
var radio6 = $(radioButtons)[6];
var radio7 = $(radioButtons)[7];
var radio8 = $(radioButtons)[8];
$('.sub-service, .select-none-1, .select-none-2, .select-none-3').click(
  function () {
    if (
      $(radio2).is(':checked') ||
      $(radio5).is(':checked') ||
      $(radio8).is(':checked')
    ) {
      $('#price-plus').css('display', 'block');
    } else {
      $('#price-plus').css('display', 'none');
    }
    if (
      $(radio0).is(':checked') ||
      $(radio1).is(':checked') ||
      $(radio2).is(':checked')
    ) {
      $('#total-price-inner').css('display', 'flex');
      if (desbrandActive == !1) {
        document.getElementById('DESBRAND').click();
      }
      if ($(radio0).is(':checked')) {
        var currentSubServiceName1 = $(radio0)
          .parents('.sub-service')
          .children()
          .find('.sub-service-name')
          .text();
        var currentFrom1 = parseInt(
          $(radio0)
            .parents('.sub-service')
            .children()
            .find('.sub-service-cost-text-from')
            .text()
        );
        var currentTo1 = parseInt(
          $(radio0)
            .parents('.sub-service')
            .children()
            .find('.sub-service-cost-text-to')
            .text()
        );
        $('#DESBRAND-1-5-PAGES').prop('checked', !0);
      }
      if ($(radio1).is(':checked')) {
        var currentSubServiceName1 = $(radio1)
          .parents('.sub-service')
          .children()
          .find('.sub-service-name')
          .text();
        var currentFrom1 = parseInt(
          $(radio1)
            .parents('.sub-service')
            .children()
            .find('.sub-service-cost-text-from')
            .text()
        );
        var currentTo1 = parseInt(
          $(radio1)
            .parents('.sub-service')
            .children()
            .find('.sub-service-cost-text-to')
            .text()
        );
        $('#DESBRAND-5-10-PAGES').prop('checked', !0);
      }
      if ($(radio2).is(':checked')) {
        var currentSubServiceName1 = $(radio2)
          .parents('.sub-service')
          .children()
          .find('.sub-service-name')
          .text();
        var currentFrom1 = parseInt(
          $(radio2)
            .parents('.sub-service')
            .children()
            .find('.sub-service-cost-text-from')
            .text()
        );
        var currentTo1 = parseInt(
          $(radio2)
            .parents('.sub-service')
            .children()
            .find('.sub-service-cost-text-to')
            .text()
        );
        $('#DESBRAND-10-PLUS-PAGES').prop('checked', !0);
      }
      $('.ynw-choice-1').text(currentSubServiceName1);
    } else {
      var currentFrom1 = 0;
      var currentTo1 = 0;
      $('.ynw-choice-1').text('None');
    }
    if (
      $(radio3).is(':checked') ||
      $(radio4).is(':checked') ||
      $(radio5).is(':checked')
    ) {
      $('#total-price-inner').css('display', 'flex');
      if (webdevActive == !1) {
        document.getElementById('WEBDEV').click();
      }
      if ($(radio3).is(':checked')) {
        var currentSubServiceName2 = $(radio3)
          .parents('.sub-service')
          .children()
          .find('.sub-service-name')
          .text();
        var currentFrom2 = parseInt(
          $(radio3)
            .parents('.sub-service')
            .children()
            .find('.sub-service-cost-text-from')
            .text()
        );
        var currentTo2 = parseInt(
          $(radio3)
            .parents('.sub-service')
            .children()
            .find('.sub-service-cost-text-to')
            .text()
        );
        $('#WEBDEV-1-5-PAGES').prop('checked', !0);
      }
      if ($(radio4).is(':checked')) {
        var currentSubServiceName2 = $(radio4)
          .parents('.sub-service')
          .children()
          .find('.sub-service-name')
          .text();
        var currentFrom2 = parseInt(
          $(radio4)
            .parents('.sub-service')
            .children()
            .find('.sub-service-cost-text-from')
            .text()
        );
        var currentTo2 = parseInt(
          $(radio4)
            .parents('.sub-service')
            .children()
            .find('.sub-service-cost-text-to')
            .text()
        );
        $('#WEBDEV-5-10-PAGES').prop('checked', !0);
      }
      if ($(radio5).is(':checked')) {
        var currentSubServiceName2 = $(radio5)
          .parents('.sub-service')
          .children()
          .find('.sub-service-name')
          .text();
        var currentFrom2 = parseInt(
          $(radio5)
            .parents('.sub-service')
            .children()
            .find('.sub-service-cost-text-from')
            .text()
        );
        var currentTo2 = parseInt(
          $(radio5)
            .parents('.sub-service')
            .children()
            .find('.sub-service-cost-text-to')
            .text()
        );
        $('#WEBDEV-10-PLUS-PAGES').prop('checked', !0);
      }
      $('.ynw-choice-2').text(currentSubServiceName2);
    } else {
      var currentFrom2 = 0;
      var currentTo2 = 0;
      $('.ynw-choice-2').text('None');
    }
    if (
      $(radio6).is(':checked') ||
      $(radio7).is(':checked') ||
      $(radio8).is(':checked')
    ) {
      $('#total-price-inner').css('display', 'flex');
      if (animActive == !1) {
        document.getElementById('ANIM').click();
      }
      if ($(radio6).is(':checked')) {
        var currentSubServiceName3 = $(radio6)
          .parents('.sub-service')
          .children()
          .find('.sub-service-name')
          .text();
        var currentFrom3 = parseInt(
          $(radio6)
            .parents('.sub-service')
            .children()
            .find('.sub-service-cost-text-from')
            .text()
        );
        var currentTo3 = parseInt(
          $(radio6)
            .parents('.sub-service')
            .children()
            .find('.sub-service-cost-text-to')
            .text()
        );
        $('#ANIM-STANDARD').prop('checked', !0);
      }
      if ($(radio7).is(':checked')) {
        var currentSubServiceName3 = $(radio7)
          .parents('.sub-service')
          .children()
          .find('.sub-service-name')
          .text();
        var currentFrom3 = parseInt(
          $(radio7)
            .parents('.sub-service')
            .children()
            .find('.sub-service-cost-text-from')
            .text()
        );
        var currentTo3 = parseInt(
          $(radio7)
            .parents('.sub-service')
            .children()
            .find('.sub-service-cost-text-to')
            .text()
        );
        $('#ANIM-ADVANCED').prop('checked', !0);
      }
      if ($(radio8).is(':checked')) {
        var currentSubServiceName3 = $(radio8)
          .parents('.sub-service')
          .children()
          .find('.sub-service-name')
          .text();
        var currentFrom3 = parseInt(
          $(radio8)
            .parents('.sub-service')
            .children()
            .find('.sub-service-cost-text-from')
            .text()
        );
        var currentTo3 = parseInt(
          $(radio8)
            .parents('.sub-service')
            .children()
            .find('.sub-service-cost-text-to')
            .text()
        );
        $('#ANIM-CRAZYCUSTOM').prop('checked', !0);
      }
      $('.ynw-choice-3').text(currentSubServiceName3);
    } else {
      var currentFrom3 = 0;
      var currentTo3 = 0;
      $('.ynw-choice-3').text('None');
    }
    $('#price-from').text(currentFrom1 + currentFrom2 + currentFrom3);
    $('#price-to').text(currentTo1 + currentTo2 + currentTo3);
    if ($('.sub-service-radio-button:checked').length == 0) {
      $('#total-price-inner').css('display', 'none');
    }
  }
);
$('#DESBRAND').click(function () {
  if (desbrandActive == !1) {
    desbrandActive = !0;
  } else {
    desbrandActive = !1;
  }
});
$('#WEBDEV').click(function () {
  if (webdevActive == !1) {
    webdevActive = !0;
  } else {
    webdevActive = !1;
  }
});
$('#ANIM').click(function () {
  if (animActive == !1) {
    animActive = !0;
  } else {
    animActive = !1;
  }
});
