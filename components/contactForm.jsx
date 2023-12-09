import { Mail } from '@mui/icons-material'
import React from 'react'


function ContactForm() {
  return (
    <>
        <form action={"mailto:nikolic.mihajlo1803@gmail.com"} className='flex flex-col justify-center align-middle w-full lg:w-1/2 h-fit space-y-5 [&>_input]:rounded-lg [&>_input]:bg-background [&>_input]:border-2 [&>_input]:border-secondary [&>_input]:placeholder-text [&>_textarea]:bg-background [&>_textarea]:border-2 [&>_textarea]:border-secondary [&>_textarea]:placeholder-text [&>*]:p-5'>
          <input type="email" name="email" placeholder='E-mail'/>
          <textarea name="message" placeholder='Message...' className='rounded-lg h-64 w-full resize-none hover:resize-y'></textarea>
          <button type="Submbit" className='border-primary border-2 bg-background hover:bg-primary transition-color ease-in-out duration-700 rounded-lg text-xs'><Mail /> Send Message</button>
        </form>
      </>
  )
}

export default ContactForm