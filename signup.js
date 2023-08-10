import {auth, db} from "/firebase.mjs"
import{createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js"
import{doc, setDoc} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js"



let btn = document.getElementById('sign')
btn.addEventListener('click',()=>{
  let username = document.getElementById('username').value
  let email = document.getElementById('email').value
  let password = document.getElementById('password').value
  
  createUserWithEmailAndPassword(auth, email, password)
  .then(async(userCredential)  => {
    await setDoc(doc(db, "information", userCredential.user.uid), {
      username:username,
      email:email,
      password:password,

    });
  window.location.href = "/login.html"

   

  })

  .catch((error) => {
  const errorCode = error.code;
  const errorMessage = error.message;
  console.log('errorCode', errorCode)
  console.log('errorMessage', errorMessage)
  })
  
  })



// const btn = document.getElementById('sign')
// btn.addEventListener('click', () => {
//     const email = document.getElementById('email').value
//     const password = document.getElementById('password').value  
//     const name = document.getElementById('username').value 
//     createUserWithEmailAndPassword(auth, email, password)
//     .then(async(userCredential) => {
//         const user = userCredential.user;
//         try {
//             const docRef = await setDoc(doc(db, "users", user.uid), {
//               name,
//               country,
//               phone,
//               address,
//               email,
//               uid: user.uid
//             });
//             // console.log("Document written with ID: ", docRef.id);
//           } catch (e) {
//             console.error("Error adding document: ", e);
//           }

//           Swal.fire({
//             text: `User Signed Up !`,
//             icon: 'success',
//             confirmButtonText: 'OK'
//           }).then(()=>{
//             window.location.href = 'login.html'
//           }
//           )
//         console.log(user);
//         // ...
//     })
//     .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//           console.log(errorMessage);
//     });
// })