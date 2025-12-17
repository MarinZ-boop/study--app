function addSchedule() {
  const dayInput = document.getElementById("day");
  const subjectInput = document.getElementById("subject");

  if(dayInput.value === "" || subjectInput.value === "") {
    alert("Unesi dan i predmet!");
    return;
  }

  db.collection("schedule").add({
    day: dayInput.value,
    subject: subjectInput.value
  }).then(() => {
    const li = document.createElement("li");
    li.textContent = dayInput.value + " - " + subjectInput.value;
    document.getElementById("schedule").appendChild(li);

    dayInput.value = "";
    subjectInput.value = "";
  }).catch((error) => {
    console.error("Greška pri dodavanju rasporeda: ", error);
  });
}
