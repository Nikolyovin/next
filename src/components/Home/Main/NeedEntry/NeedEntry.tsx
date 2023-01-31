import React from 'react'
import bg1 from '../../../../../public/assets/bg1.jpg'
import { Element } from 'react-scroll'
import NeedEntrySlider from './NeedEntrySlider'
import Image from 'next/image'

const NeedEntry = () => {
    return (
        <section className='z-0 relative md:h-[50vh] xl:h-[100%]'>
            <Element name='contactMeTop'>
                <Image className='object-cover md:h-[50vh] xl:h-[100vh]' src={bg1} alt='photo' />
                {/* <NeedEntrySlider /> */}
                <div className='absolute z-100  h-full  top-0 px-[20px] py-[30px]'>
                    <h3 className='title text-white flex-1 mb-5'>Что нужно для записи?</h3>
                    <div className='flex flex-col justify-between '>
                        <p className=' text-white mb-2  md:mb-4 text-[16px] md:text-[20px]'>
                            Для записи на сеанс можно мне писать в телеграм, вк, инстаграм.
                        </p>
                        <p className=' text-white mb-2  md:mb-4 text-[16px] md:text-[20px]'>
                            Опишите идею как можно более подробно, прикрепив фото,картинки.
                        </p>
                        <p className=' text-white mb-2  md:mb-4 text-[16px] md:text-[20px]'>
                            Укажите желаемое место и примерный размер татуировки (желательно в сантиметрах, можно
                            сфотографировать и обвести предполагаемое место)
                        </p>
                        <p className=' text-white mb-2  md:mb-4 text-[16px] md:text-[20px]'>
                            Если на предполагаемом месте татуировки есть шрамы, родинки и тд., то это обязательно нужно
                            сообщить мне.
                        </p>
                        <p className=' text-white mb-2  md:mb-4 text-[16px] md:text-[20px]'>
                            Стоимость каждой работы рассчитывается индивидуально в зависимости от места, размера и
                            детализации работы.
                        </p>
                        <p className=' text-white mb-2 md:mb-4 text-[16px] md:text-[20px]'>
                            Запись на сеанс осуществляется после внесения предоплаты.
                        </p>
                    </div>
                </div>
            </Element>
        </section>
    )
}

export default NeedEntry
