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

export { swiperRestMainPg };
