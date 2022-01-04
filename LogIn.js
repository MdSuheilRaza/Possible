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
  
  document.getElementById('loginBtn').addEventListener('click', LoginUser);
  document.getElementById('logoutBtn').addEventListener('click', LogoutUser);

  
  document.getElementById('loginScreen').style.display = "block"
  document.getElementById('dashboard').style.display = "none"

  firebase.auth().languageCode = 'fr';

  function LoginUser(){
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value
  
    firebase.auth().signInWithEmailAndPassword(email, password).catch(e=>{
      console.log(e);
    })
  }

  function LogoutUser(){
      firebase.auth().signOut().then(()=>{
        document.getElementById('loginScreen').style.display = "block"
        document.getElementById('dashboard').style.display = "none"
      }).catch(e=>{
          console.log(e);
      })
  }

  function showUserDetails(user){
      document.getElementById('userDetails').innerHTML = `
      <p>Currently Logged In with ${user.email}</p>
      <img src="${user.photoURL}" style="width:10%">
          <p>Name: ${user.displayName}</p>
          <p>Email: ${user.email}</p>
      `
      
  }
  
  firebase.auth().onAuthStateChanged(user=>{
    if(user){
      console.log(user);
      document.getElementById('loginScreen').style.display = "none"
      document.getElementById('dashboard').style.display = "block"
      showUserDetails(user);
    }else{
        document.getElementById('loginScreen').style.display = "block"
        document.getElementById('dashboard').style.display = "none"
    }
  })

  function sendEmailVerification(){
    // [START auth_send_email_verification]
    firebase.auth().currentUser.sendEmailVerification()
      .then(() => {
        // Email verification sent!
        // ...
        console.log("Verification sent")
      });
    // [END auth_send_email_verification]
  }

  