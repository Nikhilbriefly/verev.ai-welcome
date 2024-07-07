"use server"

import { sendMail } from "../main";



export const sendWelcomeMail = (email: string)=>{
    try {
        console.log(email);
        sendMail({
            body:`this is the dummy text for chcking`,
            name:'Void',
            subject:'Welcome Nikhil',
            to:email,
        });
    } catch (error) {
        console.log(error);
        
    }
}

