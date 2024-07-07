"use server"

import { sendMail } from "../main";



export const sendWelcomeMail = (email: string)=>{
    try {
        console.log(email);
        sendMail({
            to:email,
            
            
        });
    } catch (error) {
        console.log(error);
        
    }
}

