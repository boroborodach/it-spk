// const { on } = require("gulp");

$(function () {
  $('.menu-list, .header-top__link, .send-application').on('click', 'a', function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),      
    top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
  });

  $('.header__menu-btn').on('click', function () {
    $('.header__nav').toggleClass('header__nav--active');
  });

  $('.menu-list__link').on('click', function () {
    $('.header__nav').removeClass('header__nav--active');
  });

  $('.clients__item-link').on('click', function (e) {
    e.preventDefault();
  });

  
  
  $('.footer-form__btn').on('click', function (e) {
    e.preventDefault();
    let nameRequired = $('.footer-form__name').val();
    let phoneRequired = $('.footer-form__phone').val();
    if (nameRequired && phoneRequired) {
      $('.modal-window, .overlay').css({'display': 'block'});
    } else {
      alert('Будь-ласка, заповніть всі поля!');
    }
  });

  $('.overlay, .modal-window__btn').on('click', function () {
    $('.overlay, .modal-window').css({'display': 'none'});
  });

  $(window).on('keydown', function (e) {
    if (e.key === 'Escape') {
      $('.overlay, .modal-window').css({'display': 'none'});
    }
  });
});

