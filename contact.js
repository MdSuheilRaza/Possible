const firebaseConfig = {
    apiKey: "AIzaSyCTzT3zUKl8dnNLhjVxvkc9JTLeZ13Y_w8",
    authDomain: "contact-51463.firebaseapp.com",
    databaseURL: "https://contact-51463-default-rtdb.firebaseio.com",
    projectId: "contact-51463",
    storageBucket: "contact-51463.appspot.com",
    messagingSenderId: "957883078221",
    appId: "1:957883078221:web:2395032b23cfff34af2e04",
    measurementId: "G-R04YMECQ2C"
  };
  
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Refernece contactInfo collections
let contactInfo = firebase.database().ref("infos");

// Listen for a submit
document.querySelector(".contact-form").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  //   Get input Values
  let name = document.querySelector(".name").value;
  let email = document.querySelector(".email").value;
  let message = document.querySelector(".message").value;
  console.log(name, email, message);

  saveContactInfo(name, email, message);

  document.querySelector(".contact-form").reset();
}

// Save infos to Firebase
function saveContactInfo(name, email, message) {
  let newContactInfo = contactInfo.push();

  newContactInfo.set({
    name: name,
    email: email,
    message: message,
  });
}
