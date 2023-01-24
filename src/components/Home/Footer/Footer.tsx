import { arrButtons } from '@/common'
import { Divider } from '@mui/material'
import { Link } from 'react-scroll'

const Footer = () => {
  return (
    <footer className='bg-black py-7 pt-3 text-white'>
      <h6 className='text-white cinzelBold text-2xl text-center w-full'>
        Botanica.tattoo.art
      </h6>
      <div className='flex justify-center my-3'>
        <Divider variant='middle' sx={{ bgcolor: 'white', width: '100px' }} />
      </div>

      <ul className=' '>
        {arrButtons.map(({ href, title }) => (
          <Link key={title} to={href} smooth={true} duration={500}>
            <li className='text-center '>{title}</li>
          </Link>
        ))}
      </ul>
    </footer>
  )
}

export default Footer
