

const handleSubmit =(e) =>
{
    e.preventDefault();
    const email = document.getElementById('email').value;
    console.log(email);
    const formSection = document.getElementsByClassName('signUpContainer')[0]
const succesSection = document.getElementsByClassName('succesMessageContainer')[0]

    if(verifyMail(email))
    {
        
        const emailText = document.getElementById('emailText')

        console.log(formSection)
        console.log(succesSection)

        formSection.classList.toggle('notDisplay')
        succesSection.classList.toggle('notDisplay')

        emailText.innerText = `${email}`

    }
    else
    {
        const errorMessage = document.getElementById("error")
        console.log(errorMessage)
        errorMessage.style.display = "block"
    }

}

const verifyMail =(email) =>
{
   // Expression régulière pour vérifier le format de l'e-mail
   const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

   // Teste si l'e-mail correspond au format spécifié
   if (emailPattern.test(email)) {
       // L'e-mail est au bon format
       console.log("L'e-mail est au format valide.");
       return true;
   } else {
       // L'e-mail n'est pas au bon format
       console.log("L'e-mail n'est pas au format valide.");
       return false;
   }
    
    

}

function rollback()
{
    const formSection = document.getElementsByClassName('signUpContainer')[0]
const succesSection = document.getElementsByClassName('succesMessageContainer')[0]
    formSection.classList.toggle('notDisplay')
    succesSection.classList.toggle('notDisplay')

}