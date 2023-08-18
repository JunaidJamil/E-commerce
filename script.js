
import {auth, db } from "/firebase.mjs"
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js"
import {  onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js"



onAuthStateChanged(auth, async (user) => {
  if (user) {
    const uid = user.uid;
    console.log(uid);
    // ...

    const docRef = doc(db, "information", uid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      document.getElementById("names").innerHTML = docSnap.data().username
      document.getElementById("c").innerHTML = "Log out"
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }

  }
});
function show() {
  window.location.href = "./brand.html "
}
window.show = show


document.getElementById('c').addEventListener('click',()=>{

  
  signOut(auth).then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });
  
})