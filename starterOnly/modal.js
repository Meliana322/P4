function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// ┌──────────────────────────────────────────────────────────────────────────────┐
// │ CLOSE MODAL                                                                  │
// └──────────────────────────────────────────────────────────────────────────────┘
function closeModal() {
  modalbg.style.display = "none";
}

const closeBtn = document.querySelector("span.close");

closeBtn.addEventListener("click", closeModal);

// ┌──────────────────────────────────────────────────────────────────────────────┐
// │ CIBLAGE DES INPUTS                                                           │
// └──────────────────────────────────────────────────────────────────────────────┘
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const eMail = document.getElementById("email");
const birthDate = document.getElementById("birthdate");
const quantityTournament = document.getElementById("quantity");
const locations = document.querySelectorAll("input[type=radio]");
const participation = document.getElementById("quantity");
const valideConditions = document.getElementById("checkbox1");
const btnSubmit = document.getElementById("btn_envoi");
const confirmSend = document.getElementById("confirmSendMessage");
const formulaireMod = document.getElementById("formulaire");
const modalFirst = document.getElementById("modal_first");
const modalSecond = document.getElementsByClassName("modal_validate")[0];

// ┌──────────────────────────────────────────────────────────────────────────────┐
// │ CHAMPS FORMULAIRE ERREURS / VALIDATIONS                                      │
// └──────────────────────────────────────────────────────────────────────────────┘
modalSecond.style.display = "none"; // Message inscription réussie masquée

document.getElementById("formulaire").addEventListener("submit", function (e) {
  e.preventDefault();
  let error = "";

  // Prénom
  if (firstName.value.length < 2) {
    error = "Veuillez entrer 2 caractères ou plus pour le champ du nom";
    formData[0].setAttribute("data-error", error);
    formData[0].setAttribute("data-error-visible", true); // si data-error = true affiche moi le msg
  } else {
    formData[0].setAttribute("data-error-visible", false);
  }

  // Nom
  if (lastName.value.length < 2) {
    error = "Veuillez entrer 2 caractères ou plus pour le champ du nom";
    formData[1].setAttribute("data-error", error);
    formData[1].setAttribute("data-error-visible", true);
  } else {
    formData[1].setAttribute("data-error-visible", false);
  }
  // Email
  if (!eMail.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,64})+$/)) {
    error = "Merci de saisir une adresse mail valide";
    formData[2].setAttribute("data-error", error);
    formData[2].setAttribute("data-error-visible", true);
  } else {
    formData[2].setAttribute("data-error-visible", false);
  }

  // Date anniversaire
  const today = new Date();
  const selectedDate = new Date(birthDate.value);

  if (birthDate.value === "" || today < selectedDate) {
    error = "Merci de renseigner le champ";
    formData[3].setAttribute("data-error", error);
    formData[3].setAttribute("data-error-visible", true);
  } else {
    formData[3].setAttribute("data-error-visible", false);
  }
  // Nombre de tournoi
  if (quantityTournament.value === "" || Number(quantityTournament.value) < 0) {
    error = "Merci de renseigner le champ";
    formData[4].setAttribute("data-error", error);
    formData[4].setAttribute("data-error-visible", true);
  } else {
    formData[4].setAttribute("data-error-visible", false);
  }

  // Choix ville
  let radioCheck = false;

  for (let radio of locations) {
    if (radio.checked === true) {
      radioCheck = true;
    }
  }

  if (radioCheck === false) {
    error = "Merci de renseigner le champ";
    formData[5].setAttribute("data-error", error);
    formData[5].setAttribute("data-error-visible", true);
  } else {
    formData[5].setAttribute("data-error-visible", false);
  }

  // Validation des conditions

  if (valideConditions.checked === false) {
    error = "Merci de renseigner le champ";
    formData[6].setAttribute("data-error", error);
    formData[6].setAttribute("data-error-visible", true);
  } else {
    formData[6].setAttribute("data-error-visible", false);
  }
  // Disparition du formulaire, affichage de la modale d'envoi de formulaire
  if (error === "") {
    modalFirst.style.display = "none";
    modalSecond.style.display = "block";
  }
});
// Nouvel affichage et fermeture du formulaire, réinitialisation des champs
document.getElementById("btn").addEventListener("click", function () {
  closeModal();
  modalFirst.style.display = "block";
  modalSecond.style.display = "none";
  formulaireMod.reset();
});
