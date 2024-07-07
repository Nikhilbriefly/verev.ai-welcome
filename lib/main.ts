

import nodemailer from "nodemailer";
import hbs from "nodemailer-express-handlebars";
import path from "path";


export async function sendMail  ({
    to,
  }:{
    to:string,
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

      transport.use('compile' , hbs({
        viewEngine:{
          defaultLayout:false,
        },
        viewPath:'./mail/'
      }));

    try {
      const testRes = await transport.verify();
      console.log(testRes);
      
    } catch (error) {
      console.log(error);
    }

    let mainOptions = {
      from:'verve.ai.build@gmail.com',
      to:to,
      subject:'Welcome to verve.ai , Yyou are on this list!',
      template:'index'
    }
  
  
    try {

      const sendMailNow = await transport.sendMail(mainOptions);

      console.log("Everything is working fine");
      
    } catch (error) {
      console.log(error);
      
    }
  
  
  
  }