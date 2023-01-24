import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, EffectFade, Autoplay, Lazy } from 'swiper'
import img2 from '../../../../../public/assets/IMG_3014.JPG'
import img3 from '../../../../../public/assets/IMG_3179.JPG'
import img5 from '../../../../../public/assets/IMG_3207.JPG'
import img6 from '../../../../../public/assets/IMG_3205.JPG'
import img7 from '../../../../../public/assets/IMG_3266.JPG'
import 'swiper/css'
import 'swiper/css/pagination'
// import 'swiper/css/lazy'
import Image from 'next/image'

interface ISlide {
  src: string
}

const SlideShow = () => {
  const arrSlides: ISlide[] = [
    {
      src: img2,
    },
    {
      src: img3,
    },
    {
      src: img5,
    },
    {
      src: img6,
    },
    {
      src: img7,
    },
  ]

  return (
    <Swiper
      modules={[Lazy, Pagination, EffectFade, Autoplay, Lazy]}
      lazy={true}
      spaceBetween={30}
      slidesPerView={1}
      // navigation
      // effect='fade'
      // autoplay={{ delay: 1000, waitForTransition: false, disableOnInteraction: false }}
      // fadeEffect={{ crossFade: true }}
      pagination={{
        dynamicBullets: true,
        clickable: true,
      }}
      // scrollbar={{ draggable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {arrSlides.map(({ src }) => (
        <SwiperSlide key={src}>
          {/* <img
            className='slideImg z-0 h-full w-full border-4 border-white swiper-lazy'
            data-src={src.src}
            // alt='photo'
          /> */}
          <Image
            className='slideImg z-0 border-4 border-white'
            width={358}
            height={540}
            src={src}
            alt='photo'
          />
          {/* <div className='swiper-lazy-preloader swiper-lazy-preloader-white '></div> */}
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default SlideShow
