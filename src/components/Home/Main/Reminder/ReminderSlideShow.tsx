import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Scrollbar } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import ReminderItem from './ReminderItem'

export type ReminderType = {
    title: string
    text: string
    text1?: string
    text2?: string
    text3?: string
}

const ReminderSlideShow = () => {
    const arrayText: ReminderType[] = [
        {
            title: 'Шаг №1.',
            text: 'Прийти домой и промыть тату с мылом. Удалить излишки влаги промокнув чистым полотенцем.Обратите внимание на то, что мыло надо наносить уже вспененным. Независимо от того, жидкое или кусковое, надо растереть его в руках до пены, которой обрабатывать рану. После можно протереть антисептиком (хлоргексидин).'
        },
        {
            title: 'Шаг №2.',
            text: 'Тонким слоем, нанести заживляющую мазь(пантодерм, бепантен, пантенол ) на всю поверхность татуировки.'
        },
        {
            title: 'Шаг №3.',
            text: 'Заклеить впитывающей пеленкой. Важно, чтобы тело могло комфортно двигаться.'
        },
        {
            title: 'Последующий уход.',
            text: 'В течении следующих 2х дней повторять пункты (1-3) 3-4 раза в день.',
            text1: 'В течении следующих 7-8 дней повторять пункты (1-2) 3 раза в день.'
        },
        {
            title: 'Важная информация ч.1!.',
            text: 'Во время заживления:',
            text1: '- Не чешите, не трите.',
            text2: '- Принимать прохладный душ, чтобы не распаривать рану.',
            text3: '- Исключить посещение бани и сауны.Морские процедуры и плавание в бассейне прекратить.'
        },
        {
            title: 'Важная информация ч.2!.',
            text: 'Во время заживления:',
            text1: '- Носить просторную одежду. Если татуировку сдавливать, пигмент может уйти вглубь дермы. Рисунок побледнеет и расплывется.',
            text2: '- Защищать кожу от ультрафиолета. Солнечные лучи и посещение солярия полностью исключить. Это предотвратит выцветание рисунка и образование рубцов.'
        },
        {
            title: 'Важная информация ч.3!.',
            text: 'Во время заживления:',
            text1: '- В это время нельзя заниматься спортом и носить обтягивающую одежду. Попадание пота и трение вызывает дополнительное воспаление.',
            text2: '- Берегитесь спирта, не мажьте им рану и уменьшите прием внутрь.',
            text3: '- Защищайте от UV-лучей.'
        }
    ]

    return (
        <div>
            <Swiper
                modules={[Pagination, Scrollbar]}
                spaceBetween={30}
                slidesPerView={1}
                breakpoints={{
                    640: { slidesPerView: 2 }
                }}
                pagination={{
                    type: 'progressbar',
                    clickable: true
                }}
                // scrollbar={{ draggable: true }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={swiper => console.log(swiper)}
            >
                {arrayText.map((item, index) => (
                    <SwiperSlide key={index} className='swiper-slide-reminder'>
                        <ReminderItem props={item} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default ReminderSlideShow
