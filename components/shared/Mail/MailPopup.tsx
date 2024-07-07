import React from 'react'


    type IpopupProps = {
        setPopup:any
    }

const MailPopup = ({setPopup}:IpopupProps) => {
  return (
    <div onClick={()=>{
        setPopup(false);
    }} className='w-full absolute z-50 h-screen bg-zinc-900 bg-opacity-90 flex items-center justify-center' >
        <div className="md:h-[400px] md:w-[500px] h-[300px] w-[350px]  mb-12 bg-transparent rounded-3xl bg-[url('/pbg.png')] bg-cover bg-no-repeat px-8  flex flex-col justify-center" >
            <h1  className='text-zinc-200 text-3xl' style={{fontFamily:'clash-display' , fontWeight:100}} >Thank You !</h1>
            <p className='text-zinc-500 text-xs  leading-5 md:text-base mt-3 ' >
            You're on the list! We appreciate your interest and can't wait to keep you updated anc ready. <span className='hidden md:inline' >Stay tuned for exciting news and</span> updates coming your way soon!
            </p>

            <p className='mt-3 text-zinc-600 text-xs' >Check your inbox for  <span className='text-orange-400 underline' >confirmation email</span>.</p>
        </div>
    </div>
  )
}

export default MailPopup