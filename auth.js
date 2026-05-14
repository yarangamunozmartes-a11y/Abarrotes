// Importamos las funciones necesarias del SDK de Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";

// Tu configuración (la que acabas de copiar)
const firebaseConfig = {
  apiKey: "AIzaSyAUSdADI_-uh9R5CYhpEh39H4MwEu2kKsw",
  authDomain: "abarrotes-5e320.firebaseapp.com",
  projectId: "abarrotes-5e320",
  storageBucket: "abarrotes-5e320.firebasestorage.app",
  messagingSenderId: "603828233219",
  appId: "1:603828233219:web:204a8005a5fc295c539a36",
  measurementId: "G-1DB1B2CQW5"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export function registrarUsuario(email, password) {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        alert("¡Registro exitoso! Te estamos redirigiendo...");
        // Al registrarse, Firebase ya deja al usuario logueado
        window.location.href = "productos.html"; 
      })
      .catch((error) => alert("Error: " + error.message));
}

// Función de Login
export function iniciarSesion(email, password) {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        window.location.href = "productos.html";
      })
      .catch((error) => {
        alert("Error de inicio: " + error.message);
      });
}