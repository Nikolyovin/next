import { Box } from '@mui/material'
import React, { FC, Dispatch } from 'react'
import TabList from './TabList'
import { VariantType } from '../../../types/types'

interface Iprops {
    setIsOpen: Dispatch<React.SetStateAction<boolean>>
    setVariant: Dispatch<React.SetStateAction<VariantType>>
}

const DrawerList: FC<Iprops> = ({ setIsOpen, setVariant }) => {
    return (
        <Box className='bg-slate-500 h-[100vh]' role='presentation'>
            <TabList setIsOpen={setIsOpen} setVariant={setVariant} />
        </Box>
    )
}

export default DrawerList
