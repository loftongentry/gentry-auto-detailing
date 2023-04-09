import { mailOption, transporter } from '../../config/nodemailer.js'

const CONTACT_MESSAGE_FIELDS = {
  firstName: 'First Name',
  lastName: 'Last Name',
  email: 'Email',
  phoneNumber: 'Phone Number',
  carMake: 'Car Make',
  carModel: 'Car Model',
  typeOfDetail: 'Type of Detail',
  additionalDetails: 'Additional Details (Optional)',
  desiredDate: 'Desired Date'
}

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const data = req.body
    //Must have all the below input forms filled out in the form, or the form will not submit and instead return an error
    if (!data.firstName || !data.lastName || !data.email || !data.phoneNumber || !data.carMake || !data.carModel || !data.typeOfDetail || !data.desiredDate) {
      return res.status(400).json({ message: 'Bad Request' })
    }

    try {
      //Attempt to send the email with accompanying data in the proper format and email subject
      await transporter.sendMail({
        ...mailOption,
        //Callback to function that converts all relevant data into proper text and html format for the email
        ...generateEmailContent(data),
        subject: 'New Request Received',
      })

      return res.status(200).json({ success: true })
    } catch (e) {
      console.log(e)
      return res.status(400).json({ message: e.message })
    }
  }
  //Return bad status if not a 'POST' method
  return res.status(400).json({ message: 'Bad Request' })
}

//This function takes an object 'data' as an argument and generates email content in two formats: plain text and HTML.
const generateEmailContent = (data) => {
  //Used to map the key names of the data object to their corresponding display names, and these display names are used in the formatted string
  const stringData = Object.entries(data).reduce(
    (str, [key, value]) =>
      (str += `${CONTACT_MESSAGE_FIELDS[key]}: \n${value} \n \n`),
    ''
  )

  //Generate a header and paragraph HTML element for each key-value pair
  const htmlData = Object.entries(data).reduce(
    (str, [key, value]) =>
      (str += `<h1 class='form-heading' align='left'>${CONTACT_MESSAGE_FIELDS[key]}</h1><p class='form-answer' align='left'>${value}</p>`),
    ''
  )
  
  //Returns the generated 'stringData' and html for the email
  return {
    text: stringData,
    html: `<!DOCTYPE html><html><head> <title></title> <meta charset="utf-8"/> <meta name="viewport" content="width=device-width, initial-scale=1"/> <meta http-equiv="X-UA-Compatible" content="IE=edge"/> <style type="text/css"> body, table, td, a{-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%;}table{border-collapse: collapse !important;}body{height: 100% !important; margin: 0 !important; padding: 0 !important; width: 100% !important;}@media screen and (max-width: 525px){.wrapper{width: 100% !important; max-width: 100% !important;}.responsive-table{width: 100% !important;}.padding{padding: 10px 5% 15px 5% !important;}.section-padding{padding: 0 15px 50px 15px !important;}}.form-container{margin-bottom: 24px; padding: 20px; border: 1px dashed #ccc;}.form-heading{color: #2a2a2a; font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif; font-weight: 400; text-align: left; line-height: 20px; font-size: 18px; margin: 0 0 8px; padding: 0;}.form-answer{color: #2a2a2a; font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif; font-weight: 300; text-align: left; line-height: 20px; font-size: 16px; margin: 0 0 24px; padding: 0;}div[style*="margin: 16px 0;"]{margin: 0 !important;}</style></head><body style="margin: 0 !important; padding: 0 !important; background: #fff"> <div style=" display: none; font-size: 1px; color: #fefefe; line-height: 1px; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden; "></div><table border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td bgcolor="#ffffff" align="center" style="padding: 10px 15px 30px 15px" class="section-padding"> <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 500px" class="responsive-table"> <tr> <td> <table width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td> <table width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td style=" padding: 0 0 0 0; font-size: 16px; line-height: 25px; color: #232323; text-align: center; " class="padding message-content"> <h2>New Appointment Request</h2> <div class="form-container">${htmlData}</div></td></tr></table> </td></tr></table> </td></tr></table> </td></tr></table></body></html>`,
  }
}

export default handler