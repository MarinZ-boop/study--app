// auth.js
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

function login() {
  auth.signInWithRedirect(provider);
}

// Ova funkcija hvata rezultat nakon redirecta
auth.getRedirectResult()
  .then((result) => {
    if (result.user) {
      console.log("Uspješno prijavljen:", result.user.displayName);
      // Prebaci na dashboard
      window.location.href = "dashboard.html";
    }
  })
  .catch((error) => {
    console.error("Login failed:", error);
    alert("Login failed: " + error.message);
  });
