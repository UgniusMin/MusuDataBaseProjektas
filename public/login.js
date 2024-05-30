import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7UD7ZASLB8yLwLQS7G_Qyybe_HbhntlA",
  authDomain: "project1-9a622.firebaseapp.com",
  projectId: "project1-9a622",
  storageBucket: "project1-9a622.appspot.com",
  messagingSenderId: "276140792515",
  appId: "1:276140792515:web:09d2f4940c844c8a916076",
  databaseURL: "https://musudatabaseprojektas-default-rtdb.europe-west1.firebasedatabase.app/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

import {getDatabase, ref, set, child, get} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-database.js";



/*Atkuomentuoti sita vieta jeigu nori atsijungti */
// localStorage.clear();
/*Atkuomentuoti sita vieta jeigu nori atsijungti */



/*Patikrinama ar vartotojas jau prisijunges */
if (localStorage.loggedIn === "True"){
    location.href = "./main.html";
}

/*Apibreziami elementai*/
const db = getDatabase(app);
const logIn = document.querySelector("button");
let inputName = document.querySelector("#name");
let inputPass = document.querySelector("#pass");
let errorName = document.querySelector("#errorName");
let errorPass = document.querySelector("#errorPass");


/*Paspaudziamas log in mygtukas*/
logIn.addEventListener("click", () => {
    event.preventDefault();
    const dbRef = ref(getDatabase());
    /* istrinami esami klaidos pranesimai */
    errorName.innerHTML = "";
    errorPass.innerHTML = "";
    /*Kreipiamasi i duomenu baze pagal nurodyta input verte */
    get(child(dbRef, `Users/${inputName.value}`))
    .then((snapshot) => {
        if (snapshot.exists()) {
            let user = snapshot.val();
            /*Patikrinama ar teisingi input duomenys */
            if (inputName.value == user.name && inputPass.value == user.pass){
                /*Issaugojamas prisijungimas i local storage ir nukeliama i pagrindini puslapi */
                localStorage.setItem("loggedIn", "True")
                console.log("yes");
                location.href = "./main.html"
            } else {
                /*Klaidos pranesimas */
                console.log("Wrong password");
                errorPass.innerHTML = "Wrong password and (or) username";
            }
        } else {
            /*Patikrinama ar vartotojas egzistuoja, ismetama klaida */
            console.log("User does not exist");
            errorName.innerHTML = "User does not exist";
        }
    })
})
