'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScroll = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');
const nav = document.querySelector('.nav');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const navTabEffect = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');
    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

btnsOpenModal.forEach(Element => Element.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

btnScroll.addEventListener('click', function (e) {
  //you can litarally get scrolling to work with one line
  section1.scrollIntoView({ behavior: 'smooth' });
  //older browsers with all calculating
  // const s1coords = section1.getBoundingClientRect();
  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });
});
//Page navigation
//1. Add event listener to common parent element
//2. Determine what element originated the event
//this is what a method does: if tbe thing we click contains link then
//we get the href attribute from link we click and we select that and scroll down to it
document.querySelectorAll('.nav__link').forEach(function (e) {
  e.addEventListener('click', function (e) {
    e.preventDefault();
    if (e.target.classList.contains('nav__link')) {
      const id = e.target.getAttribute('href');
      document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
    }
  });
});
// tabbed component
tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');
  console.log(clicked);
  if (!clicked) return;
  tabs.forEach(tab => {
    tab.classList.remove('operations__tab--active');
  });
  tabsContent.forEach(content => {
    content.classList.remove('operations__content--active');
  });
  clicked.classList.add('operations__tab--active');

  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

//menu fade animation
nav.addEventListener('mouseover', navTabEffect.bind(0.5));

nav.addEventListener('mouseout', navTabEffect.bind(1));

//sticky navigation (bad practice)
// const initialCoords = section1.getBoundingClientRect();
// window.addEventListener('scroll', function () {
//   if (window.scrollY > initialCoords.top) nav.classList.add('sticky');
//   else nav.classList.remove('sticky');
// });

//sticky nav using IntersectionObserver
const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height; //getting height in px of navigation bar
//creating function that will observe if will scrolled to the certain threshold defined in options
const stickyNav = function (entries) {
  const [entry] = entries;
  //isIntersection is false when user will scroll down to the certain threshold
  //and become true when in the "area" of rectangle that we defined
  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const options = {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`, //margin adds the certain margin when the isIntersecting property will fire up
};

const headerObserver = new IntersectionObserver(stickyNav, options);
headerObserver.observe(header);

//reveal sections

const allSections = document.querySelectorAll('.section');

const revealSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};
const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});

//lazy image reveal
const allPictures = document.querySelectorAll('img[data-src]');

const reavealPictures = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.src = entry.target.dataset.src;
  entry.target.classList.remove('lazy-img');
  //event listener is added to show high-res image after it loaded from its blurry form
  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });
  observer.unobserve(entry.target);
};

const picturesObserver = new IntersectionObserver(reavealPictures, {
  root: null,
  threshold: 0.15,
  rootMargin: '-150px',
});

allPictures.forEach(function (picture) {
  picturesObserver.observe(picture);
});

//slider
const btnRight = document.querySelector('.slider__btn--right');
const btnLeft = document.querySelector('.slider__btn--left');
const slides = document.querySelectorAll('.slide');
const dotContainer = document.querySelector('.dots');
let currSlide = 0; //handler of the current slide
const createDots = function () {
  slides.forEach(function (_, i) {
    dotContainer.insertAdjacentHTML(
      'beforeend',
      `<button class="dots__dot" data-slide="${i}"></button>`
    );
  });
};

const refreshUI = function () {
  goToNextSlide();
  activateDots(currSlide);
};

//spreading all images to look like slides
slides.forEach((slide, i) => {
  slide.style.transform = `translateX(${100 * i}%)`;
});

const activateDots = function (slide) {
  document
    .querySelectorAll('.dots__dot')
    .forEach(dot => dot.classList.remove('dots__dot--active'));
  document
    .querySelector(`.dots__dot[data-slide="${slide}"]`)
    .classList.add('dots__dot--active');
};

//translating position of all slides with one click in the X dimension
const goToNextSlide = function (slideX = currSlide) {
  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(${100 * (i - slideX)}%)`;
  });
};

const goLeft = function () {
  if (currSlide === 0) {
    currSlide = slides.length - 1;
    refreshUI();
  } else {
    currSlide--;
    refreshUI();
  }
};

const goRight = function () {
  if (currSlide === slides.length - 1) {
    currSlide = 0;
    refreshUI();
  } else {
    currSlide++;
    refreshUI();
  }
};

createDots();
activateDots(currSlide);
btnLeft.addEventListener('click', goLeft);
btnRight.addEventListener('click', goRight);
document.addEventListener('keydown', function (e) {
  if (e.key === 'ArrowLeft') goLeft();
  if (e.key === 'ArrowRight') goRight();
});
dotContainer.addEventListener('click', function (e) {
  if (e.target.classList.contains('dots__dot')) {
    const { slide } = e.target.dataset;
    goToNextSlide(slide);
    activateDots(slide);
  }
});
//NOTES

// const header = document.querySelector('.header');
// const allSection = document.querySelectorAll('.section');
// console.log(allSection);
// document.getElementById('section--1');
// const allButtons = document.getElementsByTagName('button');
// console.log(allButtons);
// //Creating and inserting elements
// const message = document.createElement('div');
// message.classList.add('cookie-message');
// message.innerHTML = `We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>`;
// header.prepend(message);
// document
//   .querySelector('.btn--close-cookie')
//   .addEventListener('click', function () {
//     message.remove();
//   });
// //you can acces the styles properties:
// console.log(message.style.backgroundColor);
// //or change it
// // message.style.backgroundColor='#337383d'
// //canching height of element
// message.style.height =
//   Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';
// //changing css viariables
// document.documentElement.style.setProperty('--color-primary', 'orangered');
// //attributes
// const logo = document.querySelector('.nav__logo');
// console.log(logo.alt);
//reading non-standard attributes for DOM
// console.log(logo.getAttribute('name_of_attribute'));
//setting html attributes
// logo.setAttribute('name_of_attribute', 'value');
//the event travels through all parents when the event originated, that means
//if the event is handles in parent elements it will also work
// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);
// const randomColor = () =>
//   `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;
// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('Link', e.target);
//   //we can stop propagation with e.stopPropagation();
// });
// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('container', e.target);
// });
// document.querySelector('.nav').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('nav', e.target);
// });
//qeruselectorall() is going through all child closest() is traversing parent elements
