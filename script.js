const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');
if(bar){
    bar.addEventListener('click',()=>{
        nav.classList.add('active');
    })
}
if(close){
    bar.addEventListener('click',()=>{
        nav.classList.remove('active');
    })
}
function upp_first_letter()
{
    var x=document.getElementById("nom_client");
    x.value=x.value.slice(0,1).toUpperCase()+x.value.slice(1);
    var x=document.getElementById("prenom_client");
    x.value=x.value.slice(0,1).toUpperCase()+x.value.slice(1);
}
function afficherMessage() {
    alert("Votre réponse a été bien enregistrée");
}
function validateForm(e) {
    e.preventDefault()
    var FirstName = document.loginForm.FirstName.value
    var LastName = document.loginForm.LastName.value
    var mail = document.loginForm.mail.value
    var num = document.loginForm.numeroTel.value
    var regex = /^\d{2} \d{3} \d{3}$/;
    var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (FirstName.length==0)
        return alert('please enter your First Name')
    if (LastName.length==0)
        return alert('please enter your Last Name')
    if ((!emailPattern.test(mail)) )
        return alert('verify your mail il doit contenir @ et .xxx')
    if (!regex.test(num)){
        document.getElementById("note").innerHTML="ce numero doit contenir 8 chiffre de la forme suivante XX YYY ZZZ";
        document.getElementById("note").style.color="red";
    }
   else{
    return afficherMessage();
   }
}
function verif()
{
    var x=document.getElementById("numerotel_client");
    var ch= x.value.toString();
    if (ch.length!=8){
        
    }
    else document.getElementById("note").innerHTML="";
}




