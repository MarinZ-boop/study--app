const provider = new firebase.auth.GoogleAuthProvider();

function login() {
  auth.signInWithRedirect(provider);
}

auth.getRedirectResult()
  .then((result) => {
    if (result.user) {
      window.location = "dashboard.html";
    }
  })
  .catch((error) => {
    console.error(error);
    alert("Login failed: " + error.message);
  });
