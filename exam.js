function addExam() {
  const examInput = document.getElementById("exam");

  if(examInput.value === "") {
    alert("Unesi predmet i datum ispita!");
    return;
  }

  db.collection("exams").add({
    exam: examInput.value
  }).then(() => {
    const li = document.createElement("li");
    li.textContent = examInput.value;
    document.getElementById("exams").appendChild(li);

    examInput.value = "";
  }).catch((error) => {
    console.error("Greška pri dodavanju ispita: ", error);
  });
}
