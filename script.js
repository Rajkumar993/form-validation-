const form=document.getElementById('form');
const userName=document.getElementById('username');
const email=document.getElementById('email');
const password=document.getElementById('password');
const cpassword=document.getElementById('cpassword');

form.addEventListener('submit',(e)=>{
 e.preventDefault()
 inputValidate()
})
function inputValidate(){
  const userVal=userName.value.trim()
  const emailVal=email.value.trim()
  const passVal=password.value.trim();
  const cpassVall=cpassword.value.trim()

if(userVal=='')
  setError(userName,'enter user name')
else
 setSuccess(userName);
if(emailVal=='')
setError(email,'enter email')
else if(!emailValid(emailVal)){
  setError(email,'enter valid input')
}
else
setSuccess(email)
 if(passVal=='')
 setError(password,'please enter password')
else if(passVal.length<8)
setError(password,'enter atleast 8 charecters')
else
setSuccess(password)

if(cpassVall!=passVal){
  setError(cpassword,'please check your password')
}
else if(cpassVall==''){
  setError(cpassword,'please re enterpassword')
}
else
setSuccess(cpassword)
}

function setError(element,message){
 
  const inputGroup=element.parentElement
 const inputElement=inputGroup.querySelector('.error')
   inputElement.innerHTML=message
  inputGroup.classList.add('error')
  inputGroup.classList.remove('success')
}
function setSuccess(element){
  const inputGroup=element.parentElement
 const inputElement=inputGroup.querySelector('.error')
 inputElement.innerHTML=''
  inputGroup.classList.add('success')
  inputGroup.classList.remove('error')
}
function emailValid(emailVal){
  const reg= /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
return(emailVal.match(reg))

}