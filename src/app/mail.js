"use client"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_646hysk', 'template_1ev2lgm', form.current, {
        publicKey: 'KI0eChkLKyD-ULdD2',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className=' flex flex-col w-[600px] gap-6 text-2xl m-5'>
      <input type="text" name="user_name" placeholder='Name' className='h-[60px] rounded-xl p-4'/>
      <input type="email" name="user_email" placeholder='Email' className='h-[60px] rounded-xl p-4'/>
      <textarea name="message" placeholder='Message'  className='h-[250px] rounded-xl p-4'/>
      <input type="submit" value="Send" className='h-[60px] bg-[#EE761B] text-white rounded-xl p-4 cursor-pointer hover:bg-orange-300 hover:text-black' />
    </form>
  );
};