import React from 'react'
import logo from '../../assets/logoWhite.png'
import { IconButton, SwipeableDrawer, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { useState } from 'react'
import DrawerList from './DrawerList'
import { VariantType } from '../../types/types'

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [variant, setVariant] = useState<VariantType>('temporary')
  const onClick = () => setIsOpen(true)

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return
      }

      setIsOpen(open)
    }

  return (
    <header className='absolute flex z-20 px-3 justify-end items-center w-full h-[50px] '>
      {/* <img className='w-[40px] h-[40px]' src={logo} alt='logo' /> */}
      <IconButton onClick={onClick} sx={{ p: 0 }}>
        <MenuIcon className='text-white' sx={{ fontSize: 34 }} />
      </IconButton>
      <SwipeableDrawer
        anchor={'top'}
        open={isOpen}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        variant={variant}
      >
        <DrawerList setIsOpen={setIsOpen} setVariant={setVariant} />
      </SwipeableDrawer>
    </header>
  )
}

export default Header
