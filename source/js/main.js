import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {Form} from './modules/form-validate/form';
import './modules/header';
import './modules/accordion';
import './modules/select';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------
  iosVhFix();
  // Modules

  //переключение бургера в хедере
  const button = document.querySelector('.header-example__burger');
  button.addEventListener('click', () => {
    button.classList.toggle('btn--blue');
  });

  const overlay = document.querySelector('.header-example__overlay');
  overlay.addEventListener('click', () => {
    button.classList.toggle('btn--blue');
  });


  const hero = new Swiper('.hero__swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: true,
    delay: 3000,
    // slidesPerView: 1,
    // spaceBetween: 10,

    // If we need pagination
    pagination: {
      el: '.hero__pagination',
      type: 'bullets',
      clickable: true,
    },
    centeredSlides: true,
  });

  const programs = new Swiper('.programs__swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    slidesPerView: 1,
    spaceBetween: 10,

    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      // when window width is >= 768px
      768: {
        slidesPerView: 2,
        spaceBetween: 18,
      },

      // when window width is >= 1200px
      1200: {
        slidesPerView: 3,
        spaceBetween: 20,
      },

      1340: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },

    navigation: {
      nextEl: '.programs__next',
      prevEl: '.programs__prev',

    },
  });


  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
    const form = new Form();
    window.form = form;
    form.init();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
