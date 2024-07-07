"use client"

import { sendWelcomeMail } from '@/lib/actions/Sendmail'
import { sendMail } from '@/lib/main'
import Image from 'next/image'
import React, { useState } from 'react'
import MailPopup from '../Mail/MailPopup'

const LandingPage = () => {


  const [Email, setEmail] = useState<string>('')
  const [ShowMailPopUP, setShowMailPopUP] = useState(true);
  
    

    const send = ()=>{
      if(Email==''){
        alert("Please eneter valid email")
      }else{
        sendWelcomeMail(Email);
        setShowMailPopUP(true);
      }
      
    }



  return (
    <div className="h-screen w-full bg-no-repeat  overflow-hidden  bg-cover bg-[url('/bg.svg')] md:px-32 px-4  relative flex flex-col justify-start items-center " >

      {
        ShowMailPopUP && (
          <MailPopup setPopup={setShowMailPopUP}  />
        )
      }


      <div className='w-full flex items-center justify-between px-2 md:hidden' >
      <div className="flex items-center gap-1  md:hidden w-full mt-4" >
        <Image src={`/logo.svg`} height={20} width={20} alt="loog" />
        <p className="text-white" >verve.ai</p>
      </div>
      <p className="text-zinc-400 font-light text-[10px] md:hidden mt-4" >#BuildInPublic</p>
      </div>


   
    {/* laucn tab */}
    <div className="w-full md:px-12 px-2" >
    <div className="h-16 hidden w-full bg-opacity-60 bg-[#17191C] border border-zinc-700 rounded-full mt-5 md:flex items-center px-8 justify-between" >
      <div className="flex items-center gap-1 " >
        <Image src={`/logo.svg`} height={20} width={20} alt="loog" />
        <p className="text-white" >verve.ai</p>
      </div>
      <div className="flex items-center gap-8 " >
        <p className="text-zinc-300 text-sm" >About</p>
        <p className="text-zinc-300 text-sm" >Resources</p>
        <p className="text-zinc-300 text-sm" >Pricing</p>
      </div>

      <div>
      <div onClick={send} className="h-10 px-4  text-zinc-900 bg-gradient-to-b from-zinc-400 to-zinc-300  border-2 border-zinc-500  rounded-xl flex items-center justify-center " >
        <p className="md:text-base font-normal text-xs" >Notify me</p>
    </div>   

      </div>
    </div>
    </div>

    <div className="mt-28" >
      <Image src={'/desktoplaunch.svg'} height={120} width={120} alt="l
      lauch sonon"/>
      
   
     </div>
    {/* hero text */}
      <h1 className="md:text-6xl text-balance mt-8 text-[26px] sm:text-[23px]  font-bold bg-gradient-to-r from-zinc-300 via-zinc-500 to-zinc-200 bg-clip-text text-transparent text-center " style={{fontFamily:'clash-display' , fontWeight:200}}>Write like a pro, even when <br /> you're thinking like you.</h1>
      <p className="leading-snug text-center tracking-normal text-zinc-400 font-light md:text-[20px] text-[12px] mt-4" >Write Like a Boss & Research Like a Champ: Powerful Tools  at Your  Fingertips.</p>
    {/* hero text end */}


    {/* email component */}
    <div className="flex gap-2 w-full px-4 items-center justify-center mt-8" >
    <input className="bg-zinc-700 z-40 px-4 md:h-12 h-10 bg-opacity-45  border-zinc-700 focus:border-zinc-500 active:border-zinc-600 text-xs md:text-base outline-none placeholder:text-zinc-400 border-2 md:w-[300px] w-full md:rounded-2xl rounded-xl text-white" type="text" placeholder="Enter Your Email" onChange={(event)=>{
      setEmail(event.target.value)
    }}  />
    <div className="md:h-11 md:flex hidden h-10 md:px-5 px-2  text-zinc-900 bg-gradient-to-b from-zinc-300 to-zinc-300   border-2 border-zinc-500  md:rounded-xl  items-center justify-center z-40" onClick={send} >
        <p className="md:text-base font-semibold text-xs" >Notify me</p>
    </div>  
    <div className='h-8 w-10  rounded-full flex items-center justify-center bg-gradient-to-b from-white to-zinc-400 md:hidden z-30' onClick={send} >
      <Image src={`/arrow.svg`} height={20} width={20} alt='arrow' />
    </div>

    
    </div>
    <p className="text-zinc-400 mt-2 md:text-sm text-xs" > We care about your data in our <span className="underline" >privacy policy</span>.</p>
    {/* email component end */}

    {/* globe component  */}

    <div className="h-[500px] w-[1200px] relative hidden md:flex" >
    <Image className="absolute -top-80"  src={`/globe.svg`} height={1600} width={1600} alt="globe" />
    </div>
    <div className="h-[500px] w-[1200px] flex justify-center items-center  relative md:hidden" >
    <Image className="absolute -top-30"  src={`/globe.svg`} height={700} width={700} alt="globe" />
    </div>
    {/* <div className="md:absolute md:top-40 " >
    <Image className="z-30"  src={`/globe.svg`} height={1200} width={1200} alt="globe" />
    </div> */}
    {/* globe component  end */}
      
  </div>
  )
}

export default LandingPage