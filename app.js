import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
import { getAuth, signOut} from "https://www.gstatic.com/firebasejs/10.12.1/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyCFUzB26xYpC735MLaYNhnNc7uxnldiNxU",
    authDomain: "musudatabaseprojektas.firebaseapp.com",
    databaseURL: "https://musudatabaseprojektas-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "musudatabaseprojektas",
    storageBucket: "musudatabaseprojektas.appspot.com",
    messagingSenderId: "996181232561",
    appId: "1:996181232561:web:a722c10aaefaabb864cb90"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


document.querySelector('#logoutButton').addEventListener('click', () => {
    signOut(auth).then(() => {
        alert('User logged out successfully!');
        document.querySelector('#logoutSection').classList.add('d-none');
    }).catch((error) => {
        console.error('Error logging out:', error);
        alert(`Error: ${error.message}`);
    });
});