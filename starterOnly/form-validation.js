// ┌──────────────────────────────────────────────────────────────────────────────┐
// │ DOM Elements                                                                 │
// └──────────────────────────────────────────────────────────────────────────────┘

const formulaire = document.getElementById("formulaire");

// INPUTS
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const eMail = document.getElementById("email");
const birthDate = document.getElementById("birthdate");
const quantityTournament = document.getElementById("quantity");
const loc1 = document.querySelectorAll("input[type=radio]");
const participation = document.getElementById("quantity");
const valideConditions = document.getElementById("checkbox1");
const btnSubmit = document.getElementById("btn_envoi");

// MESSAGES ERROR

// ┌──────────────────────────────────────────────────────────────────────────────┐
// │ CLOSE MODAL                                                                  │
// └──────────────────────────────────────────────────────────────────────────────┘

function closeModal() {
  modalbg.style.display = "none";
}

const closeBtn = document.querySelector("span.close");

closeBtn.addEventListener("click", closeModal);

// ┌──────────────────────────────────────────────────────────────────────────────┐
// │ ERROR MESSAGE DISABLED                                                       │
// └──────────────────────────────────────────────────────────────────────────────┘

// ┌──────────────────────────────────────────────────────────────────────────────┐
// │ CONFIRMATION SUBMIT                                                          │
// └──────────────────────────────────────────────────────────────────────────────┘

document.getElementById("formulaire").addEventListener("input", function (e) {
  e.preventDefault();

  let error;

  if (firstName.value.length < 2) {
    error = "Merci de renseigner le champ";
    formData[0].setAttribute("data-error", error);
    formData[0].setAttribute("data-error-visible", true);
  }
  if (lastName.value.length < 2) {
    error = "Merci de renseigner le champ";
    formData[1].setAttribute("data-error", error);
    formData[1].setAttribute("data-error-visible", true);
  }
  if (!eMail.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
    error = "Merci de saisir une adresse mail valide";
    formData[2].setAttribute("data-error", error);
    formData[2].setAttribute("data-error-visible", true);
  }
  if (birthDate.value < 8 || dateNaissance.value) {
    error = "Merci de renseigner le champ";
    formData[3].setAttribute("data-error", error);
    formData[3].setAttribute("data-error-visible", true);
  } else {
    formData[0].setAttribute("data-error-visible", false);
  }

  if (error) {
    document.getElementById("error").innerHTML = error;
    return false;
  } else {
    alert("Merci ! Votre réservation a été reçue.");
  }
});
