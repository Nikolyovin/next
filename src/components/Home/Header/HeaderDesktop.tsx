import React from 'react'
import { AppBar, Box, Button, IconButton, Menu, MenuItem, SwipeableDrawer, Typography } from '@mui/material'
import logoGreen from '../../../../public/assets/IMG_3703.png'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import { arrButtons } from '@/common/index'
import { Link } from 'react-scroll'
import { Image } from '@mui/icons-material'

const HeaderDesktop = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
    const open = Boolean(anchorEl)

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget)
    }
    const handleClose: () => void = () => setAnchorEl(null)

    return (
        <>
            <div className='hidden md:block'>
                <AppBar className='px-3 w-full h-[50px] ' position='relative' color='inherit'>
                    <div className='flex justify-end w-full h-full'>
                        {/* <img className='pt-2' src={logoGreen.src} alt='logo' /> */}
                        {!open ? (
                            <IconButton className='' onClick={handleClick} sx={{ p: 0 }}>
                                <MenuIcon className='' sx={{ fontSize: 34 }} />
                            </IconButton>
                        ) : (
                            <IconButton className='' onClick={handleClick} sx={{ p: 0 }}>
                                <CloseIcon className='' sx={{ fontSize: 34 }} />
                            </IconButton>
                        )}
                    </div>
                    <Menu
                        sx={{ right: 0 }}
                        variant='selectedMenu'
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button'
                        }}
                    >
                        {arrButtons.map(({ title, href }) => (
                            <Link to={href} key={title} smooth={true} duration={500} onClick={handleClose}>
                                <MenuItem sx={{ fontSize: '22px' }}>
                                    <p className='amatic w-[100vh] bold text-4xl'>{title}</p>
                                </MenuItem>
                            </Link>
                        ))}
                    </Menu>
                </AppBar>
            </div>
        </>
    )
}

export default HeaderDesktop
