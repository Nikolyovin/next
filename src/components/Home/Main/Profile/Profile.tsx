import { Divider } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { Element } from 'react-scroll'
import avatar from '../../../../../public/assets/avatar.jpg'

const Profile = () => {
    return (
        <Element name='profile'>
            <section className='md:flex '>
                <div className='relative w-full'>
                    <Image
                        className='object-cover object-top w-full z-10 h-[50vh] md:h-full xl:h-[100vh]'
                        src={avatar}
                        alt='avatar'
                        priority
                    />
                    <div className='bg-white z-1 bottom-[-1px] p-[10px] w-full  rounded-t-2xl absolute md:hidden'></div>
                </div>

                <div className=' bg-white md:w-[140%] z-1 '>
                    <div className='px-4 bg-white'>
                        <div className='mb-3 mt-[-10px] md:mt-0'>
                            <h1 className='title'>Виктория Лёвина</h1>
                            <h2 className=' amatic font-bold text-[25px] md:text-[38px]  text-[#757575]'>
                                Мастер Тату
                            </h2>
                            <h2 className=' amatic font-bold text-[25px] md:text-[38px] text-[#757575]'>
                                @botanica.tattoo.art
                            </h2>
                        </div>

                        <Divider sx={{ width: '25%' }} />
                        <p className=' mt-2 text-slate-500'>Рязань</p>
                        <p className='mt-3 mb-2 text-slate-500 FontText'>
                            Привет! Меня зовут Виктория и я мастер тату. Также являюсь членом Ассоциации Художников
                            Ботанического Искусства. Я очень люблю ботанику, и через свои работы чувствую гармонию с
                            природой.
                        </p>
                        <p className='FontText mt-3 mb-6 text-slate-500 '>
                            Люблю создавать красоту на теле своих клиентов и заряжать их своей энергией.Мои любимые
                            стили - это ботаника и микрореализм. Если вы хотите добавить что-то особенное в свою жизнь,
                            давайте создадим это вместе!
                        </p>
                    </div>
                </div>
            </section>
        </Element>
    )
}

export default Profile
