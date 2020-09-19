import emailjs from 'emailjs-com';


emailjs.init("user_tG8EHeMOl5b3nYfWlmq52");



const Mailer= (obj)=>{



    const templateId = "template_AhPXxRIY";
    const templateData = {
                from_name: obj.name,
                reply_to: obj.email,
                message_html: obj.message
    }
    const service_id = "default_service";
    
    emailjs.send( service_id , templateId, templateData )
            .then(res=>console.log(res))
            .catch(err=>console.log(err))

};

export default Mailer;