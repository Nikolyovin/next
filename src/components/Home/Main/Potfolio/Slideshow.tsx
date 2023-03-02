import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, EffectFade, Autoplay, Lazy } from 'swiper'
import img1 from '../../../../../public/assets/IMG_3682.jpg'
import img2 from '../../../../../public/assets/IMG_3014.jpg'
import img3 from '../../../../../public/assets/IMG_3179.jpg'
import img4 from '../../../../../public/assets/IMG_3683.jpg'
import img5 from '../../../../../public/assets/IMG_3207.jpg'
import img6 from '../../../../../public/assets/IMG_3205.jpg'
import img7 from '../../../../../public/assets/IMG_3266.jpg'
import img8 from '../../../../../public/assets/IMG_3684.jpg'
import img9 from '../../../../../public/assets/IMG_3706.jpg'
import img10 from '../../../../../public/assets/IMG_3780.jpg'
import img11 from '../../../../../public/assets/IMG_3792.jpg'
import img12 from '../../../../../public/assets/IMG_4060.jpg'

import 'swiper/css'
import 'swiper/css/pagination'
import Image, { StaticImageData } from 'next/image'

interface ISlide {
    src: StaticImageData
}

const SlideShow = () => {
    const arrSlides: ISlide[] = [
        {
            src: img10
        },
        {
            src: img11
        },
        {
            src: img12
        },
        {
            src: img9
        },
        {
            src: img3
        },
        {
            src: img7
        },
        {
            src: img1
        },
        {
            src: img4
        },
        {
            src: img5
        },
        {
            src: img6
        },
        {
            src: img8
        },
        {
            src: img2
        }
    ]

    return (
        <Swiper
            modules={[Lazy, Pagination, EffectFade, Autoplay, Lazy]}
            lazy={true}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
                640: { slidesPerView: 3 }
            }}
            pagination={{
                dynamicBullets: true,
                clickable: true
            }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={swiper => console.log(swiper)}
        >
            {arrSlides.map(({ src }, index) => (
                <SwiperSlide key={index}>
                    <Image
                        className='slideImg z-0 border-4 border-white'
                        width={358}
                        height={540}
                        src={src}
                        alt='photo'
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default SlideShow
