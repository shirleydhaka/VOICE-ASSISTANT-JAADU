import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, GithubAuthProvider} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAySFXpgnztFX079uxY7UcsZIOOGxx9w2A",
  authDomain: "voice-recognition-3dfa0.firebaseapp.com",
  projectId: "voice-recognition-3dfa0",
  storageBucket: "voice-recognition-3dfa0.appspot.com",
  messagingSenderId: "613393824815",
  appId: "1:613393824815:web:db71c4d55cba71c34e9ada"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const googleLogin = document.getElementById("googleSignInBtn");
googleLogin.addEventListener("click", function name(params) {
  console.log("Sign in with Google button clicked");

  signInWithPopup(auth, provider)
      .then((result) => {
          const user = result.user;
          console.log("User signed in:", user);

          // Extract additional user information from the Google authentication result
          const { displayName, email } = user;

          // Store user credentials and additional information in local storage
          localStorage.setItem("user-creds", JSON.stringify(user));
          localStorage.setItem("user-info", JSON.stringify({ email, displayName }));

          window.location.href = "../index.html";
      })
      .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.error("Sign-in error:", errorCode, errorMessage);
      });
});



var githubProvider = new firebase.auth.GithubAuthProvider();

function SignInUser(){
firebase.auth().signInWithPopup(provider).then(res=>{
  let token = result.credential.accessToken;
  let user = result.user;

  console.log('user')
  window.location.href= "index.html";
})


.catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.error("Sign-in error:", errorCode, errorMessage);
      });
  }


let fullname = document.getElementById('fullname');
let email = document.getElementById('email');
let password = document.getElementById('password');

let Mainform = document.getElementById('Mainform');


let RegisterUser = evt => {
evt.preventDefault();

createUserWithEmailAndPassword(auth, email.value, password.value)
.then(async (credentials) => {
    var ref = doc(db, "UserAuthList", credentials.user.uid);
    await setDoc(ref, { 
        email: email.value,
        // Add additional user info as needed
        fullname: fullname.value,
        // Add more fields as needed
    });
    
    // Store user credentials in local storage
    localStorage.setItem("user-creds", JSON.stringify(credentials));

    // Store additional user info in local storage
    const userInfo = {
        email: email.value,
        fullname: fullname.value,
        
        // Add more fields as needed
    };
    localStorage.setItem("user-info", JSON.stringify(userInfo));

    
    window.location.replace("index.html");

})
.catch((error) => {
    alert(error.message);
    console.log(error.code);
    console.log(error.message);
});
};



Mainform.addEventListener('submit', RegisterUser);
