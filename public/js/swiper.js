const slide = new Swiper('#slide-b', {
  // 다양한 옵션 설정, 
  // 아래에서 설명하는 옵션들은 해당 위치에 들어갑니다!!
  slidesPerView: 'auto', // 한 슬라이드에 보여줄 갯수
  spaceBetween: 20, // 슬라이드 사이 여백
  loop: false, // 슬라이드 반복 여부
  loopAdditionalSlides: 1, // 슬라이드 반복 시 마지막 슬라이드에서 다음 슬라이드가 보여지지 않는 현상 수정
  pagination: false, // pager 여부
  autoplay: { // 자동 슬라이드 설정 , 비 활성화 시 false
    delay: 3000, // 시간 설정
    disableOnInteraction: true, // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
  },
  freeMode: true,
})