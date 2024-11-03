/*const btnSignIn = document.getElementById ("sign-in"),
      btnSignUp = document.getElementById ("sign-up"),
      formRegister = document.querySelector(".register"),
      formLogin = document.querySelector(".login");

btnSignIn.addEventListener("click", e=> {
    formRegister.classList.add("hide");})
    formLogin.classList.remove("hide")

    

btnSignUp.addEventListener("click", e=> {
    formLogin.classList.add("hide");
    formRegister.classList.remove("hide")
 }) 
    
    const btnSignIn = document.getElementById("sign-in"),
    btnSignUp = document.getElementById("sign-up"),
    formRegister = document.querySelector(".register"),
    formLogin = document.querySelector(".login");

// Manejador de evento para el botón de "Iniciar Sesión"
btnSignIn.addEventListener("click", e => {
  formRegister.classList.add("hide"); // Oculta el formulario de registro
  formLogin.classList.remove("hide"); // Muestra el formulario de inicio de sesión
});

// Manejador de evento para el botón de "Registrarse"
btnSignUp.addEventListener("click", e => {
  formLogin.classList.add("hide"); // Oculta el formulario de inicio de sesión
  formRegister.classList.remove("hide"); // Muestra el formulario de registro
});*/

const btnSignIn = document.getElementById("sign-in"),
      btnSignUp = document.getElementById("sign-up"),
      formRegister = document.querySelector(".register"),
      formLogin = document.querySelector(".login");

// Manejador de evento para el botón de "Iniciar Sesión"
btnSignIn.addEventListener("click", e => {
    formRegister.classList.add("hide"); // Clase para animación
    setTimeout(() => {
        formRegister.classList.add("hide"); // Oculta el formulario de registro
        formLogin.classList.remove("hide"); // Muestra el formulario de inicio de sesión
    }, 500); // El tiempo debe coincidir con la duración de la transición
});

// Manejador de evento para el botón de "Registrarse"
btnSignUp.addEventListener("click", e => {
    formLogin.classList.add("hide"); // Clase para animación
    setTimeout(() => {
        formLogin.classList.add("hide"); // Oculta el formulario de inicio de sesión
        formRegister.classList.remove("hide"); // Muestra el formulario de registro
    }, 500); // El tiempo debe coincidir con la duración de la transición
});


      

