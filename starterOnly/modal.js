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

// #1 close modal
function closeModal() {
  modalbg.style.display = "none";
}

const closeBtn = document.querySelector("span.close");

closeBtn.addEventListener("click", closeModal);

// #2 Implémenter entrées formulaire

// Récupération valeurs imput
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const eMail = document.getElementById("email");
const birthDate = document.getElementById("birthdate");
const quantityTournament = document.getElementById("quantity");
const loc1 = document.getElementById("location1");
const loc2 = document.getElementById("location2");
const loc3 = document.getElementById("location3");
const loc4 = document.getElementById("location4");
const loc5 = document.getElementById("location5");
const loc6 = document.getElementById("location6");
const participation = document.getElementById("quantity");
const valideConditions = document.getElementById("checkbox1");

// const dateActuelle = new Date();
// const dateActuelleLocale = dateActuelle.toLocaleDateString("fr-FR", {
//   day: "numeric",
//   month: "numeric",
//   year: "numeric",
// });
// const dateNaissance = dateActuelleLocale[2] > 18;

// Confirmation de la soumission réussie
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
    formData[3].setAttribute("data-error", error); // creation de l'objet avec attribut data-error
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
