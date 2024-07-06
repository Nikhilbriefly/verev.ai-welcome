"use client"

import Image from 'next/image'
import React from 'react'

const LandingPage = () => {

    
  return (
    <div className="h-screen w-full bg-no-repeat  overflow-hidden  bg-cover bg-[url('/bg.svg')] md:px-32 px-12  relative flex flex-col justify-start items-center" >
    <div className="flex items-center gap-1  md:hidden w-full mt-4" >
        <Image src={`/logo.svg`} height={20} width={20} alt="loog" />
        <p className="text-white" >verve.ai</p>
      </div>
    {/* laucn tab */}
    <div className="w-full px-12" >
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
      <div className="h-10 px-4  text-zinc-900 bg-gradient-to-b from-zinc-400 to-zinc-300  border-2 border-zinc-500  rounded-xl flex items-center justify-center " >
        <p className="md:text-base font-normal text-xs" >Notify me</p>
    </div>   

      </div>
    </div>
    </div>

    <div className="mt-20" >
      <Image src={'/desktoplaunch.svg'} height={120} width={120} alt="l
      lauch sonon"/>
     </div>
    {/* hero text */}
      <h1 className="md:text-6xl text-balance text-[30px] sm:text-[10px] mt-5 font-bold bg-gradient-to-r from-zinc-300 via-zinc-500 to-zinc-200 bg-clip-text text-transparent text-center " style={{fontFamily:'clash-display' , fontWeight:200}}  >Write like a pro, even when <br /> you're thinking like you.</h1>
      <p className="leading-snug text-center tracking-normal text-zinc-400 font-light md:text-[20px] text-[14px] mt-4" >Write Like a Boss & Research Like a Champ: Powerful Tools  at Your  Fingertips.</p>
    {/* hero text end */}


    {/* email component */}
    <div className="flex gap-2 items-center mt-8" >
    <input className="bg-zinc-700 z-50 px-4 h-12 bg-opacity-45  border-zinc-700 focus:border-zinc-500 active:border-zinc-600 outline-none placeholder:text-zinc-400 border-2 md:w-[300px] w-[200px] rounded-2xl text-white" type="text" placeholder="Enter Your Email" />
    <div className="h-11 px-5  text-zinc-900 bg-gradient-to-b from-zinc-300 to-zinc-300  border-2 border-zinc-500  rounded-xl flex items-center justify-center " >
        <p className="md:text-base font-semibold text-sm" >Notify me</p>
    </div>  

    
    </div>
    <p className="text-zinc-400 mt-2 text-sm" > We care about your data in our <span className="underline" >privacy policy</span>.</p>
    {/* email component end */}

    {/* globe component  */}

    <div className="h-[500px] w-[1200px] relative " >
    <Image className="absolute -top-80"  src={`/globe.svg`} height={1600} width={1600} alt="globe" />
    </div>
    {/* <div className="md:absolute md:top-40 " >
    <Image className="z-30"  src={`/globe.svg`} height={1200} width={1200} alt="globe" />
    </div> */}
    {/* globe component  end */}
      <p className="text-zinc-400 font-light text-sm md:hidden" >#BuildInPublic</p>
  </div>
  )
}

export default LandingPage