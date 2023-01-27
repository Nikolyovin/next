import React from 'react'
import { IconButton, Typography } from '@mui/material'
import photo from '../../../assets/IMG_3394.jpg'
import list2 from '../../../assets/list2.jpg'
import { Element } from 'react-scroll'
import ContactMeTopSlider from './NeedEntrySlider'
import NeedEntrySlider from './NeedEntrySlider'

const NeedEntry = () => {
    return (
        <section className='z-0 relative md:h-[50vh] xl:h-[100vh]'>
            <Element name='contactMeTop'>
                {/* <img className=' object-contain ' src={photo} /> */}
                <NeedEntrySlider />
                <div className='absolute z-100 flex h-full flex-col top-0 px-[20px] py-[30px]'>
                    <h3 className='title text-white flex-1'>Что нужно для записи?</h3>
                    <div className='flex flex-col justify-between '>
                        <p className=' text-white font-bold mb-2  md:mb-4 text-[14px] md:text-[20px]'>
                            Для записи на сеанс можно мне писать в телеграм, вк, инстаграм.
                        </p>
                        <p className=' text-white font-bold mb-2  md:mb-4 text-[14px] md:text-[20px]'>
                            Опишите идею как можно более подробно, прикрепив фото,картинки.
                        </p>
                        <p className=' text-white font-bold mb-2  md:mb-4 text-[14px] md:text-[20px]'>
                            Укажите желаемое место и примерный размер татуировки (желательно в сантиметрах, можно
                            сфотографировать и обвести предполагаемое место)
                        </p>
                        <p className=' text-white font-bold mb-2  md:mb-4 text-[14px] md:text-[20px]'>
                            Если на предполагаемом месте татуировки есть шрамы, родинки и тд., то это обязательно нужно
                            сообщить мне.
                        </p>
                        <p className=' text-white font-bold mb-2  md:mb-4 text-[14px] md:text-[20px]'>
                            Стоимость каждой работы рассчитывается индивидуально в зависимости от места, размера и
                            детализации работы.
                        </p>
                        <p className=' text-white font-bold mb-2 md:mb-4 text-[14px] md:text-[20px]'>
                            Запись на сеанс осуществляется после внесения предоплаты.
                        </p>
                    </div>
                </div>
            </Element>
        </section>
    )
}

export default NeedEntry
