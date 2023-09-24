import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {Form} from './modules/form-validate/form';
import './modules/header';
import './modules/accordion';
import './modules/tabs';
import './modules/select';
import './vendor/leaflet/leaflet';
/* eslint-disable */
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
    button.classList.remove('btn--blue');
  });

  let closeMenuHead = document.querySelector('[data-close-menu]');
  closeMenuHead.addEventListener('click', () => {
    button.classList.remove('btn--blue');
  });

  const hero = new Swiper('.hero__swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: false,
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

    scrollbar: {
      el: '.programs__scrollbar',
      draggable: true,
      // dragClass: '.programs__drag',
      dragSize: '392',
    },

    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      // when window width is >= 768px
      768: {
        slidesPerView: 2.12,
        spaceBetween: 30,

        scrollbar: {
          dragSize: '324',
        },
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
      nextEl: '.programs__button-nav--next',
      prevEl: '.programs__button-nav--prev',

    },
  });

  // Функция для переключения кнопок фильтрации

  const imgFilters = document.querySelector('.filters');
  const filterDefault = imgFilters.querySelector('#filter-default');
  const filterVolunteer = imgFilters.querySelector('#volunteer');
  const filterDiscussed = imgFilters.querySelector('#filter-discussed');
  const filterСareer = imgFilters.querySelector('#filter-career');
  const filterTrips = imgFilters.querySelector('#filter-trips');

  const chooseFilter = (filterType) => {
    filterDefault.classList.remove('filters__button--active');
    filterVolunteer.classList.remove('filters__button--active');
    filterDiscussed.classList.remove('filters__button--active');
    filterСareer.classList.remove('filters__button--active');
    filterTrips.classList.remove('filters__button--active');
    filterType.classList.add('filters__button--active');
  };

  const setListenersOnFilters = () => {
    filterDefault.addEventListener('click', (evt) => {
      chooseFilter(evt.target);
    });

    filterVolunteer.addEventListener('click', (evt) => {
      chooseFilter(evt.target);
    });

    filterDiscussed.addEventListener('click', (evt) => {
      chooseFilter(evt.target);
    });
    filterСareer.addEventListener('click', (evt) => {
      chooseFilter(evt.target);
    });
    filterTrips.addEventListener('click', (evt) => {
      chooseFilter(evt.target);
    });
  };

  setListenersOnFilters();

  const news = new Swiper('.news__swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    slidesPerView: 'auto',
    spaceBetween: 10,
    updateOnWindowResize: true,

    pagination: {
      el: '.news__pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + '</span>';
      },
    },

    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
        grid: {
          rows: 2,
          fill: 'row',
        },
      },
      // when window width is >= 768px
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
        updateOnWindowResize: true,
        grid: {
          rows: 2,
          fill: 'row',
        },
      },

      // when window width is >= 1200px
      1200: {
        updateOnWindowResize: true,
        slidesPerView: 'auto',
        spaceBetween: 28,
        grid: {
          rows: 1,
          fill: 'row',
        },
      },

      1340: {
        updateOnWindowResize: true,
        slidesPerView: 'auto',
        spaceBetween: 32,
        grid: {
          rows: 1,
          fill: 'row',
        },
      },
    },

    navigation: {
      nextEl: '.news__button-nav--right',
      prevEl: '.news__button-nav--left',

    },
  });

  const reviews = new Swiper('.reviews__swiper', {
    direction: 'horizontal',
    loop: false,
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 'auto',
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 2,
        spaceBetween: 32,
      },
    },
    scrollbar: {
      el: '.reviews__scrollbar',
    },
    navigation: {
      nextEl: '.reviews__button-nav--next',
      prevEl: '.reviews__button-nav--prev',
    },
  });


  //Карта

  const map = L.map('map').setView([55.028527396640804, 82.92824989073691], 17);

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}', {foo: 'bar', attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(map);

  const greenIcon = L.icon({
    iconUrl: './img/svg/pin.svg',
    iconSize: [70, 70], // size of the icon
  });

  L.marker([55.028527396640804, 82.92824989073691], {icon: greenIcon}).addTo(map);


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
