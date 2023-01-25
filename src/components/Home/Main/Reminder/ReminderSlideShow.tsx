import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Scrollbar } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import ReminderItem from './ReminderItem'

const ReminderSlideShow = () => {
  return (
    <div>
      <Swiper
        modules={[Pagination, Scrollbar]}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
        }}
        pagination={{
          type: 'progressbar',
          clickable: true,
        }}
        // scrollbar={{ draggable: true }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide className='swiper-slide-reminder'>
          <ReminderItem />
        </SwiperSlide>
        <SwiperSlide>
          <ReminderItem />
        </SwiperSlide>
        <SwiperSlide>
          <ReminderItem />
        </SwiperSlide>
        <SwiperSlide>
          <ReminderItem />
        </SwiperSlide>
        <SwiperSlide>
          <ReminderItem />
        </SwiperSlide>
        <SwiperSlide>
          <ReminderItem />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default ReminderSlideShow
