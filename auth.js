function login() {
  const provider = new firebase.auth.GoogleAuthProvider();

  // Dodaj tvoj Client ID (nije obavezno ako već radiš preko Firebase web configa,
  // ali ponekad pomaže za GitHub Pages i custom domena)
  provider.setCustomParameters({
    client_id: "101963018302-j9ter46s7eakbrs5d0kiuk0s66k31uql.apps.googleusercontent.com"
  });

  auth.signInWithPopup(provider)
    .then(() => {
      window.location = "dashboard.html";
    })
    .catch(error => {
      console.error(error.message);
      alert("Login failed: " + error.message);
    });
}
