import gsap from 'gsap';
import webp from './modules/webp';
import AOS from 'aos';

window.addEventListener('DOMContentLoaded', () => {
  webp();

  function contactUS(formClass, btnClass, activeFormClass, bgWrapperClass, bgWrapperActiveClass, exitBtnClass) {
    const form = document.querySelector(formClass);
    const btn = document.querySelector(btnClass);
    const bgWrapper = document.querySelector(bgWrapperClass);
    const exitBtn = document.querySelector(exitBtnClass);

    btn.addEventListener('click', (e) => {
      e.preventDefault();
      form.classList.add(activeFormClass);
      bgWrapper.classList.add(bgWrapperActiveClass);
    });

    bgWrapper.addEventListener('click', () => {
      form.classList.remove(activeFormClass);
      bgWrapper.classList.remove(bgWrapperActiveClass);
    });

    exitBtn.addEventListener('click', () => {
      form.classList.remove(activeFormClass);
      bgWrapper.classList.remove(bgWrapperActiveClass);
    });
  };

  contactUS('.first__page-contactUs', '.header__btn', 'first__page-contactUs--active', '.conractUs-bgWrapper', 'conractUs-bgWrapper--active', '.contactUs__closeBtn');

  function mobileMenu(btnClass, btnActiveClass, menuClass, menuActiveClass) {
    const btn = document.querySelector(btnClass);
    const menu = document.querySelector(menuClass);

    btn.addEventListener('click', () => {
      btn.classList.toggle(btnActiveClass);
      menu.classList.toggle(menuActiveClass);
    });
  };

  mobileMenu('.mobile__menu-btn', 'mobile__menu-btn--active', '.mobile__menu', 'mobile__menu--active');

  const tl = gsap.timeline({defaults: {ease: 'power1.out'}});
  const tlM = gsap.timeline({defaults: {ease: 'power1.out'}});

  if (window.innerWidth > 1104) {
    tl.to('.animation__title', {y: '0%', duration: 1, stagger: 0.25});
    tl.to('.animation__letter', {y: '-100%', duration: 1.5, delay: 0.5});
    tl.to('.animation__div', {y: '-100%', duration: 1}, '-=1');
    tl.fromTo('.header__link', {opacity: 0, y: '-100%'}, {opacity: 1, y: '0%', duration: 0.8, stagger: 0.1});
    tl.fromTo('.animClassFirst', {opacity: 0, x: '-10%'}, {opacity: 1, x: '0%', duration: 0.8, stagger: 0.1}, '-=0.3');
    tl.from('.first__page-bg-1', {opacity: 0, y: '100%', x: '-40%', duration: 1.2});
    tl.from('.first__page-bg-2', {opacity: 0, y: '-100%', x: '40%', duration: 1.2}, '-=1.2');
    tl.from('.first__page-bg-3', {opacity: 0, y: '100%', x: '-40%', duration: 1.2}, '-=1.1');
    tl.from('.first__page-bg-4', {opacity: 0, y: '-100%', x: '40%', duration: 1.2}, '-=1.15');
    tl.from('.first__page-bg-5', {opacity: 0, y: '100%', x: '-40%', duration: 1.2}, '-=1.15');
    tl.from('.first__page-bg-6', {opacity: 0, y: '-100%', x: '40%', duration: 1.2}, '-=1.15');
  } else {
    gsap.fromTo('.animClassFirst', {opacity: 0, x: '-10%'}, {opacity: 1, x: '0%', duration: 0.8, stagger: 0.1, delay: 0.5});
    tlM.fromTo('.features__img-1', {opacity: 0, x: '-50%'}, {opacity: 1, x: '0%', duration: 0.8, delay: 1.2}, '-=0.5');
    tlM.fromTo('.features__img-2', {opacity: 0, x: '-50%'}, {opacity: 1, x: '0%', duration: 0.8}, '-=0.7');
    tlM.fromTo('.features__img-3', {opacity: 0, x: '-50%'}, {opacity: 1, x: '0%', duration: 0.8}, '-=0.7');
  }

  function openAlert(btnClass) {
    const btn = document.querySelectorAll(btnClass);
    const modal = document.querySelector('.modal');
    const modalBg = document.querySelector('.conractUs-bgWrapper');

    btn.forEach((button) => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        modal.classList.add('modal--active');
        modalBg.classList.add('conractUs-bgWrapper--active');
        document.querySelector('.first__page-contactUs').classList.remove('first__page-contactUs--active');
      });
    });
  }
  openAlert('.header__logo');
  openAlert('.first__page-submit');
  openAlert('.contactUs__submit');

  function closeModal(btnClass, modalClass, modalBgClass, modalCloseClass, modalBgCloseClass) {
    const btn = document.querySelector(btnClass);
    const modal = document.querySelector(modalClass);
    const modalBg = document.querySelector(modalBgClass);

    btn.addEventListener('click', () => {
      modal.classList.remove(modalCloseClass);
      modalBg.classList.remove(modalBgCloseClass);
      document.querySelector('.first__page-contactUs').classList.remove('first__page-contactUs--active');
    });
    modalBg.addEventListener('click', () => {
      modal.classList.remove(modalCloseClass);
      modalBg.classList.remove(modalBgCloseClass);
      document.querySelector('.first__page-contactUs').classList.remove('first__page-contactUs--active');
    });
  }
  closeModal('.modal__close', '.modal', '.conractUs-bgWrapper', 'modal--active', 'conractUs-bgWrapper--active');

  AOS.init({
    disable: 'phone', // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    
  
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 100, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 1500, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: true, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  });
});
