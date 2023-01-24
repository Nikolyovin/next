import React from 'react'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import MailIcon from '@mui/icons-material/Mail'
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material'
import { Link } from 'react-scroll'
import { IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { arrButtons } from '@/common'
import { VariantType } from '@/types/types'

interface Iprops {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  setVariant: React.Dispatch<React.SetStateAction<VariantType>>
}

const TabList: React.FC<Iprops> = ({ setIsOpen, setVariant }) => {
  const onClick: () => void = () => {
    setVariant('persistent')
    setIsOpen(false)
    setVariant('temporary')
  }

  return (
    <List className='p-0 flex flex-col justify-center items-center h-full text-white amatic font-bold text-3xl'>
      <div className='flex justify-end items-center absolute top-0 right-0'>
        <IconButton onClick={onClick}>
          <CloseIcon className='text-white ' sx={{ fontSize: 42 }} />
        </IconButton>
      </div>
      {arrButtons.map((item, index) => (
        <div className='' key={index}>
          <Link to={item.href} smooth={true} duration={500} onClick={onClick}>
            <ListItem disablePadding>
              <ListItemButton>
                {/* <ListItemIcon>{findNameComponent(item.icon)}</ListItemIcon> */}
                {/* <ListItemText primary={item.title} /> */}
                <span className='w-full'>{item.title}</span>
              </ListItemButton>
            </ListItem>
            {/* <Divider variant='middle' /> */}
          </Link>
        </div>
      ))}
    </List>
  )
}

export default TabList
