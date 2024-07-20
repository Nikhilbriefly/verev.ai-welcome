import nodemailer from 'nodemailer';
import hbs from 'nodemailer-express-handlebars';
import path from 'path';

// Define the function to send mail
export async function sendMail({
  to,
}: {
  to: string,
}) {
  console.log("This is working fine");

  // Configure the email transport
  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: 'verve.ai.build@gmail.com',
      pass: 'sert zgsw jihj qgfa'
    }
  });

  // Define the path to the template directory
  const templatePath = path.resolve(__dirname, 'actions', 'mail');
  console.log('Template path:', templatePath);  // Log the path for debugging

  // Configure the handlebars plugin for nodemailer
  transport.use('compile', hbs({
    viewEngine: {
      partialsDir: templatePath,
      layoutsDir: templatePath,
    },
    viewPath: templatePath,
    extName: '.handlebars',
  }));

  try {
    // Verify the transport configuration
    const testRes = await transport.verify();
    console.log(testRes);
  } catch (error) {
    console.log(error);
  }

  // Define the email options
  let mainOptions = {
    from: 'verve.ai.build@gmail.com',
    to: to,
    subject: 'Welcome to verve.ai, You are on this list!',
    template: 'index'
  }

  try {
    console.log(mainOptions);

    // Send the email
    const sendMailNow = await transport.sendMail(mainOptions);

    console.log("Everything is working fine maybe");
  } catch (error) {
    console.log(error);
  }
}
