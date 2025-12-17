const lessonsList = document.getElementById("lessons"); // <ul id="lessons">

function addLesson() {
  const lessonInput = document.getElementById("lesson");

  if(lessonInput.value === "") {
    alert("Upiši lekciju!");
    return;
  }

  // Spremi u Firestore
  db.collection("lessons").add({
    lesson: lessonInput.value
  }).then(() => {
    // Dodaj u HTML listu
    const li = document.createElement("li");
    li.textContent = lessonInput.value;
    lessonsList.appendChild(li);

    // Očisti input
    lessonInput.value = "";
  }).catch((error) => {
    console.error("Greška pri dodavanju lekcije: ", error);
  });
}

// Opcionalno: učitavanje lekcija iz Firestore kad se otvori dashboard
db.collection("lessons").get().then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
    const li = document.createElement("li");
    li.textContent = doc.data().lesson;
    lessonsList.appendChild(li);
  });
});
