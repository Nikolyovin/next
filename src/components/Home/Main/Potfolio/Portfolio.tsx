import React from 'react'
import Slideshow from './Slideshow'
import { Link, Element, Events, animateScroll as scroll } from 'react-scroll'

const Portfolio = () => {
    return (
        <section className='bg-slate-400 pt-[40px] pb-[60px] px-4 xl:h-[100vh]'>
            <Element name='portfolio'>
                <h2 className='title'>Моё портфолио T</h2>
                <div className='flex items-start relative  pt-6 '>
                    <Slideshow />
                </div>
                <div className='bg-white rounded-2xl mt-3 p-4'>
                    {/* <p className='text-slate-500 p-4 '>
                        Я люблю создавать красоту на теле своих клиентов и заражать их своей энергией. Мои любимые стили
                        - это ботаника и микрореализм. Если вы хотите добавить что-то особенное в свою жизнь, давайте
                        создадим это вместе!
                    </p> */}

                    <p className='text-slate-700  bold mb-2  '>Я подстраиваюсь под анатомию каждого клиента.</p>
                    <p className='text-slate-700 bold  mb-2 '>
                        Некоторые большие проекты рисую на вашей коже без предварительного эскиза(фрихендом).
                    </p>
                    <p className='text-slate-700 bold   '>В своей работе я использую натуральные оттенки цветов.</p>
                </div>
            </Element>
        </section>
    )
}

export default Portfolio
