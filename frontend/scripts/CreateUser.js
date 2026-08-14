const registerForm = document.querySelector("#register-form");
const fullnameInput = document.querySelector("#fullname");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");

// console.log(registerForm);
// console.log(fullnameInput);
// console.log(emailInput);
// console.log(passwordInput);

registerForm.addEventListener("submit",(e)=>{
  e.preventDefault();
  console.log("form submitted");

  const newUser={
    fullname: fullnameInput.value,
    email:emailInput.value.toLowerCase(),
    password:passwordInput.value,
  };

  console.log(newUser);

  //! send newuser to database


  //!navigate to all users page 
  window.location.href="AllUsers.html"

  
});
