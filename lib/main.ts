

import nodemailer from "nodemailer";



export async function sendMail  ({
    to,
    name,
    subject,
    body,
  }:{
    to:string,
    name:string,
    subject:string,
    body:string
  })  {

    console.log("this id working fine");
    
    const {SMTP_EMAIL , SMTP_PASSWORD} = process.env;
  
    const transport = nodemailer.createTransport({
      service:"gmail",
      auth:{
        user:'verve.ai.build@gmail.com',
        pass:'sert zgsw jihj qgfa'
      }
    });
  
    try {
      const testRes = await transport.verify();
      console.log(testRes);
      
    } catch (error) {
      console.log(error);
      
    }
  
  
    try {

      console.log("working cool");
      
      const sendMailNow = await transport.sendMail({
        from:'verve.ai.build@gmail.com',
        to,
        subject,
        html:body
      })

      console.log("Everything is working fine");
      
    } catch (error) {
      console.log(error);
      
    }
  
  
  
  }