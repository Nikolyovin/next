import { arrButtons } from '@/common'
import { Divider } from '@mui/material'
import Image from 'next/image'
import { Link } from 'react-scroll'
import logo from '../../../../public/assets/IMG_3703.png'

const Footer = () => {
    return (
        <footer className='bg-black py-7 pt-3 text-white'>
            <div className='flex justify-center'>
                <Link to={'profile'} smooth={true} duration={500}>
                    <Image className='pt-2' width={50} height={100} src={logo} alt='logo' />
                </Link>
            </div>

            <h6 className='text-white cinzelBold text-2xl text-center w-full'>botanica.tattoo.art</h6>
            <div className='flex justify-center my-3'>
                <Divider variant='middle' sx={{ bgcolor: 'white', width: '100px' }} />
            </div>

            <ul className=' '>
                {arrButtons.map(({ href, title }) => (
                    <Link key={title} to={href} smooth={true} duration={500}>
                        <li className='text-center'>{title}</li>
                    </Link>
                ))}
            </ul>
        </footer>
    )
}

export default Footer
