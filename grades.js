function addGrade() {
  const subjectInput = document.getElementById("gSubject");
  const gradeInput = document.getElementById("grade");

  if(subjectInput.value === "" || gradeInput.value === "") {
    alert("Unesi predmet i ocjenu!");
    return;
  }

  db.collection("grades").add({
    subject: subjectInput.value,
    grade: gradeInput.value
  }).then(() => {
    const li = document.createElement("li");
    li.textContent = subjectInput.value + " - " + gradeInput.value;
    document.getElementById("grades").appendChild(li);

    subjectInput.value = "";
    gradeInput.value = "";
  }).catch((error) => {
    console.error("Greška pri dodavanju ocjene: ", error);
  });
}
