'use client';

import { Mail } from '@mui/icons-material'
import React from 'react'
import { useForm } from 'react-hook-form'
import sendEmail from '../utils/sendEmail'

function ContactForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => { sendEmail(data) };

  return (
    <>
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col justify-center align-middle w-full lg:w-1/2 h-fit space-y-2 [&>_input]:rounded-lg [&>_input]:bg-background [&>_input]:border-2 [&>_input]:border-secondary [&>_input]:placeholder-text [&>_textarea]:bg-background [&>_textarea]:border-2 [&>_textarea]:border-secondary [&>_textarea]:placeholder-text [&>*]:p-5'>
          <input type="email" name="email" placeholder="E-mail" {...register('email', {required: "E-mail address is required"})} aria-invalid={errors.email ? "true" : "false"}/>
          {errors.email && <span className='text-red-500 self-start text-xs'>{errors.email.message}</span>}
          <textarea name="message" placeholder='Message...' className='rounded-lg h-64 w-full resize-none hover:resize-y' {...register('message', {required: "Message required"})} aria-invalid={errors.message ? "true" : "false"}></textarea>
          {errors.message && <span className='text-red-500 self-start text-xs'>{errors.message.message}</span>}
          <button type="Submbit" className='border-primary border-2 bg-background hover:bg-primary transition-color ease-in-out duration-700 rounded-lg text-xs'><Mail /> Send Message</button>
        </form>
      </>
  )
}

export default ContactForm