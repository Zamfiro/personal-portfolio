import { FiberManualRecord, FiberManualRecordOutlined, GitHub, Instagram } from '@mui/icons-material'
import React from 'react'

function RelevantLinks() {
  return (
    <div className="flex flex-col space-y-5 h-fit w-fit items-center justify-center [&>_a>_svg]:text-primary [&>_a>_svg]:text-3xl hover:[&>_a>_svg]:text-accent [&>_a>_svg]:transition-colors">
        <a href="https://github.com/Zamfiro" target='_blank' ><GitHub/></a>
        <a href='https://www.instagram.com/nikoliic.mm/' target="_blank"><Instagram/></a>
        <div className="flex flex-col space-y-2 items-center  w-fit h-fit">
            <FiberManualRecord className='text-primary text-sm'/>
            <FiberManualRecord className='text-primary text-sm'/>
            <FiberManualRecord className='text-primary text-sm'/>
            
        </div>
    </div>
  )
}

export default RelevantLinks