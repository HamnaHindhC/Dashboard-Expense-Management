const usernameField=document.querySelector("#usernameField");
const  feedbackArea =document.querySelector(".invalid-feedback");
const emailField=document.querySelector("#emailField");
const emailfeedbackArea=document.querySelector(".emailfeedbackArea");
const usernameSuccessOutput=document.querySelector(".usernameSuccessOutput");
const ShowPasswordToggler=document.querySelector(".ShowPasswordToggler");
const passwordField=document.querySelector("#passwordField");
const submitBtn=document.querySelector(".submit-btn");








const handleToggleInput=(e)=>{

   if(ShowPasswordToggler.textContent==='show'){
     ShowPasswordToggler.textContent="hide";
     passwordField.setAttribute("type","text");
   }else{
    ShowPasswordToggler.textContent="show";
     passwordField.setAttribute("type","password");
   }


}


ShowPasswordToggler.addEventListener("click",handleToggleInput);






usernameField.addEventListener("keyup",(e) => {
    usernameSuccessOutput.style.display="block";

    const UsernameVal=e.target.value;
          usernameSuccessOutput.textContent=`Checking ${UsernameVal}`;
          usernameField.classList.remove("is-invalid");
          feedbackArea.style.display = "none";

    if (UsernameVal.length >0){
       fetch("/authentication/validate_username",{
       body:JSON.stringify({ username : UsernameVal}),
       method:"POST",
})
   .then((res)=>res.json())
   .then((data)=>{
    usernameSuccessOutput.style.display="none";


        if (data.username_error) {
          usernameField.classList.add("is-invalid");
          feedbackArea.style.display = "block";
          feedbackArea.innerHTML = `<p>${data.username_error}</p>`;
          submitBtn.disabled=true;  
        
    }   else{
         submitBtn.removeAttribute("disabled");
        }

});
}
});



emailField.addEventListener("keyup",(e) =>{

    const emailVal=e.target.value;

          emailField.classList.remove("is-invalid");
          emailfeedbackArea.style.display = "none";
    if (emailVal.length >0){
       fetch("/authentication/validate_email",{
       body:JSON.stringify({ email : emailVal}),
       method:"POST",
})
   .then((res)=>res.json())
   .then((data)=>{
    console.log("data",data);


        if (data.email_error) {
          submitBtn.disabled=true;  
          emailField.classList.add("is-invalid");
          emailfeedbackArea.style.display = "block";
          emailfeedbackArea.innerHTML = `<p>${data.email_error}</p>`;
        
       }else{
         submitBtn.removeAttribute("disabled");
    }

});
}
});
