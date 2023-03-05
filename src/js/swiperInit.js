import Swiper, { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

const swiperRestMainPg = new Swiper('.restaurant-swiper', {
  modules: [Navigation],
  setWrapperSize: true,
  slidesPerView: 5,

  // Navigation arrows
  navigation: {
    nextEl: '.slider-btn-next',
    prevEl: '.slider-btn-prev',
  },
});

const swiperHotelMainPg = new Swiper('.hotel-swiper', {
  modules: [Navigation],
  uniqueNavElements: true,
  setWrapperSize: true,
  speed: 300,
  spaceBetween: 20,
  slidesPerView: 2,
  // Navigation arrows
  navigation: {
    nextEl: '.slider-btn-next',
    prevEl: '.slider-btn-prev',
  },
});

export { swiperRestMainPg, swiperHotelMainPg };
