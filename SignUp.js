const firebaseConfig = {
  apiKey: "AIzaSyAubTwgg8mBqBTLUrKY5UCD_k1IqDe0jE4",
  authDomain: "sign-in-4721e.firebaseapp.com",
  projectId: "sign-in-4721e",
  storageBucket: "sign-in-4721e.appspot.com",
  messagingSenderId: "837436108716",
  appId: "1:837436108716:web:b91b37bf4557cda701d409",
  measurementId: "G-N7CDSVD73L"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

document.getElementById('signup').addEventListener('click', signUpUser);

document.getElementById('dashboard').style.display = 'none'

function signUpUser(){
  let email = document.getElementById('email').value
  let password = document.getElementById('password').value

  firebase.auth().createUserWithEmailAndPassword(email, password).catch(e=>{
    console.log(e);
    document.getElementById('dashboard').style.display = 'block'
  });

 
}

firebase.auth().onAuthStateChanged(user=>{
  if(user){
    console.log(user);
     var uid = user.uid;
  }else{
    
  } 
})

function sendEmailVerification() {
  // [START auth_send_email_verification]
  firebase.auth().currentUser.sendEmailVerification()
    .then(() => {
      // Email verification sent!
      // ...
      console.log("Verification sent")
    });
  // [END auth_send_email_verification]
}
