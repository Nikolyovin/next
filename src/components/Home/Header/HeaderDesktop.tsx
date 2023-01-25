import React from 'react'
import logo from '../../assets/logoWhite.png'
import { IconButton, SwipeableDrawer, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { useState } from 'react'
import DrawerList from './DrawerList'
import { VariantType } from '../../../types/types'

const HeaderDesktop = () => {
  const onClock = () => {}
  return (
    <>
      <header className='bg-slate-400 flex px-3 justify-end items-center w-full h-[50px] hidden md:block'></header>
    </>
  )
}

export default HeaderDesktop
