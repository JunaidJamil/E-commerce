import {auth, db} from "/firebase.mjs"
import{createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js"
import{addDoc,collection ,getDocs} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js"



let btn = document.getElementById('sign')
btn.addEventListener('click',()=>{
  let username = document.getElementById('username').value
  let email = document.getElementById('email').value
  let password = document.getElementById('password').value
  
  createUserWithEmailAndPassword(auth, email, password)
  .then(async(userCredential)  => {
      // Signed in 
      try {
        const docRef = await addDoc(collection(db, email), {
          email :email,
          password:password,
          username:username
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
      
      window.location.href = './login.html'
  // ...
  })
  .catch((error) => {
  const errorCode = error.code;
  const errorMessage = error.message;
  console.log('errorCode', errorCode)
  console.log('errorMessage', errorMessage)
  })
  
  })


let names = document.getElementById('names');
const querySnapshot = await getDocs(collection(db, email));
querySnapshot.forEach((doc) => {
  names.innerHTML = (` ${doc.data().username}`);
});

