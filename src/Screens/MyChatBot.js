import { Slide } from '@mui/material'
import { Box } from '@mui/system';
import React,{useState} from 'react'

export default function MyChatBot() {
    const [isChatBoxOpen, setIsChatBoxOpen] = useState(false);
const onClickCloseChatBox = () => {
  setIsChatBoxOpen(false);
};
const onClickOpenChatBox = () => {
  setIsChatBoxOpen(true);
};
  return (
    <div className='flex bg-red-400'>
        <div className=' h-screen w-screen flex relative flex-row md:flex-col'>
            <Slide timeout={1000} direction="up" in={isChatBoxOpen} className='h-3/4 w-1/4 mr-0 shadow-lg static right-10 bottom-10 bg-black'>
            <Box>

            </Box>
            </Slide>
        </div>

    </div>
  )
}
