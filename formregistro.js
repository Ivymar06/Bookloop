const btnSignIn = document.getElementById("sign-in"),
      btnSignUp = document.getElementById("sign-up"),
      formRegister = document.querySelector(".register"),
      formLogin = document.querySelector(".login");

// Manejador de evento para el botón de "Iniciar Sesión"
btnSignIn.addEventListener("click", e => {
    formRegister.classList.add("hide"); 
    setTimeout(() => {
        formRegister.classList.add("hide"); 
        formLogin.classList.remove("hide"); 
    }, 500);})


// Manejador de evento para el botón de "Registrarse"
btnSignUp.addEventListener("click", e => {
    formLogin.classList.add("hide"); 
    setTimeout(() => {
        formLogin.classList.add("hide"); 
        formRegister.classList.remove("hide"); 
    }, 500); 
});


      

