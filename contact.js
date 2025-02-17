const form = document.getElementById("contactForm")

form.addEventListener('submit',function(event){

    const emailValue = document.getElementById('email').value;
    alert(`Thank you for your message you will be contacted shortly on ${emailValue}. Be sure to check your spam folder.`);
})