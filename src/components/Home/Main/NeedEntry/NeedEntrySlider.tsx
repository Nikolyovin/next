import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade } from 'swiper'
import slide1 from '../../../../../public/assets/IMG_3394.jpg'
import slide2 from '../../../../../public/assets/IMG_3392.jpg'
import slide3 from '../../../../../public/assets/IMG_3393.jpg'
import 'swiper/css'
import 'swiper/css/pagination'
import { StaticImageData } from 'next/image'

interface ISlide {
  src: StaticImageData
}

const NeedEntrySlider = () => {
  const arrSlides: ISlide[] = [
    {
      src: slide1,
    },
    {
      src: slide2,
    },
    {
      src: slide3,
    },
  ]

  return (
    <Swiper
      modules={[Autoplay, EffectFade]}
      // observeParents={true}
      // observer={true}
      // loop={true}
      // spaceBetween={30}
      // speed={2000}
      loop={true}
      slidesPerView={1}
      autoplay={{
        delay: 4000,
        waitForTransition: false,
        disableOnInteraction: false,
      }}
      // effect='fade'
      // fadeEffect={{ crossFade: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {arrSlides.map(({ src }, index) => (
        <SwiperSlide key={index}>
          <img className='object-cover' src={src.src} alt='photo' />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default NeedEntrySlider
