/////////////// BACKEND  !!!!!! ///////////////

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////                FIREBASE        ////////////////////////////////////////////////////////

// Your web app's Firebase configuration
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDCxgZiQHYVyYIscxXM9jLzHT6v_gzEHHw",
    authDomain: "radiology101-a8ef1.firebaseapp.com",
    projectId: "radiology101-a8ef1",
    storageBucket: "radiology101-a8ef1.appspot.com",
    messagingSenderId: "425716729763",
    appId: "1:425716729763:web:34eb802e7ad9be34b2bc16",
    measurementId: "G-79SFDYRS56"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



//// ONPEN AI   /////

// async function sendToOpenAI() {
//     // Get the text from the text area
//     const text = document.querySelector('.editable-text').innerText;

//     // Create a messages array
//     const messages = [{ "role": "system", "content": "Sei connesso al servizio di assistenza radiologica." }, { "role": "user", "content": text }];

//     // Send a POST request to the server
//     const response = await fetch('https://damp-plains-57695.herokuapp.com/get-gpt-3-response', {
//         method: 'POST',
//         mode: 'cors', // Add this line
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ messages: messages }), // Send the messages array
//     })
//         .then(response => response.json())
//         .then(data => {
//             console.log('debug: received data', data); // Debug: stampa i dati ricevuti
//             let responseContainer = document.getElementById("responseContainer");
//             let responseText = document.createElement("p");
//             responseText.innerText = data.response;
//             responseContainer.appendChild(responseText);
//         })
//         .catch((error) => {
//             console.error('debug: Error:', error); // Debug: stampa l'errore, se presente
//         });
// }
