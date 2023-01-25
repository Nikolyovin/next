import { Card, CardContent } from '@mui/material'
import Image from 'next/image'
import { Element } from 'react-scroll'
import photo from '../../../../../public/assets/DSC01021.jpg'
import ReminderSlideShow from './ReminderSlideShow'

const Reminder = () => {
  return (
    <section className='relative md:h-[50vh]'>
      <Element name='reminder'>
        <Image
          className='absolute left-0 z-0 object-cover h-full w-full'
          src={photo}
          alt='fon'
        />
        <div className='relative pt-[40px] z-10 pb-[60px] px-4 '>
          <h3 className='title flex-1 text-white'>
            Памятка по уходу за татуировкой
          </h3>

          <ReminderSlideShow />
        </div>
      </Element>
    </section>
  )
}

export default Reminder
