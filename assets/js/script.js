/*=============== PRELOADER ===============*/

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr=ScrollReveal({
    distance:"60px",
    duration:2000,
    delay:100
});

sr.reveal(`.contact-headline,.projects-headline`,{delay:500,});
sr.reveal(`.nav,.footer-home,.footer-social,.skills-item,.projects-item`,{origin:"top",interval:100});
sr.reveal(`.contact-description,.contact-form`,{origin:"left",interval:100});
sr.reveal(`.hero-image`,{origin:"top"});
sr.reveal(`.hero-text`);
/*=============== SHOW SCROLL UP ===============*/

/*=============== EMAIL JS ===============*/
//selecting elements from DOM
const contactform=document.getElementById("contat-form"),
contactMessage=document.getElementById("contact-message"),
sendButton=document.querySelector("#contact-form button");

const sendEmail =async(e)=>{
    e.preventDfault();//prevents default form submission
    
    sendButton.disabled=true;
    sendButton.textContent="Sending....";
    try{
        await emailjs.sendForm(
            "service_9cs8bcv",
            "template_zautc44",
            "#contact-form",
            "1qK9COMU5gi1d59yp");
        contactMessage.textContent="Message sent successfully ";

        setTimeout(()=>{
            contactMessage.textContent="";
        },4000);

        contactform.reset();
    }
    catch(error){
        contactMessage.textContent="Message not sent(service error)";
    }
    finally{
        sendButton.disabled=false;
        sendButton.textContent="Send Message";
    }
};

contactform.addEventListener("submit",sendEmail);