new Accordion('.accordion-container');
let tabsBtn = document.querySelectorAll('.tabs-nav_btn');
let tabsItem = document.querySelectorAll('.tabs-item');
tabsBtn.forEach(function (element) {
  element.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function (btn) { btn.classList.remove('tabs-nav_btn--active') });
    e.currentTarget.classList.add('tabs-nav_btn--active');

    tabsItem.forEach(function (element) { element.classList.remove('tabs-item--active') });
    document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');
  });
});

let burger = document.querySelector('.burger'),
  menu = document.querySelector('.nav'),
  menuLinks = document.querySelectorAll('.nav__link')
burger.addEventListener('click', function () {
  burger.classList.toggle('burger--active')
  menu.classList.toggle('nav--active')
  document.body.classList.toggle('stop-scroll')
})
menuLinks.forEach(function (el) {
  el.addEventListener('click', function () {
    burger.classList.remove('burger--active')
    menu.classList.remove('nav--active')
    document.body.classList.remove('stop-scroll')


  })
})
const swiper = new Swiper('.swiper-container', {
  // Цикличность
  loop: true,
  // Пагинация
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    enabled: true,
  },
  a11y: {
    paginationBulletMessage: 'Тут название слайда {{index}}',
  }



});
navBtn = document.querySelector('.nav__button')
menuClose = document.querySelector('.menu_close')
searchMenu = document.querySelector('.search-menu')
navBtn.addEventListener('click', function () {
  searchMenu.classList.add("search-menu--open")
})
menuClose.addEventListener('click', function () {
  searchMenu.classList.remove('search-menu--open')
})
