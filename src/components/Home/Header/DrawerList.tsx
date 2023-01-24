import { Box } from '@mui/material'
import React, { FC, Dispatch } from 'react'
import { IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import Divider from '@mui/material/Divider'
import TabList from './TabList'
import { VariantType } from '../../types/types'
import { Height } from '@mui/icons-material'

interface Iprops {
  setIsOpen: Dispatch<React.SetStateAction<boolean>>
  setVariant: Dispatch<React.SetStateAction<VariantType>>
}

const DrawerList: FC<Iprops> = ({ setIsOpen, setVariant }) => {
  const onClick = () => setIsOpen(false)
  return (
    <Box className='bg-slate-500 h-[100vh]' role='presentation'>
      <TabList setIsOpen={setIsOpen} setVariant={setVariant} />
    </Box>
  )
}

export default DrawerList
