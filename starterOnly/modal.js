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
const modal = document.getElementById("modal_first");

// ┌──────────────────────────────────────────────────────────────────────────────┐
// │ CHAMPS FORMULAIRE ERREURS / VALIDATIONS                                      │
// └──────────────────────────────────────────────────────────────────────────────┘
confirmSend.style.display = "none"; // Message inscription réussie masquée

document.getElementById("formulaire").addEventListener("submit", function (e) {
  e.preventDefault();
  let error = "";

  // if (firstName.value.length < 2) {
  //   error = "Veuillez entrer 2 caractères ou plus pour le champ du nom";
  //   formData[0].setAttribute("data-error", error);
  //   formData[0].setAttribute("data-error-visible", true); // si data-error = true affiche moi le msg
  // } else {
  //   formData[0].setAttribute("data-error-visible", false);
  // }

  // if (lastName.value.length < 2) {
  //   error = "Veuillez entrer 2 caractères ou plus pour le champ du nom";
  //   formData[1].setAttribute("data-error", error);
  //   formData[1].setAttribute("data-error-visible", true);
  // } else {
  //   formData[1].setAttribute("data-error-visible", false);
  // }

  // if (!eMail.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,64})+$/)) {
  //   error = "Merci de saisir une adresse mail valide";
  //   formData[2].setAttribute("data-error", error);
  //   formData[2].setAttribute("data-error-visible", true);
  // } else {
  //   formData[2].setAttribute("data-error-visible", false);
  // }

  // const today = new Date();
  // const selectedDate = new Date(birthDate.value);

  // // console.log(birthDate.value);
  // if (birthDate.value === "" || today < selectedDate) {
  //   error = "Merci de renseigner le champ";
  //   formData[3].setAttribute("data-error", error);
  //   formData[3].setAttribute("data-error-visible", true);
  // } else {
  //   formData[3].setAttribute("data-error-visible", false);
  // }
  // //console.log(typeof quantityTournament.value);
  // if (quantityTournament.value === "" || Number(quantityTournament.value) < 0) {
  //   // Number() -> quantityTournament = number et non string
  //   error = "Merci de renseigner le champ";
  //   formData[4].setAttribute("data-error", error);
  //   formData[4].setAttribute("data-error-visible", true);
  // } else {
  //   formData[4].setAttribute("data-error-visible", false);
  // }

  let conditions = false;

  if (valideConditions.checked === "") {
    conditions = true;
    formData[6].setAttribute("data-error", error);
    formData[6].setAttribute("data-error-visible", true);
  } else {
    formData[6].setAttribute("data-error-visible", false);
  }

  const validForm = new Boolean();
  const btnSubmitValid = new Boolean(btnSubmit.value);
  btnSubmitValid.value = true;

  if (btnSubmitValid.value === true) {
    //Affichage message de confirmation envoi
    modal.style.display = "none";
    confirmSend.style.display = "block";
  }
});
