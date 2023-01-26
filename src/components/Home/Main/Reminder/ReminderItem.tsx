import React, { FC } from 'react'
import { ReminderType } from './ReminderSlideShow'

type PropsType = {
  props: ReminderType
}

const ReminderItem: FC<PropsType> = ({ props }) => {
  const { text, title, text1, text2, text3 } = props
  return (
    // <div className='h-full'>
    <div className='h-full p-5 mt-3 rounded-lg border-dotted border-4 border-white min-h-[300px]'>
      <h6 className='text-center text-4xl font-bold mb-3 text-white amatic'>
        {title}
      </h6>
      <p className='  font-bold text-white h-full mb-2 '>{text}</p>
      <p className='  font-bold text-white h-full mb-2 text-[14px]'>{text1}</p>
      <p className='  font-bold text-white h-full mb-2 text-[14px]'>{text2}</p>
      <p className='  font-bold text-white h-full mb-2 text-[14px]'>{text3}</p>
    </div>
    // </div>
  )
}

export default ReminderItem
