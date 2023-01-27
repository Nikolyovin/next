import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade } from 'swiper'
import slide1 from '../../../../../public/assets/IMG_3394.jpg'
import slide2 from '../../../../../public/assets/IMG_3392.jpg'
import slide3 from '../../../../../public/assets/IMG_3393.jpg'
import slide4 from '../../../../../public/assets/DSC01021.jpg'
import slide5 from '../../../../../public/assets/DSC01825.jpg'
import 'swiper/css'
import 'swiper/css/pagination'
import Image, { StaticImageData } from 'next/image'

interface ISlide {
    src: StaticImageData
}

const NeedEntrySlider = () => {
    const arrSlides: ISlide[] = [
        {
            src: slide1
        },
        {
            src: slide2
        },
        {
            src: slide3
        },
        {
            src: slide4
        },
        {
            src: slide5
        }
    ]

    return (
        <Swiper
            modules={[Autoplay, EffectFade]}
            loop={true}
            slidesPerView={1}
            autoplay={{
                delay: 5000,
                waitForTransition: false,
                disableOnInteraction: false
            }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={swiper => console.log(swiper)}
        >
            {arrSlides.map(({ src }, index) => (
                <SwiperSlide key={index}>
                    <Image className='object-cover md:h-[50vh] xl:h-[100vh]' src={src} alt='photo' />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default NeedEntrySlider
